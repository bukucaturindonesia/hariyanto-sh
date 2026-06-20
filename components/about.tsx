import { BadgeCheck, BarChart3, ShieldCheck } from "lucide-react";
import { ProfilePhoto } from "@/components/profile-photo";

const values = [
  {
    icon: BadgeCheck,
    title: "Profesional",
    text: "Komunikasi dan pendampingan dilakukan dengan standar kerja yang rapi.",
  },
  {
    icon: BarChart3,
    title: "Terukur",
    text: "Arahan hukum disusun berdasarkan fakta, dokumen, dan posisi hukum.",
  },
  {
    icon: ShieldCheck,
    title: "Berintegritas",
    text: "Kerahasiaan dan kepentingan klien dijaga dalam setiap proses.",
  },
];

export function About() {
  return (
    <section id="tentang" className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div data-reveal className="mx-auto w-full max-w-sm">
          <div className="rounded-lg border border-gold-300/24 bg-white p-4 shadow-premium">
            <ProfilePhoto variant="about" />
            <div className="mt-5 border-t border-slate-100 pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-500">
                Profil Profesional
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-ocean-950">
                Haryanto, S.H.
              </h2>
              <p className="mt-1 text-sm font-medium text-slate-600">
                Advokat & Konsultan Hukum
              </p>
            </div>
          </div>
        </div>

        <div data-reveal>
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold-500">
            Tentang
          </span>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-ocean-950 sm:text-4xl">
            Tentang Haryanto, S.H.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Haryanto, S.H. memberikan layanan konsultasi dan pendampingan hukum
            dengan mengutamakan profesionalitas, kerahasiaan, serta analisis
            hukum yang objektif. Setiap permasalahan hukum ditangani secara
            hati-hati sesuai prosedur dan ketentuan hukum yang berlaku.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {values.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-slate-100 bg-slate-50 p-5 shadow-sm"
              >
                <item.icon className="h-6 w-6 text-gold-500" aria-hidden />
                <h3 className="mt-4 text-base font-semibold text-ocean-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
