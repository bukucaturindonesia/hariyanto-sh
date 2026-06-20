import { CalendarCheck, FileText, MessageCircle, MessagesSquare } from "lucide-react";

const steps = [
  {
    title: "Hubungi WhatsApp",
    text: "Mulai percakapan melalui WhatsApp untuk menyampaikan kebutuhan konsultasi.",
    icon: MessageCircle,
  },
  {
    title: "Ceritakan permasalahan secara singkat",
    text: "Sampaikan ringkasan masalah dan informasi awal yang perlu dipahami.",
    icon: MessagesSquare,
  },
  {
    title: "Jadwalkan konsultasi",
    text: "Tentukan waktu konsultasi agar pembahasan dapat dilakukan lebih terarah.",
    icon: CalendarCheck,
  },
  {
    title: "Dapatkan arahan hukum awal",
    text: "Terima arahan awal berdasarkan fakta, dokumen, dan ketentuan hukum terkait.",
    icon: FileText,
  },
];

export function ProcessTimeline() {
  return (
    <section id="alur-konsultasi" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold-500">
            Alur Konsultasi
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ocean-950 sm:text-4xl">
            Proses awal yang rapi untuk memahami kebutuhan hukum Anda.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              data-reveal
              key={step.title}
              className="relative overflow-hidden rounded-lg border border-slate-100 bg-slate-50 p-6 shadow-sm"
            >
              <span className="absolute right-5 top-4 text-5xl font-black text-slate-200/70">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-ocean-950 text-gold-300">
                <step.icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="relative mt-5 text-lg font-semibold text-ocean-950">
                {step.title}
              </h3>
              <p className="relative mt-3 text-sm leading-7 text-slate-600">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
