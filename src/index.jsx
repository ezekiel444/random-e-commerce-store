import React from 'react';
import { createRoot } from 'react-dom/client'; // Modern API
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

// Select the root element
const container = document.getElementById('root');
const root = createRoot(container);

// Render the app
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);