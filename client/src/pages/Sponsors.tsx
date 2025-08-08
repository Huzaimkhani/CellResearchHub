"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, Briefcase, Stethoscope, CheckCircle, XCircle } from "lucide-react";

const heroBackground = '/images/sponsorpciture.jpeg';

// Custom hook for mock database with localStorage persistence
const useMockDatabase = () => {
  const [submissions, setSubmissions] = useState<any[]>([]);

  // Initialize from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('formSubmissions');
      if (saved) {
        try {
          setSubmissions(JSON.parse(saved));
        } catch (e) {
          console.error('Error loading submissions:', e);
          localStorage.removeItem('formSubmissions');
        }
      }
    }
  }, []);

  const addSubmission = (submission: any) => {
    const newSubmission = {
      ...submission,
      id: Date.now().toString(),
      timestamp: new Date().toISOString()
    };
    
    const updated = [...submissions, newSubmission];
    setSubmissions(updated);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('formSubmissions', JSON.stringify(updated));
    }
    
    return Promise.resolve(newSubmission);
  };

  return { addSubmission };
};

const Sponsors = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [activeForm, setActiveForm] = useState('sponsor');
  const [formData, setFormData] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  
  const { addSubmission } = useMockDatabase();

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateCursor);
    return () => document.removeEventListener('mousemove', updateCursor);
  }, []);

  useEffect(() => {
    // Reset form when switching tabs
    setFormData({});
    setSubmitStatus('idle');
    setFormErrors({});
  }, [activeForm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    // Common validation for all forms
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    
    // Form-specific validation
    if (activeForm === 'patient') {
      if (!formData.fullName?.trim()) errors.fullName = "Full name is required";
      if (!formData.message?.trim()) errors.message = "Please describe your situation";
    }
    
    if (activeForm === 'sponsor') {
      if (!formData.companyName?.trim()) errors.companyName = "Company name is required";
      if (!formData.contactPerson?.trim()) errors.contactPerson = "Contact person is required";
      if (!formData.message?.trim()) errors.message = "Please describe your proposal";
    }
    
    if (activeForm === 'physician') {
      if (!formData.fullName?.trim()) errors.fullName = "Full name is required";
      if (!formData.institution?.trim()) errors.institution = "Institution is required";
      if (!formData.message?.trim()) errors.message = "Please describe how we can collaborate";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const submission = {
        formType: activeForm,
        data: formData
      };
      
      await addSubmission(submission);
      
      setSubmitStatus('success');
      setFormData({});
      
      // Auto-reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
      
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <Helmet>
        <title>Sponsor Opportunities | ClinCell - Advancing Cancer Therapies</title>
        <meta name="description" content="Partner with ClinCell to advance cancer therapies. Explore sponsor opportunities for clinical trials and research collaborations." />
        <meta property="og:title" content="Sponsor Opportunities | ClinCell" />
        <meta property="og:description" content="Collaborate with leading cancer researchers to develop breakthrough therapies" />
        <meta property="og:image" content="https://clincell.org/images/og-sponsors.jpg" />
        <link rel="canonical" href="https://clincell.org/sponsors" />
      </Helmet>
      
      {/* Animated Cursor Dot */}
      <motion.div 
        className="fixed w-4 h-4 rounded-full z-50 pointer-events-none"
        style={{
          left: cursorPos.x - 8,
          top: cursorPos.y - 8,
          background: 'linear-gradient(135deg, #0d9488, #7e22ce)',
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[80vh] flex items-center justify-center pt-32"
        style={{ 
          backgroundImage: `url(${heroBackground})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
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
            Sponsor Opportunities
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Partner with us to advance cancer therapies.
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
              Become a Partner
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 py-6 px-8 rounded-xl font-bold transition-all duration-300 hover:scale-105"
            >
              Contact Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Connect With Us
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Select your role to get started
          </motion.p>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-10">
            <div className="flex flex-wrap gap-2 sm:gap-4 bg-gray-100 p-2 rounded-xl">
              <Button 
                className={`flex items-center gap-2 py-4 px-6 rounded-lg transition-all ${
                  activeForm === 'patient' 
                    ? 'bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveForm('patient')}
              >
                <User className="w-5 h-5" />
                Patient
              </Button>
              
              <Button 
                className={`flex items-center gap-2 py-4 px-6 rounded-lg transition-all ${
                  activeForm === 'sponsor' 
                    ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveForm('sponsor')}
              >
                <Briefcase className="w-5 h-5" />
                Sponsor
              </Button>
              
              <Button 
                className={`flex items-center gap-2 py-4 px-6 rounded-lg transition-all ${
                  activeForm === 'physician' 
                    ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveForm('physician')}
              >
                <Stethoscope className="w-5 h-5" />
                Physician
              </Button>
            </div>
          </div>
          
          {/* Forms */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-6 sm:p-8"
            key={activeForm}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {activeForm === 'patient' && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                  <User className="w-6 h-6 text-teal-600" />
                  Patient Inquiry Form
                </h3>
                <p className="text-gray-600 mb-6">
                  Please provide your details and we'll help you with treatment options.
                </p>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input 
                        type="text" 
                        name="fullName"
                        value={formData.fullName || ''}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          formErrors.fullName ? 'border-red-500' : 'border-gray-300'
                        } focus:ring-2 focus:ring-teal-500 focus:border-transparent`}
                        placeholder="John Doe"
                      />
                      {formErrors.fullName && (
                        <p className="mt-1 text-red-500 text-sm">{formErrors.fullName}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email || ''}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          formErrors.email ? 'border-red-500' : 'border-gray-300'
                        } focus:ring-2 focus:ring-teal-500 focus:border-transparent`}
                        placeholder="john@example.com"
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-red-500 text-sm">{formErrors.email}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone || ''}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                    <textarea 
                      rows={4} 
                      name="message"
                      value={formData.message || ''}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        formErrors.message ? 'border-red-500' : 'border-gray-300'
                      } focus:ring-2 focus:ring-teal-500 focus:border-transparent`}
                      placeholder="Tell us about your situation"
                    ></textarea>
                    {formErrors.message && (
                      <p className="mt-1 text-red-500 text-sm">{formErrors.message}</p>
                    )}
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white py-6 rounded-xl font-bold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Patient Inquiry'}
                  </Button>
                </div>
              </form>
            )}
            
            {activeForm === 'sponsor' && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-purple-600" />
                  Sponsor Partnership Form
                </h3>
                <p className="text-gray-600 mb-6">
                  Interested in collaborating? Let's discuss how we can work together.
                </p>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                      <input 
                        type="text" 
                        name="companyName"
                        value={formData.companyName || ''}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          formErrors.companyName ? 'border-red-500' : 'border-gray-300'
                        } focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                        placeholder="Acme Pharmaceuticals"
                      />
                      {formErrors.companyName && (
                        <p className="mt-1 text-red-500 text-sm">{formErrors.companyName}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person *</label>
                      <input 
                        type="text" 
                        name="contactPerson"
                        value={formData.contactPerson || ''}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          formErrors.contactPerson ? 'border-red-500' : 'border-gray-300'
                        } focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                        placeholder="Jane Smith"
                      />
                      {formErrors.contactPerson && (
                        <p className="mt-1 text-red-500 text-sm">{formErrors.contactPerson}</p>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email || ''}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          formErrors.email ? 'border-red-500' : 'border-gray-300'
                        } focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                        placeholder="jane@company.com"
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-red-500 text-sm">{formErrors.email}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone || ''}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Partnership Interest</label>
                    <select 
                      name="interest"
                      value={formData.interest || ''}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select an option</option>
                      <option value="Clinical Trial Collaboration">Clinical Trial Collaboration</option>
                      <option value="Research Partnership">Research Partnership</option>
                      <option value="Funding Opportunity">Funding Opportunity</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                    <textarea 
                      rows={4} 
                      name="message"
                      value={formData.message || ''}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        formErrors.message ? 'border-red-500' : 'border-gray-300'
                      } focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                      placeholder="Tell us about your proposal"
                    ></textarea>
                    {formErrors.message && (
                      <p className="mt-1 text-red-500 text-sm">{formErrors.message}</p>
                    )}
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-6 rounded-xl font-bold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Request Partnership'}
                  </Button>
                </div>
              </form>
            )}
            
            {activeForm === 'physician' && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                  <Stethoscope className="w-6 h-6 text-indigo-600" />
                  Physician Collaboration Form
                </h3>
                <p className="text-gray-600 mb-6">
                  Connect with our team to discuss patient referrals or research opportunities.
                </p>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input 
                        type="text" 
                        name="fullName"
                        value={formData.fullName || ''}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          formErrors.fullName ? 'border-red-500' : 'border-gray-300'
                        } focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
                        placeholder="Dr. Alex Johnson"
                      />
                      {formErrors.fullName && (
                        <p className="mt-1 text-red-500 text-sm">{formErrors.fullName}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Institution/Hospital *</label>
                      <input 
                        type="text" 
                        name="institution"
                        value={formData.institution || ''}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          formErrors.institution ? 'border-red-500' : 'border-gray-300'
                        } focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
                        placeholder="City Medical Center"
                      />
                      {formErrors.institution && (
                        <p className="mt-1 text-red-500 text-sm">{formErrors.institution}</p>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email || ''}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          formErrors.email ? 'border-red-500' : 'border-gray-300'
                        } focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
                        placeholder="alex@medicalcenter.org"
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-red-500 text-sm">{formErrors.email}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone || ''}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Specialty</label>
                    <input 
                      type="text" 
                      name="specialty"
                      value={formData.specialty || ''}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Oncology"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                    <textarea 
                      rows={4} 
                      name="message"
                      value={formData.message || ''}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        formErrors.message ? 'border-red-500' : 'border-gray-300'
                      } focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
                      placeholder="How can we collaborate?"
                    ></textarea>
                    {formErrors.message && (
                      <p className="mt-1 text-red-500 text-sm">{formErrors.message}</p>
                    )}
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-6 rounded-xl font-bold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Physician Inquiry'}
                  </Button>
                </div>
              </form>
            )}

            {/* Submission status messages */}
            {submitStatus === 'success' && (
              <motion.div 
                className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center text-green-700">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span className="font-medium">Submission Successful!</span>
                </div>
                <p className="mt-1 text-green-600">
                  Thank you for your submission. We'll contact you shortly.
                </p>
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div 
                className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center text-red-700">
                  <XCircle className="h-5 w-5 mr-2" />
                  <span className="font-medium">Submission Failed</span>
                </div>
                <p className="mt-1 text-red-600">
                  {Object.keys(formErrors).length 
                    ? "Please fix the highlighted errors" 
                    : "There was an error processing your submission. Please try again."}
                </p>
              </motion.div>
            )}
          </motion.div>
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
            Ready to Accelerate Your Research?
          </motion.h2>
          <motion.p 
            className="text-xl text-white/90 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join our network of partners advancing the future of cancer therapy
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
              Request Partnership Details
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;