// Runs after layout.js (both deferred, in order), so the nav exists.
const menuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");
if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    const open = navLinks.classList.toggle("active");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
}

// Wire a demo form: shows a message and resets (no backend yet).
function demoForm(formId, messageId, text) {
  const form = document.getElementById(formId);
  const msg = document.getElementById(messageId);
  if (!form || !msg) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    msg.textContent = text;
    form.reset();
  });
}

demoForm(
  "registrationForm",
  "formMessage",
  "Ẹ se! Thank you for joining. We’ll notify you soon when the community launches."
);
demoForm(
  "contactForm",
  "contactMessage",
  "Ẹ se! Your message has been received. We'll reply soon."
);
demoForm(
  "loginForm",
  "authMessage",
  "Community login opens when the platform launches in 2026. Please register your interest below."
);
