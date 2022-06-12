import React from 'react';
import ReactDom from 'react-dom/client';
import App from './component/App';
import { StoreProvider } from './store';


const container = document.getElementById('root');
const root = ReactDom.createRoot(container)

root.render(
  <StoreProvider>
    <App />
  </StoreProvider>
)