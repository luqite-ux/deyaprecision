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
