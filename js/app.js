// ===== APP.JS - ENTRY POINT =====
// Main orchestrator for all portfolio modules

import { projects } from "./data.js";
import "./projects.js"; // Render projects dynamically
import "./skills.js"; // Render skills dynamically
import "./nav.js"; // Navigation with hamburger, smooth scroll, active links
import "./form.js"; // Form validation with Formspree

// ===== PAGE INITIALIZATION =====
// Reset scroll position to top on page load
window.addEventListener("load", () => {
  // Small delay ensures DOM is fully ready
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    history.replaceState(null, null, window.location.pathname);
  }, 0);
});
