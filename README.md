# AMG Core — Core & Stability expansion

Single-file offline app plus GitHub Pages PWA deployment files.

## Catalog
142 unique exercises with embedded images.
Dedicated Core, Stability & Mobility Tab: 39 movements — 12 mobility, 19 core stability, 6 abs, 2 balance & joint stability.
Filter the dedicated Tab by category, muscle, Arabic/English name and level (Basic / Intermediate / Advanced). Each movement displays its purpose and level. Levels describe general movement complexity, not an individual clearance or load prescription.

## Newly integrated movements
CS01 Bear Plank Hold — seconds
CS02 High Plank Shoulder Taps — reps (one touch = one rep)
CS03 Farmer’s Carry — seconds (weight field = load per hand)
CS04 Half-Kneeling Cable Chop — reps per side
CS05 Half-Kneeling Cable Lift — reps per side
CS06 Single-Leg Glute Bridge — reps per side
CS07 Forearm Plank Body Saw — reps (one back-and-forward cycle = one rep)
CS08 Stability Ball Stir the Pot — reps (one complete circle = one rep)
BS01 Single-Leg Balance with Reach — reps per side
BS02 Controlled Step-Down — reps per side

The supplied PNGs were converted to WebP at original dimensions. Compact movement previews now open in a bounded dialog up to 2x the actual preview width and height, clamped to the viewport. Separate target-muscle anatomy images and atlas are removed; muscle names and filters remain.

## Logging
- Optional additional movements: one row per selected movement, + at the end of a row to add another row, Save Set 1/2/3 for repeated sets. Seconds and repetitions stay distinct.
- Additional strength exercises can be added only to the selected date/session, with an optional superset association. Each exercise has independent set numbers in the standard workout log.
- Additional records and exercise definitions remain profile/date/plan/split/session scoped and are included in profile/full JSON and portable HTML backups. Original split templates and pre-existing logs are preserved.

## Install / update
Take a JSON backup first. Replace the deployment files in the same GitHub Pages repository. Keep the same site URL and browser storage. The Service Worker cache version is updated. For a standalone offline copy, open index.html. Nothing was deployed externally by this update.

## Validation
JavaScript syntax, embedded image decoding and JSDOM functional tests. Chromium visual testing is unavailable in this runtime.

## Mobile browser upload
index.html is 20,075,619 bytes (19.15 MiB), below GitHub's documented 25 MiB per-file browser upload limit. Only superseded embedded image payloads were removed from retired collections; all 142 currently displayed image payloads are byte-identical to the previous release. Offline operation, bounded 2x zoom, logging and backups remain available.

Take a JSON backup. Extract this ZIP on your phone. In Chrome, open the existing repository and enable Desktop site if needed. Open the same publishing branch and folder as the existing index.html. Use Add file > Upload files, select the extracted files (including index.html and sw.js), review the changes and commit. Wait for Pages deployment to finish, then reopen the existing app URL. Do not upload the ZIP as the site entry point or clear browser storage.
