# Haryanto, S.H. | Advokat & Konsultan Hukum

Website profil profesional untuk Haryanto, S.H. Dibuat dengan Next.js,
TypeScript, Tailwind CSS, App Router, dan siap dideploy ke Vercel.

## Fitur

- Hero profile dengan card foto formal dan CTA WhatsApp
- Fallback ikon timbangan hukum jika foto belum tersedia
- Section Tentang, Layanan Hukum, Alur Konsultasi, FAQ, dan Kontak
- Floating WhatsApp button
- SEO title, meta description, dan Open Graph metadata
- Static export compatible melalui konfigurasi Next.js

## Foto Profil

Simpan foto asli Haryanto, S.H. di:

```text
public/images/haryanto.jpg
```

Komponen website sudah membaca path tersebut. Jika file belum ada, website akan
menampilkan placeholder sederhana berupa ikon timbangan hukum.

## Menjalankan Lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

Jika memakai pnpm:

```bash
pnpm install
pnpm dev
```

## Build

```bash
npm run build
```

Untuk Vercel, deploy repository ini dan gunakan pengaturan Next.js standar.

## WhatsApp

Nomor dan pesan WhatsApp dapat diubah di `lib/site.ts`:

```ts
export const whatsappNumber = "6282188921227";
export const whatsappMessage =
  "Halo Bapak Haryanto, saya ingin konsultasi hukum.";
```
