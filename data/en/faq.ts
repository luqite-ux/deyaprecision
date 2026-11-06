import type { FaqGroup } from '@/data/types'

export const faqGroups: FaqGroup[] = [
  {
    id: 'quotation',
    title: 'Quotation and ordering',
    items: [
      {
        question: 'How do I request a quotation?',
        answer:
          'Use the Contact page or email info@deyaprecision.com with your drawing, material, quantity, finish and inspection needs. Each requirement is reviewed individually before a quotation is prepared.',
      },
      {
        question: 'Do you publish prices?',
        answer:
          'No. Prices depend on geometry, material, quantity and inspection scope, so they are provided in a quotation for your specific drawing.',
      },
      {
        question: 'What is the minimum order quantity?',
        answer:
          'The documented products on this site list a minimum order quantity of 1 piece. For your own drawing, quantity and order acceptance are confirmed in the quotation.',
      },
      {
        question: 'How long does production take?',
        answer:
          'Lead time depends on the part and quantity and is confirmed in the quotation rather than stated as a fixed figure.',
      },
    ],
  },
  {
    id: 'materials',
    title: 'Materials and machining',
    items: [
      {
        question: 'Which materials are documented?',
        answer:
          'Current product records cover stainless steel, hard-anodised aluminium, natural aluminium and TC4 titanium alloy, all in natural finish. If your part needs another material, include it in your enquiry.',
      },
      {
        question: 'Which machining methods do you use?',
        answer:
          'CNC turning, turn-mill machining and vertical machining. The method is chosen from the geometry on your drawing.',
      },
    ],
  },
  {
    id: 'drawings',
    title: 'Drawings and files',
    items: [
      {
        question: 'What should I send with my enquiry?',
        answer:
          'Your drawing, the material, the quantity, any surface or finish requirement, tolerance-critical features and how you want the parts inspected. Use the file note on the enquiry form to describe what you will send.',
      },
      {
        question: 'Can I discuss a drawing before ordering?',
        answer:
          'Yes. Enquiries are requirement-specific reviews, and you can raise questions about the drawing in your message.',
      },
    ],
  },
  {
    id: 'quality',
    title: 'Quality and inspection',
    items: [
      {
        question: 'How are parts inspected?',
        answer:
          'Parts go through process inspection and finished-product inspection, using roughness, profile, dimensional and height measurement resources. State any inspection requirement on your drawing.',
      },
      {
        question: 'Which certificates can I view?',
        answer:
          'The Quality page shows the ISO 9001 certificate in English and Chinese, and the trademark registration certificate, each as a separate document.',
      },
    ],
  },
]
