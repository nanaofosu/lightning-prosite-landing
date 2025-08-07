# Lightning Launch Pages & ProSite Express

This repository contains a simple, responsive landing page for two productized services: **Lightning Launch Pages** and **ProSite Express**. The site is built with vanilla HTML, CSS and JavaScript – no frameworks required – and is optimized for fast load times and accessibility.

## Live Site

Once the site is deployed you will be able to view it at:

```
https://nanaofosu.github.io/lightning-prosite-landing/
```

The source code for the site is available here:

```
https://github.com/nanaofosu/lightning-prosite-landing
```

## Project Structure

```
lightning-prosite-landing/
├── index.html        # main page with semantic markup and copy
├── styles.css        # responsive, mobile‑first CSS with a light palette and accent color
├── script.js         # small amount of JS for navigation, sticky header and form submission
├── assets/           # images and icons used on the site
│   ├── logo.svg      # lightning bolt icon used in the logo
│   ├── avatar-*.svg  # generic avatar illustrations for testimonials
│   └── og-image.png  # OpenGraph preview image used in social previews
├── favicon.ico       # small favicon for browser tabs
└── README.md         # project documentation (this file)
```

## Running Locally

You don’t need any special tooling to preview this site locally. Simply clone the repository and open `index.html` in your browser:

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/lightning-prosite-landing.git
cd lightning-prosite-landing
# Open index.html in your browser of choice
```

For development you can run a simple static file server (Python is available on most systems):

```bash
python3 -m http.server
# then visit http://localhost:8000 in your browser
```

## Customization

The design uses CSS custom properties defined near the top of `styles.css`. You can adjust these variables to tweak the look and feel:

- `--accent-color`: the primary accent used for buttons and links
- `--bg-color`: the light page background
- `--text-color` and `--heading-color`: base colors for body copy and headings
- `--max-width`: maximum width of the content container

Update these variables to match your brand colors. You can also replace `assets/logo.svg` with your own logo (make sure it fits nicely at 32–40px height). To replace the OpenGraph preview image, swap out `assets/og-image.png` with a 1200×630 PNG.

### Updating the copy

All text lives in `index.html`. Edit the content directly to change headings, descriptions, pricing, upsell items, testimonials or FAQ. Keep the markup structure the same to preserve styling and accessibility.

### Changing the contact form endpoint

The form at the bottom of the page submits to a Formspree endpoint specified in the `action` attribute of the `<form>` element. To use your own Formspree project:

1. Sign up for [Formspree](https://formspree.io/) and create a new form.
2. Replace the placeholder action URL in `index.html`:

   ```html
   <form id="contact-form" action="https://formspree.io/f/your-id" method="POST" novalidate>
   ```

3. Optionally update the fallback email link below the form.

## Deploying Elsewhere

This project is designed to be hosted on GitHub Pages (see below). To deploy on other static hosts like Netlify or Vercel:

- **Netlify**: Drag‑and‑drop the folder into the Netlify dashboard or run `netlify deploy` if you have the CLI installed. Choose the `lightning-prosite-landing` directory as the publish directory. No build step is required.
- **Vercel**: In the Vercel dashboard, create a new project and import this repository. Set the “Framework Preset” to *Other* and leave the build command empty. The output folder should be the root of the repository.

## License

This project is provided under the MIT License. See [LICENSE](LICENSE) if one is added.
