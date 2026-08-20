<div align="center">

# Muma Maler — Luo Bible

A complete, offline-capable **Luo-language Bible app** (Dholuo) for the New Testament — with the full corrected Scripture text, chapter navigation, search, bookmarks, daily verse, Bible stories, and reading themes. Built as a PWA and a native Android app via Capacitor.

</div>

## About

**Muma Maler** (the *full* Bible project) unifies the complete **Muma Manyien (New Testament)** with a rich, modern reader. It ships all 27 books, 260 chapters, and **7,957 verses**, transcribed and corrected from the *Ratil New Testament*, plus the study-note introductions for every book.

This is the unified home of the project — the previous `Muma-Manyien` repository has been merged in here.

## Features

- **27 books** — Mathayo (Matthew) through Fweny (Revelation), fully searchable
- **Complete, corrected text** — all 7,957 verses, faithful to the source
- **Reading themes** — Otim (dark), Sepia, and Ler (light) themes + adjustable font size
- **Section headings** — per-book section titles rendered inline with the verses
- **Book introductions** — author, place/date of writing, summary, overview, and outline
- **Quick Jump & Quick Selector** — jump to any book / chapter / verse instantly
- **Scroll tracking** — the reader tracks the verse you're reading
- **Bible stories** — illustrated summaries of key events
- **Daily verse** — "Wes Ma Kawuono"
- **Bookmarks** — save and manage favourite verses (persisted locally)
- **Offline & installable** — full offline PWA + native Android APK (Capacitor)

## Project structure

- `src/data/books/*.ts` — Scripture text (one file per book, keyed chapter → verse array)
- `src/data/book-intros.ts` — study-note introductions
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

The Scripture text is reproduced faithfully from the source, including its spelling and punctuation. A few verses whose numbers are omitted in the source edition have been handled as follows:

- **Tich Joote (Acts) 2:11** and **7:29** — text present but the verse number was missing; split at the correct boundary.
- **Mariko (Mark) 11:26** — verse number omitted, text merged into v25; split back out.
- **Mariko 10:46 heading** — source typo "Bartiman" corrected to "Bartimau".
