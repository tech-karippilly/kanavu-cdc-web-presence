import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, scaleUp, staggerContainer, staggerContainerSlow, viewport } from "@/lib/motion";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — Kanavu Child Development Centre" },
      { name: "description", content: "Meet the compassionate therapists, special educators, and child psychologists behind Kanavu CDC." },
      { property: "og:title", content: "Our Team — Kanavu CDC" },
      { property: "og:description", content: "Experienced child development specialists in Kerala." },
    ],
  }),
  component: TeamPage,
});

type Member = { name: string; role: string; bio: string; years: number; creds: string };

const TEAM: Member[] = [
  { name: "Dr. Anjali Menon", role: "Founder & Clinical Director", bio: "Developmental paediatrician with 15+ years guiding families across South India. Passionate about early intervention.", years: 15, creds: "MD (Paed), Fellowship Developmental Paediatrics" },
  { name: "Riya Thomas", role: "Lead Speech-Language Pathologist", bio: "Specialises in early language development, articulation and AAC. Trained at AIISH, Mysore.", years: 9, creds: "MASLP, RCI Registered" },
  { name: "Karthik Nair", role: "Senior Occupational Therapist", bio: "Sensory integration certified. Loves designing playful obstacle courses that build motor skills.", years: 11, creds: "MOT (Paediatrics), SIPT Certified" },
  { name: "Sneha Pillai", role: "Child Psychologist & ABA Lead", bio: "Supports children with autism and ADHD through BCBA-supervised behaviour programmes.", years: 8, creds: "M.Phil Clinical Psychology, RCI" },
  { name: "Meera Joseph", role: "Special Educator", bio: "Builds individualised learning plans for children with dyslexia, dyscalculia and global delays.", years: 12, creds: "M.Ed Special Education" },
  { name: "Arun Krishnan", role: "Family Counsellor", bio: "Coaches parents and siblings, helping families turn therapy goals into everyday wins.", years: 7, creds: "MSW, Certified Family Counsellor" },
];

function TeamPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-3xl text-center"
      >
        <motion.p variants={fadeUp} className="text-sm font-bold uppercase tracking-widest text-primary">Our Team</motion.p>
        <motion.h1 variants={fadeUp} className="mt-3 font-display text-4xl font-extrabold text-foreground sm:text-5xl">Specialists who truly care</motion.h1>
        <motion.p variants={fadeUp} className="mt-4 text-lg text-muted-foreground">A multidisciplinary team of therapists, educators and counsellors working together for every child.</motion.p>
      </motion.div>

      <motion.div
        variants={staggerContainerSlow}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {TEAM.map((m) => (
          <motion.article
            key={m.name}
            variants={scaleUp}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="rounded-3xl border border-border bg-card p-6 shadow-soft"
          >
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-primary-soft text-primary text-2xl font-bold">
              {m.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-foreground">{m.name}</h3>
            <p className="text-sm font-semibold text-primary">{m.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
            <div className="mt-5 space-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
              <p className="flex items-center gap-2"><Award className="h-3.5 w-3.5 text-primary" />{m.years}+ years experience</p>
              <p className="flex items-center gap-2"><GraduationCap className="h-3.5 w-3.5 text-primary" />{m.creds}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}
