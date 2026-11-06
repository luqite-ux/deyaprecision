export const site = {
  brand: 'DEYA',
  legalName: 'Suzhou Deya Precision Technology Co., Ltd.',
  legalNameZh: '苏州德亚精密科技有限公司',
  url: 'https://deyaprecision.com',
  email: 'info@deyaprecision.com',
  phone: '+86 189 1408 8662',
  phoneHref: 'tel:+8618914088662',
  addressLines: [
    'No. 21, Edong Industrial Park',
    'Beiqiao Town, Xiangcheng District',
    'Suzhou, Jiangsu, China',
  ],
  address:
    'No. 21, Edong Industrial Park, Beiqiao Town, Xiangcheng District, Suzhou, Jiangsu, China',
  established: '30 July 2020',
  tagline: 'Precision-machined components, drawn to your specification.',
} as const

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Applications', href: '/applications' },
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'Quality', href: '/quality' },
  { label: 'About Us', href: '/about' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
] as const

export const quoteCta = { label: 'Request a Quote', href: '/contact' } as const
