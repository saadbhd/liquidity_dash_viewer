/** Lossless decoding for report-service news points; local point arrays remain valid. */
const SERIES_ENCODING = 'news-series.columns.v1';
const MAX_ROWS = 100_000;

type JsonObject = Record<string, unknown>;
const isObject = (value: unknown): value is JsonObject =>
    value !== null && typeof value === 'object' && !Array.isArray(value);
const own = (value: JsonObject, key: string) => Object.prototype.hasOwnProperty.call(value, key);
const fail = (): never => { throw new Error('Invalid packed news event-study series'); };

export function decodeEventStudySeries(input: unknown): unknown[] {
    if (Array.isArray(input)) return input;
    if (!isObject(input) || input.encoding !== SERIES_ENCODING) return fail();
    const count = input.row_count;
    if (typeof count !== 'number' || !Number.isSafeInteger(count) || count < 0 || count > MAX_ROWS || !isObject(input.columns)) return fail();
    const rows: JsonObject[] = Array.from({ length: count }, () => Object.create(null) as JsonObject);
    for (const [name, raw] of Object.entries(input.columns)) {
        if (!isObject(raw)) return fail();
        let values: unknown[];
        const keys = Object.keys(raw);
        if (keys.length === 1 && own(raw, 'constant')) {
            values = Array(count).fill(raw.constant);
        } else if (keys.length === 1 && Array.isArray(raw.values)) {
            values = raw.values;
        } else if (keys.length === 2 && Array.isArray(raw.dictionary) && Array.isArray(raw.indices)) {
            const dictionary = raw.dictionary;
            values = raw.indices.map((index: unknown) => {
                if (typeof index !== 'number' || !Number.isSafeInteger(index) || index < 0 || index >= dictionary.length) return fail();
                return dictionary[index];
            });
        } else if (keys.length === 1 && Array.isArray(raw.runs)) {
            values = [];
            for (const run of raw.runs) {
                if (!Array.isArray(run) || run.length !== 2 || typeof run[0] !== 'number' || !Number.isSafeInteger(run[0]) || run[0] <= 0 || values.length + run[0] > count) return fail();
                values.push(...Array(run[0]).fill(run[1]));
            }
        } else if (keys.length === 2 && own(raw, 'start') && own(raw, 'step')) {
            const start = raw.start, step = raw.step;
            if (typeof start !== 'number' || typeof step !== 'number' || !Number.isSafeInteger(start) || !Number.isSafeInteger(step)) return fail();
            values = Array.from({ length: count }, (_, index) => {
                const value = start + index * step;
                return Number.isSafeInteger(value) ? value : fail();
            });
        } else return fail();
        if (values.length !== count) return fail();
        values.forEach((value, index) => { rows[index][name] = value; });
    }
    return rows;
}

/** Restore only news transport fields, leaving calculations and source data untouched. */
export function decodeNewsTransport<T>(report: T): T {
    if (!isObject(report) || !isObject(report.news)) return report;
    const decodeStudy = (study: unknown): unknown =>
        isObject(study) && isObject(study.series)
            ? { ...study, series: decodeEventStudySeries(study.series) }
            : study;
    const walk = (value: unknown): unknown => {
        if (Array.isArray(value)) return value.map(walk);
        if (!isObject(value)) return value;
        return Object.fromEntries(Object.entries(value).map(([key, child]) => {
            if (key === 'event_study') return [key, decodeStudy(child)];
            if (key === 'intraday_studies' && isObject(child)) {
                return [key, Object.fromEntries(Object.entries(child).map(([id, study]) => [id, decodeStudy(study)]))];
            }
            return [key, walk(child)];
        }));
    };
    return { ...report, news: walk(report.news) } as T;
}
