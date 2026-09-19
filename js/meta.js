const META_IDS = {
  description: "meta-description",
  canonical: "link-canonical",
  ogTitle: "meta-og-title",
  ogDescription: "meta-og-description",
  ogUrl: "meta-og-url",
  ogImage: "meta-og-image",
  twitterTitle: "meta-twitter-title",
  twitterDescription: "meta-twitter-description",
  twitterImage: "meta-twitter-image",
  jsonLd: "script-json-ld",
};

function ensureMeta(name, attrs) {
  let element = document.head.querySelector(`meta[data-managed="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.dataset.managed = name;
    document.head.appendChild(element);
  }

  Object.entries(attrs).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  return element;
}

function ensureLink(name, attrs) {
  let element = document.head.querySelector(`link[data-managed="${name}"]`);
  if (!element) {
    element = document.createElement("link");
    element.dataset.managed = name;
    document.head.appendChild(element);
  }

  Object.entries(attrs).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  return element;
}

function ensureJsonLd() {
  let element = document.head.querySelector(`script[data-managed="${META_IDS.jsonLd}"]`);
  if (!element) {
    element = document.createElement("script");
    element.type = "application/ld+json";
    element.dataset.managed = META_IDS.jsonLd;
    document.head.appendChild(element);
  }
  return element;
}

export function updateDocumentMeta({ title, description, canonical, ogImage, jsonLd }) {
  document.title = title;

  ensureMeta(META_IDS.description, { name: "description", content: description });
  ensureLink(META_IDS.canonical, { rel: "canonical", href: canonical });

  ensureMeta(META_IDS.ogTitle, { property: "og:title", content: title });
  ensureMeta(META_IDS.ogDescription, { property: "og:description", content: description });
  ensureMeta(META_IDS.ogUrl, { property: "og:url", content: canonical });
  ensureMeta(META_IDS.ogImage, { property: "og:image", content: ogImage });

  ensureMeta(META_IDS.twitterTitle, { name: "twitter:title", content: title });
  ensureMeta(META_IDS.twitterDescription, { name: "twitter:description", content: description });
  ensureMeta(META_IDS.twitterImage, { name: "twitter:image", content: ogImage });

  const jsonLdElement = ensureJsonLd();
  if (jsonLd) {
    jsonLdElement.textContent = JSON.stringify(jsonLd);
  } else {
    jsonLdElement.remove();
  }
}
