import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig, type Plugin } from "vite"
// import { inspectAttr } from 'kimi-plugin-inspect-react'

// Generated reports are data payloads; an inline source map would duplicate
// tens of megabytes. Keep normal application source maps enabled.
const reportDataNoDevSourcemaps: Plugin = {
  name: "report-data-no-dev-sourcemaps",
  apply: "serve",
  enforce: "post",
  transform(code, id) {
    const file = id.split("?")[0].replaceAll("\\", "/")
    if (/\/src\/data\/[a-z0-9]{4}_.+_\d{4}-\d{2}-\d{2}(?:_[a-z0-9][a-z0-9._-]*)?\.ts$/i.test(file)) {
      // Empty mappings also prevent Vite's fallback map; null would not.
      return { code, map: { mappings: "" } }
    }
  },
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // Use a relative base for static hosting (e.g. Vercel rewrites) in production,
  // but keep dev as "/" to avoid odd URL resolution issues.
  base: mode === "production" ? "./" : "/",
  plugins: [/* inspectAttr(), */ react(), reportDataNoDevSourcemaps],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // On some macOS/node setups, "localhost" binds to IPv6 (::1) only and can
  // lead to connections that never respond. Force IPv4 loopback for dev.
  server: {
    host: "127.0.0.1",
    port: 5173,
    strictPort: true,
  },
}));
