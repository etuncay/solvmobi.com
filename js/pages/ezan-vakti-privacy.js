export function renderEzanVaktiPrivacy() {
  return `
    <div class="legal-page">
      <nav class="breadcrumb" aria-label="Konum">
        <a href="/uygulamalar/" data-link>Uygulamalar</a>
        <span aria-hidden="true">/</span>
        <a href="/ezan-vakti/" data-link>Ezan Vakti</a>
        <span aria-hidden="true">/</span>
        <span aria-current="page">Gizlilik</span>
      </nav>

      <header class="legal-page-header">
        <p class="eyebrow">Gizlilik politikası</p>
        <h1>Ezan Vakti</h1>
        <p class="meta">
          Son güncelleme: 18 Eylül 2026 · v1.0.1 · Solvmobi ·
          <a href="mailto:info@solvmobi.com">info@solvmobi.com</a>
        </p>
      </header>

      <article class="legal-document">
        <div class="legal-highlight">
          <strong>Özet:</strong> Ezan Vakti namaz vakitlerini cihazınızda hesaplar. Verileriniz telefonunuzda kalır.
          Bulut hesabı, reklam ağı veya geliştirici analitiği kullanılmaz.
        </div>

        <section class="legal-section">
          <h2>Veri sorumlusu</h2>
          <p>
            Solvmobi (<code>com.solvmobi.ezan_vakti</code>)<br />
            Destek: <a href="mailto:info@solvmobi.com">info@solvmobi.com</a>
          </p>
        </section>

        <section class="legal-section">
          <h2>Toplanan ve işlenen veriler</h2>
          <p>Kişisel veriler sunucularımıza gönderilmez. Yalnızca cihazda tutulan veriler:</p>
          <div class="legal-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Veri</th>
                  <th>Amaç</th>
                  <th>Konum</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Seçilen şehir / konum tercihi</td><td>Namaz vakti hesabı</td><td>Cihaz</td></tr>
                <tr><td>Hesaplama ve bildirim ayarları</td><td>Ezan hatırlatmaları</td><td>Cihaz</td></tr>
                <tr><td>Namaz günlüğü ve kaza kayıtları</td><td>Kişisel takip</td><td>Cihaz</td></tr>
                <tr><td>Zikir oturumları</td><td>Zikirmatik</td><td>Cihaz</td></tr>
                <tr><td>Tema, dil, uygulama tercihleri</td><td>Deneyim</td><td>Cihaz</td></tr>
                <tr><td>JSON yedek dosyası</td><td>Dışa aktarma (sizin kontrolünüzde)</td><td>Cihaz / dosya sistemi</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            GPS kullanıldığında konum koordinatları yalnızca en yakın şehri bulmak için cihazda işlenir;
            yüklenmez.
          </p>
        </section>

        <section class="legal-section">
          <h2>Ağ kullanımı</h2>
          <p>
            Namaz vakitleri çevrimdışı çalışır. İsteğe bağlı olarak onboarding sırasında seçilen ülke için
            şehir listesi GeoNames açık verisinden bir kez indirilebilir ve yerelde saklanır.
            Türkiye için 81 il yerleşik yedek olarak gelir.
          </p>
        </section>

        <section class="legal-section">
          <h2>İzinler</h2>
          <div class="legal-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>İzin</th>
                  <th>Neden</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Konum (isteğe bağlı)</td><td>En yakın şehri bulma</td></tr>
                <tr><td>Bildirimler / kesin alarmlar</td><td>Ezan ve hatırlatma planlama</td></tr>
                <tr><td>Pusula</td><td>Kıble yönü</td></tr>
                <tr><td>Arka plan sesi</td><td>Ezan önizlemesi</td></tr>
              </tbody>
            </table>
          </div>
          <p>İzinleri reddedebilirsiniz; manuel şehir seçimi her zaman kullanılabilir.</p>
        </section>

        <section class="legal-section">
          <h2>Üçüncü taraflar</h2>
          <ul>
            <li><strong>GeoNames</strong> (isteğe bağlı): Şehir listesi indirme</li>
            <li><strong>Google Play / App Store</strong>: Uygulama dağıtımı (platform politikaları geçerlidir)</li>
          </ul>
          <p>Reklam, analitik veya sosyal medya SDK'sı yoktur.</p>
        </section>

        <section class="legal-section">
          <h2>Saklama ve silme</h2>
          <p>
            Veriler cihazınızda kalır. Uygulamayı kaldırın veya Ayarlar → Verileri sıfırla seçeneğini kullanın.
            JSON yedekler kaydettiğiniz konumda kalır.
          </p>
        </section>

        <section class="legal-section">
          <h2>Çocuklar</h2>
          <p>13 yaş altına yönelik değildir.</p>
        </section>

        <section class="legal-section">
          <h2>Değişiklikler</h2>
          <p>
            Bu politika güncellenebilir. Önemli değişiklikler uygulama veya mağaza listesinde belirtilir.
          </p>
        </section>

        <section class="legal-section">
          <h2>İletişim</h2>
          <p>Sorularınız için: <a href="mailto:info@solvmobi.com">info@solvmobi.com</a></p>
        </section>
      </article>
    </div>
  `;
}
