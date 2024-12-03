import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  TreePine, 
  Sprout, 
  Sun, 
  Droplets, 
  ArrowRight 
} from 'lucide-react';

// Placeholder for actual image imports - you'll replace these with your actual image paths
const landscapeImages = [
  '/pic2.jpg',
  '/pic1.webp',
  '/images/landscape3.jpg',
  '/images/landscape4.jpg',
  '/images/landscape5.jpg'
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    enter: { opacity: 0, x: 100 },
    center: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 1,
        ease: "easeInOut"
      }
    },
    exit: { opacity: 0, x: -100 }
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % landscapeImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + landscapeImages.length) % landscapeImages.length);
  };

  return (
    <div className="bg-green-50">
      {/* Hero Section with Carousel */}
      <div className="relative h-[70vh] overflow-hidden">
        {/* Image Carousel */}
        <motion.div 
          key={currentImageIndex}
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <img 
            src={landscapeImages[currentImageIndex]} 
            alt="Landscape Design" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </motion.div>

        {/* Navigation Buttons */}
        <button 
          onClick={handlePrevImage} 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full"
        >
        
        </button>
        <button 
          onClick={handleNextImage} 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full"
        >
          
        </button>

        {/* Hero Text Overlay */}
        <motion.div 
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4"
        >
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
            Organic Landscaping
          </h1>
          <p className="text-xl max-w-2xl mb-8 drop-shadow-md">
            Transforming Spaces, Nurturing Nature: Sustainable Landscapes That Tell Your Unique Story
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-green-600 text-white px-6 py-3 rounded-full flex items-center space-x-2"
          >
            <span>Explore Our Services</span>
            <ArrowRight />
          </motion.button>
        </motion.div>
      </div>

      {/* Philosophy Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-green-900 mb-4">
            Our Ecological Promise
          </h2>
          <p className="text-xl text-green-700 max-w-3xl mx-auto">
            We don't just design landscapes. We create living ecosystems that connect people, plants, and the environment in harmony.
          </p>
        </motion.div>

        {/* Key Principles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: <Leaf className="w-16 h-16 text-green-600" />, 
              title: "Sustainability", 
              description: "Every design minimizes environmental impact and promotes biodiversity." 
            },
            { 
              icon: <TreePine className="w-16 h-16 text-green-600" />, 
              title: "Native Ecology", 
              description: "We prioritize local plant species that naturally thrive in your environment." 
            },
            { 
              icon: <Sprout className="w-16 h-16 text-green-600" />, 
              title: "Adaptive Design", 
              description: "Landscapes that evolve and grow with your changing needs and local conditions." 
            }
          ].map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all"
            >
              <div className="flex justify-center mb-4">
                {principle.icon}
              </div>
              <h3 className="text-2xl font-semibold text-green-800 mb-3">
                {principle.title}
              </h3>
              <p className="text-green-700">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;