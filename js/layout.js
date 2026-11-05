// Shared navbar + footer, injected on every page so they live in one place.
(function () {
  const links = [
    ["index.html", "Home"],
    ["learn.html", "Learn"],
    ["dictionary.html", "Dictionary"],
    ["history.html", "History"],
    ["community.html", "Community"],
    ["contact.html", "Contact"],
  ];
  const here = location.pathname.split("/").pop() || "index.html";

  const nav = document.getElementById("site-nav");
  if (nav) {
    nav.outerHTML = `
      <nav class="navbar" aria-label="Main">
        <a class="logo" href="index.html" aria-label="Itsekiri Hub home">
          <img src="images/Itsekiri-Warri-Kingdom.jpg.webp" alt="Itsekiri Logo" class="logo-img" />
        </a>
        <ul class="nav-links" id="navLinks">
          ${links
            .map(
              ([href, label]) =>
                `<li><a href="${href}"${href === here ? ' aria-current="page" class="active"' : ""}>${label}</a></li>`
            )
            .join("")}
        </ul>
        <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle menu" aria-expanded="false">
          &#9776;
        </button>
      </nav>`;
  }

  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.outerHTML = `
      <footer>
        <p>© 2025–2026 Itsekiri Language &amp; Culture Project • Made with love for the Iwere people</p>
      </footer>`;
  }
})();
