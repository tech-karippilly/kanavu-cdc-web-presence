import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  MessageCircle,
  Phone,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Users,
  Star,
  MapPin,
  Clock,
  CalendarCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-therapy.jpg";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";
import {
  fadeUp,
  fadeIn,
  slideLeft,
  slideRight,
  scaleUp,
  staggerContainer,
  staggerContainerSlow,
  floatY,
  heroStagger,
  viewport,
} from "@/lib/motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kanavu Child Development Centre — Therapy & Care in Kerala" },
      { name: "description", content: "Compassionate speech, occupational, and behavioral therapy for children in Kerala. Helping every child reach their full potential." },
      { property: "og:title", content: "Kanavu Child Development Centre" },
      { property: "og:description", content: "Therapy and developmental care that helps every child thrive." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const tintMap: Record<string, string> = {
  primary: "bg-primary-soft text-primary",
  secondary: "bg-secondary text-secondary-foreground",
  accent: "bg-accent text-accent-foreground",
  success: "bg-success/15 text-success",
  warm: "bg-warm/30 text-foreground",
};

function HomePage() {
  return (
    <>
      {/* HERO — -mt-16 negates the pt-16 on <main> so image bleeds under fixed header */}
      <section className="relative -mt-16 min-h-[100svh] overflow-hidden flex flex-col">
        {/* Full-bleed background image */}
        <motion.div
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-0"
        >
          <img
            src={heroImg}
            alt=""
            aria-hidden
            className="h-full w-full object-cover object-center"
          />
          {/* Gradient overlay — darker at bottom-left where panel sits */}
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/70 via-foreground/40 to-foreground/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </motion.div>

        {/* Decorative floating orbs */}
        <motion.div
          variants={floatY}
          animate="show"
          className="absolute right-[8%] top-[12%] z-0 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
          aria-hidden
        />
        <motion.div
          variants={floatY}
          animate="show"
          style={{ animationDelay: "2s" }}
          className="absolute left-[5%] bottom-[20%] z-0 h-48 w-48 rounded-full bg-secondary/30 blur-3xl"
          aria-hidden
        />

        {/* Overlay text content — centred over the hero image */}
        <div className="relative z-10 flex flex-1 items-center">
          <div className="mx-auto w-full max-w-4xl px-6 pt-28 pb-20 sm:px-8 text-center">
            <motion.div
              variants={heroStagger}
              initial="hidden"
              animate="show"
            >
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm"
              >
                <Sparkles className="h-3.5 w-3.5" /> Kerala's caring space for children
              </motion.span>

              <motion.h1
                variants={fadeUp}
                className="mt-6 font-display text-4xl font-extrabold leading-[1.08] text-white drop-shadow-lg sm:text-5xl lg:text-6xl"
              >
                Helping Children{" "}
                <span className="text-primary-foreground/90 [text-shadow:0_2px_20px_rgba(0,0,0,0.3)]">Reach Their Full Potential</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 drop-shadow sm:text-lg"
              >
                Compassionate therapy and developmental care — speech, occupational, behavioural, and educational — in a warm, child-friendly space built for Kerala families.
              </motion.p>

              {/* CTA row */}
              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  to="/book-a-visit"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(0,0,0,0.35)]"
                >
                  <CalendarCheck className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                  Book a Consultation
                </Link>
                <a
                  href={SITE.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/15 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/25"
                >
                  <MessageCircle className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                  WhatsApp Us
                </a>
              </motion.div>

              {/* Trust stats */}
              <motion.div variants={fadeUp} className="mt-12 flex items-center justify-center gap-10">
                {[
                  { k: "500+", v: "Children supported" },
                  { k: "12+", v: "Expert therapists" },
                  { k: "7 yrs", v: "Trusted care" },
                ].map((s, i) => (
                  <>
                    <div key={s.v} className="text-center">
                      <p className="font-display text-2xl font-extrabold text-white drop-shadow sm:text-3xl">{s.k}</p>
                      <p className="mt-0.5 text-xs text-white/75">{s.v}</p>
                    </div>
                    {i < 2 && <div className="h-8 w-px bg-white/30" />}
                  </>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade into page background */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" aria-hidden />
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="font-display text-3xl font-extrabold sm:text-4xl"
        >
          Every child has a dream. <span className="text-primary">We help them live it.</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Kanavu — meaning "dream" in Malayalam — is built on the belief that with the right support, every child can flourish. Our multidisciplinary team combines speech, occupational, behavioral, and educational therapy in a warm, child-friendly space designed just for them.
        </motion.p>
      </section>

      {/* SERVICES */}
      <section className="gradient-soft py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
          >
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-primary">What we offer</p>
              <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">Therapy services tailored to your child</h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.slug} variants={scaleUp}>
                  <Link
                    to="/services"
                    hash={s.slug}
                    className="group flex flex-col rounded-3xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/30 h-full"
                  >
                    <div className={`grid h-14 w-14 place-items-center rounded-2xl ${tintMap[s.tint]}`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <p className="text-sm font-bold uppercase tracking-wider text-primary">Why families choose Kanavu</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">A place where children feel safe, seen, and celebrated.</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              We believe therapy works best when children look forward to it. That's why every session at Kanavu is built around connection, play, and measurable progress — with parents as our most trusted partners.
            </p>
          </motion.div>
          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid gap-4 sm:grid-cols-2"
          >
            {[
              { icon: ShieldCheck, title: "Certified specialists", desc: "Licensed therapists with deep pediatric expertise." },
              { icon: HeartHandshake, title: "Individualized plans", desc: "Goals shaped around your child, not a template." },
              { icon: Users, title: "Family partnership", desc: "Parents are involved in every step of the journey." },
              { icon: Sparkles, title: "Joyful environment", desc: "A bright, sensory-friendly space made for kids." },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.li key={title} variants={fadeUp} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-primary-soft/50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="text-center"
          >
            <p className="text-sm font-bold uppercase tracking-wider text-primary">Parent stories</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">Real progress, in their own words</h2>
          </motion.div>

          <motion.div
            variants={staggerContainerSlow}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-10 grid gap-5 md:grid-cols-3"
          >
            {[
              {
                quote: "Within six months at Kanavu, our son started using full sentences. The therapists make him feel like he's just playing — but he's learning so much.",
                name: "Aswathy R.",
                role: "Mother of Aarav, age 5",
              },
              {
                quote: "We were anxious about starting therapy. The team listened patiently, explained everything, and treated our daughter like family. We're so grateful.",
                name: "Rahul & Meera",
                role: "Parents of Ananya, age 7",
              },
              {
                quote: "The progress reports and parent sessions help us continue the work at home. Kanavu doesn't just support our child — they support all of us.",
                name: "Sajith K.",
                role: "Father of Niranjan, age 4",
              },
            ].map((t) => (
              <motion.figure key={t.name} variants={fadeUp} className="rounded-3xl bg-card p-6 shadow-card">
                <div className="flex gap-1 text-warm">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground">"{t.quote}"</blockquote>
                <figcaption className="mt-5">
                  <p className="font-display text-sm font-bold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONTACT / MAP */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <p className="text-sm font-bold uppercase tracking-wider text-primary">Visit us</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">We'd love to meet your family</h2>
            <p className="mt-4 text-base text-muted-foreground">Drop by our centre, give us a call, or send a quick WhatsApp message — whichever feels easiest.</p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary"><MapPin className="h-5 w-5" /></span>
                <div><p className="font-semibold">Our Centre</p><p className="text-sm text-muted-foreground">{SITE.address}</p></div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary"><Phone className="h-5 w-5" /></span>
                <div><p className="font-semibold">Call us</p><a href={SITE.phoneHref} className="text-sm text-muted-foreground hover:text-primary">{SITE.phone}</a></div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary"><Clock className="h-5 w-5" /></span>
                <div>
                  <p className="font-semibold">Open hours</p>
                  <ul className="mt-1 space-y-0.5 text-sm text-muted-foreground">
                    {SITE.hours.map((h) => <li key={h.day}>{h.day}: {h.time}</li>)}
                  </ul>
                </div>
              </li>
            </ul>
          </motion.div>
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="overflow-hidden rounded-3xl border border-border shadow-card"
          >
            <iframe
              title="Kanavu CDC location map"
              src={SITE.mapEmbed}
              className="h-80 w-full lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
