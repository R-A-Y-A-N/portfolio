"use client";

import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import Link from "next/link";

const languages = [
  { code: "fr", name: "Français" },
  { code: "en", name: "English" },
  
  { code: "ar", name: "العربية" },
  { code: "kab", name: "Taqbaylit" },
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();
  const { theme } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // ✅ Nettoyer l'URL sans la locale
  const pathWithoutLocale = pathname.replace(/^\/(fr|en|es|ar|kab)(\/|$)/, "/");

  // ✅ Fermer le menu si clic à l’extérieur
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) {
  // Empêche le rendu SSR de dépendre de `theme`
  return null;
}

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Bouton principal */}
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-2 px-4 py-2 rounded-xl border shadow-md transition duration-300
          ${
            theme === "dark"
              ? "bg-[#0D0D0D] text-[#F5F5F5] border-[#D4AF37] hover:shadow-[0_0_10px_#D4AF37]"
              : "bg-white text-[#2B2B2B] border-[#D4AF37] hover:shadow-[0_0_10px_#D4AF37]"
          }`}
      >
        <Globe size={18} className="text-[#D4AF37]" />
        <span>{languages.find((l) => l.code === locale)?.name || "Langue"}</span>
        <ChevronDown size={16} className="text-[#D4AF37]" />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className={`absolute right-0 mt-2 w-44 rounded-lg border shadow-lg overflow-hidden z-50 transition-all duration-200
            ${theme === "dark" ? "bg-[#0D0D0D] border-[#D4AF37]" : "bg-white border-[#D4AF37]"}`}
        >
          {languages.map((lang) => (
            <Link
              key={lang.code}
              href={`/${lang.code}${pathWithoutLocale}`}
              className={`block px-4 py-2 transition
                ${
                  theme === "dark"
                    ? "hover:bg-[#1C1C1C]"
                    : "hover:bg-gray-100"
                }
                ${
                  locale === lang.code
                    ? "text-[#D4AF37] font-semibold"
                    : theme === "dark"
                    ? "text-[#F5F5F5]"
                    : "text-[#2B2B2B]"
                }`}
              onClick={() => setOpen(false)}
            >
              {lang.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
