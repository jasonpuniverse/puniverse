export default async function handler(req, res) {
  // Set JSON content type FIRST
  res.setHeader('Content-Type', 'application/json; charset=utf-8')

  // Enable CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  // Handle OPTIONS for CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).json({ ok: true })
  }

  // Health check
  if (req.method === 'GET') {
    return res.status(200).json({ status: 'API is working', timestamp: new Date().toISOString() })
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed', method: req.method })
  }

  try {
    const { name, email, message, timestamp } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Import Supabase dynamically to catch import errors
    let supabase
    try {
      const { createClient } = await import('@supabase/supabase-js')

      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

      if (!supabaseUrl || !supabaseKey) {
        return res.status(500).json({
          error: 'Configuration error',
          details: 'Supabase env vars not set'
        })
      }

      supabase = createClient(supabaseUrl, supabaseKey)
    } catch (importError) {
      return res.status(500).json({
        error: 'Module error',
        details: importError.message
      })
    }

    const submittedAt = timestamp || new Date().toISOString()

    // Insert into Supabase
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name,
          email,
          message,
          submitted_at: submittedAt,
          created_at: new Date().toISOString(),
        },
      ])
      .select()

    if (error) {
      return res.status(500).json({
        error: 'Database error',
        details: error.message
      })
    }

    return res.status(200).json({
      success: true,
      id: data?.[0]?.id || `submission-${Date.now()}`,
    })
  } catch (error) {
    return res.status(500).json({
      error: 'Server error',
      details: error?.message || 'Unknown error'
    })
  }
}
