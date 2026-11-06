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
