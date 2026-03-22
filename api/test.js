export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json')
  return res.status(200).json({ test: 'ok', method: req.method, time: new Date().toISOString() })
}
