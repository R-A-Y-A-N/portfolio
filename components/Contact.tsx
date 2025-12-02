"use client";

import { JSX, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Facebook,Instagram } from "lucide-react";
import { useTranslations } from "next-intl";

type Social = {
  name: string;
  url: string;
  icon: JSX.Element;
};

const socials: Social[] = [
 
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rayan-hamenni/",
    icon: <Linkedin className="w-6 h-6 md:w-7 md:h-7 text-[#D4AF37]" />,
  },
  
  {
    name: "instagram",
    url: "https://www.instagram.com/rayan.hamenni?igsh=MTl0ejRqb20xOHZzaA==",
    icon: <Instagram className="w-6 h-6 md:w-7 md:h-7 text-[#D4AF37]" />,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61583826745204",
    icon: <Facebook className="w-6 h-6 md:w-7 md:h-7 text-[#D4AF37]" />,
  },
   {
    name: "GitHub",
    url: "https://github.com/R-A-Y-A-N",
    icon: <Github className="w-6 h-6 md:w-7 md:h-7 text-[#D4AF37]" />,
  },
];

export default function ContactCard() {
  const t = useTranslations("contact");
  const [flipped, setFlipped] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Gestion du swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    
    if (diff > 50 || diff < -50) {
      setFlipped(!flipped);
    }
    setTouchStart(null);
  };

  // Fonction flip (clic uniquement sur la carte, pas sur les icônes)
  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Si on clique sur une icône ou un lien, on ne fait rien
    const target = e.target as HTMLElement;
    if (target.closest("a")) return;
    setFlipped(!flipped);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 md:py-36">
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-10 justify-center flex">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#F9E076] font-['Tajawal']">
            {t("phrase2")}
          </span>
        </h2>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <motion.div
          className="w-[90%] sm:w-[400px] h-[220px] sm:h-[260px] perspective cursor-pointer"
          onClick={handleCardClick}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div
            className={`relative w-full h-full duration-700 transform-style-preserve-3d ${
              flipped ? "rotate-y-180" : ""
            }`}
          >
          {/* Recto */}
<div className={`absolute w-full h-full rounded-2xl sm:rounded-3xl 
  flex flex-col justify-center items-center p-4 sm:p-8
  backface-hidden border
  bg-[#fafaf6] dark:bg-gradient-to-br dark:from-[#0D0D0D] dark:via-[#1C1C1C] dark:to-[#0D0D0D]
  border-gray-300 dark:border-[#2A2A2A]
  shadow-md dark:shadow-2xl`}
>
  <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-[#D4AF37] dark:to-[#F9E076] font-['Tajawal']">
    {t("phrase1")}
  </h2>
  <p className="text-gray-800 dark:text-[#A0A0A0] text-sm sm:text-base mb-6 ">
    {t("phrase4")}
  </p>
  <div className="flex gap-4 sm:gap-6">
    {socials.map((s) => (
      <motion.a
        key={s.name}
        href={s.url}
        target={s.name === "Email" ? "_self" : "_blank"}
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center
          border border-gray-400 dark:border-[#2A2A2A]
          bg-gray-200 dark:bg-[#0D0D0D]
          hover:border-[#D4AF37] hover:bg-gray-300 dark:hover:bg-[#2A2A2A]
          transition-colors duration-300 shadow-md"
        whileHover={{ y: -6, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {s.icon}
      </motion.a>
    ))}
  </div>
</div>

{/* Verso */}
<div className={`absolute w-full h-full rounded-2xl sm:rounded-3xl
  flex flex-col justify-center items-center p-4 sm:p-8
  rotate-y-180 backface-hidden border
  bg-[#fafaf6] dark:bg-gradient-to-br dark:from-[#0D0D0D] dark:via-[#1C1C1C] dark:to-[#0D0D0D]
  border-gray-300 dark:border-[#2A2A2A]
  shadow-md dark:shadow-2xl
  overflow-hidden`}
>
  <p className="text-center text-gray-900 dark:text-[#D4AF37] text-lg sm:text-xl md:text-2xl font-semibold">
    {t("phrase3")}
  </p>
</div>




          </div>

          {/* Styles flip */}
          <style jsx>{`
            .perspective {
              perspective: 1200px;
            }
            .transform-style-preserve-3d {
              transform-style: preserve-3d;
            }
            .backface-hidden {
              -webkit-backface-visibility: hidden;
              backface-visibility: hidden;
            }
            .rotate-y-180 {
              transform: rotateY(180deg);
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
}
