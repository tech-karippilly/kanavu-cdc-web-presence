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
      {/* HERO */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Kerala's caring space for children
            </motion.span>
            <motion.h1 variants={fadeUp} className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              Helping Children Reach Their <span className="text-primary">Full Potential</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              At Kanavu Child Development Centre, our compassionate team of therapists and educators walks alongside families to support every child's unique developmental journey — through play, patience, and proven care.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
              >
                <Phone className="h-4 w-4" /> Contact Us
              </Link>
              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-success px-6 py-3 text-sm font-semibold text-success-foreground shadow-soft transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </motion.div>
            <motion.dl variants={fadeUp} className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                { k: "500+", v: "Children supported" },
                { k: "12+", v: "Expert therapists" },
                { k: "7", v: "Years of care" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-2xl font-extrabold text-primary sm:text-3xl">{s.k}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.v}</dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            animate="show"
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-white/40 blur-2xl" aria-hidden />
            <img
              src={heroImg}
              alt="A therapist playing with a happy young child using educational toys"
              width={1536}
              height={1152}
              className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft"
            />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white p-4 shadow-card sm:flex sm:items-center sm:gap-3"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-success/15 text-success">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <div>
                <p className="font-display text-sm font-bold">Family-first care</p>
                <p className="text-xs text-muted-foreground">Personalized for every child</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
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
