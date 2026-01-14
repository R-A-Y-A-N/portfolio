
import { motion } from 'framer-motion';
import { useTranslations } from "next-intl";
import { HiDownload } from "react-icons/hi";

export default function About() {
  const t = useTranslations("About");

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1  gap-16 items-center">

          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative p-10 rounded-2xl shadow-xl border border-[#D4AF37]/40 bg-white dark:bg-[#0D0D0D]"
          >
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D4AF37] rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#F9E076] rounded-full opacity-30 blur-xl"></div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#F9E076]">
              {t("phrase5")}
            </h2>

            <div className="space-y-4 text-lg leading-relaxed text-gray-800 dark:text-gray-300">
              <p>{t("phrase1")}</p>
              <p>{t("phrase2")}</p>
              <p>{t("phrase3")}</p>
            </div>

            <div className="mt-8 flex justify-center">
 <motion.a
  href="/cv.pdf"
  download
  className="
    flex items-center justify-center gap-2
    bg-[#ffffff] dark:bg-[#000000]
    hover:bg-[#000000] dark:hover:bg-[#ffffff]
    border border-[#2A2A2A]
    text-[#D4AF37]
    font-bold

    text-sm sm:text-base md:text-xl lg:text-2xl
    py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8

    rounded-full
    transition-all duration-300
    shadow-lg
  "
  whileHover={{
    scale: 1.08,
    textShadow: "0 0 8px #D4AF37",
  }}
  whileTap={{ scale: 0.95 }}
  animate={{
    opacity: [1, 0.6, 1],
    transition: {
      repeat: Infinity,
      duration: 1.4,
      ease: "easeInOut",
    },
  }}
>
  <span className="whitespace-nowrap">
    {t("phrase4")}
  </span>

  <HiDownload className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
</motion.a>

</div>

          </motion.div>

          

        </div>
      </div>
    </section>
  );
}