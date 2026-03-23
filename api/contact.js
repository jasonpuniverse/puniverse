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

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      console.error('Supabase credentials missing:', { supabaseUrl: !!supabaseUrl, supabaseKey: !!supabaseKey })
      return res.status(500).json({ error: 'Database configuration error' })
    }

    const payload = {
      name: String(name).trim(),
      email: String(email).trim(),
      message: String(message).trim()
    }

    const response = await fetch(`${supabaseUrl}/rest/v1/contact_submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`
      },
      body: JSON.stringify(payload)
    })

    const responseText = await response.text()

    if (!response.ok) {
      console.error('Supabase error:', {
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
      id: Array.isArray(data) ? data[0]?.id : data?.id
    })
  } catch (err) {
    console.error('Contact handler error:', err)
    return res.status(500).json({ error: err?.message || 'Server error' })
  }
}
