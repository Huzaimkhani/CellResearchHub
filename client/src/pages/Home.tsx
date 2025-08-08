import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Users, Award, FlaskConical, ShieldCheck, HeartPulse, Calendar, Handshake } from "lucide-react";
import { Vortex } from "@/components/ui/vortex";
import { useInView } from 'react-intersection-observer';

const CompanyPage = () => {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showProcessModal, setShowProcessModal] = useState(false);
  const [loadSpline, setLoadSpline] = useState(false);
  const [SplineComponent, setSplineComponent] = useState<React.ComponentType<any> | null>(null);
  const { ref: vortexRef, inView: vortexInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
// Check mobile device performance optimization
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Delay Spline loading by 2s after initial render
    const timer = setTimeout(() => {
      setLoadSpline(true);
    }, 2000);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, []);
    useEffect(() => {
    if (loadSpline && !isMobile) {
      // Dynamically import Spline only when needed
      import('@splinetool/react-spline').then(module => {
        setSplineComponent(() => module.default);
      }).catch(error => {
        console.error('Failed to load Spline component:', error);
      });
    }
  }, [loadSpline, isMobile]);
  const achievements = [
    {
      title: "Breakthrough in Tumor Targeting",
      description: "Our 2024 study published in Nature Medicine demonstrates a novel approach to precision cancer therapy.",
      date: "December 2024",
      type: "Publication"
    },
    {
      title: "FDA Fast Track Designation",
      description: "Received Fast Track designation for our innovative dual-domain CAR-T therapy.",
      date: "November 2024",
      type: "Regulatory Milestone"
    },
    {
      title: "Excellence in Cancer Research Award",
      description: "Recognized by the International Cancer Research Foundation.",
      date: "October 2024",
      type: "Award"
    }
  ];

  const researchAreas = [
    {
      title: "D-Domain Technology",
      description: "Our proprietary dual-domain targeting system enables unprecedented precision.",
      icon: <Target className="w-8 h-8 text-teal-600" />,
      color: "from-teal-500/10 to-teal-600/10"
    },
    {
      title: "Immunotherapy Innovations",
      description: "Developing next-generation CAR-T therapies with enhanced efficacy.",
      icon: <FlaskConical className="w-8 h-8 text-purple-600" />,
      color: "from-purple-500/10 to-purple-600/10"
    },
    {
      title: "Clinical Trial Excellence",
      description: "Conducting rigorous clinical trials to validate our approaches.",
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      color: "from-blue-500/10 to-blue-600/10"
    },
    {
      title: "Patient-Centered Care",
      description: "Prioritizing patient quality of life throughout therapy.",
      icon: <HeartPulse className="w-8 h-8 text-pink-600" />,
      color: "from-pink-500/10 to-pink-600/10"
    }
  ];

  const timelineSteps = [
    { 
      title: "Concept Discovery", 
      timeframe: "2018-2019", 
      description: "Initial research into dual-domain targeting mechanisms"
    },
    { 
      title: "Preclinical Validation", 
      timeframe: "2020-2021", 
      description: "Successful in vitro and animal model studies"
    },
    { 
      title: "Phase I Trials", 
      timeframe: "2022", 
      description: "First-in-human studies showing promising safety profile"
    },
    { 
      title: "Regulatory Milestones", 
      timeframe: "2023", 
      description: "FDA Orphan Drug and Fast Track designations"
    },
    { 
      title: "Global Expansion", 
      timeframe: "2024", 
      description: "International partnerships and expanded facilities"
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-purple-50" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Hero Section with Spline 3D Background */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-16 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {!isMobile ? (
            <>
              {SplineComponent ? (
                <SplineComponent 
                  scene="https://prod.spline.design/ZljuevMRIGxOwuv3/scene.splinecode" 
                  onLoad={() => setIsSplineLoaded(true)}
                  onError={(error: any) => console.error('Spline error:', error)}
                  className="w-full h-full"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-teal-900 to-purple-900 flex items-center justify-center">
                  <div className="animate-pulse text-white">Loading 3D scene...</div>
                </div>
              )}
            {!isSplineLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-teal-900 to-purple-900 flex items-center justify-center">
                <div className="animate-pulse text-white">Loading 3D scene...</div>
              </div>
            )}
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900 to-purple-900" />
        )}
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-5"></div>
        
      {/* Refined watermark blur effect with edge fading */}
        <div className="absolute bottom-0 right-0 w-[160px] h-[59px] z-10 pointer-events-none">
          <div className="absolute inset-0 backdrop-blur-xl rounded-tl-lg"></div>
          <div className="absolute -top-4 -left-4 w-[calc(100%+32px)] h-[calc(100%+32px)] 
                          bg-gradient-to-tr from-transparent via-transparent via-70% to-white/5 
                          opacity-30 rounded-tl-xl"></div>
        </div>
      </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <br />
              <span className="italic bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">
  ClinCell
