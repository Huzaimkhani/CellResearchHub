import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Send, Linkedin, Twitter, Youtube, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";


const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // TODO: Implement actual form submission logic
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We will get back to you soon.",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      organization: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-teal-primary mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our team to learn more about our research, partnership opportunities, or career openings
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-teal-primary mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="border-teal-primary focus:ring-2 focus:ring-teal-primary focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="border-teal-primary focus:ring-2 focus:ring-teal-primary focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="border-teal-primary focus:ring-2 focus:ring-teal-primary focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="organization">Organization</Label>
                  <Input
                    id="organization"
                    value={formData.organization}
                    onChange={(e) => handleInputChange("organization", e.target.value)}
                    className="border-teal-primary focus:ring-2 focus:ring-teal-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                    <SelectTrigger className="border-teal-primary focus:ring-2 focus:ring-teal-primary">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                      <SelectItem value="clinical-trial">Clinical Trial Information</SelectItem>
                      <SelectItem value="careers">Career Opportunities</SelectItem>
                      <SelectItem value="media">Media Inquiry</SelectItem>
                      <SelectItem value="general">General Question</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Please provide details about your inquiry..."
                    className="border-teal-primary focus:ring-2 focus:ring-teal-primary focus:border-transparent"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-blue-hint text-white hover:bg-blue-600"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office Information */}
            <Card className="bg-muted">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-teal-primary mb-6">Our Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-teal-primary text-white rounded-lg p-3 w-12 h-12 flex items-center justify-center mr-4">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-text">Address</h4>
                      <p className="text-muted-foreground">800 Bonaventure Wy #102<br /> Sugar Land,TX 77479<br />United States</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-purple-soft text-white rounded-lg p-3 w-12 h-12 flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-text">Phone</h4>
                      <p className="text-muted-foreground">+1 (832) 858-1120</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-hint text-white rounded-lg p-3 w-12 h-12 flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-text">Email</h4>
                      <p className="text-muted-foreground">info@clincell.org</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Options */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-teal-primary mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <Card className="border-gray-200 hover:border-teal-primary transition-colors duration-200">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-text mb-2">Partnerships & Collaborations</h4>
                      <p className="text-muted-foreground text-sm mb-3">Interested in partnering with ClinCell?</p>
                      <a href="mailto:partnerships@clincell.org" className="text-blue-hint hover:text-blue-600 text-sm font-medium flex items-center">
                info@clincell.org <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-gray-200 hover:border-teal-primary transition-colors duration-200">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-text mb-2">Clinical Trial Information</h4>
                      <p className="text-muted-foreground text-sm mb-3">Questions about our ongoing studies?</p>
                      <a href="mailto:clinicaltrials@clincell.org" className="text-blue-hint hover:text-blue-600 text-sm font-medium flex items-center">
              info@clincell.org<ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-gray-200 hover:border-teal-primary transition-colors duration-200">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-text mb-2">Career Opportunities</h4>
                      <p className="text-muted-foreground text-sm mb-3">Join our team of innovators</p>
                      <a href="mailto:careers@clincell.org" className="text-blue-hint hover:text-blue-600 text-sm font-medium flex items-center">
           Coming Soon <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-gradient-to-r from-teal-primary to-blue-hint text-white text-center">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Follow Our Research</h3>
                <p className="mb-6">Stay connected for the latest updates and breakthroughs</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="bg-white text-teal-primary w-12 h-12 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors duration-200">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-white text-teal-primary w-12 h-12 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors duration-200">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-white text-teal-primary w-12 h-12 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors duration-200">
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;