import { ArrowRight, MessageCircle, Scale, ShieldCheck } from "lucide-react";
import { ProfilePhoto } from "@/components/profile-photo";
import { buildWhatsAppUrl, whatsappMessage } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="beranda"
      className="relative isolate overflow-hidden bg-ocean-radial pt-28 text-white sm:pt-32"
    >
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-50 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 sm:px-6 sm:pb-24 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <div data-reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-300/24 bg-white/8 px-4 py-2 text-sm font-medium text-gold-300 shadow-sm backdrop-blur">
            <Scale className="h-4 w-4" aria-hidden />
            Advokat & Konsultan Hukum
          </div>

          <h1 className="mt-7 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Haryanto, S.H.
          </h1>
          <p className="mt-5 text-xl font-semibold text-gold-300">
            Advokat & Konsultan Hukum
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/76 sm:text-lg">
            Pendampingan hukum yang profesional, terukur, dan berintegritas
            untuk membantu Anda memahami posisi hukum dan menentukan langkah
            terbaik.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={buildWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold-400 px-6 text-sm font-semibold text-ocean-950 shadow-glow transition hover:-translate-y-0.5 hover:bg-gold-300"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Konsultasi via WhatsApp
            </a>
            <a
              href="#layanan"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/16 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-ocean-950"
            >
              Lihat Layanan
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>

        <div data-reveal>
          <article className="relative mx-auto max-w-md rounded-lg border border-gold-300/26 bg-white p-4 text-ocean-950 shadow-[0_30px_110px_rgba(0,0,0,0.34)]">
            <div className="absolute -left-4 top-12 hidden h-28 w-1 rounded-full bg-gold-400 lg:block" />
            <div className="bg-slate-50 p-4">
              <div className="mb-4 flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-ocean-950 px-3 py-1.5 text-xs font-semibold text-gold-300">
                  <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
                  Advokat & Konsultan Hukum
                </span>
                <Scale className="h-5 w-5 text-gold-500" aria-hidden />
              </div>

              <ProfilePhoto />

              <div className="mt-5 border-t border-slate-200 pt-5">
                <h2 className="text-2xl font-semibold tracking-tight text-ocean-950">
                  Haryanto, S.H.
                </h2>
                <p className="mt-1 text-sm font-medium text-slate-600">
                  Advokat & Konsultan Hukum
                </p>
                <a
                  href={buildWhatsAppUrl(whatsappMessage)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-5 text-sm font-semibold text-ocean-950 shadow-[0_18px_40px_rgba(37,211,102,0.22)] transition hover:-translate-y-0.5 hover:bg-[#2fe475]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  Konsultasi via WhatsApp
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
