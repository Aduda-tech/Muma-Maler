<div align="center">

# Muma Maler — Luo Bible

A complete, offline-capable **Luo-language Bible app** (Dholuo) for the New Testament — with the full corrected Scripture text, chapter navigation, search, bookmarks, daily verse, Bible stories, and reading themes. Built as a PWA and a native Android app via Capacitor.

</div>

## About

**Muma Maler** is a **complete Luo Bible** — the full **Muma Machon (Old Testament)** and **Muma Manyien (New Testament)** in Dholuo. It ships all **66 books**, 1,189 chapters, and **31,102 verses**:

- **Old Testament** (39 books) — the *Biblica Open New Luo Translation* (CC BY-SA)
- **New Testament** (27 books) — the *Ratil New Testament*, with study-note introductions

This is the unified home of the project — the previous `Muma-Manyien` repository has been merged in here.

## Features

- **Complete Bible** — 66 books, fully searchable across both testaments
- **Complete, corrected text** — all 31,102 verses, faithful to the sources
- **Reading themes** — Otim (dark), Sepia, and Ler (light) themes + adjustable font size
- **Red-letter words of Christ** — every word spoken by Jesus is coloured red in the reader
- **Section headings** — per-book section titles rendered inline with the verses
- **Verse sharing** — share any verse to WhatsApp, Facebook or other apps as a beautiful image card, with bundled backgrounds, device upload, or online backgrounds; or download/copy the text
- **Book introductions** — author, place/date of writing, summary, overview, and outline for **all 66 books** (Old and New Testament)
- **Quick Jump & Quick Selector** — jump to any book / chapter / verse instantly
- **Scroll tracking** — the reader tracks the verse you're reading
- **Bible stories** — illustrated summaries of key events
- **Daily verse** — "Wes Ma Kawuono", drawing from both Old and New Testaments
- **Bookmarks** — save and manage favourite verses (persisted locally)
- **Offline & installable** — full offline PWA + native Android APK (Capacitor)

## Project structure

- `src/data/books/*.ts` — Scripture text (one file per book, keyed chapter → verse array)
- `src/data/red-letter.ts` — character spans marking the words of Jesus (red-letter)
- `src/data/book-intros.ts` — study-note introductions (New Testament)
- `src/data/headings.ts` — section headings mapped to verses (both testaments)
- `src/data/headings.ts` — section headings mapped to verses
- `src/data/bible-data.ts` — combined book index
- `src/constants.ts` — book metadata (names, chapter counts, colours, groups)
- `src/App.tsx` — the React UI
- `android/` — Capacitor native Android project
- `.github/workflows/build-apk.yml` — GitHub Actions APK builder

## Run locally

**Prerequisites:** Node.js

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Build the Android APK (automatic)

A GitHub Actions workflow (`.github/workflows/build-apk.yml`) builds the Android APK automatically on every push to `main`. After the run completes, download the `luo-bible-android-apk` artifact from the **Actions** tab.

To build locally:

```bash
npm run build
npx cap sync android
cd android && ./gradlew assembleDebug
# output: android/app/build/outputs/apk/debug/app-debug.apk
```

## Note on the text

The Scripture text is reproduced faithfully from the sources, including spelling and punctuation. A few verses whose numbers are omitted in the sources have been handled as follows:

- **Tich Joote (Acts) 2:11** and **7:29** — text present but the verse number was missing; split at the correct boundary.
- **Mariko (Mark) 11:26** — verse number omitted, text merged into v25; split back out.
- **Mariko 10:46 heading** — source typo "Bartiman" corrected to "Bartimau".

The Old Testament uses the **Biblica Open New Luo Translation** (© 2020 Biblica, Inc., CC BY-SA 4.0); the New Testament uses the *Ratil New Testament* with its study-note introductions.
