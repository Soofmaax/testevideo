const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const nav = $(".nav");
const burger = $(".burger");

function setMenu(open) {
  nav.classList.toggle("is-open", open);
  burger.setAttribute("aria-expanded", String(open));
}

burger?.addEventListener("click", () => {
  setMenu(!nav.classList.contains("is-open"));
});

$$('.nav a[href^="#"]').forEach((a) => {
  a.addEventListener("click", () => setMenu(false));
});

document.addEventListener("click", (e) => {
  if (!nav.classList.contains("is-open")) return;
  const target = e.target;
  if (!(target instanceof Element)) return;
  if (target.closest(".nav") || target.closest(".burger")) return;
  setMenu(false);
});

$("#year").textContent = String(new Date().getFullYear());

// Galerie modal
const modal = $("#modal");
const modalTitle = $("#modalTitle");
const modalDesc = $("#modalDesc");

function openModal({ title, desc }) {
  modalTitle.textContent = title;
  modalDesc.textContent = desc;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

$$(".shot").forEach((btn) => {
  btn.addEventListener("click", () => {
    openModal({
      title: btn.dataset.title || "Set",
      desc: btn.dataset.desc || "",
    });
  });
});

modal?.addEventListener("click", (e) => {
  const target = e.target;
  if (!(target instanceof Element)) return;
  if (target.dataset.close === "true" || target.closest('[data-close="true"]')) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
});

// Form -> mailto
const form = $("#bookingForm");
const status = $("#formStatus");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const fd = new FormData(form);

  const name = String(fd.get("name") || "").trim();
  const phone = String(fd.get("phone") || "").trim();
  const service = String(fd.get("service") || "").trim();
  const date = String(fd.get("date") || "").trim();
  const message = String(fd.get("message") || "").trim();

  const lines = [
    `Nom: ${name}`,
    `Téléphone: ${phone}`,
    `Prestation: ${service}`,
    `Date souhaitée: ${date}`,
    "",
    message,
  ];

  // Remplace par ton email pro
  const to = "contact@pinknails.fr";
  const subject = encodeURIComponent(`Demande RDV • ${service || "Manucure"}`);
  const body = encodeURIComponent(lines.join("\n"));

  status.textContent = "Ouverture de ton email…";
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
});
