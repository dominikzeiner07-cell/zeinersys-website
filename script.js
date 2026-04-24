const body = document.body;
const menuToggle = document.querySelector(".menu-toggle");
const drawer = document.getElementById("site-drawer");
const backdrop = document.getElementById("drawer-backdrop");
const closeButton = document.querySelector(".drawer-close");
const siteHeader = document.querySelector(".site-header");

function openDrawer() {
  body.classList.add("drawer-open");
  menuToggle.setAttribute("aria-expanded", "true");
  drawer.setAttribute("aria-hidden", "false");
}

function closeDrawer() {
  body.classList.remove("drawer-open");
  menuToggle.setAttribute("aria-expanded", "false");
  drawer.setAttribute("aria-hidden", "true");
}

if (menuToggle && drawer && backdrop && closeButton) {
  menuToggle.addEventListener("click", () => {
    if (body.classList.contains("drawer-open")) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  closeButton.addEventListener("click", closeDrawer);
  backdrop.addEventListener("click", closeDrawer);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && body.classList.contains("drawer-open")) {
      closeDrawer();
    }
  });
}

if (siteHeader) {
  let lastScrollY = window.scrollY;
  const scrollThreshold = 8;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (body.classList.contains("drawer-open")) {
      siteHeader.classList.remove("header-hidden");
      lastScrollY = currentScrollY;
      return;
    }

    if (currentScrollY <= 10) {
      siteHeader.classList.remove("header-hidden");
      lastScrollY = currentScrollY;
      return;
    }

    if (currentScrollY > lastScrollY + scrollThreshold) {
      siteHeader.classList.add("header-hidden");
    } else if (currentScrollY < lastScrollY - scrollThreshold) {
      siteHeader.classList.remove("header-hidden");
    }

    lastScrollY = currentScrollY;
  }, { passive: true });
}