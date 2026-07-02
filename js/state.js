export const state = {
  // Route comes from the hash; prerendered static pages (SEO snapshots) carry
  // their route in <body data-route> so the SPA hydrates in place.
  route: location.hash.slice(1) || document.body.dataset.route || '/',
  theme: 'dark',
  revealed: false,
};
