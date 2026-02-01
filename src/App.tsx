// ============================================================================
// APP - Main routing component
// ============================================================================

import { Routes, Route } from 'react-router-dom';
import { ReportSelector } from '@/pages/ReportSelector';
import { ReportViewer } from '@/pages/ReportViewer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ReportSelector />} />
      <Route path="/report/:id" element={<ReportViewer />} />
    </Routes>
  );
}

export default App;
