import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    Columns4, 
  TreeDeciduous, 
  Flower2, 
  Droplet, 
  SunMedium, 
  Shovel 
} from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { 
      icon: <Columns4 className="w-16 h-16 text-green-600" />, 
      title: "Lawn Care", 
      description: "Precision mowing, fertilization, and maintenance to keep your lawn lush and healthy.",
      details: "Our comprehensive lawn care includes seasonal treatments, weed control, and sustainable fertilization methods that promote long-term grass health."
    },
    { 
      icon: <TreeDeciduous className="w-16 h-16 text-green-600" />, 
      title: "Tree & Shrub Care", 
      description: "Professional pruning, health assessments, and strategic planting.",
      details: "We provide expert tree and shrub management, including pruning, disease prevention, and strategic placement to enhance your landscape's aesthetic and ecological balance."
    },
    { 
      icon: <Flower2 className="w-16 h-16 text-green-600" />, 
      title: "Garden Design", 
      description: "Custom garden layouts using native and adaptive plant species.",
      details: "Our garden designers create beautiful, low-maintenance landscapes that reflect your property's unique characteristics and support local biodiversity."
    },
    { 
      icon: <Droplet className="w-16 h-16 text-green-600" />, 
      title: "Irrigation Systems", 
      description: "Efficient water management and smart irrigation solutions.",
      details: "We design and install water-efficient irrigation systems that minimize waste and keep your landscape healthy with minimal environmental impact."
    },
    { 
      icon: <SunMedium className="w-16 h-16 text-green-600" />, 
      title: "Hardscaping", 
      description: "Patios, walkways, and outdoor living spaces that complement natural elements.",
      details: "Transform your outdoor areas with sustainable hardscaping that integrates seamlessly with the natural landscape, creating functional and beautiful spaces."
    },
    { 
      icon: <Shovel className="w-16 h-16 text-green-600" />, 
      title: "Sustainable Landscaping", 
      description: "Eco-friendly solutions that support local ecosystems.",
      details: "Our holistic approach focuses on creating landscapes that are not just beautiful, but also environmentally responsible and supportive of local wildlife."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center text-green-900 mb-12"
      >
        Our Professional Services
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            onClick={() => setSelectedService(service)}
            className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-all"
          >
            <div className="flex justify-center mb-4">
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold text-green-800 text-center mb-3">
              {service.title}
            </h3>
            <p className="text-green-700 text-center">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      {selectedService && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedService(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-8 rounded-lg max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center mb-6">
              {selectedService.icon}
            </div>
            <h2 className="text-3xl font-bold text-green-900 text-center mb-4">
              {selectedService.title}
            </h2>
            <p className="text-green-700">
              {selectedService.details}
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Services;