</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
Elevating Clinical Research Standards with Creative Solutions </motion.p>
            
            
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
<section className="py-16 md:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
      {/* Image Container */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gradient-to-br from-teal-600/10 to-purple-700/10 p-1 rounded-2xl">
          <div className="bg-white rounded-2xl p-1 overflow-hidden">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <img 
                src="/images/Misson_company.png" 
                alt="Our mission in action" 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width={800}
                height={450}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Our Mission: <span className="text-teal-600">Homogeneous Community Trials</span>
        </h2>
        
        <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
         We are devoted to revolutionizing communities through groundbreaking clinical trials, forging a bold connection between innovative trials, sponsors, and the clinical arena. By launching trials in community centers, we ignite diverse participation and deliver thrilling therapies to local populations, safeguarding healthy tissue and boosting outcomes.
        </p>
        
        <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
         With powerful alliances and a passion for inclusivity, we’re shaping a future where clinical trials electrify community health, transforming cancer into a conquerable challenge.
        </p>
        
        
      </motion.div>
    </div>
  </div>
</section>

{/* Culture Section */}
<section className="py-16 md:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Mission-critical<br />
          <span className="text-purple-600">Collaboration</span>
        </h2>
        
        <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
          Every day, we are building a more purposeful, empathetic team ready to work together to build a bridge between sponsor and diverse communities.
        </p>
        
        <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
          Our culture fosters innovation through diversity of thought, mutual respect, and a shared commitment to our mission. We believe that the best solutions emerge when brilliant minds collaborate.
        </p>

        {/* Updated Join Our Team Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative rounded-xl overflow-hidden p-0.5 mt-8 w-full max-w-sm"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 animate-gradient"></div>
          
          {/* Changed to anchor tag with sponsor link */}
          <a 
            href="/sponsors" 
            className="relative w-full bg-gradient-to-b from-purple-300/90 to-indigo-900/90 backdrop-blur-sm py-5 px-6 rounded-xl flex items-center justify-center gap-2 group"
          >
            <span className="text-xl font-bold text-white">
              Join Our Team
            </span>
            {/* Added arrow icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-white opacity-80 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="cursor-pointer"
        onClick={() => setShowProcessModal(true)}
      >
        {/* Image Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
          <img 
            src="/images/cro_cycle.png" 
            alt="Our collaborative process" 
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            width={600}
            height={250}
          />
          
          {/* Gradient Overlay with Search Icon */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-center justify-center">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Animated Gradient Container */}
        <div className="relative mt-4 rounded-xl overflow-hidden p-0.5">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 animate-gradient"></div>
          
          <div className="relative bg-gradient-to-b from-purple-300/90 to-indigo-900/90 backdrop-blur-sm p-4 rounded-xl">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-1">
                Parallel Processing
              </h3>
              <p className="text-2xl font-bold text-white mb-2">
                3x Faster
              </p>
              <p className="text-base font-medium text-white/90">
                Contract, budget, and regulatory done simultaneously
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>
 {/* CTA Section */}
<section 
  ref={vortexRef}
  className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-teal-900 to-purple-900"
>
  {/* Conditionally render Vortex only when in view */}
  {vortexInView && (
    <Vortex
      containerClassName="absolute inset-0"
      backgroundColor="transparent"
      particleCount={isMobile ? 100 : 200} // Reduced particle count
      baseHue={180}
      baseSpeed={0.01} // Slower movement
      rangeSpeed={0.03}
      baseRadius={0.5}
      rangeRadius={1.5}
      rangeY={200}
      className="z-0"
    />
  )}
  
  {/* Subtle overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/10 z-5"></div>
  
  {/* Content */}
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
    <motion.h2 
      className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.5 }}
    >
      Join Our Mission to Transform Clinical Trails.
    </motion.h2>
    
    <motion.p 
      className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 md:mb-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      Partner with us to accelerate breakthrough therapies for cancer patients worldwide
    </motion.p>
    
    <motion.div
      className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Link href="/contact">
        <Button 
          className="bg-white text-teal-600 hover:bg-gray-100 py-4 md:py-6 px-6 md:px-8 rounded-xl font-bold transition-all duration-300 hover:scale-105 text-sm md:text-base"
        >
          Become a Partner
          <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
        </Button>
      </Link>
      
      <Link href="/Expertise">
        <Button 
          className="bg-transparent border-2 border-white text-white hover:bg-white/10 py-4 md:py-6 px-6 md:px-8 rounded-xl font-bold transition-all duration-300 hover:scale-105 text-sm md:text-base"
        >
          Explore Expertise
          <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
        </Button>
      </Link>
    </motion.div>
  </div>
</section>
    </div>
  );
};

export default CompanyPage;