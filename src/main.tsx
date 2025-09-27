import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { loadGoogleTagManager } from '@/lib/cookieConsent'

// Initialize GTM on page load with consent mode
loadGoogleTagManager();

createRoot(document.getElementById("root")!).render(<App />);
