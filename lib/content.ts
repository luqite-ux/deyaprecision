import { defaultLocale, type Locale } from '@/lib/i18n'
import { site, nav, quoteCta } from '@/data/en/site'
import { categories, products } from '@/data/en/products'
import { heroSlides } from '@/data/en/banners'
import { certificates } from '@/data/en/certificates'
import { applicationSectors } from '@/data/en/applications'
import * as capabilities from '@/data/en/capabilities'
import { faqGroups } from '@/data/en/faq'

const en = {
  site,
  nav,
  quoteCta,
  categories,
  products,
  heroSlides,
  certificates,
  applicationSectors,
  capabilities,
  faqGroups,
}

export type Content = typeof en

const dictionaries: Record<Locale, Content> = { en }

export function getContent(locale: Locale = defaultLocale): Content {
  return dictionaries[locale] ?? dictionaries[defaultLocale]
}

export function getProduct(slug: string, locale: Locale = defaultLocale) {
  return getContent(locale).products.find((p) => p.slug === slug)
}

export function getCategory(slug: string, locale: Locale = defaultLocale) {
  return getContent(locale).categories.find((c) => c.slug === slug)
}

export function getProductsByCategory(slug: string, locale: Locale = defaultLocale) {
  return getContent(locale).products.filter((p) => p.categorySlug === slug)
}
