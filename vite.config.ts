import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
// import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // Use a relative base for static hosting (e.g. Vercel rewrites) in production,
  // but keep dev as "/" to avoid odd URL resolution issues.
  base: mode === "production" ? "./" : "/",
  plugins: [/* inspectAttr(), */ react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // On some macOS/node setups, "localhost" binds to IPv6 (::1) only and can
  // lead to connections that never respond. Force IPv4 loopback for dev.
  server: {
    host: "127.0.0.1",
  },
}));
