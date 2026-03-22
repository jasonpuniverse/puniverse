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
    const { name, email, message, timestamp } = req.body || {}

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Supabase config missing' })
    }

    // Use fetch instead of importing Supabase client
    const response = await fetch(`${supabaseUrl}/rest/v1/contact_submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Prefer': 'return=representation'
      },
      body: JSON.stringify({
        name: String(name).trim(),
        email: String(email).trim(),
        message: String(message).trim(),
        submitted_at: timestamp || new Date().toISOString(),
        created_at: new Date().toISOString()
      })
    })

    if (!response.ok) {
      const errorData = await response.text()
      return res.status(500).json({ error: `Database error: ${errorData}` })
    }

    const data = await response.json()

    return res.status(200).json({
      success: true,
      id: data?.[0]?.id || 'submitted'
    })
  } catch (err) {
    return res.status(500).json({ error: err?.message || 'Server error' })
  }
}
