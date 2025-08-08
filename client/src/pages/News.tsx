import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Newspaper, FlaskConical, Handshake, Award } from "lucide-react";

const News = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const categories = [
    { id: "all", label: "All News" },
    { id: "research", label: "Research" },
    { id: "partnerships", label: "Partnerships" },
    { id: "awards", label: "Awards" },
    { id: "clinical", label: "Clinical Trials" }
  ];

  const newsItems = [
    {
      id: 1,
      title: "Breakthrough in D-Domain CAR-T Therapy Trials",
      date: "June 15, 2025",
      category: "research",
      description: "Recent Phase II trials show a 20% increase in efficacy for melanoma treatment, with complete response rates exceeding expectations.",
      image: "https://images.unsplash.com/photo-1582560475093-ba66accbc424?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 2,
      title: "New Research Partnership Announced",
      date: "May 28, 2025",
      category: "partnerships",
      description: "ClinCell collaborates with leading cancer institute to accelerate development of novel lung cancer therapies.",
      image: "https://images.unsplash.com/photo-1579165466949-3180a3d056e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 3,
      title: "Innovation Award for D-Domain Technology",
      date: "May 10, 2025",
      category: "awards",
      description: "ClinCell honored at Biotech Summit for groundbreaking CAR-T cell engineering approach.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 4,
      title: "Phase III Clinical Trials Approved",
      date: "April 22, 2025",
      category: "clinical",
      description: "FDA grants approval for Phase III trials of our dual-domain CAR-T therapy for solid tumors.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 5,
      title: "New Publication in Nature Medicine",
      date: "April 5, 2025",
      category: "research",
      description: "Our research team publishes groundbreaking findings on tumor microenvironment modulation.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 6,
      title: "Patient Advocacy Partnership",
      date: "March 18, 2025",
      category: "partnerships",
      description: "Collaborating with patient advocacy groups to improve clinical trial accessibility nationwide.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    }
  ];

  const filteredNews = activeCategory === "all" 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

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
            Latest News
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Stay updated on our advancements in cancer therapy research and company milestones
          </motion.p>
        </div>
      </section>

      {/* Category Navigation */}
      <div className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 space-x-4 md:space-x-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center whitespace-nowrap px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-teal-100 to-purple-100 text-teal-700 font-semibold"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <span className="font-medium">{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* News Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((news) => (
              <motion.div 
                key={news.id}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -10 }}
              >
                {/* Gradient Glow Background */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400/20 to-purple-500/20 blur-md opacity-0"
                  whileHover={{ 
                    opacity: 1,
                    transition: { duration: 0.3 }
                  }}
                />
                
                {/* News Card */}
                <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden z-10 h-full flex flex-col">
                  {/* Animated Gradient Border */}
                  <motion.div 
                    className="absolute inset-0 rounded-2xl opacity-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.3), rgba(126, 34, 206, 0.3))',
                      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      maskComposite: 'exclude',
                      WebkitMaskComposite: 'xor',
                      padding: '1px',
                    }}
                    whileHover={{ 
                      opacity: 1,
                      transition: { duration: 0.3 } 
                    }}
                  />
                  
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${news.image})` }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                      {news.category.charAt(0).toUpperCase() + news.category.slice(1)}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-sm">{news.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {news.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
                      {news.description}
                    </p>
                    
                    <button className="text-teal-600 font-medium flex items-center group mt-auto">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredNews.length === 0 && (
            <div className="text-center py-16">
              <Newspaper className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">No news in this category</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                There are currently no news items in this category. Please check back later or browse all news.
              </p>
              <button 
                onClick={() => setActiveCategory("all")}
                className="mt-6 bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors"
              >
                View All News
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-50 to-purple-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
                <p className="text-gray-600 mb-6">
                  Subscribe to our newsletter for the latest research updates, event announcements, and company news.
                </p>
                <div className="flex space-x-4">
                  <div className="bg-gray-100 rounded-full p-3">
                    <Newspaper className="h-6 w-6 text-teal-600" />
                  </div>
                  <div className="bg-gray-100 rounded-full p-3">
                    <FlaskConical className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="bg-gray-100 rounded-full p-3">
                    <Award className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
              </div>
              
              <div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-teal-600" />
                      <span className="ml-2 text-sm text-gray-600">Research Updates</span>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-teal-600" defaultChecked />
                      <span className="ml-2 text-sm text-gray-600">Company News</span>
                    </label>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-teal-600 to-purple-700 text-white font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                  Subscribe to Newsletter
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Research</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Groundbreaking studies and publications from our research team
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div 
              className="relative rounded-2xl overflow-hidden"
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600/80 to-purple-700/80 z-10 flex items-center justify-center text-center p-8">
                <div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 inline-block mb-4">
                    <span className="text-white font-medium">New Publication</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Dual-Domain CAR-T Cells Show Remarkable Efficacy in Solid Tumors</h3>
                  <p className="text-white/90 mb-6 max-w-xl mx-auto">
                    Our latest study demonstrates unprecedented response rates in previously treatment-resistant cancers.
                  </p>
                  <button className="bg-white text-teal-600 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                    Read the Publication
                  </button>
                </div>
              </div>
              <div 
                className="h-96 bg-cover bg-center"
                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800)" }}
              />
            </motion.div>
            
            <div className="space-y-8">
              {[
                {
                  title: "Clinical Trial Results Published",
                  description: "Phase II results for our novel lymphoma therapy show 85% response rate.",
                  icon: <FlaskConical className="text-teal-600" />
                },
                {
                  title: "New Research Partnership",
                  description: "Collaborating with MIT on next-gen CAR-T delivery systems.",
                  icon: <Handshake className="text-purple-600" />
                },
                {
                  title: "Innovation Award Received",
                  description: "Recognized for breakthrough in tumor microenvironment modulation.",
                  icon: <Award className="text-blue-500" />
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start p-6 bg-gray-50 rounded-2xl border border-gray-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-teal-50 rounded-lg p-3 mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                    <button className="mt-3 text-teal-600 font-medium flex items-center text-sm">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;