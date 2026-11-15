# Training OS PWA — GitHub Pages (109 illustrations)

**This is the public-site starter. It includes all 109 exercise illustrations, including the 26 images created and supplied by the app owner. It does NOT include personal training, progress, nutrition, or InBody records embedded in the private snapshot.**

## Publish
1. Create a GitHub repository (e.g. `trainingos`).
2. Upload everything from this folder to the repository root, especially `index.html`, `sw.js`, `manifest.webmanifest`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`, and `.nojekyll`.
3. Open Settings > Pages > Deploy from a branch > main > /(root) > Save.
4. Use `https://YOURUSERNAME.github.io/trainingos/` on the phone.
5. Android Chrome: Install app / Add banner when available. iPhone Safari: Share > Add to Home Screen.
6. Open online once, then verify the app loads offline; service-worker installability requires HTTPS/localhost.

## Ownership and privacy
- The **26 user-created illustrations** were restored following the owner's confirmation of authorship and permission to include them in the published app. Their claimed authorship was not independently verified.
- Source credits for RepDB and Open Exercise Illustrations remain in the app. Review any other third-party artwork and recipe terms before public redistribution.
- **Do not upload** your personal edition or JSON backups. The public `index.html` has its embedded save snapshot set to `{"state":null}` and sanitizes personal defaults.
- Do not paste personal workout/nutrition data into publicly accessible repository files. Site-local user entries on an installed PWA remain device/browser local; uninstall/clear-site-data can erase them.
- Publishing the app does not automatically synchronize data across devices. Use private JSON backups for transfer.

## Offline updates
This package bumps the service-worker cache ID to `trainingos-pwa-v953-2`, so an existing installation can fetch updated resources. When updating an installed copy, revisit the live site online and reload before testing offline.

Update: Added "Developed By AMG Suit" footer on About; Service Worker cache updated for new version.
