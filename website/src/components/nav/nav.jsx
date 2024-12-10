import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Leaf, Home, Camera, Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Navigation items with icons and paths
  const navItems = [
    { icon: <Home />, label: 'Home', path: '/' },
    { icon: <Leaf />, label: 'Services', path: '/services' },
    { icon: <Camera />, label: 'Portfolio', path: '/portfolio' },
    { icon: <Phone />, label: 'Contact', path: '/contact' }
  ];

  // Determine if a link is active
  const isActiveLink = (path) => location.pathname === path;

  // Animation variants for mobile menu
  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      y: -50,
      transition: {
        duration: 0.3
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 120
      }
    }
  };

  // Navigation link component with shared styling
  const NavLink = ({ item }) => (
    <Link
      to={item.path}
      className={`
        flex items-center space-x-2 
        py-2 px-3 rounded-lg 
        transition-all duration-300 
        ${isActiveLink(item.path) 
          ? 'bg-green-600 text-white' 
          : 'hover:bg-green-700 hover:text-green-100'}
      `}
      onClick={() => setIsOpen(false)}
    >
      {item.icon}
      <span>{item.label}</span>
    </Link>
  );

  return (
    <nav className="bg-green-800 text-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo with animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          <Leaf className="text-green-300 w-10 h-10" />
          <span className="text-2xl font-bold tracking-wider">Tru Nature Landscaping</span>
        </motion.div>
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <motion.button 
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </motion.button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <motion.div
              key={item.path}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink item={item} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:hidden absolute top-full left-0 w-full bg-green-800 shadow-lg"
          >
            <div className="flex flex-col items-center space-y-4 py-6 px-4">
              {navItems.map((item) => (
                <NavLink key={item.path} item={item} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;