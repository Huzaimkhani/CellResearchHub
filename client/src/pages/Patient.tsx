import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, ChevronUp, BookOpen, Headphones, LifeBuoy, FileText } from "lucide-react";

const Patient = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const heroBackground = '/images/paitent_care.webp';
  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateCursor);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  const faqs = [
    {
      question: "What is cell therapy and how does it work?",
      answer: "Cell therapies help your body's natural immune system fight diseases like cancer. Immune cells (usually T cells) are modified in a lab and reintroduced into your body to target and destroy cancer cells."
    },
    {
      question: "What are the current challenges with CAR-T cell therapy?",
      answer: "Current challenges include managing side effects, improving efficacy for solid tumors, reducing manufacturing complexity, and enhancing accessibility to patients."
    },
    {
      question: "How does ClinCell plan to improve cell therapies?",
      answer: "We're reimagining CAR-T therapy with our proprietary D-Domain technology to enhance precision, reduce side effects, and improve manufacturing efficiency."
    },
    {
      question: "What types of cell therapy does ClinCell focus on?",
      answer: "We specialize in CAR-T therapy but also research related approaches including Tumor-infiltrating lymphocyte (TIL) therapy, Engineered T cell receptor (TCR) therapy, and Natural killer (NK) cell therapy."
    }
  ];

  const keyTerms = [
    {
      term: "CAR-T Therapy",
      definition: "Chimeric antigen receptor T-cell therapy: Immune cells modified to target specific cancer antigens."
    },
    {
      term: "D-Domain Technology", 
      definition: "Our proprietary binding agent designed to precisely target antigens on diseased cells."
    },
    {
      term: "ARC-SparX",
      definition: "Our therapy using D-Domain technology to target specialized SparX proteins that bind to cancer cells."
    },
    {
      term: "ddCAR",
      definition: "Cell therapy engineered with D-Domain technology that targets specific antigens on diseased cells."
    },
    {
      term: "Antigen",
      definition: "Substances that trigger an immune response, present on cancer cells and targeted by our therapies."
    },
    {
      term: "Autologous Therapy",
      definition: "Treatment using a patient's own cells that are modified and reintroduced."
    }
  ];

  const resources = [
    {
      title: "Multiple Myeloma Research Foundation",
      description: "Leading resource for multiple myeloma patients",
      icon: <BookOpen className="w-6 h-6 text-teal-600" />
    },
    {
      title: "HealthTree Foundation",
      description: "Patient empowerment and education platform",
      icon: <LifeBuoy className="w-6 h-6 text-purple-600" />
    },
    {
      title: "Leukemia & Lymphoma Society",
      description: "Support and resources for blood cancer patients",
      icon: <FileText className="w-6 h-6 text-blue-500" />
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Animated Cursor Dot */}
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
              className="relative min-h-[80vh] flex items-center justify-center pt-32"
              style={{
                backgroundImage: `url(${heroBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-800/90 to-purple-900/90" />
              
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h1 
                  className="text-5xl md:text-7xl font-bold mb-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
            Patient Support
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Empowering patients with innovative cell therapies and compassionate care.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button 
              className="bg-gradient-to-r from-teal-600 to-teal-700 text-white hover:from-teal-700 hover:to-teal-800 py-6 px-8 rounded-xl font-bold transition-all duration-300 hover:scale-105"
            >
              Patient Resources
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 py-6 px-8 rounded-xl font-bold transition-all duration-300 hover:scale-105"
            >
              Contact Support
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Our Purpose Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Purpose
            </motion.h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>
          
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              As of now, there has been initial success treating cancer with cell therapy, but there are still challenges. We see the potential to improve cell therapies, and we are fighting every day to deliver those improvements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {[
                { title: "Enhance Efficacy", color: "from-teal-500 to-teal-600" },
                { title: "Reduce Side Effects", color: "from-purple-500 to-purple-600" },
                { title: "Improve Accessibility", color: "from-blue-500 to-blue-600" }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`bg-gradient-to-r ${item.color} text-white rounded-xl p-6 text-center shadow-lg`}
                >
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Cell Therapy Explanation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What is Cell Therapy?</h3>
              <p className="text-gray-700 mb-6">
                Cell therapies are designed to help the body's natural immune system fight diseases, like cancer. The cells (usually a type of immune cell called a "T cell") are modified in a lab and then put back into the body to attack cancer cells.
              </p>
              <p className="text-gray-700 mb-6">
                At ClinCell, we're focused on reimagining CAR-T cell therapy, which stands for chimeric antigen receptor (CAR) T cell (T) therapy.
              </p>
              <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
                <h4 className="font-bold text-gray-900 mb-2">Other types of cell therapy include:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Tumor-infiltrating lymphocyte (TIL) therapy</li>
                  <li>Engineered T cell receptor (TCR) therapy</li>
                  <li>Natural killer (NK) cell therapy</li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Current Challenges of CAR-T Therapy</h3>
              <div className="space-y-6">
                {[
                  "Managing cytokine release syndrome (CRS)",
                  "Addressing neurotoxicity side effects",
                  "Improving efficacy for solid tumors",
                  "Reducing manufacturing time and complexity",
                  "Enhancing accessibility and affordability"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-teal-500 to-purple-500 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      </div>
                    </div>
                    <p className="ml-3 text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-white to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <button
                  className="w-full flex items-center justify-between text-left p-6"
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                >
                  <h3 className="text-lg font-bold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {expandedFAQ === index ? (
                    <ChevronUp className="w-6 h-6 text-teal-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-teal-600 flex-shrink-0" />
                  )}
                </button>
                
                {expandedFAQ === index && (
                  <motion.div 
                    className="px-6 pb-6"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-700">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Terms Section */}
      <section className="py-20 bg-gradient-to-b from-teal-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Key Terms to Know
            </motion.h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyTerms.map((term, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-start mb-4">
                  <div className="bg-teal-100 p-2 rounded-lg mr-4">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-teal-500 to-purple-500 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {term.term}
                  </h3>
                </div>
                <p className="text-gray-700">
                  {term.definition}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Additional Resources
            </motion.h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      {resource.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {resource.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-6">
                    {resource.description}
                  </p>
                  <Button className="w-full bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white">
                    Visit Website
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Have More Questions?
          </motion.h2>
          <motion.p 
            className="text-xl text-white/90 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our patient support team is here to help you understand cell therapy and our treatments
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button 
              className="bg-white text-teal-600 hover:bg-gray-100 py-6 px-8 rounded-xl font-bold transition-all duration-300 hover:scale-105"
            >
              Contact Our Support Team
              <Headphones className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Patient;