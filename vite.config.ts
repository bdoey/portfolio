/**
 * Vite Configuration
 *
 * Purpose: Configures the Vite build tool for the portfolio website.
 * Controls: Development server, hot module replacement, production builds,
 * and React integration via the Vite React plugin.
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
