import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import heroTherapy from "@/assets/hero-therapy.jpg";
import serviceSpeech from "@/assets/service-speech.jpg";
import serviceOt from "@/assets/service-ot.jpg";
import serviceEdu from "@/assets/service-edu.jpg";
import aboutFamily from "@/assets/about-family.jpg";
import { fadeUp, scaleUp, staggerContainer, staggerContainerSlow, viewport } from "@/lib/motion";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Kanavu Child Development Centre" },
      { name: "description", content: "A glimpse into our therapy rooms, sensory gym and the everyday magic at Kanavu CDC." },
      { property: "og:title", content: "Gallery — Kanavu CDC" },
      { property: "og:description", content: "Inside our child-friendly therapy centre in Kerala." },
    ],
  }),
  component: GalleryPage,
});

const ITEMS = [
  { src: heroTherapy, caption: "One-on-one therapy in our bright sensory room" },
  { src: serviceSpeech, caption: "Play-based speech sessions" },
  { src: serviceOt, caption: "Fine motor practice with our OT team" },
  { src: serviceEdu, caption: "Multi-sensory learning, made fun" },
  { src: aboutFamily, caption: "Family-centred care every step of the way" },
  { src: serviceSpeech, caption: "Celebrating small wins, big smiles" },
];

function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-3xl text-center"
      >
        <motion.p variants={fadeUp} className="text-sm font-bold uppercase tracking-widest text-primary">Gallery</motion.p>
        <motion.h1 variants={fadeUp} className="mt-3 font-display text-4xl font-extrabold text-foreground sm:text-5xl">Moments from our centre</motion.h1>
        <motion.p variants={fadeUp} className="mt-4 text-lg text-muted-foreground">Warm, safe and purposefully designed spaces where children love to learn.</motion.p>
      </motion.div>

      <motion.div
        variants={staggerContainerSlow}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {ITEMS.map((it, i) => (
          <motion.figure
            key={i}
            variants={scaleUp}
            className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <motion.img
                src={it.src}
                alt={it.caption}
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.07 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              />
            </div>
            <figcaption className="px-5 py-4 text-sm text-muted-foreground">{it.caption}</figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </div>
  );
}
