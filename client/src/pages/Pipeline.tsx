import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Plus, Calendar, FlaskConical, BarChart2, ClipboardCheck } from "lucide-react";

const Pipeline = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("current");
  const [searchTerm, setSearchTerm] = useState("");
  const heroBackground = '/images/Pipelineimage.jpeg';
  const dDomainImage = '/images/core-domain.webp'; // Public path
  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateCursor);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  const currentStudies = [
    {
      title: "Cancer Research Study",
      description: "Advanced cellular therapy research targeting treatment-resistant cancers",
      icon: <FlaskConical className="w-6 h-6 text-teal-600" />,
      status: "Active",
      participants: "24 enrolled"
    },
    {
      title: "D-Domain Platform",
      description: "Revolutionary CAR-T cell technology with enhanced precision and safety",
      icon: <BarChart2 className="w-6 h-6 text-purple-600" />,
      status: "Ongoing",
      participants: "Multiple cohorts"
    }
  ];

  const upcomingResearch = [
    "Immunotherapy Enhancement",
    "Precision Medicine",
    "Combination Therapies",
    "Biomarker Development",
    "Solid Tumor Applications",
    "Minimal Residual Disease"
  ];

 

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-teal-50 to-purple-50" style={{ fontFamily: 'Montserrat, sans-serif' }}>
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
            Advancing Treatment 
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our innovative research pipeline and discover the future of medical treatments.
          </motion.p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            className={`px-6 py-3 rounded-full font-bold transition-all ${activeTab === "current" ? "bg-gradient-to-r from-teal-600 to-purple-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"}`}
            onClick={() => setActiveTab("current")}
          >
            Current Research
          </Button>
          <Button 
            className={`px-6 py-3 rounded-full font-bold transition-all ${activeTab === "future" ? "bg-gradient-to-r from-teal-600 to-purple-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"}`}
            onClick={() => setActiveTab("future")}
          >
            Explore Future Studies
          </Button>
          <Button 
            className={`px-6 py-3 rounded-full font-bold transition-all ${activeTab === "timeline" ? "bg-gradient-to-r from-teal-600 to-purple-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"}`}
            onClick={() => setActiveTab("timeline")}
          >
            Research Timeline
          </Button>
        </div>
      </div>

      {/* Current Research Section */}
      {activeTab === "current" && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Current Research Studies
              </motion.h2>
              <motion.div 
                className="w-20 h-1 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <motion.p 
                className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Our pipeline includes groundbreaking cancer research studies utilizing our proprietary D-Domain ddCAR Platform technology
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentStudies.map((study, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="mr-4">
                        {study.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {study.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 mb-6">
                      {study.description}
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <div className="bg-teal-100 px-3 py-1 rounded-full">
                        <span className="text-sm font-medium text-teal-600">{study.status}</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        {study.participants}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-16 bg-gradient-to-r from-teal-600 to-purple-700 text-white rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">Join Our Research Efforts</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                We're actively recruiting participants for innovative cancer studies. Learn how you can contribute to groundbreaking research.
              </p>
              <Button className="bg-white text-teal-600 hover:bg-gray-100 py-4 px-8 rounded-xl font-bold">
                Participate in Research
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>
      )}

      {/* Explore Future Studies */}
      {activeTab === "future" && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Explore Future Studies
              </motion.h2>
              <motion.div 
                className="w-20 h-1 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <motion.p 
                className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Stay connected with our upcoming research initiatives and be the first to learn about new treatment opportunities
              </motion.p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Research Explorer</h3>
              <p className="text-gray-700 mb-8">
                Enter your research interests to discover relevant studies and opportunities
              </p>
              
              <div className="relative mb-8">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Search research areas..."
                />
              </div>
              
              <Button className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-4 px-6 rounded-xl font-bold mb-8">
                <Plus className="mr-2 h-5 w-5" />
                Add More Searches
              </Button>
              
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Upcoming Research Areas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {upcomingResearch.map((area, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center bg-gray-50 p-4 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-teal-500 to-purple-500 mr-3"></div>
                      <span className="text-gray-700">{area}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Informed</h3>
              <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                Subscribe to our research updates to receive notifications about new studies and breakthroughs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  className="flex-grow px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Your email address"
                />
                <Button className="bg-gradient-to-r from-teal-600 to-purple-600 text-white py-3 px-6 rounded-xl font-bold">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

    </div>
  );
};

export default Pipeline;