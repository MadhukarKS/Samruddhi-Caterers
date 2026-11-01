import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 0.0.0.0 enables listening on all network interfaces (essential for ngrok, local network, mobile testing)
    host: true,
    port: 5173,
    strictPort: true,
    // Vite 6+ host checking: allow ngrok tunnels (*.ngrok-free.app, *.ngrok.io) and external proxies
    allowedHosts: true,
    cors: true,
    hmr: process.env.NGROK_URL
      ? {
        host: process.env.NGROK_URL.replace(/^https?:\/\//, ''),
        clientPort: 443,
        protocol: 'wss',
      }
      : true,
  },
  preview: {
    host: true,
    port: 4173,
    allowedHosts: true,
    cors: true,
  },
});