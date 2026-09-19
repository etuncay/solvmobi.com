export function renderEzanVakti() {
  return `
    <nav class="breadcrumb" aria-label="Konum">
      <a href="/uygulamalar/" data-link>Uygulamalar</a>
      <span aria-hidden="true">/</span>
      <span aria-current="page">Ezan Vakti</span>
    </nav>

    <section class="hero hero--app">
      <div class="hero-copy">
        <p class="eyebrow">Namaz vakitleri · Offline</p>
        <h1>Ezan Vakti</h1>
        <p class="lead">
          Hesap gerektirmeden cihazında namaz vakitlerini takip et. Vakit hesabı tamamen yerel;
          Diyanet uyumlu Türkiye yöntemi ve özelleştirilebilir offset desteklenir.
        </p>
        <div class="cta-row">
          <a class="btn btn-primary" href="https://play.google.com/store/apps/details?id=com.solvmobi.ezan_vakti" rel="noopener noreferrer">Google Play</a>
          <a class="btn btn-secondary" href="https://apps.apple.com/app/id0000000000" rel="noopener noreferrer">App Store</a>
          <a class="btn btn-ghost" href="/ezan-vakti/privacy" data-link>Gizlilik</a>
        </div>
      </div>

      <aside class="hero-card" aria-label="Uygulama önizlemesi">
        <img class="app-icon" src="/assets/apps/ezan-vakti/icon-256.png" alt="Ezan Vakti uygulama ikonu" width="88" height="88" />
        <p class="eyebrow">Bugün · İstanbul</p>
        <ul class="prayer-list">
          <li><span>İmsak</span><span>05:12</span></li>
          <li><span>Güneş</span><span>06:38</span></li>
          <li><span>Öğle</span><span>13:04</span></li>
          <li class="is-next"><span>İkindi</span><span>16:22</span></li>
          <li><span>Akşam</span><span>19:18</span></li>
          <li><span>Yatsı</span><span>20:39</span></li>
        </ul>
      </aside>
    </section>

    <section class="section">
      <h2>İkon ve açılış ekranı</h2>
      <p class="section-intro">
        Uygulama mağazası ve cihazdaki açılış deneyimiyle aynı görseller.
      </p>
      <div class="brand-showcase">
        <figure class="brand-panel">
          <figcaption class="brand-panel-label">Uygulama ikonu</figcaption>
          <div class="brand-icon-stage">
            <img src="/assets/apps/ezan-vakti/icon.png" alt="Ezan Vakti uygulama ikonu" width="160" height="160" loading="lazy" />
          </div>
        </figure>

        <figure class="brand-panel">
          <figcaption class="brand-panel-label">Açılış ekranı</figcaption>
          <div class="splash-stage splash-stage--light" style="--splash-bg: #060C16;">
            <img src="/assets/apps/ezan-vakti/splash.png" alt="Ezan Vakti açılış ekranı" loading="lazy" />
          </div>
        </figure>

        <figure class="brand-panel">
          <figcaption class="brand-panel-label">Açılış ekranı (koyu)</figcaption>
          <div class="splash-stage splash-stage--dark" style="--splash-bg: #060C16;">
            <img src="/assets/apps/ezan-vakti/splash-dark.png" alt="Ezan Vakti koyu açılış ekranı" loading="lazy" />
          </div>
        </figure>
      </div>
    </section>

    <section class="section">
      <h2>Öne çıkanlar</h2>
      <p class="section-intro">Namaz ibadetini düzenli takip etmek için ihtiyaç duyduğun araçlar tek uygulamada.</p>
      <div class="feature-grid">
        <article class="feature-card">
          <h3>Günlük vakitler</h3>
          <p>Geri sayım, sonraki vakit kartı ve günlük vakit listesi.</p>
        </article>
        <article class="feature-card">
          <h3>Ezan bildirimleri</h3>
          <p>3 ezan sesi, ön hatırlatma ve test bildirimi desteği.</p>
        </article>
        <article class="feature-card">
          <h3>Takvim & imsakiye</h3>
          <p>Aylık vakit tablosu ve Ramazan imsakiye görünümü.</p>
        </article>
        <article class="feature-card">
          <h3>Namaz günlüğü</h3>
          <p>Streak takibi, kaza defteri ve kişisel ibadet kaydı.</p>
        </article>
        <article class="feature-card">
          <h3>Kıble pusulası</h3>
          <p>Pusula ile kıble yönü ve Kâbe mesafesi.</p>
        </article>
        <article class="feature-card">
          <h3>Keşfet</h3>
          <p>Dua kütüphanesi, zikirmatik ve JSON yedekleme.</p>
        </article>
        <article class="feature-card">
          <h3>Widget desteği</h3>
          <p>Android widget ve iOS WidgetKit ile ana ekrandan erişim.</p>
        </article>
        <article class="feature-card">
          <h3>16 dil</h3>
          <p>Çok dilli arayüz; offline-first mimari.</p>
        </article>
      </div>
    </section>

    <section class="section">
      <div class="privacy-banner">
        <p>
          <strong>Gizlilik:</strong> Namaz kayıtları ve konum tercihin sunucuya gönderilmez.
          Reklam, analitik ve uygulama içi satın alma yok.
        </p>
        <a class="btn btn-secondary" href="/ezan-vakti/privacy" data-link>Politikayı oku</a>
      </div>
    </section>
  `;
}
