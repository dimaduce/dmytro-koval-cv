# Dmytro Koval — Software Project Manager

Live website: https://dmytro-koval-cv.vercel.app

Personal CV website focused on project delivery and team coordination, with a real profile photo and a downloadable, selectable-text one-page PDF.

Static HTML and CSS. No application framework, runtime dependencies, tracking or external font requests.

## Local use

Requires Node.js 22 or later.

```sh
npm run dev
npm run check
npm run build
```

Preview: http://127.0.0.1:4173. Build: `dist/`.

## Editing

- Content: `public/index.html`
- Responsive design: `public/styles.css`
- Photo: `public/dmytro-koval.jpg`
- PDF: `public/Dmytro-Koval-CV.pdf`

Keep the web and PDF versions synchronized after content changes.

## Content

Career roles, dates, responsibilities, education and languages were reviewed against [Dmytro's LinkedIn](https://www.linkedin.com/in/dmytro-koval-heeeper/) on 21 September 2026. Overlapping Heeeper roles are consolidated while preserving CEO tenure from February 2023 and the co-founder role from June 2023. The original LinkedIn photo is used without AI alterations.

AI proficiency is self-reported by Dmytro. No performance metrics, unverified project results, client-specific AI integrations, or Hermes vendor identity are claimed.

## Deployment

Vercel build command: `npm run build`. Output directory: `dist/`.
