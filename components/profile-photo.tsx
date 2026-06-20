"use client";

import { Scale } from "lucide-react";
import { useState } from "react";
import { assetPath } from "@/lib/site";

type ProfilePhotoProps = {
  variant?: "hero" | "about";
};

export function ProfilePhoto({ variant = "hero" }: ProfilePhotoProps) {
  const [hasImageError, setHasImageError] = useState(false);
  const sizeClass =
    variant === "hero" ? "aspect-[4/5] min-h-[320px]" : "aspect-[4/5] min-h-[280px]";

  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-gold-300/45 bg-slate-100 shadow-[0_24px_70px_rgba(6,21,31,0.16)] ${sizeClass}`}
    >
      {!hasImageError ? (
        <img
          src={assetPath("/images/haryanto.jpg")}
          alt="Foto profil Haryanto, S.H."
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setHasImageError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-ocean-950 via-ocean-900 to-ocean-800 p-8 text-center text-white">
          <span className="flex h-20 w-20 items-center justify-center rounded-full border border-gold-300/40 bg-white/8 text-gold-300 shadow-glow">
            <Scale className="h-10 w-10" aria-hidden />
          </span>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-gold-300">
            Haryanto, S.H.
          </p>
          <p className="mt-2 text-sm text-white/68">Advokat & Konsultan Hukum</p>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-white/30" />
    </div>
  );
}
