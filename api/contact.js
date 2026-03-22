import { createClient } from '@supabase/supabase-js'

export default async function handler(req, res) {
  // Set JSON content type FIRST
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).json({ ok: true })
  }

  if (req.method === 'GET') {
    return res.status(200).json({ status: 'API working', time: new Date().toISOString() })
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, message, timestamp } = req.body || {}

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing: name, email, or message' })
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Missing Supabase config' })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([{
        name,
        email,
        message,
        submitted_at: timestamp || new Date().toISOString(),
        created_at: new Date().toISOString(),
      }])
      .select()

    if (error) {
      return res.status(500).json({ error: error.message })
    }

    return res.status(200).json({ success: true, id: data?.[0]?.id })
  } catch (err) {
    return res.status(500).json({ error: err?.message || 'Unknown error' })
  }
}
