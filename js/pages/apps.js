import { renderAppCards } from "../data/apps.js";

export function renderApps() {
  return `
    <section class="hero hero--compact">
      <div class="hero-copy">
        <p class="eyebrow">Portföy</p>
        <h1>Uygulamalar</h1>
        <p class="lead">
          Solvmobi uygulamalarını keşfet. Her biri için ayrı tanıtım ve gizlilik sayfası sunuyoruz.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="app-grid">
        ${renderAppCards()}
      </div>
    </section>
  `;
}
