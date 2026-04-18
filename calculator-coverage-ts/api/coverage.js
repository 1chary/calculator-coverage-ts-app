/**
 * api/coverage.js — Vercel Serverless Function
 *
 * POST /api/coverage  — test scripts send window.__coverage__ here
 * GET  /api/coverage  — test scripts retrieve it back
 * POST /api/coverage/reset — zeroes stored coverage
 */

let storedCoverage = null;

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'POST') {
    // Handle reset
    if (req.url && req.url.includes('reset')) {
      storedCoverage = null;
      return res.status(200).json({ status: 'ok', message: 'Coverage reset' });
    }
    try {
      storedCoverage = typeof req.body === 'string'
        ? JSON.parse(req.body)
        : req.body;
      return res.status(200).json({
        status : 'ok',
        files  : Object.keys(storedCoverage || {}).length
      });
    } catch (e) {
      return res.status(400).json({ status: 'error', message: e.message });
    }
  }

  if (req.method === 'GET') {
    if (!storedCoverage) {
      return res.status(404).json({
        status  : 'not_found',
        message : 'No coverage stored yet. Run a test first.'
      });
    }
    return res.status(200).json(storedCoverage);
  }

  return res.status(405).json({ status: 'method_not_allowed' });
}
