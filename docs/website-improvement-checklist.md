# Website Improvement Checklist

Prioritized implementation backlog for quality, SEO, performance, accessibility, and release reliability.

## P0 - Reliability / SEO

- [ ] Verify every referenced icon/image asset exists and is deployable (especially under `source/img` and social preview assets).
- [ ] Add OG/Twitter metadata parity for secondary pages (for example `source/certifications/certifications.html`).
- [ ] Keep canonical metadata and structured data consistent across all public pages.

## P1 - Performance / Release Safety

- [ ] Resolve cache staleness for non-hashed bundles (`source/style.min.css`, `source/script.min.js`) by either:
  - adding hashed file names in build output, or
  - reducing cache TTL in `_headers`.
- [ ] Improve portfolio images with intrinsic `width`/`height` attributes to reduce layout shifts.
- [ ] Add responsive image variants and `srcset` for heavy portfolio images.

## P2 - Accessibility / Security / Structure

- [ ] Improve keyboard interactions and ARIA semantics for tab/filter controls.
- [ ] Add baseline security headers in `_headers` (`X-Content-Type-Options`, `Referrer-Policy`, and a safe starter CSP).
- [ ] Improve multilingual SEO discoverability with `hreflang` and an explicit EN URL strategy.

## Maintenance

- [ ] Keep root build outputs generated from `source/` only.
- [ ] Run `./tools/build.sh` before every deploy to regenerate HTML bundles and `sitemap.xml`.
- [ ] Periodically review and expand sitemap coverage when new pages are added.
