# Anjani — A World Made of Us

A romantic, mobile-first interactive birthday universe built with React 19, Vite 7, TypeScript, Tailwind CSS v4, Framer Motion, Howler and Lucide.

## 1. Requirements

- Node.js 22 LTS (recommended)
- npm
- A GitHub account

## 2. Run locally

```bash
npm install
npm run dev
```

Open the local URL Vite prints. On an iPhone, your phone and computer must be on the same Wi-Fi; open the network URL printed by Vite. You can also use a hosted preview after deployment.

## 3. Add your media

Copy your own files into `public/media/` using the exact filenames below. If a media item is not ready, leave the placeholder file absent; the rest of the site still works.

### Photos — `public/media/photos/`

| Exact filename | Used for |
|---|---|
| `anjani-cover.jpg` | First polaroid |
| `anjani-portrait-01.jpg` | Portrait gallery |
| `anjani-portrait-02.jpg` | Portrait gallery |
| `us-first-memories.jpg` | Optional extra memory |
| `bus-memory.jpg` | Bus memory |
| `diary-memory.jpg` | Diary memory |
| `trp-mall-memory.jpg` | Optional TRP Mall memory |
| `first-kiss-memory.jpg` | March 6 timeline |
| `proposal-memory.jpg` | March 7 timeline |
| `favourite-selfie-01.jpg` | Gallery |
| `favourite-selfie-02.jpg` | Optional extra |
| `together-01.jpg` | Gallery |
| `together-02.jpg` | Gallery |
| `birthday-finale.jpg` | Video poster / finale |

### Videos — `public/media/videos/`

- `our-little-film.mp4`
- `birthday-surprise.mp4`
- `special-moment.mp4`

### Audio — `public/media/audio/`

- `universe-ambience.mp3`
- `birthday-song.mp3`
- `voice-letter-01.mp3`
- `voice-letter-02.mp3`
- `final-message.mp3`

### Letter scans — `public/media/letters/`

- `opening-letter.jpg`
- `handwritten-note-01.jpg`
- `handwritten-note-02.jpg`

### Textures — `public/media/textures/`

- `paper-grain.png`
- `film-grain.png`
- `envelope-texture.png`

**Important:** The app references the filenames used by its components. The `us-first-memories.jpg`, `trp-mall-memory.jpg`, optional gallery photos, extra video, and texture files are reserved for later customization; they are not required for the initial build. Use compressed JPG/WebP photos, MP4 H.264 video and MP3 audio. Keep video files small for mobile data.

## 4. Personalise the words

Edit these files:

- `src/data/identity.ts` — names, birthday date, opening line and birthday gate.
- `src/data/memories.ts` — dates, titles and your real memory stories.
- `src/data/gallery.ts` — photo captions and back-of-polaroid notes.
- `src/data/letters.ts` — the main letter and future notes.
- `src/data/surprises.ts` — little details and wish jar notes.
- `src/components/sections/SecretNote.tsx` — change `secretAnswer` to a private clue she will know.

The text currently contains editable starter copy. Replace it with your own real words before sending the link.

## 5. Birthday finale

In `src/data/identity.ts`:

```ts
birthdayFinaleLocked: false
```

- `false`: finale can be opened during testing.
- `true`: countdown gate stays locked until midnight at the start of November 25, 2026, India time.

The date is interpreted using the explicit `+05:30` offset.

## 6. GitHub Pages deployment

1. Create a GitHub repository named **anjani-universe**.
2. Upload the project files to the repository root (not inside another nested folder).
3. Ensure the default branch is named `main`.
4. In GitHub, open **Settings → Pages**.
5. Under **Build and deployment → Source**, choose **GitHub Actions**.
6. Push to `main`. The workflow in `.github/workflows/deploy.yml` installs dependencies, builds and deploys.
7. Open the **Actions** tab and wait for the Pages workflow to finish.
8. Your URL will be:

   `https://YOUR-GITHUB-USERNAME.github.io/anjani-universe/`

### If your repository has a different name

Change `base` in `vite.config.ts` to `"/YOUR-REPOSITORY-NAME/"` before pushing.

### If deploying to a user site

If your repository is named `YOUR-GITHUB-USERNAME.github.io`, change `base` in `vite.config.ts` to `"/"`.

## 7. iPhone checks before sharing

- Open the deployed link in Safari, not only the GitHub preview.
- Test every destination and close/back control.
- Test photo loading on mobile data.
- Tap the ambient and song buttons once to start audio (iOS blocks autoplay until interaction).
- Test video playback with `playsInline`.
- Check the birthday countdown and the secret-answer clue.
- Keep the project public if using GitHub Pages on a free GitHub account; a public Pages site is publicly accessible to anyone with the link.

## 8. Important privacy note

GitHub Pages is a public static website. Do not upload private documents, sensitive photos, phone numbers, addresses or anything you would not want someone with the link to access. The secret-note interaction is a playful front-end reveal, not real security: its answer and message can be found in the downloaded site files.

## 9. Build check

```bash
npm run build
npm run preview
```

If the build succeeds, Vite creates the deployable site in `dist/`.
