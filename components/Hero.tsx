"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-24 sm:pt-20 md:pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.3] font-bold mb-4">
              <span className="block">{t("greeting")}</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#F9E076] mt-2">
                {t("name")}
              </span>
            </h1>

            <h2 className="text-lg sm:text-xl md:text-2xl text-[#A0A0A0] mb-4">
              {t("job")}
            </h2>

            <p className="text-base sm:text-lg mb-10 max-w-xl mx-auto lg:mx-0">
              {t("description")}
            </p>

            <div className="hidden sm:flex flex-wrap gap-4 justify-center lg:justify-start">


              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#projects"
                  className="bg-[#D4AF37] hover:bg-[#C19C30] text-[#0D0D0D] font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg shadow-[#D4AF37]/30"
                >
                  {t("seeProjects")}
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#contact"
                  className="bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 font-bold py-3 px-8 rounded-full transition-all duration-300"
                >
                  {t("contactMe")}
                </Link>
              </motion.div>
            </div>
          </motion.div>
           {/* IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-80 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-xl shadow-[#D4AF37]/20">
              <div className="absolute inset-0 dark:bg-[#0D0D0D]/90 bg-[#ffffff] opacity-80" />
              {/* Light mode image */}
<Image
  src="/images/photo2.png"
  alt={t("job")}
  fill
  className="object-cover rounded-xl p-4 dark:hidden"
  priority
  quality={100}
  sizes="100vw"
/>

{/* Dark mode image */}
<Image
  src="/images/photo n.png"
  alt={t("job")}
  fill
  className="object-cover rounded-xl p-4 hidden dark:block"
  priority
  quality={100}
  sizes="100vw"
/>

            </div>

            <div className="absolute -bottom-6 -right-6 w-24 sm:w-32 h-24 sm:h-32 bg-[#D4AF37] rounded-full z-[-1] opacity-20 animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-20 sm:w-24 h-20 sm:h-24 bg-[#D4AF37] rounded-full z-[-1] opacity-30 animate-pulse delay-300"></div>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default Hero;
