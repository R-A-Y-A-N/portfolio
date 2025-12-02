"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ModeToggle } from "../components/ModeTogle";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./languageSwitcher";
import { useState } from "react";
import { Menu, X } from "lucide-react";


const Header = () => {
  const t = useTranslations("Header");
   const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: t("home"), href: "#hero" },
    { name: t("about"), href: "#about" },
    { name: t("skills"), href: "#skills" },
   { name: t("projects"), href: "#projects" },
    { name: t("contact"), href: "#contact" },
  ];

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className="fixed w-full top-0 z-50 dark:bg-[#0D0D0D]/90 backdrop-blur-md border-b dark:border-[#1C1C1C] bg-[#ffffff]/90 border-[#E8E4DA]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <motion.div
              className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#F9E076]"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-[#D4AF37] font-serif italic">HR</span>
              Portfolio
            </motion.div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={handleScroll}
                    className="dark:text-[#F5F5F5] hover:text-[#D4AF37] text-[#2B2B2B] dark:hover:text-[#D4AF37] transition-colors duration-300 font-medium relative group"
                  >
                    {link.name}
                    <motion.span
                      className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <ModeToggle />
            <LanguageSwitcher />
            <button
              className="md:hidden text-[#2B2B2B] dark:text-[#F5F5F5]"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>
       {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white dark:bg-[#0D0D0D] border-t dark:border-[#1C1C1C] border-[#E8E4DA] px-6 py-4"
        >
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={handleScroll}
                  className="text-lg dark:text-[#F5F5F5] text-[#2B2B2B] hover:text-[#D4AF37] dark:hover:text-[#D4AF37] transition-colors duration-300 font-medium"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>)}
    </motion.header>
  );
};

export default Header;
