import { MapPin, MessageCircle } from "lucide-react";
import {
  buildWhatsAppUrl,
  mapsUrl,
  officeAddress,
  whatsappMessage,
} from "@/lib/site";

export function FinalCTA() {
  return (
    <section
      id="kontak"
      className="bg-ocean-radial px-5 py-20 text-white sm:px-6 sm:py-24 lg:px-8"
    >
      <div
        data-reveal
        className="mx-auto max-w-6xl px-6 py-8 text-center sm:px-10"
      >
        <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold-300">
          Kontak
        </span>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
          Konsultasikan Permasalahan Hukum Anda
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
          Sampaikan ringkasan permasalahan Anda melalui WhatsApp untuk
          mendapatkan arahan awal dan jadwal konsultasi.
        </p>
        <a
          href={buildWhatsAppUrl(whatsappMessage)}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-whatsapp px-6 text-sm font-semibold text-ocean-950 shadow-[0_18px_45px_rgba(37,211,102,0.28)] transition hover:-translate-y-0.5 hover:bg-[#2fe475]"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          Hubungi via WhatsApp
        </a>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 text-sm font-medium text-white/76 sm:flex-row sm:gap-6">
          <p>+62 821-8892-1227</p>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 transition hover:text-gold-300"
          >
            <MapPin className="h-4 w-4 text-gold-300" aria-hidden />
            {officeAddress}
          </a>
        </div>
      </div>
    </section>
  );
}
