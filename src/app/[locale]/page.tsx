
'use client';


import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';


export default  function Home() {
  return (
    <div className="min-h-screen dark:bg-[#0D0D0D] bg-[#ffffff] dark:text-[#F5F5F5] text-[#2B2B2B]">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <Projects /> 
        <Contact />
      </main>
     
    </div>
  );
}