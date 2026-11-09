import assert from 'node:assert/strict'
import { test } from 'node:test'

const productData = await import('../data/en/products.ts')
const bannerData = await import('../data/en/banners.ts')
const siteData = await import('../data/en/site.ts')

test('customer product taxonomy exposes five families and assigns each revised product to its own family', () => {
  assert.deepEqual(
    productData.categories.map((category) => category.slug),
    [
      'liquid-cooling',
      'semiconductor-vacuum',
      'titanium-valve-core',
      'dental-surgical-tray',
      'humanoid-robot-joint',
    ],
  )

  const assignments = Object.fromEntries(
    productData.products.map((product) => [product.slug, product.categorySlug]),
  )
  assert.equal(assignments['titanium-alloy-valve-core'], 'titanium-valve-core')
  assert.equal(assignments['dental-surgical-tray'], 'dental-surgical-tray')
  assert.equal(assignments['humanoid-robot-joint-component'], 'humanoid-robot-joint')
})

test('three hero messages use customer-marked desktop safe-area positions', () => {
  assert.deepEqual(
    bannerData.heroSlides.map(({ id, desktopContentLeft, desktopContentWidth }) => ({
      id,
      desktopContentLeft,
      desktopContentWidth,
    })),
    [
      { id: 'hero-01', desktopContentLeft: '16%', desktopContentWidth: '35%' },
      { id: 'hero-02', desktopContentLeft: '47%', desktopContentWidth: '38%' },
      { id: 'hero-03', desktopContentLeft: '11%', desktopContentWidth: '35%' },
    ],
  )
})

test('contact company profile is grounded in verified company facts', () => {
  assert.match(siteData.site.contactIntro, /founded in 2020/i)
  assert.match(siteData.site.contactIntro, /precision-machined components/i)
  assert.match(siteData.site.contactIntro, /liquid-cooling/i)
  assert.match(siteData.site.contactIntro, /semiconductor/i)
  assert.equal(siteData.site.addressLines.length, 3)
})
