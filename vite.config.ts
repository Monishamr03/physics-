import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// On GitHub, the repo name is read automatically, so the site works at
// https://<username>.github.io/<repo-name>/ without editing anything.
// Locally it falls back to '/'.
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]

export default defineConfig({
  plugins: [react()],
  base: repo ? `/${repo}/` : '/',
})
