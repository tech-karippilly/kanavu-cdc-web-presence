import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CalendarCheck, Clock, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";

export const Route = createFileRoute("/book-a-visit")({
  head: () => ({
    meta: [
      { title: "Book a Visit — Kanavu Child Development Centre" },
      { name: "description", content: "Schedule a developmental assessment or therapy consultation at Kanavu CDC in Kerala. Easy online booking." },
      { property: "og:title", content: "Book a Visit — Kanavu CDC" },
      { property: "og:description", content: "Reserve your child's first consultation in just a minute." },
    ],
  }),
  component: BookPage,
});

const TIME_SLOTS = ["9:30 AM", "10:30 AM", "11:30 AM", "12:30 PM", "2:30 PM", "3:30 PM", "4:30 PM", "5:30 PM"];

function BookPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    parent: "",
    phone: "",
    email: "",
    childName: "",
    childAge: "",
    service: SERVICES[0].slug,
    date: "",
    time: TIME_SLOTS[0],
    concern: "",
  });

  const today = new Date().toISOString().split("T")[0];

  function update<K extends keyof typeof form>(k: K, v: (typeof form)[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.parent || !form.phone || !form.childName || !form.date) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-success/15 text-success">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <h1 className="mt-6 font-display text-3xl font-extrabold text-foreground sm:text-4xl">Your visit is requested</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Thank you, {form.parent.split(" ")[0]}. Our team will call you on {form.phone} within the next business hour to confirm your slot on {form.date} at {form.time}.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={SITE.whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-success px-5 py-2.5 text-sm font-semibold text-success-foreground">
            Message us on WhatsApp
          </a>
          <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground">
            <Phone className="h-4 w-4" /> Call now
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">Book a Visit</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-foreground sm:text-5xl">Let's begin with a gentle first visit</h1>
        <p className="mt-4 text-lg text-muted-foreground">Tell us a little about your child and pick a time that suits you. We'll handle the rest.</p>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_360px]">
        <form onSubmit={submit} className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
          <h2 className="font-display text-xl font-bold text-foreground">Parent details</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Field label="Your full name" required>
              <input required value={form.parent} onChange={(e) => update("parent", e.target.value)} className={inputCls} placeholder="e.g. Priya Nair" />
            </Field>
            <Field label="Phone number" required>
              <input required type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputCls} placeholder="+91" />
            </Field>
            <Field label="Email">
              <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputCls} placeholder="you@example.com" />
            </Field>
          </div>

          <h2 className="mt-8 font-display text-xl font-bold text-foreground">About your child</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Field label="Child's name" required>
              <input required value={form.childName} onChange={(e) => update("childName", e.target.value)} className={inputCls} />
            </Field>
            <Field label="Child's age">
              <input value={form.childAge} onChange={(e) => update("childAge", e.target.value)} className={inputCls} placeholder="e.g. 4 years" />
            </Field>
            <Field label="Service of interest">
              <select value={form.service} onChange={(e) => update("service", e.target.value)} className={inputCls}>
                {SERVICES.map((s) => (
                  <option key={s.slug} value={s.slug}>{s.title}</option>
                ))}
                <option value="not-sure">Not sure — please advise</option>
              </select>
            </Field>
          </div>

          <h2 className="mt-8 font-display text-xl font-bold text-foreground">Preferred time</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Field label="Date" required>
              <input required type="date" min={today} value={form.date} onChange={(e) => update("date", e.target.value)} className={inputCls} />
            </Field>
            <Field label="Time slot">
              <select value={form.time} onChange={(e) => update("time", e.target.value)} className={inputCls}>
                {TIME_SLOTS.map((t) => <option key={t}>{t}</option>)}
              </select>
            </Field>
          </div>

          <Field label="What would you like us to know?" className="mt-4">
            <textarea rows={4} value={form.concern} onChange={(e) => update("concern", e.target.value)} className={inputCls} placeholder="Share any concerns or questions — there are no wrong answers." />
          </Field>

          <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.01] sm:w-auto">
            <CalendarCheck className="h-4 w-4" /> Request my visit
          </button>
          <p className="mt-3 text-xs text-muted-foreground">By submitting, you agree to be contacted by our team. We never share your details.</p>
        </form>

        <aside className="space-y-6">
          <div className="rounded-3xl bg-primary-soft p-6">
            <h3 className="font-display text-lg font-bold text-foreground">What to expect</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {["A relaxed 60-minute first consultation", "Time to share your child's story", "Play-based observation, not a test", "A clear, jargon-free next step"].map((t) => (
                <li key={t} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <h3 className="font-display text-lg font-bold text-foreground">Visit us</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" />{SITE.address}</li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-primary" /><a href={SITE.phoneHref} className="hover:text-primary">{SITE.phone}</a></li>
              {SITE.hours.map((h) => (
                <li key={h.day} className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 text-primary" /><span><strong className="text-foreground">{h.day}:</strong> {h.time}</span></li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

const inputCls = "w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

function Field({ label, required, children, className }: { label: string; required?: boolean; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="mb-1.5 block text-sm font-semibold text-foreground">{label}{required && <span className="text-destructive"> *</span>}</span>
      {children}
    </label>
  );
}
