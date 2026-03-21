import { getSupabaseClient } from '../lib/supabase.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, message, timestamp } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    const supabase = getSupabaseClient()
    const submittedAt = timestamp || new Date().toISOString()

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
      console.error('Database insertion error:', error)
      return res.status(500).json({ error: 'Failed to save submission' })
    }

    res.status(200).json({
      success: true,
      message: 'Form submission received successfully',
      id: data?.[0]?.id || `submission-${Date.now()}`,
    })
  } catch (error) {
    console.error('Form submission error:', error)
    res.status(500).json({ error: 'Form submission failed' })
  }
}
