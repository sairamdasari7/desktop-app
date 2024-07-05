import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, defaultTheme } from '@adobe/react-spectrum'; // Import Provider and defaultTheme from Adobe Spectrum
import App from './App'; // Assuming your main App component is in App.js

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider theme={defaultTheme}> {/* Provide the defaultTheme */}
      <App />
    </Provider>
  </React.StrictMode>
);
