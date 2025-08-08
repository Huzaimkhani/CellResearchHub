import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, ClipboardList, FileText, 
  Layers, ClipboardCheck, FlaskConical,
  BarChart3, Shield, Award, Target
} from "lucide-react";
import { motion } from "framer-motion";

const Expertise = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  
  // Image URLs
  const heroBackgroundImage = '/images/Clin_Cell.jpeg';
  const partneringBackgroundImage = '/images/experties_partnering.jpeg';
  
  const allServices = [
    {
      title: "Clinical Trial Design",
      icon: <ClipboardList className="w-6 h-6 text-teal-600" />,
      description: "Comprehensive support through innovative approaches to conduct clinical research from Phase I-IV",
      color: "bg-teal-50",
      border: "border-teal-100"
    },
    {
      title: "Regulatory Guidance & Affairs",
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      description: "Support and navigation to solve complex regulatory documentation from beginning to end",
      color: "bg-blue-50",
      border: "border-blue-100"
    },
    {
      title: "Data Management & Quality Assurance",
      icon: <Layers className="w-6 h-6 text-purple-600" />,
      description: "Data collection & compliance with advanced analysis solutions",
      color: "bg-purple-50",
      border: "border-purple-100"
    },
    {
      title: "Site & Project Management",
      icon: <ClipboardCheck className="w-6 h-6 text-pink-600" />,
      description: "Streamlined site activation with dedicated oversight for seamless execution",
      color: "bg-pink-50",
      border: "border-pink-100"
    }
  ];

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateCursor);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden font-sans bg-gradient-to-br from-teal-50 to-indigo-50">
      {/* Animated Cursor */}
      <motion.div 
        className="fixed w-4 h-4 rounded-full z-50 pointer-events-none"
        style={{
          left: cursorPos.x - 8,
          top: cursorPos.y - 8,
          background: 'linear-gradient(135deg, #0d9488, #7e22ce)',
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center pt-28"
        style={{
          backgroundImage: `url(${heroBackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-800/90 to-purple-900/90" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Expertise
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Pioneering clinical trials through innovative methodologies and comprehensive solutions.
          </motion.p>
        </div>
      </section>

      {/* Unified Services Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Research Services<span className="text-teal-600"></span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              End-to-end solutions designed to accelerate Clinical Trials.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
            {allServices.map((service, index) => (
              <motion.div
                key={index}
                className={`flex flex-col sm:flex-row items-start p-6 rounded-2xl ${service.color} border ${service.border} shadow-lg transition-all duration-300 hover:shadow-xl`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white p-3 rounded-full shadow-md mb-4 sm:mb-0 sm:mr-6">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="flex justify-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button className="bg-gradient-to-r from-teal-600 to-purple-600 text-white hover:from-teal-700 hover:to-purple-700 py-4 px-8 rounded-xl font-medium text-lg shadow-lg transition-all">
              Explore Sponser/Paitent
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      
      {/* Partnering Section */}
      <section 
        className="relative py-32 z-10"
        style={{
          backgroundImage: `url(${partneringBackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-800/90 to-purple-900/90" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Accelerate Your Research
          </motion.h2>
          <motion.p 
            className="text-xl text-white/90 leading-relaxed mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Connect with our team to discuss how our expertise can advance your Clinical trial development.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button className="bg-gradient-to-r from-teal-600 to-purple-600 text-white hover:from-teal-700 hover:to-purple-700 py-5 px-12 rounded-xl font-bold text-lg shadow-lg">
              Contact Our Research Team
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      
     
    </div>
  );
};

export default Expertise;