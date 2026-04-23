export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, message } = req.body || {}

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields: name, email, message' })
    }

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL

    if (!webhookUrl) {
      console.error('Google Sheets Webhook URL missing')
      return res.status(500).json({ error: 'Database configuration error' })
    }

    const payload = {
      name: String(name).trim(),
      email: String(email).trim(),
      message: String(message).trim()
    }

    // Since Google Apps Script Web Apps often require following redirects, 
    // fetch normally follows redirects automatically unless told otherwise.
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    const responseText = await response.text()

    if (!response.ok) {
      console.error('Webhook error:', {
        status: response.status,
        statusText: response.statusText,
        body: responseText
      })
      return res.status(response.status).json({
        error: `Failed to submit: ${response.statusText}`,
        details: responseText
      })
    }

    let data
    try {
      data = JSON.parse(responseText)
    } catch {
      data = null
    }

    return res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      id: data?.id || Date.now().toString()
    })
  } catch (err) {
    console.error('Contact handler error:', err)
    return res.status(500).json({ error: err?.message || 'Server error' })
  }
}
