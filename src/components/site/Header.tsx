import { Link, useMatchRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE } from "@/lib/site";
import { menuSlide, staggerContainer, fadeUp } from "@/lib/motion";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/blog", label: "Resources" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const matchRoute = useMatchRoute();
  const isHome = !!matchRoute({ to: "/", fuzzy: false });
  // Transparent only on home page when not scrolled
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    // Reset on route change
    setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        transparent
          ? "border-b border-transparent bg-transparent"
          : "border-b border-border/60 bg-background/90 backdrop-blur-md shadow-sm",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-soft">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className={`font-display text-base font-extrabold transition-colors duration-300 ${transparent ? "text-white" : "text-foreground"}`}>Kanavu</span>
            <span className={`text-[11px] font-semibold uppercase tracking-wider transition-colors duration-300 ${transparent ? "text-white/80" : "text-muted-foreground"}`}>Child Development Centre</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                transparent
                  ? "text-white/90 hover:bg-white/15 hover:text-white"
                  : "text-muted-foreground hover:bg-primary-soft hover:text-primary"
              }`}
              activeProps={{
                className: transparent
                  ? "rounded-full px-4 py-2 text-sm font-semibold bg-white/20 text-white"
                  : "rounded-full px-4 py-2 text-sm font-semibold bg-primary-soft text-primary",
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/book-a-visit"
            className="ml-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
          >
            Book a Visit
          </Link>
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className={`grid h-10 w-10 place-items-center rounded-xl border transition-colors md:hidden ${
            transparent ? "border-white/40 text-white" : "border-border text-foreground"
          }`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            variants={menuSlide}
            initial="hidden"
            animate="show"
            exit="exit"
            className="border-t border-border bg-background md:hidden overflow-hidden"
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3"
            >
              {nav.map((item) => (
                <motion.div key={item.to} variants={fadeUp}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: item.to === "/" }}
                    className="block rounded-xl px-4 py-3 text-base font-semibold text-foreground hover:bg-primary-soft"
                    activeProps={{ className: "block rounded-xl px-4 py-3 text-base font-semibold bg-primary-soft text-primary" }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={fadeUp}>
                <Link
                  to="/book-a-visit"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground w-full"
                >
                  Book a Visit
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
