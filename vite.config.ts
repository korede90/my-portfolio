import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  base: './',
  plugins: [
    {
      name: 'restore-dev-entry',
      transformIndexHtml: {
        order: 'pre',
        handler(html) {
          if (html.includes('./assets/')) {
            return html
              .replace(/<script type="module" crossorigin src="\.\/assets\/[^"]+"><\/script>/g, '')
              .replace(/<link rel="stylesheet" crossorigin href="\.\/assets\/[^"]+">/g, '')
              .replace('</body>', '    <script type="module" src="/src/main.tsx"></script>\n  </body>');
          }
          return html;
        },
      },
    },
    react(),
    tailwindcss(),
  ],
  test: {
    environment: 'jsdom',
    globals: true,
  },
});
