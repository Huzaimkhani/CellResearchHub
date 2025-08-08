import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Vortex } from '@/components/ui/vortex';

const LeadershipPage = () => {
  const [openLeader, setOpenLeader] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  return (

    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-purple-50" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Hero Section with Fixed Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2e38] to-[#1f0a33] z-0"></div>
        <Vortex 
          particleCount={200}
          rangeY={100}
          baseHue={200}
          //particleColor="rgba(10, 224, 208, 0.3)"
          backgroundColor="transparent"
          className="text-white"
        >
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              
              
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Our Scientific Leadership
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Driving breakthroughs in cancer research and therapy development
              </motion.p>
            </motion.div>
          </div>
        </Vortex>
      </section>

      {/* Leadership Section with Fixed Positioning */}
      <section className="py-12 md:py-16 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Added Leadership Heading */}
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Leadership Team
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Guiding our mission with expertise and vision
            </motion.p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
            {/* Shaheen Khani Card */}
           <motion.div 
              className="w-full max-w-sm rounded-2xl overflow-hidden relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.4 }}
            >
              {/* Gradient Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/30 to-purple-500/30 rounded-2xl blur-xl z-0 group-hover:opacity-80 transition-all duration-500 animate-pulse"></div>
                <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-white/30 shadow-2xl">
                <div className="relative h-80 bg-gray-200">
                  <img 
                    src="/images/shaheen_khani.jpeg"  // Updated image path
                    alt="Shaheen Khani" 
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm p-4 pt-0">
                    <h3 className="text-xl font-bold text-white">Shaheen Q.Khani, MD, MHA, MBA</h3>
                    <p className="text-teal-300 font-medium mt-1">COO</p>
                    
                    {/* Added Social Logos 
                    <div className="flex space-x-3 mt-3">
                      <a href="https://twitter.com/elonmusk" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current text-white">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current text-white">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div> */}
                  </div>
              
                 
                  
                  <div className="absolute top-4 right-4 z-30">
                    <button 
                      className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-purple-700 transition-colors shadow-lg"
                      onClick={() => setOpenLeader('shaheen')}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Muhammad Bilal Abid Card */}
            <motion.div 
              className="w-full max-w-sm rounded-2xl overflow-hidden relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {/* Gradient Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-teal-500/30 rounded-2xl blur-xl z-0 group-hover:opacity-80 transition-all duration-500 animate-pulse"></div>
              
              <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-white/30 shadow-2xl">
                <div className="relative h-80 bg-gray-200">
                  <img 
                    src="/images/BILAL_ABID.jpg"  // Updated image path
                    alt="Muhammad Bilal Abid" 
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm p-4 pt-0">
                    <h3 className="text-xl font-bold text-white">M. Bilal Abid, MD, MS, FACP, MRCP.</h3>
                    <p className="text-purple-300 font-medium mt-1">CEO</p>
                    
                    {/* Added Social Logos 
                    <div className="flex space-x-3 mt-3">
                      <a href="https://twitter.com/elonmusk" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current text-white">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                      <a href="https://www.linkedin.com/in/m-bilal-abid-md-ms-facp-mrcp-frcp-5a23b2261/" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current text-white">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>*/}
                  </div>
                 
                  
                  <div className="absolute top-4 right-4 z-30">
                    <button 
                      className="bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-teal-700 transition-colors shadow-lg"
                      onClick={() => setOpenLeader('bilal')}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section with News-like Background */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#f0f9ff] to-[#f8f0ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              ClinCell Leadership Expertise
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Specialized knowledge driving our precision oncology mission
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Translational Research Card */}
            <motion.div 
              className="relative p-0.5 rounded-2xl bg-gradient-to-r from-teal-400 to-purple-500 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0 }}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-white rounded-2xl p-8 h-full">
                <div className="bg-teal-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold mb-4 transition-all duration-300 ${
                  hoveredCard === 1 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-500' 
                    : 'text-gray-900'
                }`}>
                  Translational Research
                </h3>
                <p className="text-gray-600">
                  Accelerating lab discoveries to clinical applications for novel cancer therapies
                </p>
              </div>
            </motion.div>

            {/* Clinical Development Card */}
            <motion.div 
              className="relative p-0.5 rounded-2xl bg-gradient-to-r from-purple-400 to-teal-500 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-white rounded-2xl p-8 h-full">
                <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold mb-4 transition-all duration-300 ${
                  hoveredCard === 2 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-teal-500' 
                    : 'text-gray-900'
                }`}>
                  Clinical Reasearch Development
                </h3>
                <p className="text-gray-600">
                  Designing and implementing clinical research trials from Phase 1 to commercialization
                </p>
              </div>
            </motion.div>

            {/* Therapeutic Innovation Card */}
            <motion.div 
              className="relative p-0.5 rounded-2xl bg-gradient-to-r from-teal-400 to-purple-500 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-white rounded-2xl p-8 h-full">
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold mb-4 transition-all duration-300 ${
                  hoveredCard === 3 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-500' 
                    : 'text-gray-900'
                }`}>
                  Therapeutic Innovation
                </h3>
                <p className="text-gray-600">
                  Creating next-generation cell therapies and targeted oncology treatments
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <AnimatePresence>
        {/* Shaheen Khani Modal */}
        {openLeader === 'shaheen' && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Shaheen Khani, MD, MHA, MBA, CCRP</h3>
                  <button 
                    onClick={() => setOpenLeader(null)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/4 flex justify-center">
                    <img 
                      src="/images/shaheen_khani.png" 
                      alt="Shaheen Khani" 
                      className="rounded-xl w-40 h-40 object-cover"
                    />
                  </div>
                  <div className="md:w-3/4">
                    <p className="text-teal-600 font-medium mb-4 text-lg">COO</p>
                    
                    <div className="prose max-w-none">
                      <p className="text-gray-700 mb-4">
                        Dr. Khani is the visionary Founder of ClinCell. With over 15 years of experience in  scientific innovation and financial operations. Her unique blend of clinical trial proficiency, regulatory compliance mastery, and financial acumen drives transformative healthcare solutions.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Recognized in Marquis Who's Who in America (2024/2025), she advises Novartis and UBC on research strategy while serving as Founder & CEO of Tahqeeq and AI - a platform advancing ethical AI integration in clinical research..</p>
                      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">Professional Links:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li><a href="https://www.linkedin.com/in/shaheen-khani-md-mha-mba-ccrp-9a005084/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">LinkedIn Profile</a></li>
                            <li><a href="" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">Research Publications</a></li>

                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">Professional Highlights:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <p className="text-sm text-gray-600">
                       <li> American College of Healthcare Executive<br /></li>
                        <li>Texas Woman’s University Honor Society<br /></li>
                        <li>Society of Clinical Research Associates<br /></li>
                         <li>American Medical Associate<br /></li>
                          <li>Regulatory Affairs Professionals Society<br /></li>                                                                                                       
                             </p>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        
        {/* Muhammad Bilal Abid Modal */}
        {openLeader === 'bilal' && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Muhammad Bilal Abid, MD, MS, FACP, MRCP, FRCP</h3>
                  <button 
                    onClick={() => setOpenLeader(null)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/4 flex justify-center">
                    <img 
                      src="/images/1740637079936.jpeg" 
                      alt="Muhammad Bilal Abid" 
                      className="rounded-xl w-40 h-40 object-cover"
                    />
                  </div>
                  <div className="md:w-3/4">
                    <p className="text-purple-600 font-medium mb-4 text-lg">CEO</p>
                    
                    <div className="prose max-w-none">
                      <p className="text-gray-700 mb-4">
                        Dr. Bilal Abid is a clinician-scientist and oncologist with clinical and translational research expertise in stem cell transplantation, adoptive T-cell transfer, and engineered cancer therapeutics.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Dr. Abid completed clinical training in Internal Medicine, Infectious Diseases, and Hematology/Oncology, a master's in clinical & translational science, and a post-doc designing CAR T-cells. His clinical and translational research interests include tumor immune evasion, stem cell transplantation, and immuno-oncologic cancer therapeutics.
                      </p>
                      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">Professional Links:</h4>
                          <ul className="text-sm text-gray-600 space-y-2">
                            <li><a href="https://www.linkedin.com/in/m-bilal-abid-md-ms-facp-mrcp-frcp-5a23b2261/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">LinkedIn Profile</a></li>
                            <li><a href="https://pubmed.ncbi.nlm.nih.gov/?term=abid+MB&amp;sort=date" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">Research Publications</a></li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">Professional Affiliation:</h4>
                          <p className="text-sm text-gray-600">
                            Associate Professor of Medicine (Tenured),<br />
                            Hematology and Medical Oncology, UMC Cancer Center<br />
                            Texas Tech University Health Science Center
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LeadershipPage;