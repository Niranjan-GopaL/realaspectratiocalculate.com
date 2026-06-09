// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// export default defineConfig({
//   site: 'https://realaspectratiocalculate.com',
//   vite: {
//     plugins: [tailwindcss()],
//   },
// });


export default defineConfig({
  site: 'https://niranjan-gopal.github.io',
  base: '/realaspectratiocalculate.com',
    output: 'static',
    vite: {
        plugins: [tailwindcss()],
    },
});
