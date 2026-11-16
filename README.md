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

## Automatic calendar sessions
The selected workout date automatically determines the session using the active profile's plan, split, configured weekdays, return-phase active slots and A/B rotation. The manual session dropdown is replaced with a read-only assigned-session label.
Rest days display Rest Day and omit planned strength exercises and the plan warm-up card. Optional core/mobility, added strength exercises, cardio and other non-plan logging remain available and save under the selected date's Rest Day context.
Save Set never advances the date or session. A Today button returns to the current day. On first activation and on a new local calendar day, the logger defaults to today; selections within the same day are preserved. The app rechecks the day on visibility changes and every minute. Plan Log Session buttons choose the next matching scheduled date within 14 days instead of overriding the date-to-session mapping. Stored workout/session records and initial plan definitions are not rewritten.
Functional checks: exact 4-day weekday mapping, native date input, bilingual rest-day UI, rest-day optional strength/core logging, custom schedules, return phases, A/B rotations, all 23 split configurations, daily rollover, profile isolation and JSON backup.

## Safari / iOS compatibility repair
- Application syntax is compiled for Safari 12-era parsers; all bundled data/artwork constants are preserved.
- Early, offline polyfills cover Array.at, Object.hasOwn, Object.fromEntries, String.replaceAll, Array.flat/flatMap and Blob.text/arrayBuffer.
- Fixed an experimentally reproduced startup crash when Array.at is missing. Replaced non-standard scroll behavior instant with auto.
- Startup shows a loading state rather than stale interactive-looking HTML. An independent error handler displays a local diagnostic message if startup or a later action fails. It sends nothing externally and never clears stored data.
- Existing localStorage keys, profile JSON, images, training schedules and logging behavior are unchanged.
Validation: reproduced the old missing-Array.at failure; after repair, legacy-API simulation passed navigation, language switching, date-driven sessions, rest-day optional logging, 23 splits, profile isolation, JSON and portable HTML exports. Native-API regression checks and file-read fallback checks passed. This is simulated compatibility testing; no physical iPhone test has been performed.
Update the ZIP contents, including sw.js, at the existing GitHub Pages location. Keep Safari and installed-app storage. Close and reopen the app after deployment. If an error panel appears, share its screenshot for diagnosis.
