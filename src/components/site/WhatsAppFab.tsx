import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a
      href={SITE.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-success px-4 py-3 text-success-foreground shadow-soft transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
    </a>
  );
}
