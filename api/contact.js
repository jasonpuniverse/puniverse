import { createClient } from '@supabase/supabase-js'

export default async function handler(req, res) {
  // Enable CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Content-Type', 'application/json')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, message, timestamp } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    // Initialize Supabase client with try-catch
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      console.error('Missing Supabase environment variables')
      return res.status(500).json({
        error: 'Server configuration error',
        details: 'Supabase credentials not configured'
      })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)
    const submittedAt = timestamp || new Date().toISOString()

    console.log('Attempting to insert submission:', { name, email })

    // Insert form submission into Supabase
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
      console.error('Database insertion error:', JSON.stringify(error))
      return res.status(500).json({
        error: 'Failed to save submission',
        details: error.message || 'Database error'
      })
    }

    console.log('Submission saved successfully:', data?.[0]?.id)
    return res.status(200).json({
      success: true,
      message: 'Form submission received successfully',
      id: data?.[0]?.id || `submission-${Date.now()}`,
    })
  } catch (error) {
    console.error('Form submission error:', error)
    return res.status(500).json({
      error: 'Form submission failed',
      details: error?.message || String(error)
    })
  }
}
