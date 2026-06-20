const faqs = [
  {
    question: "Apakah konsultasi bisa melalui WhatsApp?",
    answer:
      "Bisa. Klien dapat menghubungi WhatsApp terlebih dahulu untuk menyampaikan ringkasan permasalahan dan menentukan jadwal konsultasi.",
  },
  {
    question: "Apakah hasil perkara bisa dijamin?",
    answer:
      "Tidak ada hasil perkara yang dapat dijamin. Pendampingan hukum dilakukan berdasarkan analisis fakta, dokumen, dan ketentuan hukum yang berlaku.",
  },
  {
    question: "Dokumen apa yang perlu disiapkan?",
    answer:
      "Siapkan dokumen yang berkaitan dengan permasalahan, seperti identitas, surat, perjanjian, bukti komunikasi, atau dokumen pendukung lainnya.",
  },
  {
    question: "Bagaimana cara membuat janji konsultasi?",
    answer:
      "Klik tombol WhatsApp dan sampaikan kebutuhan konsultasi secara singkat.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <div data-reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold-500">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ocean-950 sm:text-4xl">
            Pertanyaan yang sering diajukan sebelum konsultasi.
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((item) => (
            <details
              data-reveal
              key={item.question}
              className="group rounded-lg border border-white bg-white p-6 shadow-sm open:shadow-premium"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-ocean-950">
                {item.question}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-50 text-ocean-700 shadow-sm transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
