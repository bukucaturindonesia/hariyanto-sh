export const whatsappNumber = "6282188921227";
export const whatsappMessage =
  "Halo Bapak Haryanto, saya ingin konsultasi hukum.";

export const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Alur Konsultasi", href: "#alur-konsultasi" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
];

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function assetPath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const normalizedBasePath = basePath
    ? `/${basePath.replace(/^\/+|\/+$/g, "")}`
    : "";
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${normalizedBasePath}${normalizedPath}`;
}
