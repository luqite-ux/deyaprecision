import type { Certificate } from '@/data/types'

export const certificates: Certificate[] = [
  {
    id: 'iso-9001-en',
    title: 'ISO 9001 Quality Management System',
    kind: 'Management system certificate',
    language: 'English',
    details: [
      'Standard: GB/T 19001-2016 / ISO 9001:2015',
      'Scope: management activities involved in the processing of general mechanical parts',
      'Issued 11 December 2024, valid to 10 December 2027',
    ],
    image: '/images/certificates/iso-9001-en.png',
    alt: 'ISO 9001 quality management system certificate issued to Suzhou Deya Precision Technology Co., Ltd., English version',
  },
  {
    id: 'iso-9001-cn',
    title: 'ISO 9001 Quality Management System',
    kind: 'Management system certificate',
    language: 'Chinese',
    details: [
      'Standard: GB/T 19001-2016 / ISO 9001:2015',
      'Chinese-language version of the same certificate',
      'Issued 11 December 2024, valid to 10 December 2027',
    ],
    image: '/images/certificates/iso-9001-cn.png',
    alt: 'ISO 9001 quality management system certificate, Chinese version, issued to Suzhou Deya Precision Technology Co., Ltd.',
  },
  {
    id: 'trademark-88059767',
    title: 'Trademark Registration Certificate',
    kind: 'Trademark registration',
    language: 'Chinese',
    details: [
      'Registration No. 88059767',
      'International class 9',
      'Valid 7 June 2026 to 6 June 2036',
    ],
    image: '/images/certificates/trademark-88059767.png',
    alt: 'Trademark registration certificate No. 88059767 showing the DEYA symbol, registered to Suzhou Deya Precision Technology Co., Ltd.',
  },
]
