"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, whatsappMessage } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl(whatsappMessage)}
      target="_blank"
      rel="noreferrer"
      aria-label="Konsultasi via WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-ocean-950 shadow-[0_18px_45px_rgba(37,211,102,0.35)] transition hover:-translate-y-1 hover:bg-[#2fe475] focus:outline-none focus:ring-4 focus:ring-whatsapp/30"
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </a>
  );
}
