import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="border-t border-[#1C1C1C] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#F9E076]">
              <span className="text-[#D4AF37] font-serif italic">HR</span>Portfolio
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#A0A0A0] text-sm"
          >
            © {new Date().getFullYear()} HAMENNI Rayan. Tous droits réservés.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#A0A0A0] hover:text-[#D4AF37] transition-colors duration-300"
            >
              <span>GitHub</span>
              
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;