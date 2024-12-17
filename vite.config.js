import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react' ;
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        react({
            fastRefresh: true,
        }),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
    ],
});