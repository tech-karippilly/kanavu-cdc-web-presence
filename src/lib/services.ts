import {
  MessageSquareText,
  Hand,
  HeartHandshake,
  GraduationCap,
  BookOpenCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
  icon: LucideIcon;
  tint: "primary" | "secondary" | "accent" | "success" | "warm";
};

export const SERVICES: Service[] = [
  {
    slug: "speech-therapy",
    title: "Speech Therapy",
    short: "Building clearer speech, stronger language, and confident communication.",
    long: "Our speech-language pathologists work one-on-one with children to support articulation, language development, fluency, and social communication — using play-based activities tailored to each child.",
    icon: MessageSquareText,
    tint: "primary",
  },
  {
    slug: "occupational-therapy",
    title: "Occupational Therapy",
    short: "Helping little hands and bodies master everyday skills with confidence.",
    long: "From fine motor control and handwriting to sensory processing and self-care routines, our OT team helps children participate fully in school, home and play.",
    icon: Hand,
    tint: "secondary",
  },
  {
    slug: "behavioral-therapy",
    title: "Behavioral Therapy",
    short: "Compassionate ABA-informed strategies that nurture positive change.",
    long: "We use evidence-based behavioral approaches to support emotional regulation, attention, social skills, and adaptive behavior — always in partnership with the family.",
    icon: HeartHandshake,
    tint: "accent",
  },
  {
    slug: "special-education",
    title: "Special Education",
    short: "Individualized learning plans for children with diverse needs.",
    long: "Our special educators design structured, multi-sensory programs that help children build foundational academic skills at their own pace, with measurable progress every step of the way.",
    icon: GraduationCap,
    tint: "success",
  },
  {
    slug: "learning-support",
    title: "Learning Support",
    short: "Targeted help for reading, writing, and math challenges.",
    long: "For children with learning differences such as dyslexia or dyscalculia, we provide remediation programs that turn frustration into confidence and curiosity.",
    icon: BookOpenCheck,
    tint: "warm",
  },
  {
    slug: "parent-guidance",
    title: "Parent Guidance & Counseling",
    short: "Because families thrive when parents feel supported too.",
    long: "We offer parent coaching, sibling support, and family counseling so that the growth your child makes with us continues to flourish at home.",
    icon: Users,
    tint: "primary",
  },
];
