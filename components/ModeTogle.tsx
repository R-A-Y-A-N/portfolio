
"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-colors duration-300"
        aria-label="Toggle theme"
      >
        {theme === "light" ? (
          <Moon className="h-5 w-5 text-[#2B2B2B] hover:text-[#D4AF37]" />
        ) : (
          <Sun className="h-5 w-5 text-[#F5F5F5] hover:text-[#D4AF37]" />
        )}
      </button>
    </motion.div>
  );
}