import { renderHome } from "./pages/home.js";
import { renderApps } from "./pages/apps.js";
import { renderEzanVakti } from "./pages/ezan-vakti.js";
import { renderEzanVaktiPrivacy } from "./pages/ezan-vakti-privacy.js";
import { renderTerms } from "./pages/terms.js";
import { renderNotFound } from "./pages/not-found.js";
import { updateDocumentMeta } from "./meta.js";

const routes = [
  {
    path: "/",
    title: "Solvmobi — Mobil Uygulamalar",
    description:
      "Solvmobi — günlük hayatını kolaylaştıran mobil uygulamalar. Ezan Vakti ile offline namaz vakitleri, ezan bildirimi ve kıble pusulası.",
    render: renderHome,
    canonical: "https://solvmobi.com/",
    ogImage: "https://solvmobi.com/assets/og-solvmobi.svg",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Solvmobi",
      url: "https://solvmobi.com/",
      email: "info@solvmobi.com",
      logo: "https://solvmobi.com/assets/favicon.svg",
    },
  },
  {
    path: "/uygulamalar",
    title: "Uygulamalar | Solvmobi",
    description:
      "Solvmobi mobil uygulamaları. Ezan Vakti ve diğer gizlilik odaklı uygulamalar.",
    render: renderApps,
    canonical: "https://solvmobi.com/uygulamalar/",
    ogImage: "https://solvmobi.com/assets/og-solvmobi.svg",
  },
  {
    path: "/ezan-vakti",
    title: "Ezan Vakti — Namaz Vakitleri | Solvmobi",
    description:
      "Offline namaz vakitleri, ezan bildirimi, kıble pusulası, namaz günlüğü ve imsakiye. Hesap gerektirmez, 16 dil.",
    render: renderEzanVakti,
    canonical: "https://solvmobi.com/ezan-vakti/",
    ogImage: "https://solvmobi.com/assets/og-ezan-vakti.svg",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Ezan Vakti",
      applicationCategory: "LifestyleApplication",
      operatingSystem: "Android, iOS",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "TRY",
      },
      description:
        "Offline namaz vakitleri, ezan bildirimi, kıble pusulası, namaz günlüğü ve imsakiye. Hesap gerektirmez, 16 dil.",
      publisher: {
        "@type": "Organization",
        name: "Solvmobi",
        url: "https://solvmobi.com/",
      },
      url: "https://solvmobi.com/ezan-vakti/",
      image: "https://solvmobi.com/assets/apps/ezan-vakti/icon.png",
    },
  },
  {
    path: "/ezan-vakti/privacy",
    title: "Gizlilik Politikası — Ezan Vakti | Solvmobi",
    description:
      "Ezan Vakti gizlilik politikası. Veriler cihazında kalır; reklam, analitik ve bulut hesabı yok.",
    render: renderEzanVaktiPrivacy,
    canonical: "https://solvmobi.com/ezan-vakti/privacy",
    ogImage: "https://solvmobi.com/assets/og-ezan-vakti.svg",
  },
  {
    path: "/terms",
    title: "Kullanım Şartları | Solvmobi",
    description: "Solvmobi web sitesi ve mobil uygulamaları için kullanım şartları.",
    render: renderTerms,
    canonical: "https://solvmobi.com/terms",
    ogImage: "https://solvmobi.com/assets/og-solvmobi.svg",
  },
];

function normalizePath(pathname) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname || "/";
}

function findRoute(pathname) {
  const normalized = normalizePath(pathname);
  return routes.find((route) => route.path === normalized) ?? null;
}

function renderShell(content, currentPath) {
  return `
    <div class="shell">
      <header class="site-header">
        <a class="brand" href="/" data-link>
          <span class="brand-mark" aria-hidden="true">S</span>
          <span>Solvmobi</span>
        </a>
        <nav class="site-nav" aria-label="Ana menü">
          <a href="/" data-link ${currentPath === "/" ? 'aria-current="page"' : ""}>Ana Sayfa</a>
          <a href="/uygulamalar/" data-link ${currentPath === "/uygulamalar" || currentPath.startsWith("/ezan-vakti") ? 'aria-current="page"' : ""}>Uygulamalar</a>
          <a href="/terms" data-link ${currentPath === "/terms" ? 'aria-current="page"' : ""}>Şartlar</a>
        </nav>
      </header>
      ${content}
      <footer class="site-footer">
        <p>© ${new Date().getFullYear()} Solvmobi · info@solvmobi.com</p>
        <nav aria-label="Alt menü">
          <a href="/ezan-vakti/privacy" data-link>Gizlilik</a>
          <a href="/terms" data-link>Kullanım Şartları</a>
        </nav>
      </footer>
    </div>
  `;
}

function navigate(pathname, { replace = false } = {}) {
  const route = findRoute(pathname);
  const normalized = normalizePath(pathname);
  const app = document.getElementById("app");

  if (!route) {
    const html = renderShell(renderNotFound(), normalized);
    app.innerHTML = html;
    document.title = "Sayfa bulunamadı | Solvmobi";
    updateDocumentMeta({
      title: "Sayfa bulunamadı | Solvmobi",
      description: "Aradığınız sayfa bulunamadı.",
      canonical: `https://solvmobi.com${normalized}`,
      ogImage: "https://solvmobi.com/assets/og-solvmobi.svg",
    });
    return;
  }

  const html = renderShell(route.render(), normalized);
  app.innerHTML = html;

  updateDocumentMeta({
    title: route.title,
    description: route.description,
    canonical: route.canonical,
    ogImage: route.ogImage,
    jsonLd: route.jsonLd,
  });

  if (replace) {
    history.replaceState({ path: route.path }, "", route.path === "/" ? "/" : `${route.path}/`);
  } else if (normalizePath(location.pathname) !== route.path) {
    history.pushState({ path: route.path }, "", route.path === "/" ? "/" : `${route.path}/`);
  }
}

function onLinkClick(event) {
  const link = event.target.closest("a[data-link]");
  if (!link) return;

  const url = new URL(link.href, location.origin);
  if (url.origin !== location.origin) return;

  event.preventDefault();
  navigate(url.pathname);
}

function bootstrap() {
  document.addEventListener("click", onLinkClick);
  window.addEventListener("popstate", () => navigate(location.pathname, { replace: true }));
  navigate(location.pathname, { replace: true });
}

bootstrap();
