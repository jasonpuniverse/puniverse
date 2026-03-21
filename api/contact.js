export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, message, timestamp } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    // Log submission (for now, could integrate with email service, database, or Google Sheets)
    console.log('Form submission received:', {
      name,
      email,
      message,
      timestamp,
      receivedAt: new Date().toISOString(),
    })

    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // or store in database (Neon, MongoDB, etc.)
    // or send to Google Sheets via Apps Script

    res.status(200).json({
      success: true,
      message: 'Form submission received successfully',
      id: `submission-${Date.now()}`,
    })
  } catch (error) {
    console.error('Form submission error:', error)
    res.status(500).json({ error: 'Form submission failed' })
  }
}
