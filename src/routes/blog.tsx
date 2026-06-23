import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, ArrowRight } from "lucide-react";
import serviceSpeech from "@/assets/service-speech.jpg";
import serviceOt from "@/assets/service-ot.jpg";
import serviceEdu from "@/assets/service-edu.jpg";
import aboutFamily from "@/assets/about-family.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Resources & Blog — Kanavu Child Development Centre" },
      { name: "description", content: "Expert articles and practical tips for parents on speech, sensory needs, learning and behaviour." },
      { property: "og:title", content: "Resources & Blog — Kanavu CDC" },
      { property: "og:description", content: "Guidance you can use today, written by child development specialists." },
    ],
  }),
  component: BlogPage,
});

const POSTS = [
  { title: "Speech milestones from 0–3 years: a gentle guide", excerpt: "How language unfolds in the first three years — and when to seek a professional opinion.", date: "12 Mar 2025", category: "Speech", img: serviceSpeech },
  { title: "5 sensory activities you can do at home", excerpt: "Simple, low-cost ideas to help children regulate their bodies and stay calm.", date: "28 Feb 2025", category: "Occupational Therapy", img: serviceOt },
  { title: "Helping your child love reading again", excerpt: "Practical strategies for children with dyslexia, written by our special education team.", date: "10 Feb 2025", category: "Learning", img: serviceEdu },
  { title: "When a meltdown isn't 'bad behaviour'", excerpt: "Understanding the science behind big emotions — and how to respond with compassion.", date: "22 Jan 2025", category: "Behaviour", img: aboutFamily },
  { title: "Choosing the right school for a neurodivergent child", excerpt: "Questions to ask, red flags to notice, and how to advocate for your child.", date: "06 Jan 2025", category: "Parenting", img: serviceEdu },
  { title: "Siblings of children with special needs", excerpt: "How to nurture every child in the family — and why sibling support matters.", date: "18 Dec 2024", category: "Family", img: aboutFamily },
];

function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">Resources</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-foreground sm:text-5xl">Articles for parents</h1>
        <p className="mt-4 text-lg text-muted-foreground">Evidence-informed insights and practical ideas — straight from our team.</p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {POSTS.map((p, i) => (
          <article key={i} className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-transform hover:-translate-y-1">
            <div className="aspect-[16/10] overflow-hidden">
              <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-primary-soft px-2.5 py-1 font-semibold text-primary">{p.category}</span>
                <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{p.date}</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
              <Link to="/blog" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
