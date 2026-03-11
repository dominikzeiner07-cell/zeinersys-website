const body = document.body;
const menuToggle = document.querySelector(".menu-toggle");
const drawer = document.getElementById("site-drawer");
const backdrop = document.getElementById("drawer-backdrop");
const closeButton = document.querySelector(".drawer-close");

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