import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Sparkles, CheckCircle2 } from "lucide-react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Kanavu Child Development Centre" },
      { name: "description", content: "Reach out to Kanavu CDC in Kerala by phone, WhatsApp, email or by visiting our centre. We're here to help your family." },
      { property: "og:title", content: "Contact Kanavu CDC" },
      { property: "og:description", content: "Get in touch with our therapy team in Kerala." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

type FieldErrors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

function ContactPage() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();
    const next: FieldErrors = {};
    if (name.length < 2) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Please enter a valid email.";
    if (phone.length < 7) next.phone = "Please enter a valid phone number.";
    if (message.length < 10) next.message = "Tell us a little more (10+ characters).";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
      form.reset();
    }
  }

  return (
    <>
      <section className="gradient-hero">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Get in Touch
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">
            We're here to <span className="text-primary">listen and support.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Send us a message, give us a call, or stop by the centre. Our team usually replies within one working day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Info */}
          <div className="space-y-4 lg:col-span-2">
            {[
              { icon: Phone, title: "Phone", value: SITE.phone, href: SITE.phoneHref },
              { icon: Mail, title: "Email", value: SITE.email, href: SITE.emailHref },
              { icon: MessageCircle, title: "WhatsApp", value: "Chat with us instantly", href: SITE.whatsappHref, external: true, tint: "success" },
              { icon: MapPin, title: "Visit us", value: SITE.address },
            ].map(({ icon: Icon, title, value, href, external, tint }) => (
              <a
                key={title}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-colors hover:border-primary/30"
              >
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${tint === "success" ? "bg-success/15 text-success" : "bg-primary-soft text-primary"}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-display text-sm font-bold">{title}</span>
                  <span className="mt-0.5 block text-sm text-muted-foreground">{value}</span>
                </span>
              </a>
            ))}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                  <Clock className="h-5 w-5" />
                </span>
                <h3 className="font-display text-sm font-bold">Business hours</h3>
              </div>
              <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                {SITE.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4">
                    <span>{h.day}</span>
                    <span className="font-medium text-foreground">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8 lg:col-span-3">
            <h2 className="font-display text-2xl font-extrabold">Send us a message</h2>
            <p className="mt-1 text-sm text-muted-foreground">Tell us a little about your child and how we can help.</p>

            {submitted && (
              <div className="mt-5 flex items-start gap-3 rounded-2xl bg-success/10 p-4 text-sm text-success">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                <span>Thank you — your message has been received. Our team will get back to you shortly.</span>
              </div>
            )}

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Your name" name="name" error={errors.name} placeholder="Parent / caregiver name" />
              <Field label="Email" name="email" type="email" error={errors.email} placeholder="you@example.com" />
              <Field label="Phone" name="phone" type="tel" error={errors.phone} placeholder="+91 ..." />
              <Field label="Child's age (optional)" name="age" placeholder="e.g. 4 years" />
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-sm font-semibold">How can we help?</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Briefly share your concerns or questions..."
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
              >
                <Send className="h-4 w-4" /> Send message
              </button>
              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-success px-6 py-3 text-sm font-semibold text-success-foreground shadow-soft transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="h-4 w-4" /> Or message on WhatsApp
              </a>
            </div>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-border shadow-card">
          <iframe
            title="Kanavu CDC location"
            src={SITE.mapEmbed}
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

function Field({
  label, name, type = "text", error, placeholder,
}: { label: string; name: string; type?: string; error?: string; placeholder?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
