# Ladies Massage Guide — static rebuild

A fresh dependency-free HTML/CSS/JavaScript implementation of the supplied reference. All 19 content images are local. No WordPress, Elementor, jQuery, remote image dependency, installation or build step.

## GitHub Pages: easiest upload method

1. Create a public GitHub repository, for example `massage-guide`.
2. Extract this ZIP. Open its `massage-guide-site` folder.
3. Upload `index.html`, the complete `assets` folder, and `.nojekyll` to the repository root. Do not upload only the ZIP, or put the website inside another folder.
4. Go to **Settings → Pages → Build and deployment**.
5. Choose **Deploy from a branch**, then **main** and **/(root)**. Save.
6. GitHub will show the published URL on the Pages screen after deployment finishes.

Alternatively, upload the included `.github/workflows/pages.yml` and choose **GitHub Actions** as the Pages source. Use one deployment method.

## Edit

- Text/sections: `index.html`
- Colors, spacing and mobile layout: `assets/style.css`
- Checkout link: `CHECKOUT_URL` in `assets/app.js` and the fallback anchor links in `index.html`
- Pictures: `assets/images/`

## Reference fidelity and content

The section order, Hindi/English copy, 19 source images, eight reviews, five FAQs, prices, updated SuperProfile checkout URL and fixed purchase bar are retained. Markup and styles are newly implemented; exact pixel parity across all devices has not been certified. Fonts fall back to the browser's local fonts. There are no copied tracking scripts.

The source's offer countdown was already at zero, so this rebuild displays zero without manufacturing a new deadline. The source's final 95% label (inconsistent with ₹199 vs ₹1,999), testimonial labels, audience counts, income examples, refund promise and contact address are retained as supplied, not independently verified. Review those business details before launch. The checkout is set to https://superprofile.bio/vp/ryOeBMD8?checkout=true across all purchase buttons. No payment backend or eBook file is included.

Images remain the reference site's assets, not newly generated artwork.
