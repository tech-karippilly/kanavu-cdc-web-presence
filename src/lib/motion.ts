import type { Variants } from "framer-motion";

/** Fade up — general purpose entry animation */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

/** Fade in — subtle opacity-only */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

/** Slide in from left */
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

/** Slide in from right */
export const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

/** Scale up pop */
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

/** Stagger container — wraps staggered children */
export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

/** Stagger container with a small delay */
export const staggerContainerSlow: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

/** Mobile menu slide-down */
export const menuSlide: Variants = {
  hidden: { opacity: 0, height: 0, overflow: "hidden" },
  show: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.2, ease: "easeIn" } },
};

/** Common viewport config for scroll-triggered animations */
export const viewport = { once: true, margin: "-80px" } as const;

/** Hero content panel — slides up from below on load */
export const panelSlide: Variants = {
  hidden: { opacity: 0, y: 48 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

/** Floating / breathing loop for decorative background elements */
export const floatY: Variants = {
  show: {
    y: [0, -12, 0],
    transition: { duration: 6, ease: "easeInOut", repeat: Infinity, repeatType: "loop" },
  },
};

/** Stagger container with faster stagger for hero items */
export const heroStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
