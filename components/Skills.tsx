
"use client";

import { useTranslations } from "next-intl";
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiAndroidstudio,
  SiTypescript, SiMysql, SiGit, SiPostman,
  SiTailwindcss, SiPostgresql, SiPhpmyadmin,
  SiApachenetbeanside, SiOpenai, SiPrisma, SiExpress
} from "react-icons/si";

const Skills = () => {
  const t = useTranslations("Skills");

  const techStack = [
    { icon: <SiReact />, url: "https://react.dev" },
    { icon: <SiNextdotjs />, url: "https://nextjs.org" },
    { icon: <SiNodedotjs />, url: "https://nodejs.org" },
    { icon: <SiTypescript />, url: "https://www.typescriptlang.org" },
    { icon: <SiExpress />, url: "https://expressjs.com" },
    { icon: <SiAndroidstudio />, url: "https://developer.android.com/studio" },
    { icon: <SiMysql />, url: "https://www.mysql.com" },
    { icon: <SiPostgresql />, url: "https://www.postgresql.org" },
    { icon: <SiPhpmyadmin />, url: "https://www.phpmyadmin.net" },
    { icon: <SiGit />, url: "https://git-scm.com" },
    { icon: <SiPostman />, url: "https://www.postman.com" },
    { icon: <SiTailwindcss />, url: "https://tailwindcss.com" },
    { icon: <SiApachenetbeanside />, url: "https://netbeans.apache.org" },
    { icon: <SiOpenai />, url: "https://openai.com" },
    { icon: <SiPrisma />, url: "https://www.prisma.io" },
    
  ];

  return (
    <section id="skills" className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#F9E076]">
            {t("title")}
          </span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-[#A0A0A0] max-w-2xl mx-auto">
          {t("phrase")}
        </p>
      </div>

      {/* ICON GRID */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-5 gap-8 justify-items-center">
        {techStack.map((tech, index) => (
          <a
            key={index}
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-5xl transition-all duration-300 hover:scale-110 hover:text-[#D4AF37]"
          >
            {tech.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Skills;
