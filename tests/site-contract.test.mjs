import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import { join } from 'node:path'

const root = new URL('..', import.meta.url).pathname.replace(/^\/(?:([A-Za-z]:))/, '$1')
const read = (file) => readFileSync(join(root, file), 'utf8')

test('all planned public routes exist as App Router pages', () => {
  for (const file of [
    'app/products/page.tsx',
    'app/products/[slug]/page.tsx',
    'app/applications/page.tsx',
    'app/capabilities/page.tsx',
    'app/quality/page.tsx',
    'app/about/page.tsx',
    'app/news/page.tsx',
    'app/news/[slug]/page.tsx',
    'app/contact/page.tsx',
  ]) assert.ok(read(file).includes('export default'), `${file} must export a page`)
})

test('all public main sections use viewport lifecycle reveals without timeout completion', () => {
  const layout = read('app/layout.tsx')
  const controller = read('components/site/viewport-reveal-controller.tsx')
  const css = read('app/globals.css')
  assert.match(layout, /<ViewportRevealController\s*\/>/)
  assert.match(controller, /new IntersectionObserver/)
  assert.match(controller, /main section/)
  assert.match(controller, /data-viewport-reveal/)
  assert.doesNotMatch(controller, /setTimeout\s*\(/)
  assert.match(css, /\[data-viewport-reveal=['"]pending['"]\]/)
  assert.match(css, /prefers-reduced-motion:\s*reduce/)
})

test('product details render every supplied specification field', () => {
  const page = read('app/products/[slug]/page.tsx')
  assert.match(page, /product\.specifications/)
  assert.match(page, /Object\.entries/)
})

test('product details render every mapped customer gallery image', () => {
  const detail = read('app/products/[slug]/page.tsx')
  assert.match(detail, /product\.gallery\.map\(/)
  assert.doesNotMatch(detail, /const image=product\.gallery\[0\]/)
})

test('quality page exposes each supplied certificate independently', () => {
  const page = read('app/quality/page.tsx')
  assert.match(page, /content\.certificates/)
  assert.match(page, /CertificateRail/)
})

test('news uses the exact public label News and provides an empty state', () => {
  assert.match(read('app/news/page.tsx'), /News/)
  assert.match(read('app/news/page.tsx'), /No published news/i)
})

test('dynamic detail routes emit database-backed metadata and structured data', () => {
  const product = read('app/products/[slug]/page.tsx')
  const article = read('app/news/[slug]/page.tsx')
  assert.match(product, /generateMetadata/)
  assert.match(product, /Product/)
  assert.match(product, /BreadcrumbList/)
  assert.match(article, /generateMetadata/)
  assert.match(article, /Article/)
  assert.match(article, /BreadcrumbList/)
})

test('captcha is consumed before any inquiry insert', () => {
  const action = read('app/actions/enquiry.ts')
  const verifyAt = action.indexOf('verifyCaptchaSubmission')
  const insertAt = action.indexOf('/rest/v1/inquiries')
  assert.ok(verifyAt >= 0 && insertAt > verifyAt)
  assert.match(action, /if \(!captcha\.ok\)/)
})

test('formal product data has no static product fallback', () => {
  const backend = read('lib/backend-content.ts')
  assert.doesNotMatch(backend, /getContent\(\)\.products/)
  assert.doesNotMatch(backend, /return fallback/)
  assert.match(backend, /catch\s*\{\s*return \[\]\s*\}/)
})

test('public category navigation comes from the tenant backend', () => {
  const backend = read('lib/backend-content.ts')
  const home = read('app/page.tsx')
  const products = read('app/products/page.tsx')

  assert.match(backend, /export async function getBackendCategories/)
  assert.match(home, /getBackendCategories/)
  assert.doesNotMatch(home, /categories=\{content\.categories\}/)
  assert.match(products, /getBackendCategories/)
  assert.match(products, /searchParams/)
  assert.match(products, /category\.name/)
})

test('published hero typography overrides reach the rendered headline', () => {
  const transport = read('lib/site-content/transport.ts')
  const homeContent = read('lib/site-content/home.ts')
  const page = read('app/page.tsx')
  const hero = read('components/site/hero-carousel.tsx')

  assert.match(transport, /styles\??:/)
  assert.match(homeContent, /editableHeroTypography/)
  assert.match(page, /headlineTypography=/)
  for (const token of ['fontSizeDesktop', 'fontSizeMobile', 'fontWeight', 'fontFamily']) assert.match(hero, new RegExp(token))
})
