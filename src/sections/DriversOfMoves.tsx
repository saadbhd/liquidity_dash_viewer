import { motion } from 'framer-motion';
import { Brain, Lightbulb, TrendingUp } from 'lucide-react';
import { useReport } from '@/context/ReportContext';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar,
} from 'recharts';

export function DriversOfMoves() {
  const { labels, theme, series } = useReport();
  const { drivers } = series;

  // Pie chart data
  const pieData = [
    { name: 'Market', value: drivers.share_market, color: 'rgba(148, 163, 184, 0.6)' },
    { name: 'Sector', value: drivers.share_sector, color: '#34d399' },
    { name: 'Idiosyncratic', value: drivers.share_idio, color: '#a78bfa' },
  ];

  // Lead-lag data
  const leadLagData = drivers.lead_lag.lags.map((lag, index) => ({
    lag: lag >= 0 ? `+${lag}` : `${lag}`,
    market: drivers.lead_lag.corr_market[index],
    sector: drivers.lead_lag.corr_sector[index],
  }));

  // Rolling data (prefer new rolling_windows with date ranges)
  const rollingData = (() => {
    if (drivers.rolling_windows) {
      const parseStart = (label?: string) => {
        if (!label) return Number.POSITIVE_INFINITY;
        const start = label.split(' to ')[0]?.trim();
        const t = start ? Date.parse(start) : Number.NaN;
        return Number.isFinite(t) ? t : Number.POSITIVE_INFINITY;
      };

      return Object.values(drivers.rolling_windows)
        .filter((w) => w.valid && w.period_label && w.shares)
        .sort((a, b) => parseStart(a.period_label) - parseStart(b.period_label))
        .map((w) => ({
          period: w.period_label!,
          Market: w.shares!.share_market * 100,
          Sector: w.shares!.share_sector * 100,
          Idiosyncratic: w.shares!.share_idio * 100,
        }));
    }

    return drivers.rolling.ordered.map((period, index) => ({
      period,
      Market: drivers.rolling.market[index],
      Sector: drivers.rolling.sector[index],
      Idiosyncratic: drivers.rolling.idio[index],
    }));
  })();

  const latestRollingPeriod =
    rollingData.length > 0 ? rollingData[rollingData.length - 1].period : undefined;

  const PieTooltip = ({ active, payload }: { active?: boolean; payload?: any[] }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900/95 border border-slate-700 rounded-lg p-3 shadow-xl">
          <p className="text-sm text-slate-200">
            {payload[0].name}: {payload[0].value.toFixed(1)}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="glass-card rounded-2xl p-6 shadow-2xl mt-6"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-700/50">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Brain className="w-5 h-5 text-purple-400" />
            {labels.drivers_title}
          </h3>
          <p className="text-sm text-slate-400 mt-1">{labels.drivers_subtitle}</p>
        </div>
        <span className={`status-badge ${theme.badges.drivers.bg} ${theme.badges.drivers.textColor} border border-current/30`}>
          {theme.badges.drivers.text}
        </span>
      </div>

      {/* Info Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        {labels.drivers_strip.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50"
          >
            <div className="text-xs text-slate-400 font-medium mb-1">{item.title}</div>
            <div className="text-sm text-slate-200 leading-relaxed">{item.text}</div>
          </motion.div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <div className="bg-slate-900/30 rounded-xl p-4 border border-slate-700/50">
          <h4 className="text-sm font-semibold text-slate-300 mb-4">{labels.drivers_pie_title}</h4>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip content={<PieTooltip />} />
                <Legend
                  verticalAlign="bottom"
                  height={36}
                  iconType="circle"
                  formatter={(value, entry: any) => (
                    <span style={{ color: entry.color }}>{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-slate-500 mt-2">{labels.drivers_pie_note}</p>
        </div>

        {/* Lead-Lag Chart */}
        <div className="bg-slate-900/30 rounded-xl p-4 border border-slate-700/50">
          <h4 className="text-sm font-semibold text-slate-300 mb-4">{labels.lead_lag_title}</h4>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={leadLagData} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" vertical={false} />
                <XAxis
                  dataKey="lag"
                  tick={{ fill: '#94a3b8', fontSize: 10 }}
                  axisLine={{ stroke: 'rgba(148, 163, 184, 0.2)' }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: '#94a3b8', fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                  domain={[-0.4, 0.6]}
                  tickFormatter={(v) => v.toFixed(1)}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(71, 85, 105, 0.5)' }}
                  labelStyle={{ color: '#e2e8f0' }}
                />
                <Legend iconType="line" wrapperStyle={{ paddingTop: '5px' }} />
                <Line
                  type="monotone"
                  dataKey="market"
                  name="Corr vs Market"
                  stroke="rgba(148, 163, 184, 0.8)"
                  strokeWidth={2}
                  dot={{ r: 3, fill: 'rgba(148, 163, 184, 0.8)' }}
                  activeDot={{ r: 5 }}
                />
                <Line
                  type="monotone"
                  dataKey="sector"
                  name="Corr vs Sector"
                  stroke="#34d399"
                  strokeWidth={2}
                  dot={{ r: 3, fill: '#34d399' }}
                  activeDot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-slate-500 mt-2">{labels.lead_lag_note}</p>
        </div>
      </div>

      {/* Rolling View & Bottom Line */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Rolling Chart */}
        <div className="bg-slate-900/30 rounded-xl p-4 border border-slate-700/50">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-semibold text-slate-300">{labels.rolling_title}</h4>
            {latestRollingPeriod ? (
              <span className="text-xs text-slate-500">
                {labels.rolling_latest_label.replace('{period}', latestRollingPeriod)}
              </span>
            ) : null}
          </div>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={rollingData} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" vertical={false} />
                <XAxis
                  dataKey="period"
                  tick={{ fill: '#94a3b8', fontSize: 11 }}
                  axisLine={{ stroke: 'rgba(148, 163, 184, 0.2)' }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: '#94a3b8', fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  domain={[0, 100]}
                  tickFormatter={(v) => `${v}%`}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(71, 85, 105, 0.5)' }}
                />
                <Legend iconType="square" wrapperStyle={{ paddingTop: '5px' }} />
                <Bar dataKey="Market" stackId="a" fill="rgba(148, 163, 184, 0.55)" radius={[0, 0, 0, 0]} />
                <Bar dataKey="Sector" stackId="a" fill="#34d399" radius={[0, 0, 0, 0]} />
                <Bar dataKey="Idiosyncratic" stackId="a" fill="#a78bfa" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-slate-500 mt-2">{labels.rolling_note}</p>
        </div>

        {/* Bottom Line & What To Do */}
        <div className="space-y-4">
          <div className="insight-card">
            <div className="flex items-start gap-2">
              <TrendingUp className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-slate-300 leading-relaxed">
                <span className="font-semibold">Bottom line:</span>{' '}
                {labels.drivers_bottom_line.replace('Bottom line: ', '')}
              </p>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-200 mb-3">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              {labels.drivers_wtd_title}
            </div>
            <ul className="space-y-2">
              {labels.drivers_wtd_list.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
