# solvmobi.com

Solvmobi marka sitesi — basit SPA (vanilla JS).

## Sayfalar

| URL | Açıklama |
|-----|----------|
| `/` | Ana sayfa |
| `/uygulamalar/` | Uygulama kartları listesi |
| `/ezan-vakti/` | Ezan Vakti uygulama tanıtımı |
| `/ezan-vakti/privacy` | Gizlilik politikası |
| `/terms` | Kullanım şartları |

## Yerel geliştirme

```bash
npx serve .
# veya
python3 -m http.server 8080
```

Tarayıcıda `http://localhost:8080` açın.

## Google Search Console

1. [Google Search Console](https://search.google.com/search-console) → mülk ekle → `https://solvmobi.com`
2. HTML etiketi yöntemini seçin
3. `index.html` içindeki yorum satırını açın ve doğrulama kodunu yapıştırın:

```html
<meta name="google-site-verification" content="KODUNUZ" />
```

4. `sitemap.xml` adresini gönderin: `https://solvmobi.com/sitemap.xml`

## Dağıtım

### Ubuntu + nginx (önerilen — kendi sunucu)

Detaylı rehber: [`deploy/README.md`](deploy/README.md)

```bash
# Sunucuda (ilk kurulum)
sudo git clone <repo-url> /home/sites/solvmobi.com
cd /home/sites/solvmobi.com
sudo bash deploy/ubuntu-setup.sh

# HTTPS
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d solvmobi.com -d www.solvmobi.com

# Güncelleme
sudo bash deploy/sync-site.sh
```

nginx SPA fallback: `deploy/nginx/solvmobi.com.conf`

### Diğer platformlar

- **Vercel:** `vercel.json` SPA rewrite içerir
- **Netlify:** kök `_redirects` dosyası SPA fallback sağlar

## Güncellenecekler

- App Store linki (`js/pages/ezan-vakti.js`) — yayın sonrası gerçek URL
- Google doğrulama meta etiketi
- İsteğe bağlı: mağaza ekran görüntüleri (`assets/screenshots/`)
- Uygulama görselleri: `assets/apps/<slug>/` (ikon + splash, uygulama repo `assets/branding/` kaynağından kopyalanır)
