import { useTheme } from 'next-themes';

/**
 * Returns Recharts-friendly colors for grid, axes, labels and tooltip
 * so charts stay readable in both light and dark mode.
 */
export function useChartTheme() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return {
    isDark,
    gridStroke: isDark ? '#334155' : '#cbd5e1',
    tickFill: isDark ? '#94a3b8' : '#475569',
    axisLineStroke: isDark ? '#334155' : '#cbd5e1',
    labelFill: isDark ? '#94a3b8' : '#475569',
    tooltipContentStyle: isDark
      ? { backgroundColor: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(71, 85, 105, 0.5)', borderRadius: '8px', color: '#f1f5f9' }
      : { backgroundColor: 'rgba(255, 255, 255, 0.98)', border: '1px solid rgba(203, 213, 225, 0.8)', borderRadius: '8px', color: '#1e293b', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' },
    barPrimary: isDark ? '#0ea5e9' : '#0284c7',
    barSecondary: isDark ? '#64748b' : '#475569',
  };
}
