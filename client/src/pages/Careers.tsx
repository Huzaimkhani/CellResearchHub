import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, HeartHandshake, Users, Rocket, BadgeCheck, ShieldCheck, Award, 
  Building2, Globe, Handshake, Calendar, Shield, Baby, Gift, Coins, Send, 
  Sparkles, Merge, Scale, Star, Mail, Target, Layers, BookOpen, FlaskConical 
} from "lucide-react";

const Careers = () => {
  const [activeTab, setActiveTab] = useState("values");
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0f9ff] to-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-teal-600 to-purple-700">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-800/20 to-purple-800/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Careers at ClinCell
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join us in revolutionizing cancer therapy through innovative cellular research
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10"
          >
            <button className="bg-white text-teal-600 font-medium px-8 py-3 rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl flex items-center mx-auto">
              Explore Opportunities
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 space-x-6 md:space-x-10">
            {[
              { id: "values", label: "Our Values", icon: <HeartHandshake size={18} /> },
              { id: "life", label: "Life at ClinCell", icon: <Users size={18} /> },
              { id: "benefits", label: "Our Benefits", icon: <Gift size={18} /> },
              { id: "awards", label: "Our Awards", icon: <Award size={18} /> },
              { id: "positions", label: "Open Positions", icon: <Rocket size={18} /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 whitespace-nowrap px-3 py-2 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-teal-100 to-purple-100 text-teal-700 font-semibold"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <span>{tab.icon}</span>
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      {activeTab === "values" && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{
                  background: 'linear-gradient(135deg, #0d9488, #7e22ce)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Our Values
              </motion.h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do at ClinCell
              </p>
            </div>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {[
                {
                  title: "Innovation",
                  description: "We push the boundaries of medical research to create breakthrough therapies.",
                  icon: <Sparkles className="text-teal-600" size={32} />
                },
                {
                  title: "Collaboration",
                  description: "We work together across disciplines to achieve our shared mission.",
                  icon: <Merge className="text-purple-600" size={32} />
                },
                {
                  title: "Integrity",
                  description: "We conduct ourselves with the highest ethical standards in all our endeavors.",
                  icon: <Scale className="text-blue-500" size={32} />
                },
                {
                  title: "Excellence",
                  description: "We strive for excellence in everything we do, from research to patient care.",
                  icon: <Star className="text-teal-600" size={32} />
                }
              ].map((value, index) => (
                <motion.div 
                  key={index} 
                  className="relative"
                  variants={item}
                >
                  {/* Gradient Glow Background */}
                  <motion.div 
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400/20 to-purple-500/20 blur-md opacity-0"
                    whileHover={{ 
                      opacity: 1,
                      transition: { duration: 0.3 }
                    }}
                  />
                  
                  {/* Content Card */}
                  <motion.div 
                    className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group overflow-hidden z-10"
                    whileHover={{ 
                      y: -10,
                      borderColor: "rgba(13, 148, 136, 0.3)",
                      transition: { duration: 0.3 } 
                    }}
                  >
                    {/* Animated Gradient Border */}
                    <motion.div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                      style={{
                        background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.3), rgba(126, 34, 206, 0.3))',
                        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        maskComposite: 'exclude',
                        WebkitMaskComposite: 'xor',
                        padding: '1px',
                      }}
                      initial={{ opacity: 0 }}
                      whileHover={{ 
                        opacity: 1,
                        transition: { duration: 0.3 } 
                      }}
                    />
                    
                    <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-purple-700 group-hover:text-transparent group-hover:bg-clip-text">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Life at ClinCell Section */}
      {activeTab === "life" && (
        <section className="py-16 bg-gradient-to-br from-teal-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-5xl font-bold mb-6"
                style={{
                  background: 'linear-gradient(135deg, #0d9488, #7e22ce)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Life at ClinCell
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                In addition to transformative cancer therapies, competitive salaries, and state-of-the-art facilities, life at ClinCell offers unique benefits and a supportive community.
              </motion.p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  {[
                    {
                      title: "Build something important",
                      description: "Our team members agree: the work we do at ClinCell has special meaning, and they have a lot of responsibility. You will surprise yourself with what you can accomplish.",
                      icon: <Target className="text-teal-600" size={24} />
                    },
                    {
                      title: "Exceptional collaboration",
                      description: "There is nothing more important than finding the best people to fill every role. You will be energized by the team you get to work with.",
                      icon: <Layers className="text-purple-600" size={24} />
                    },
                    {
                      title: "Sense of community",
                      description: "Nothing makes us more inspired than engaging with our community and our cause. ClinCell is a lead supporter of cancer research foundations.",
                      icon: <BookOpen className="text-blue-500" size={24} />
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="relative"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      {/* Gradient Glow Background */}
                      <motion.div 
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400/20 to-purple-500/20 blur-md opacity-0"
                        whileHover={{ 
                          opacity: 1,
                          transition: { duration: 0.3 }
                        }}
                      />
                      
                      {/* Content Card */}
                      <motion.div 
                        className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group overflow-hidden z-10"
                        whileHover={{ 
                          y: -5,
                          borderColor: "rgba(13, 148, 136, 0.3)",
                          transition: { duration: 0.3 } 
                        }}
                      >
                        {/* Animated Gradient Border */}
                        <motion.div 
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                          style={{
                            background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.3), rgba(126, 34, 206, 0.3))',
                            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                            maskComposite: 'exclude',
                            WebkitMaskComposite: 'xor',
                            padding: '1px',
                          }}
                          initial={{ opacity: 0 }}
                          whileHover={{ 
                            opacity: 1,
                            transition: { duration: 0.3 } 
                          }}
                        />
                        
                        <div className="flex items-start">
                          <div className="mt-1 mr-4 text-teal-600">
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-purple-700 group-hover:text-transparent group-hover:bg-clip-text">
                              {item.title}
                            </h3>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    title: "Research Labs",
                    description: "State-of-the-art facilities for innovative work"
                  },
                  {
                    title: "Team Events",
                    description: "Regular gatherings to build strong relationships"
                  },
                  {
                    title: "Collaboration Spaces",
                    description: "Modern areas designed for teamwork and innovation"
                  },
                  {
                    title: "Community Outreach",
                    description: "Engaging with patients and advocacy groups"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="relative rounded-xl overflow-hidden aspect-square"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.03,
                      transition: { duration: 0.3 } 
                    }}
                  >
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-purple-500/20 z-0" />
                    
                    {/* Image Placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-purple-100 border-2 border-white border-dashed rounded-xl z-10 flex items-center justify-center">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center text-gray-400">
                        <FlaskConical className="h-8 w-8" />
                      </div>
                    </div>
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-20 flex flex-col justify-end p-6">
                      <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-sm text-white/80">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {activeTab === "benefits" && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{
                  background: 'linear-gradient(135deg, #0d9488, #7e22ce)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Our Benefits
              </motion.h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We invest in our team's wellbeing and professional growth
              </p>
            </div>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {[
                {
                  title: "3-day Weekend Monthly",
                  description: "Extra day off each month to promote mental wellness and work-life balance.",
                  icon: <Calendar className="text-teal-600" size={24} />
                },
                {
                  title: "Full Health Coverage",
                  description: "100% healthcare premium coverage for employees and their families.",
                  icon: <Shield className="text-purple-600" size={24} />
                },
                {
                  title: "Family Support",
                  description: "Generous paid parental leave and adoption assistance programs.",
                  icon: <Baby className="text-blue-500" size={24} />
                },
                {
                  title: "Unlimited Time Away",
                  description: "Flexible PTO policy to recharge and maintain balance.",
                  icon: <Gift className="text-teal-600" size={24} />
                },
                {
                  title: "Retirement Planning",
                  description: "3% company contribution to retirement savings with auto-enrollment.",
                  icon: <Coins className="text-purple-600" size={24} />
                },
                {
                  title: "Equity Compensation",
                  description: "Stock options and ESPP for all team members.",
                  icon: <BadgeCheck className="text-blue-500" size={24} />
                }
              ].map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="relative"
                  variants={item}
                >
                  {/* Gradient Glow Background */}
                  <motion.div 
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400/20 to-purple-500/20 blur-md opacity-0"
                    whileHover={{ 
                      opacity: 1,
                      transition: { duration: 0.3 }
                    }}
                  />
                  
                  {/* Content Card */}
                  <motion.div 
                    className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group overflow-hidden z-10"
                    whileHover={{ 
                      y: -10,
                      borderColor: "rgba(13, 148, 136, 0.3)",
                      transition: { duration: 0.3 } 
                    }}
                  >
                    {/* Animated Gradient Border */}
                    <motion.div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                      style={{
                        background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.3), rgba(126, 34, 206, 0.3))',
                        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        maskComposite: 'exclude',
                        WebkitMaskComposite: 'xor',
                        padding: '1px',
                      }}
                      initial={{ opacity: 0 }}
                      whileHover={{ 
                        opacity: 1,
                        transition: { duration: 0.3 } 
                      }}
                    />
                    
                    <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-purple-700 group-hover:text-transparent group-hover:bg-clip-text">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Awards Section */}
      {activeTab === "awards" && (
        <section className="py-16 bg-gradient-to-br from-teal-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{
                  background: 'linear-gradient(135deg, #0d9488, #7e22ce)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Our Awards
              </motion.h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Recognition for our commitment to excellence and employee satisfaction
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Great Place To Work",
                  subtitle: "Certified 2024-2025",
                  icon: <Award className="text-teal-600" size={32} />
                },
                {
                  title: "Top Work Places",
                  subtitle: "San Francisco Chronicle 2024",
                  icon: <Building2 className="text-purple-600" size={32} />
                },
                {
                  title: "Best Company Outlook",
                  subtitle: "Comportedly Awards 2024",
                  icon: <Rocket className="text-blue-500" size={32} />
                },
                {
                  title: "Best Company Culture",
                  subtitle: "Comportedly Awards 2024",
                  icon: <Users className="text-teal-600" size={32} />
                }
              ].map((award, index) => (
                <motion.div 
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Gradient Glow Background */}
                  <motion.div 
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400/20 to-purple-500/20 blur-md opacity-0"
                    whileHover={{ 
                      opacity: 1,
                      transition: { duration: 0.3 }
                    }}
                  />
                  
                  {/* Content Card */}
                  <motion.div 
                    className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group overflow-hidden z-10 text-center"
                    whileHover={{ 
                      y: -10,
                      borderColor: "rgba(13, 148, 136, 0.3)",
                      transition: { duration: 0.3 } 
                    }}
                  >
                    {/* Animated Gradient Border */}
                    <motion.div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                      style={{
                        background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.3), rgba(126, 34, 206, 0.3))',
                        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        maskComposite: 'exclude',
                        WebkitMaskComposite: 'xor',
                        padding: '1px',
                      }}
                      initial={{ opacity: 0 }}
                      whileHover={{ 
                        opacity: 1,
                        transition: { duration: 0.3 } 
                      }}
                    />
                    
                    <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform">
                      {award.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-purple-700 group-hover:text-transparent group-hover:bg-clip-text">
                      {award.title}
                    </h3>
                    <p className="text-gray-600">{award.subtitle}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Open Positions Section - Updated with "Coming Soon" */}
      {activeTab === "positions" && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're currently preparing exciting new roles. Stay connected for upcoming opportunities.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <motion.div 
                className="bg-gradient-to-r from-teal-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-gray-100 mb-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="text-teal-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Exciting Roles Coming Soon</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  We're currently restructuring our teams and will be posting new positions shortly. 
                  Check back soon or submit your resume to be the first to know about new opportunities.
                </p>
                <button className="bg-teal-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors shadow-md inline-flex items-center">
                  Notify Me When Positions Open
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </motion.div>

              {/* "Don't see a position" card */}
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-8">
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Make a Difference?</h3>
                    <p className="text-gray-600 mb-4">
                      Don't see a position that fits? We're always looking for talented individuals who
                      share our passion for advancing medicine.
                    </p>
                  </div>
                  <div className="md:w-1/3">
                    <button className="w-full bg-teal-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors shadow-md flex items-center justify-center">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Us Your Resume
                    </button>
                  </div>
                </div>
              </motion.div>
              
              {/* Coming soon positions */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Upcoming Opportunities</h3>
                <div className="grid gap-6">
                  {[
                    {
                      title: "Senior Research Scientist",
                      department: "Research & Development",
                      status: "Coming Soon"
                    },
                    {
                      title: "Clinical Trial Coordinator",
                      department: "Clinical Operations",
                      status: "Coming Soon"
                    },
                    {
                      title: "Bioinformatics Specialist",
                      department: "Data Science",
                      status: "Coming Soon"
                    }
                  ].map((position, index) => (
                    <motion.div 
                      key={index}
                      className="bg-white rounded-xl p-6 border-2 border-dashed border-gray-300 group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + (index * 0.1) }}
                      whileHover={{ 
                        x: 5,
                        borderColor: "#0d9488",
                        transition: { duration: 0.3 } 
                      }}
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{position.title}</h3>
                          <div className="flex flex-wrap gap-3 mt-2">
                            <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">{position.department}</span>
                            <span className="text-sm bg-amber-100 text-amber-800 px-3 py-1 rounded-full">{position.status}</span>
                          </div>
                        </div>
                        <button className="mt-4 md:mt-0 text-gray-500 font-medium flex items-center opacity-70 cursor-not-allowed">
                          Position Coming Soon
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}


      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Ready to Advance Cancer Research?
          </motion.h2>
          <motion.p 
            className="text-xl text-white/90 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Join our mission to develop breakthrough therapies and transform patient lives worldwide.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <button className="bg-white text-teal-600 font-medium px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center">
              View Open Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-transparent border-2 border-white text-white font-medium px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
              Contact Our Team
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;