import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/lib/services";
import speechImg from "@/assets/service-speech.jpg";
import otImg from "@/assets/service-ot.jpg";
import eduImg from "@/assets/service-edu.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Kanavu Child Development Centre" },
      { name: "description", content: "Speech therapy, occupational therapy, behavioral therapy, special education, learning support and parent guidance — all under one caring roof." },
      { property: "og:title", content: "Kanavu CDC — Services" },
      { property: "og:description", content: "Comprehensive child development and therapy services in Kerala." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const tintMap: Record<string, string> = {
  primary: "bg-primary-soft text-primary",
  secondary: "bg-secondary text-secondary-foreground",
  accent: "bg-accent text-accent-foreground",
  success: "bg-success/15 text-success",
  warm: "bg-warm/30 text-foreground",
};

const featureImages: Record<string, string> = {
  "speech-therapy": speechImg,
  "occupational-therapy": otImg,
  "special-education": eduImg,
};

function ServicesPage() {
  return (
    <>
      <section className="gradient-hero">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Our Services
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">
            Comprehensive care for every <span className="text-primary">stage of your child's growth.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            From the first assessment to ongoing support, our multidisciplinary team offers therapy and education programs designed around each child's unique needs.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.slug}
                id={s.slug}
                className="group flex flex-col rounded-3xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/30"
              >
                <div className={`grid h-14 w-14 place-items-center rounded-2xl ${tintMap[s.tint]}`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h2 className="mt-5 font-display text-xl font-bold">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.long}</p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-1 self-start text-sm font-semibold text-primary"
                >
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="gradient-soft py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">A closer look at how we work</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Play, partnership and progress are at the heart of every session.</p>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {[
              { img: speechImg, slug: "speech-therapy", title: "Speech & Language", body: "From first words to confident conversation — built one playful session at a time." },
              { img: otImg, slug: "occupational-therapy", title: "Sensory & Motor Skills", body: "Helping children master the daily skills that build independence and self-esteem." },
              { img: eduImg, slug: "special-education", title: "Learning & Education", body: "Individualized programs that meet each learner exactly where they are." },
            ].map((f) => (
              <div key={f.slug} className="overflow-hidden rounded-3xl bg-card shadow-card">
                <img src={f.img} alt={f.title} width={1024} height={768} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
                </div>
              </div>
            ))}
            {/* unused but kept warnings happy */}
            <span className="hidden">{featureImages["special-education"]}</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="rounded-3xl bg-primary p-8 text-primary-foreground shadow-soft sm:p-12">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Not sure where to start?</h2>
          <p className="mt-3 max-w-2xl text-primary-foreground/85">
            Our team will guide you through an initial consultation, a thorough assessment, and a tailored plan — at a pace that feels right for your family.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {["Free initial call", "Detailed assessment", "Personalized plan"].map((step) => (
              <li key={step} className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold">
                <CheckCircle2 className="h-4 w-4" /> {step}
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-soft transition-transform hover:scale-[1.02]"
          >
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
