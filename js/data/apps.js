export const apps = [
  {
    slug: "ezan-vakti",
    name: "Ezan Vakti",
    category: "Yaşam tarzı",
    summary: "Offline namaz vakitleri, ezan bildirimi, kıble pusulası, namaz günlüğü ve imsakiye. 16 dil.",
    icon: "/assets/apps/ezan-vakti/icon-256.png",
    splash: "/assets/apps/ezan-vakti/splash.png",
    splashDark: "/assets/apps/ezan-vakti/splash-dark.png",
    splashBg: "#060C16",
    href: "/ezan-vakti/",
  },
];

export function renderAppCards() {
  return apps
    .map(
      (app) => `
        <a class="app-card" href="${app.href}" data-link aria-label="${app.name} uygulama sayfası">
          <img class="app-card-icon" src="${app.icon}" alt="" width="72" height="72" />
          <div class="app-card-body">
            <p class="eyebrow">${app.category}</p>
            <h3>${app.name}</h3>
            <p>${app.summary}</p>
          </div>
          <div class="app-card-footer">
            <span>Detayları gör</span>
            <span class="app-card-arrow" aria-hidden="true">→</span>
          </div>
        </a>
      `
    )
    .join("");
}
