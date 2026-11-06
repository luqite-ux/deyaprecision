# v0 build brief — DEYA Precision

Create a complete, premium English B2B enquiry website for **Suzhou Deya Precision Technology Co., Ltd.**, brand **DEYA**, formal domain **deyaprecision.com**. This is the first visual stage; produce real Next.js App Router source, not a screenshot or single landing page. Keep locale-aware data and routing so more languages can be enabled later, but publish English only for the first release.

## Visual direction

Use a precise industrial editorial system derived from the supplied DEYA blue logo: deep navy, clean electric blue accents, cool whites and restrained graphite. Avoid generic neon-tech templates, excessive glow, all-card layouts, oversized empty spaces, heavy rounded corners and decorative UI with no buyer value. Use crisp typography, technical line details and restrained geometric dividers. Product and certificate imagery must remain complete and undistorted.

The customer supplied three finished wide Banner assets. Use **all three** as a full-width homepage carousel; do not replace, omit, regenerate, turn them into framed cards or darken the whole image. Overlay real DOM text in each image’s safe area. Every slide has a different headline, decision task and destination exactly as defined in `banner-message-plan.json`. Desktop and 390px mobile require separate composition/focal decisions; on mobile the copy may move below the image to preserve subjects.

Use `logo.jpg` in header and footer with contain sizing and homepage links. Derive a square favicon from the same verified DEYA symbol; remove all v0/Next.js/template icons.

## Required routes

- Home
- Products and category-filtered product listing
- Product detail template with gallery, overview, applications, complete specifications and enquiry CTA
- Applications / Case Studies
- Capabilities (manufacturing equipment, inspection equipment and process)
- Quality / Certifications
- About Us
- News and article detail (use an honest empty state; do not invent news)
- Contact / Request a Quote

Header navigation must explicitly include **Home**. All links pointing to `/news` must be labelled exactly **News**.

## Verified facts

Use the facts and product list in `material-brief.md`. Do not invent customer names, partner logos, project outcomes, export countries, factory ownership claims from Banner imagery, certifications, equipment, prices or commercial promises. The only public contact identity is:

- info@deyaprecision.com
- +86 189 1408 8662
- No. 21, Edong Industrial Park, Beiqiao Town, Xiangcheng District, Suzhou, Jiangsu, China

The public legal name is Suzhou Deya Precision Technology Co., Ltd. The footer year must be dynamic and punctuation normalized.

## Product and content rules

Create an extensible data model and UI for all documented product rows and future Supabase content. The images sent to v0 are representative samples, not the full catalogue. Product cards and galleries must use clean continuous backgrounds and `object-fit: contain`; never crop, stretch or cover key geometry. Category cards must link to real, non-empty category destinations.

Applications / Case Studies should organize supplied material into liquid cooling, semiconductor, medical and non-standard automation. Do not call a generic application image a completed customer project. If a case lacks a customer name or measured result, use a neutral component/application title and only supported facts.

Display **each** supplied certificate independently: ISO 9001 English, ISO 9001 Chinese and trademark registration. Use a portrait certificate rail inspired by the supplied Anli certificate component: full document visible, touch/keyboard/manual controls and pause. Never combine certificates into one collage.

Use separate capability sections for production equipment and inspection equipment. Visual cards require semantically related unified line icons or real images, not emoji or repeated generic icons.

## Homepage narrative

Build at least eight meaningful sections excluding header/footer/repeated CTA:

1. Three-slide Banner carousel.
2. Product family navigation.
3. Precision manufacturing overview.
4. Verified production and inspection capability.
5. Industries / applications served.
6. Application / case-study preview.
7. Separate certificate trust rail.
8. Company identity and concise verified metrics.
9. Grouped FAQ preview.
10. Drawing-based enquiry CTA.

The page should lead a technical buyer from fit → product scope → capability → evidence → application context → enquiry, without repeating the same facts in multiple cards.

## Enquiry and accessibility

No prices, cart, checkout or payment. Build realistic contact/RFQ UI and states for later server integration. Fields should support name, company, email, phone/WhatsApp optional, product/application, quantity, material, drawing/file note, message and captcha placeholder. Do not use alert, console.log or setTimeout as a fake success path.

All interactions must work with keyboard and touch, have visible focus, meet WCAG AA contrast and honor `prefers-reduced-motion`. Every major content section must animate when it actually enters the viewport; do not mark unreached sections as completed via a global timeout.

## Hard exclusions

Do not publish or translate warranty, guarantee, 质保 or 保修 claims. Do not publish the QQ email, the conflicting PPT phone number, internal audit notes, source references, confidence language, “B2B” marketing labels, military claims, or invented partners/customers.

