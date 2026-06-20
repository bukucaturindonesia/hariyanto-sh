import {
  ClipboardCheck,
  FileText,
  Handshake,
  Home,
  MessageSquareText,
  Scale,
  Shield,
  Users,
} from "lucide-react";

const services = [
  { title: "Konsultasi Hukum", icon: MessageSquareText },
  { title: "Pendampingan Perkara Perdata", icon: Scale },
  { title: "Pendampingan Perkara Pidana", icon: Shield },
  { title: "Hukum Keluarga", icon: Users },
  { title: "Sengketa Tanah & Properti", icon: Home },
  { title: "Penyusunan dan Review Perjanjian", icon: FileText },
  { title: "Mediasi dan Negosiasi", icon: Handshake },
  { title: "Pendampingan Klien", icon: ClipboardCheck },
];

export function Services() {
  return (
    <section id="layanan" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold-500">
            Layanan Hukum
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ocean-950 sm:text-4xl">
            Pendampingan hukum untuk kebutuhan pribadi, keluarga, dan perkara.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Layanan diberikan berdasarkan analisis fakta, dokumen, dan ketentuan
            hukum yang berlaku.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => (
            <article
              data-reveal
              key={item.title}
              className="rounded-lg border border-white bg-white p-6 shadow-premium transition hover:-translate-y-1 hover:shadow-glow"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-ocean-950 text-gold-300">
                <item.icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-semibold leading-7 text-ocean-950">
                {item.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
