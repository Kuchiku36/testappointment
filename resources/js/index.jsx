// resources/js/app.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

const rootElement = document.getElementById('react-app'); // Élément cible dans Blade
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
}
