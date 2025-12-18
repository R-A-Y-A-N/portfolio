/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import { useTranslations } from "next-intl";

const Projects = () => {
  const t = useTranslations("projects");
  const projects = [
   {
      title: t("title1"),
      description: t( "description1"),
      technologies: ["Next.js", "Express.js", "Tailwind CSS", "MySQL"],
      image: "/images/generall.PNG",
    },{
      title: t("title2"),
      description: t( "description2"),
      technologies: ["Php", "postgreSQL", "Bootstrap"],
      image: "/images/s1.PNG",
    },
     {
      title: t("title3"),
      description: t( "description3"),
      technologies: ["React", "Next.js", "Tailwind CSS"],
      image: "/images/Kk1.PNG",
      
    },
    
    {
      title: t("title4"),
      description: t( "description4"),
      technologies: ["Next.js ", "Express", "MongoDB", "Tailwind CSS", "OpenAI API"],
      image: "/images/ia.webp",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#F9E076]">
              {t("title")}
            </span>
          </h2>
          <p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto">
            {t("phrase1")}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              // variants={item}
              className="group"
            >
              <div className="bg-[#fafaf6] dark:bg-[#1C1C1C] rounded-2xl overflow-hidden border border-[#D4AF37] h-full transition-all duration-300 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                <div className="h-48 relative overflow-hidden rounded-t-2xl">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
  />
</div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">{project.title}</h3>
                  <p className="dark:text-[#A0A0A0]  text-[#1c1c1cba] mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="dark:bg-[#0D0D0D] bg-[#D4AF37]  dark:text-[#D4AF37] text-[#181817] text-sm py-1 px-3 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    
                    <motion.a
                      href="https://github.com/R-A-Y-A-N"
                      className="flex items-center gap-2 text-[#0a0a09] hover:text-[#D4AF37] dark:text-[#F5F5F5] dark:hover:text-[#D4AF37] transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Code</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;