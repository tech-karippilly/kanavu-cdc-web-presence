import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";

// Brand SVG icons
function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.427.403a4.9 4.9 0 0 1 1.772 1.153 4.9 4.9 0 0 1 1.153 1.772c.163.456.35 1.257.403 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.427a4.9 4.9 0 0 1-1.153 1.772 4.9 4.9 0 0 1-1.772 1.153c-.456.163-1.257.35-2.427.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.427-.403a4.9 4.9 0 0 1-1.772-1.153A4.9 4.9 0 0 1 1.97 19.44c-.163-.456-.35-1.257-.403-2.427C1.51 15.747 1.5 15.367 1.5 12.163s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.427a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 4.898 1.96c.456-.163 1.257-.35 2.427-.403C8.59 1.5 8.97 1.489 12 1.489v.674zm0-2.163C8.74 0 8.333.014 7.053.072 5.775.13 4.902.333 4.14.63a6.9 6.9 0 0 0-2.492 1.621A6.9 6.9 0 0 0 .027 4.74C-.27 5.502-.473 6.376-.53 7.653-.59 8.933-.6 9.34-.6 12.6s.01 3.666.072 4.947c.057 1.277.26 2.15.558 2.912a6.9 6.9 0 0 0 1.62 2.492 6.9 6.9 0 0 0 2.493 1.62c.762.3 1.635.502 2.912.56C8.333 25.19 8.74 25.2 12 25.2s3.666-.01 4.947-.072c1.277-.057 2.15-.26 2.912-.558a6.9 6.9 0 0 0 2.492-1.62 6.9 6.9 0 0 0 1.62-2.492c.3-.762.502-1.635.56-2.912.06-1.28.07-1.688.07-4.947s-.01-3.667-.072-4.947c-.057-1.277-.26-2.15-.558-2.912a6.9 6.9 0 0 0-1.62-2.492A6.9 6.9 0 0 0 19.86.63C19.098.333 18.225.13 16.947.072 15.667.014 15.26 0 12 0z"/>
      <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  );
}
function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
    </svg>
  );
}
function IconYouTube() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}
function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-primary-soft/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <img
              src="/kanavu-01.png"
              alt="Kanavu Child Development Centre"
              className="h-12 w-auto rounded-xl"
            />
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            A nurturing space in the heart of Kerala where children grow with confidence — through evidence-based therapy, play, and family partnership.
          </p>
          {/* Social icons */}
          <div className="mt-6 flex items-center gap-3">
            {[
              { href: SITE.social.instagram, label: "Instagram", icon: <IconInstagram />, hover: "hover:text-pink-500" },
              { href: SITE.social.facebook,  label: "Facebook",  icon: <IconFacebook />,  hover: "hover:text-blue-600" },
              { href: SITE.social.youtube,   label: "YouTube",   icon: <IconYouTube />,   hover: "hover:text-red-600" },
              { href: SITE.social.whatsapp,  label: "WhatsApp",  icon: <IconWhatsApp />,  hover: "hover:text-green-500" },
            ].map(({ href, label, icon, hover }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className={`grid h-9 w-9 place-items-center rounded-xl border border-border bg-background text-muted-foreground transition-colors ${hover} hover:border-current`}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/team" className="hover:text-primary">Our Team</Link></li>
            <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
            <li><Link to="/blog" className="hover:text-primary">Resources</Link></li>
            <li><Link to="/faq" className="hover:text-primary">FAQs</Link></li>
            <li><Link to="/book-a-visit" className="hover:text-primary">Book a Visit</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">Reach Us</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><a href={SITE.phoneHref} className="hover:text-primary">{SITE.phone}</a></li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><a href={SITE.emailHref} className="hover:text-primary">{SITE.email}</a></li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>{SITE.address}</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Kanavu Child Development Centre. All rights reserved.</p>
          <p>Made with care for every child.</p>
        </div>
      </div>
    </footer>
  );
}
