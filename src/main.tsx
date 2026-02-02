import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from '@/components/ThemeProvider'

const rootEl = document.getElementById('root')
if (!rootEl) {
  throw new Error('Root element "#root" not found in index.html')
}

if (import.meta.env.DEV) {
  // Helpful on machines where the DevTools console isn't open: show errors on-screen.
  rootEl.innerHTML = `
    <div style="padding:16px;color:#e2e8f0;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif">
      Loading…
    </div>
  `

  const escapeHtml = (s: string) =>
    s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

  const showError = (title: string, err: unknown) => {
    const message =
      err instanceof Error
        ? err.stack ?? err.message
        : typeof err === 'string'
          ? err
          : JSON.stringify(err, null, 2)

    rootEl.innerHTML = `
      <div style="padding:16px;color:#fecaca;background:#0b1220;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace">
        <div style="font-weight:700;margin-bottom:8px">${escapeHtml(title)}</div>
        <pre style="white-space:pre-wrap;margin:0">${escapeHtml(message)}</pre>
      </div>
    `
  }

  window.addEventListener('error', (e) => {
    showError('Runtime error', (e as ErrorEvent).error ?? (e as ErrorEvent).message)
  })
  window.addEventListener('unhandledrejection', (e) => {
    showError('Unhandled promise rejection', (e as PromiseRejectionEvent).reason)
  })
}

createRoot(rootEl).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)

