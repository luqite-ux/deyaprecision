export const locales = ['en'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

/** Locales published at launch. Add a locale here and in lib/content.ts to enable it. */
export const enabledLocales: readonly Locale[] = ['en']

export function localizedHref(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path
  return `/${locale}${path === '/' ? '' : path}`
}
