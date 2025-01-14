import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename="/front-end-space/react-version/">
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  </StrictMode>,
)
