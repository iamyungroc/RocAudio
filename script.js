const serviceList = document.querySelector("#service-list");
for (const service of window.rocAudioContent.services) {
  const item = document.createElement("article");
  item.className = "service-item";
  item.innerHTML = `<span class="service-number">${service.number}</span><div><h3>${service.name}</h3><p>${service.detail}</p></div><span class="service-arrow" aria-hidden="true">↗</span>`;
  serviceList.append(item);
}

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
toggle.addEventListener("click", () => {
  const expanded = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!expanded));
  toggle.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
  nav.classList.toggle("is-open", !expanded);
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Open navigation");
  nav.classList.remove("is-open");
}));
document.querySelector("#year").textContent = new Date().getFullYear();
