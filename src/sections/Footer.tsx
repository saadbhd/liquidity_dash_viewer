import { motion } from 'framer-motion';
import { useReport } from '@/context/ReportContext';

export function Footer() {
  const { content } = useReport();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="text-center text-xs text-slate-600 py-8 border-t border-slate-800/50 mt-8"
    >
      <p>{content.footer}</p>
    </motion.footer>
  );
}
