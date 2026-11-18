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


## Validation
JavaScript syntax, embedded image decoding and JSDOM functional tests. Chromium visual testing is unavailable in this runtime.

## Automatic calendar sessions
The selected workout date automatically determines the session using the active profile's plan, split, configured weekdays, return-phase active slots and A/B rotation. The manual session dropdown is replaced with a read-only assigned-session label.
Rest days display Rest Day and omit planned strength exercises and the plan warm-up card. Optional core/mobility, added strength exercises, cardio and other non-plan logging remain available and save under the selected date's Rest Day context.
Save Set never advances the date or session. A Today button returns to the current day. On first activation and on a new local calendar day, the logger defaults to today; selections within the same day are preserved. The app rechecks the day on visibility changes and every minute. Plan Log Session buttons choose the next matching scheduled date within 14 days instead of overriding the date-to-session mapping. Stored workout/session records and initial plan definitions are not rewritten.
Functional checks: exact 4-day weekday mapping, native date input, bilingual rest-day UI, rest-day optional strength/core logging, custom schedules, return phases, A/B rotations, all 23 split configurations, daily rollover, profile isolation and JSON backup.
