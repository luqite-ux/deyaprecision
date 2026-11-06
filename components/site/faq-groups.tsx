import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import type { FaqGroup } from '@/data/types'

export function FaqGroups({ groups, idPrefix = 'faq' }: { groups: FaqGroup[]; idPrefix?: string }) {
  return (
    <div className="grid gap-x-12 gap-y-10 lg:grid-cols-2">
      {groups.map((group) => (
        <section key={group.id} aria-labelledby={`${idPrefix}-${group.id}`}>
          <h3
            id={`${idPrefix}-${group.id}`}
            className="border-b-2 border-navy pb-3 font-mono text-xs uppercase tracking-[0.18em] text-navy"
          >
            {group.title}
          </h3>
          <Accordion type="single" collapsible>
            {group.items.map((item, index) => (
              <AccordionItem key={item.question} value={`${group.id}-${index}`}>
                <AccordionTrigger className="py-4 text-left text-base font-medium text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      ))}
    </div>
  )
}
