import { createClient } from '@supabase/supabase-js'

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
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
    const body = req.body || {}
    const { name, email, message, timestamp } = body

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Validate env vars exist
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Supabase config missing' })
    }

    // Create Supabase client
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Insert data
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert({
        name: String(name).trim(),
        email: String(email).trim(),
        message: String(message).trim(),
        submitted_at: timestamp || new Date().toISOString(),
        created_at: new Date().toISOString(),
      })
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return res.status(500).json({ error: `DB error: ${error.message}` })
    }

    return res.status(200).json({
      success: true,
      message: 'Submission saved',
      id: data?.[0]?.id
    })
  } catch (err) {
    console.error('Handler error:', err)
    return res.status(500).json({ error: err?.message || 'Server error' })
  }
}
