import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerContainerSlow, viewport } from "@/lib/motion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQs — Kanavu Child Development Centre" },
      { name: "description", content: "Answers to common questions about assessments, therapy plans, fees and scheduling at Kanavu CDC." },
      { property: "og:title", content: "FAQs — Kanavu CDC" },
      { property: "og:description", content: "Everything parents ask before their first visit." },
    ],
  }),
  component: FaqPage,
});

const FAQS = [
  { q: "At what age should I bring my child for an assessment?", a: "If you have any concern about speech, motor skills, behaviour or learning — even at 12 months — it is worth a conversation. Early intervention has the greatest impact between ages 0–6." },
  { q: "What happens during the first visit?", a: "Our developmental paediatrician spends about 60 minutes understanding your child's history, observing them at play, and discussing your concerns. You leave with a clear next step — never a rushed verdict." },
  { q: "How long does therapy usually last?", a: "It varies. Some children meet their goals in 3–6 months; others benefit from longer support. We review progress every 8–12 weeks with the family and adjust plans together." },
  { q: "Do you offer parent training?", a: "Yes. Every therapy plan includes parent coaching so the strategies that work at the centre also work at home. We also run monthly group workshops." },
  { q: "Are sessions in English or Malayalam?", a: "Both. Our therapists are bilingual and tailor sessions to your child's primary language." },
  { q: "Do you accept insurance?", a: "We provide detailed invoices that most Indian insurers accept for reimbursement. Please check with your provider regarding paediatric therapy coverage." },
  { q: "What is the cost of a session?", a: "Assessment fees start from ₹1,500 and individual therapy sessions from ₹900. We offer subsidised slots for families in need — please ask." },
  { q: "Do you support schools and teachers?", a: "Absolutely. We collaborate with schools through observation visits, IEP meetings and teacher training workshops." },
];

function FaqPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="text-center"
      >
        <motion.p variants={fadeUp} className="text-sm font-bold uppercase tracking-widest text-primary">FAQs</motion.p>
        <motion.h1 variants={fadeUp} className="mt-3 font-display text-4xl font-extrabold text-foreground sm:text-5xl">Questions, answered</motion.h1>
        <motion.p variants={fadeUp} className="mt-4 text-lg text-muted-foreground">If you don't find what you're looking for, just call or WhatsApp us — we love a good chat.</motion.p>
      </motion.div>

      <motion.div
        variants={staggerContainerSlow}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {FAQS.map((f, i) => (
            <motion.div key={i} variants={fadeUp}>
              <AccordionItem value={`item-${i}`} className="rounded-2xl border border-border bg-card px-5 shadow-soft">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
}
