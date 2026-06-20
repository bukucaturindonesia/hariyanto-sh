import { FileSearch, Route, Scale, ShieldAlert } from "lucide-react";

const reasons = [
  {
    title: "Membantu memahami posisi hukum",
    icon: Scale,
  },
  {
    title: "Mengurangi risiko salah langkah",
    icon: ShieldAlert,
  },
  {
    title: "Mendapat arahan berdasarkan dokumen dan fakta",
    icon: FileSearch,
  },
  {
    title: "Pendampingan sesuai prosedur hukum",
    icon: Route,
  },
];

export function WhyChoose() {
  return (
    <section className="bg-ocean-950 py-20 text-white sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div data-reveal>
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold-300">
            Pendampingan Profesional
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Kenapa memilih pendampingan hukum profesional?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/72 sm:text-lg">
            Pendampingan hukum membantu setiap langkah dipertimbangkan secara
            hati-hati sesuai konteks perkara dan aturan yang berlaku.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((item) => (
            <article
              data-reveal
              key={item.title}
              className="rounded-lg border border-white/10 bg-white/8 p-6 backdrop-blur"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-ocean-950">
                <item.icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-semibold leading-7">
                {item.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
