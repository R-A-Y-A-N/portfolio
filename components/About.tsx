// import { motion } from 'framer-motion';
// import Image from "next/image";
// import { useTranslations } from "next-intl";
// import { HiDownload } from "react-icons/hi";

// const About = () => {
//     const t = useTranslations("About");
//   return (
//     <section id="about" className="py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           <motion.div
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       transition={{ duration: 0.8, delay: 0.2 }}
//                       className="relative"
//                     >
//                       <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-xl shadow-[#D4AF37]/20">
//                         <div className="absolute inset-0 dark:bg-[#0D0D0D]/90 bg-[#ffffff] opacity-80"></div>
//                         <div className="absolute inset-0 flex items-center justify-center p-8">
//                           <div className="relative w-full h-full">
//                             <Image
//                               src="/images/3d.webp"
//                               alt="job"
//                               fill
//                               className="object-cover rounded-xl"
//                               priority
//                               quality={100}
//                               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                       <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D4AF37] rounded-full z-[-1] opacity-20 animate-pulse"></div>
//                       <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#D4AF37] rounded-full z-[-1] opacity-30 animate-pulse delay-300"></div>
//                     </motion.div>
          
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#F9E076]">
//                {t("phrase5")}
//               </span>
//             </h2>
//             <div className="space-y-4 mb-8">
//               <p className="text-lg">
//                 {t("phrase1")}
//                </p>
//               <p className="text-lg">{t("phrase2")}

//               </p>
              
//               <p className="text-lg">
//                 {t("phrase3")}</p>
//             </div>
//             <div className="flex flex-wrap gap-4">
//               <motion.a
//                 href="/cv.pdf"
//                 download 
//                 className="flex items-center gap-2 dark:bg-[#000000] dark:hover:bg-[#ffffff] bg-[#ffffff] hover:bg-[#000000] border border-[#2A2A2A] text-[#D4AF37] font-medium py-3 px-6 rounded-full transition-all duration-300"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <span>{t("phrase4")}</span>
//                 <HiDownload />
                
//               </motion.a>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import { motion } from 'framer-motion';
import { useTranslations } from "next-intl";
import { HiDownload } from "react-icons/hi";

export default function About() {
  const t = useTranslations("About");

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1  gap-16 items-center">

          {/* --- SECTION ÉLÉGANTE SANS IMAGE — PARTIE GAUCHE --- */}
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
                className="flex items-center gap-2 dark:bg-[#000000] dark:hover:bg-[#ffffff] bg-[#ffffff] hover:bg-[#000000] border border-[#2A2A2A] text-[#D4AF37] font-medium py-3 px-6 rounded-full transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{t("phrase4")}</span>
                <HiDownload />
              </motion.a>
            </div>
          </motion.div>

          

        </div>
      </div>
    </section>
  );
}