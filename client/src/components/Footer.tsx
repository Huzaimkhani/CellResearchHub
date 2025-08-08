import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-teal-primary mb-4">ClinCell</div>
            <p className="text-gray-300 mb-4">
              Advancing medical treatments for a healthier world through innovative research and collaboration.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-primary transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-primary transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-primary transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Research</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/expertise"><span className="hover:text-teal-primary transition-colors duration-200 cursor-pointer">Our Expertise</span></Link></li>
              <li><Link href=""><span className="hover:text-teal-primary transition-colors duration-200 cursor-pointer">Publications (UnderDev)</span></Link></li>
              <li><Link href="/sponsors"><span className="hover:text-teal-primary transition-colors duration-200 cursor-pointer">Clinical Trials</span></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/Home"><span className="hover:text-teal-primary transition-colors duration-200 cursor-pointer">About Us</span></Link></li>
              {/*<li><Link href="/careers"><span className="hover:text-teal-primary transition-colors duration-200 cursor-pointer">Careers</span></Link></li>*/}
              {/*><Link href="/news"><span className="hover:text-teal-primary transition-colors duration-200 cursor-pointer">News</span></Link></li>*/}
              <li><Link href="/contact"><span className="hover:text-teal-primary transition-colors duration-200 cursor-pointer">Contact</span></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-teal-primary transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-teal-primary transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="hover:text-teal-primary transition-colors duration-200">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-teal-primary transition-colors duration-200">Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 ClinCell.org. All rights reserved. | Advancing humanity through medical research.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
