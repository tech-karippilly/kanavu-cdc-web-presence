import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Eye, Target, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import aboutImg from "@/assets/about-family.jpg";
import { fadeUp, slideLeft, slideRight, scaleUp, staggerContainer, staggerContainerSlow, viewport } from "@/lib/motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Kanavu Child Development Centre" },
      { name: "description", content: "Learn about Kanavu Child Development Centre — our mission, vision and commitment to every child and family we work with in Kerala." },
      { property: "og:title", content: "About Kanavu CDC" },
      { property: "og:description", content: "Our mission, vision and the team behind Kanavu Child Development Centre." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="gradient-hero">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" /> About Us
          </motion.span>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.1 }}
            className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl"
          >
            A centre built on the belief that <span className="text-primary">every child has potential.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Kanavu Child Development Centre was founded in Kerala with one purpose — to give children the gentle, expert support they need to grow, learn, and thrive in their own beautiful way.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <motion.img
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            src={aboutImg}
            alt="A family meeting with a counsellor at Kanavu CDC"
            width={1280}
            height={896}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft"
          />
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Who we are</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              At Kanavu, our team of speech therapists, occupational therapists, special educators, and child psychologists work together under one roof. We bring together evidence-based practice and the warmth of a family-led approach — because real progress happens when children feel safe and parents feel supported.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              From early intervention for toddlers to learning support for school-age children, every program at Kanavu is personalized, play-based, and grounded in respect for the child in front of us.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-primary-soft/40 py-16 sm:py-20">
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8"
        >
          {[
            { icon: Target, title: "Our Mission", body: "To empower every child to reach their developmental milestones through compassionate, evidence-based therapy and unwavering family support." },
            { icon: Eye, title: "Our Vision", body: "A Kerala where every child — regardless of ability — has access to early intervention, joyful learning, and the chance to dream without limits." },
            { icon: Heart, title: "Our Commitment", body: "We commit to honouring each child's pace, listening to every parent's story, and partnering with families for the long journey ahead." },
          ].map(({ icon: Icon, title, body }) => (
            <motion.div key={title} variants={scaleUp} className="rounded-3xl bg-card p-7 shadow-card">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.h2 variants={fadeUp} className="font-display text-3xl font-extrabold sm:text-4xl">Walk with us on this journey</motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            If your child needs a little extra support — or you simply want to understand their development better — we're here to listen.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
            >
              Book a consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
