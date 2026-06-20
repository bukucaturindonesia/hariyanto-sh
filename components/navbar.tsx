"use client";

import { Menu, MessageCircle, Scale, X } from "lucide-react";
import { useState } from "react";
import { buildWhatsAppUrl, navItems, whatsappMessage } from "@/lib/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky inset-x-0 top-0 z-[100] border-b border-slate-200/80 bg-white/95 text-ocean-950 shadow-[0_12px_40px_rgba(6,21,31,0.08)] backdrop-blur-xl">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8"
        aria-label="Navigasi utama"
      >
        <a href="#beranda" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-gold-300/40 bg-ocean-950 text-gold-300">
            <Scale className="h-5 w-5" aria-hidden />
          </span>
          <span>
            <span className="block text-xl font-semibold tracking-tight">
              Haryanto, S.H.
            </span>
            <span className="block text-xs font-medium uppercase tracking-[0.2em] text-gold-500">
              Advokat
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-ocean-950"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href={buildWhatsAppUrl(whatsappMessage)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gold-400 px-5 text-sm font-semibold text-ocean-950 shadow-glow transition hover:-translate-y-0.5 hover:bg-gold-300"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Konsultasi WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-ocean-950 lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white px-5 py-5 shadow-[0_18px_40px_rgba(6,21,31,0.08)] lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-ocean-950"
              >
                {item.label}
              </a>
            ))}
            <a
              href={buildWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold-400 px-5 text-sm font-semibold text-ocean-950 shadow-glow"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Konsultasi WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
