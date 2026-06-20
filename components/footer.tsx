import { MapPin, MessageCircle, Scale } from "lucide-react";
import {
  buildWhatsAppUrl,
  mapsUrl,
  navItems,
  officeAddress,
  whatsappMessage,
} from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ocean-950 px-5 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <a href="#beranda" className="inline-flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-gold-300/30 bg-white/8 text-gold-300">
              <Scale className="h-5 w-5" aria-hidden />
            </span>
            <span>
              <span className="block text-xl font-semibold tracking-tight">
                Haryanto, S.H.
              </span>
              <span className="block text-xs font-medium uppercase tracking-[0.2em] text-gold-300">
                Advokat / Konsultan Hukum
              </span>
            </span>
          </a>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/68">
            Informasi pada website ini bersifat umum dan tidak menggantikan
            nasihat hukum resmi. Hubungan advokat dan klien berlaku setelah
            adanya konsultasi dan kesepakatan pendampingan.
          </p>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex max-w-md items-start gap-2 text-sm leading-6 text-white/72 transition hover:text-gold-300"
          >
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" aria-hidden />
            <span>{officeAddress}</span>
          </a>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1fr_auto]">
          <nav className="grid grid-cols-2 gap-3 text-sm text-white/72 sm:grid-cols-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-gold-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={buildWhatsAppUrl(whatsappMessage)}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp Haryanto, S.H."
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-whatsapp hover:text-ocean-950"
          >
            <MessageCircle className="h-5 w-5" aria-hidden />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/52 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright {year} Haryanto, S.H. All Rights Reserved.</p>
        <p>Advokat & Konsultan Hukum</p>
      </div>
    </footer>
  );
}
