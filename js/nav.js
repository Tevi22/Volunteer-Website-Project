// =========================
// Navigation Toggle Module
// =========================

/**
 * Initializes mobile navigation toggle behavior.
 * Handles showing/hiding the nav menu when the hamburger is clicked.
 */
export function initNavToggle() {
    const toggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (!toggle || !navLinks) return;

    toggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}