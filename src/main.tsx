import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initializeAnalytics } from "./lib/analytics";
import { initializeSentry } from "./lib/sentry";
import { initializePerformanceMonitoring } from "./lib/performance";

// Initialize Sentry first
initializeSentry();

// Initialize performance monitoring
initializePerformanceMonitoring();

// Initialize analytics
initializeAnalytics();

// HTTPS enforcement
if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost') {
  window.location.replace(`https:${window.location.href.substring(window.location.protocol.length)}`);
}

createRoot(document.getElementById("root")!).render(<App />);

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
