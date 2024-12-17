import React from 'react';
import ReactDOM from 'react-dom/client';
import MyComponent from './components/MyComponent';

const rootElement = document.getElementById('react-app');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<MyComponent />);
}
