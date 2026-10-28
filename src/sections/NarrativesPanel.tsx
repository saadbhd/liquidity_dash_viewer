import {
  BookOpen,
  CheckCircle2,
  Clock3,
  Droplets,
  Layers3,
  PieChart,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';
import type { ReportData } from '@/types/report';

type UnknownRecord = Record<string, unknown>;

type NarrativeCard = {
  id: string;
  title: string;
  icon: LucideIcon;
  accent: string;
  lines: string[];
};

function record(value: unknown): UnknownRecord {
  return value && typeof value === 'object' && !Array.isArray(value)
    ? value as UnknownRecord
    : {};
}

function narrativeText(value: unknown): string | null {
  if (typeof value !== 'string') return null;
  const text = value.replace(/\s+/g, ' ').trim();
  if (!text || /^(?:n\/?a|not available|unavailable)$/i.test(text)) return null;
  return text;
}

function explicitLines(...values: unknown[]): string[] {
  const lines: string[] = [];
  for (const value of values) {
    if (Array.isArray(value)) {
      for (const item of value) {
        const text = narrativeText(item);
        if (text) lines.push(text);
      }
      continue;
    }
    const text = narrativeText(value);
    if (text) lines.push(text);
  }
  return lines;
}

function uniqueLines(lines: string[], seen: Set<string>): string[] {
  const unique: string[] = [];
  for (const line of lines) {
    const key = line.toLocaleLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    unique.push(line);
  }
  return unique;
}

function buildNarrativeCards(report: ReportData): NarrativeCard[] {
  const source = report as unknown as UnknownRecord;
  const content = record(source.content);
  const insights = record(source.insights);
  const liquidity = record(insights.liquidity);
  const performance = record(insights.performance);
  const drivers = record(insights.drivers);
  const execution = record(insights.execution);
  const intraday = record(insights.intraday);
  const seen = new Set<string>();

  const cards: NarrativeCard[] = [
    {
      id: 'takeaways',
      title: 'Key takeaways',
      icon: CheckCircle2,
      accent: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
      lines: uniqueLines(explicitLines(content.exec_takeaways), seen),
    },
    {
      id: 'liquidity',
      title: 'Liquidity',
      icon: Droplets,
      accent: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
      lines: uniqueLines(explicitLines(
        liquidity.overall,
        liquidity.strengths,
        liquidity.concerns,
        liquidity.peer_context,
      ), seen),
    },
    {
      id: 'performance',
      title: 'Performance',
      icon: TrendingUp,
      accent: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      lines: uniqueLines(explicitLines(
        performance.overall,
        record(performance.one_week).insight,
        record(performance.one_month).insight,
        record(performance.three_month).insight,
        record(performance.six_month).insight,
        record(performance.ytd).insight,
        performance.conclusion,
      ), seen),
    },
    {
      id: 'drivers',
      title: 'Price drivers',
      icon: PieChart,
      accent: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
      lines: uniqueLines(explicitLines(
        drivers.overall,
        drivers.interpretation,
        drivers.beta,
        drivers.rolling_change,
      ), seen),
    },
    {
      id: 'execution',
      title: 'Execution & order book',
      icon: Layers3,
      accent: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      lines: uniqueLines(explicitLines(
        execution.overall,
        execution.concern,
        execution.kyle,
        execution.peer_context,
      ), seen),
    },
    {
      id: 'intraday',
      title: 'Intraday activity',
      icon: Clock3,
      accent: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
      lines: uniqueLines(explicitLines(
        intraday.overall,
        intraday.hhi_interpretation,
        intraday.best_times,
        intraday.peer_ranking,
      ), seen),
    },
  ];

  return cards.filter((card) => card.lines.length > 0);
}

export function NarrativesPanel({ report }: { report: ReportData }) {
  if (report.meta.market === 'XNAS' && report.meta.ticker === 'TIL') {
    return null;
  }
  const cards = buildNarrativeCards(report);

  return (
    <section id="narratives" className="space-y-6">
      <div className="rounded-2xl border border-border/60 bg-card/80 p-6 lg:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-500/10">
            <BookOpen className="h-6 w-6 text-sky-400" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">Report commentary</p>
            <h2 className="mt-1 text-2xl font-semibold text-foreground">Narratives</h2>
          </div>
        </div>
      </div>

      {cards.length > 0 && (
        <div className="grid gap-5 xl:grid-cols-2">
          {cards.map(({ id, title, icon: Icon, accent, lines }) => (
            <article key={id} className="rounded-2xl border border-border/60 bg-card/80 p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${accent}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{title}</h3>
              </div>
              <ul className="space-y-3">
                {lines.map((line) => (
                  <li key={line} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400/80" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      )}

      {cards.length === 0 && (
        <div
          role="status"
          className="rounded-2xl border border-border/60 bg-card/80 px-6 py-8 text-sm text-muted-foreground"
        >
          Narrative commentary is unavailable in this report artifact.
        </div>
      )}
    </section>
  );
}
