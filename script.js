// Northstar portfolio demo: mobile navigation and small accessibility helpers.
const menuButton = document.querySelector(".menu-button");
const mainNav = document.querySelector(".main-nav");

function setMenuOpen(isOpen) {
  if (!menuButton || !mainNav) {
    return;
  }

  mainNav.classList.toggle("open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");

  const menuIcon = isOpen
    ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  menuButton.innerHTML = menuIcon;
}

function initializeNavigation() {
  if (!menuButton || !mainNav) {
    return;
  }

  menuButton.addEventListener("click", () => {
    setMenuOpen(!mainNav.classList.contains("open"));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("click", (event) => {
    const clickTarget = event.target;

    if (!mainNav.contains(clickTarget) && !menuButton.contains(clickTarget)) {
      setMenuOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuOpen(false);
      menuButton.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 720) {
      setMenuOpen(false);
    }
  });
}

initializeNavigation();

// FAQ rows use native <details> elements, so they work without extra JavaScript.
// This is a visual frontend demo. Sign-up, sign-in, pricing, and email actions
// are placeholders and are not connected to a real backend.
