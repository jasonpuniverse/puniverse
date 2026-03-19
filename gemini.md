# Data Schemas & Maintenance Log

## JSON Data Schema
**Frontend Application:** Static (No backend database aside from Google Sheets integration)

**Contact Form Payload (to Google Apps Script):**
```json
{
  "name": "string",
  "email": "string",
  "message": "string",
  "timestamp": "ISO-8601 string"
}
```

## Maintenance Log
- **2026-03-19:** Built the production-ready Single Page Application (React + Vite + Tailwind V4). Added scroll animations and configured Contact form to use Google Sheets as the database. Project is ready for Vercel deployment.
