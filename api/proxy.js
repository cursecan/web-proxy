import { createProxyMiddleware } from 'http-proxy-middleware';

export default function handler(req, res) {
  const { target } = req.query; // Ambil parameter 'target' dari query string

  if (!target) {
    return res.status(400).json({ error: 'Target URL is required' });
  }

  const proxy = createProxyMiddleware({
    target: target, // Gunakan target yang diterima dari query string
    changeOrigin: true,
    secure: false,  // Atur sesuai kebutuhan Anda
  });

  return proxy(req, res);
}
