import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Leaf, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin 
} from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { 
      icon: <Facebook className="w-6 h-6" />, 
      href: "#" 
    },
    { 
      icon: <Instagram className="w-6 h-6" />, 
      href: "#" 
    },
    { 
      icon: <Twitter className="w-6 h-6" />, 
      href: "#" 
    },
    { 
      icon: <Linkedin className="w-6 h-6" />, 
      href: "#" 
    }
  ];

  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Leaf className="w-10 h-10 text-green-300" />
              <h2 className="text-2xl font-bold">Organic Landscaping</h2>
            </div>
            <p className="text-green-200 mb-4">
              Transforming spaces, nurturing ecosystems, and creating sustainable landscapes that connect people with nature.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-green-300 hover:text-white"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-300">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Contact", path: "/contact" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-green-200 hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-300">
              Stay Connected
            </h3>
            <p className="text-green-200 mb-4">
              Subscribe to our newsletter for landscaping tips, project updates, and eco-friendly insights.
            </p>
            <form className="flex">
              <input 
                type="email"
                placeholder="Enter your email"
                className="flex-grow p-2 text-green-900 rounded-l-md focus:outline-none"
              />
              <button 
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-r-md hover:bg-green-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-green-700 text-center">
          <p className="text-green-300">
            © {new Date().getFullYear()} Organic Landscaping. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;