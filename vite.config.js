import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { readFileSync } from 'fs'

// Load .env.local manually (only for dev server)
function loadEnvLocal() {
  try {
    const envContent = readFileSync('.env.local', 'utf-8')
    const lines = envContent.split('\n').filter((line) => line && !line.startsWith('#'))
    lines.forEach((line) => {
      const [key, ...valueParts] = line.split('=')
      const value = valueParts.join('=').replace(/^"/, '').replace(/"$/, '')
      process.env[key.trim()] = value.trim()
    })
  } catch (err) {
    console.warn('Could not load .env.local')
  }
}

// Custom API handler middleware (dev only)
function apiMiddleware() {
  return {
    name: 'api-middleware',
    apply: 'serve',
    configureServer(server) {
      loadEnvLocal()

      return () => {
        server.middlewares.use('/api/contact', async (req, res) => {
          if (req.method !== 'POST') {
            res.statusCode = 405
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Method not allowed' }))
            return
          }

          let body = ''
          req.on('data', (chunk) => {
            body += chunk.toString()
          })

          req.on('end', async () => {
            try {
              const data = JSON.parse(body)
              const { name, email, message, timestamp } = data

              if (!name || !email || !message) {
                res.statusCode = 400
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ error: 'Missing required fields' }))
                return
              }

              // Dynamic import with non-static path to avoid Vite bundling
              const importPath = './api/contact.js'
              const handler = await import(/* @vite-ignore */ importPath)

              const mockReq = { method: 'POST', body: data }
              const mockRes = {
                status: (code) => {
                  res.statusCode = code
                  return mockRes
                },
                json: (json) => {
                  res.setHeader('Content-Type', 'application/json')
                  res.end(JSON.stringify(json))
                },
              }

              await handler.default(mockReq, mockRes)
            } catch (error) {
              console.error('API error:', error)
              res.statusCode = 500
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: 'Internal server error', details: error.message }))
            }
          })
        })
      }
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    apiMiddleware(),
  ],
})
