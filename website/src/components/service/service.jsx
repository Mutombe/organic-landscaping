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
      icon: <Columns4 className="w-16 h-16 text-white" />, 
      title: "Lawn Care", 
      description: "Precision mowing, fertilization, and maintenance to keep your lawn lush and healthy.",
      details: "Our comprehensive lawn care includes seasonal treatments, weed control, and sustainable fertilization methods that promote long-term grass health.",
      bgPattern: "data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='%23166534'/%3E%3Cpath d='M10 10h10v10H10zm20 0h10v10H30zM10 30h10v10H10zm20 0h10v10H30z' fill='%2315803d' fill-opacity='0.4'/%3E%3C/svg%3E"
    },
    { 
      icon: <TreeDeciduous className="w-16 h-16 text-white" />, 
      title: "Tree & Shrub Care", 
      description: "Professional pruning, health assessments, and strategic planting.",
      details: "We provide expert tree and shrub management, including pruning, disease prevention, and strategic placement to enhance your landscape's aesthetic and ecological balance.",
      bgPattern: "data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='%23166534'/%3E%3Cpath d='M20 20l20 20M0 40l40-40M40 60l20-20M20 80l60-60M80 80l-60 -60M60 100l40-40' stroke='%2315803d' stroke-width='2' stroke-opacity='0.4'/%3E%3C/svg%3E"
    },
    { 
      icon: <Flower2 className="w-16 h-16 text-white" />, 
      title: "Garden Design", 
      description: "Custom garden layouts using native and adaptive plant species.",
      details: "Our garden designers create beautiful, low-maintenance landscapes that reflect your property's unique characteristics and support local biodiversity.",
      bgPattern: "data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='%23166534'/%3E%3Ccircle cx='25' cy='25' r='10' fill='%2315803d' fill-opacity='0.4'/%3E%3Ccircle cx='75' cy='75' r='10' fill='%2315803d' fill-opacity='0.4'/%3E%3C/svg%3E"
    },
    { 
      icon: <Droplet className="w-16 h-16 text-white" />, 
      title: "Irrigation Systems", 
      description: "Efficient water management and smart irrigation solutions.",
      details: "We design and install water-efficient irrigation systems that minimize waste and keep your landscape healthy with minimal environmental impact.",
      bgPattern: "data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='%23166534'/%3E%3Cpath d='M25 25l25 25-25 25M75 25l-25 25 25 25' stroke='%2315803d' stroke-width='2' stroke-opacity='0.4'/%3E%3C/svg%3E"
    },
    { 
      icon: <SunMedium className="w-16 h-16 text-white" />, 
      title: "Hardscaping", 
      description: "Patios, walkways, and outdoor living spaces that complement natural elements.",
      details: "Transform your outdoor areas with sustainable hardscaping that integrates seamlessly with the natural landscape, creating functional and beautiful spaces.",
      bgPattern: "data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='%23166534'/%3E%3Cpath d='M0 0h50v50H0zm50 50h50v50H50z' fill='%2315803d' fill-opacity='0.4'/%3E%3C/svg%3E"
    },
    { 
      icon: <Shovel className="w-16 h-16 text-white" />, 
      title: "Sustainable Landscaping", 
      description: "Eco-friendly solutions that support local ecosystems.",
      details: "Our holistic approach focuses on creating landscapes that are not just beautiful, but also environmentally responsible and supportive of local wildlife.",
      bgPattern: "data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='%23166534'/%3E%3Cpath d='M0 0l100 100M100 0L0 100' stroke='%2315803d' stroke-width='2' stroke-opacity='0.4'/%3E%3C/svg%3E"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-24 bg-green-50">
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
            className="relative overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-all group"
            style={{
              backgroundImage: `url("pic2.jpg")`,
              backgroundSize: '200px 200px'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/90 to-green-500/90 group-hover:from-green-600/90 group-hover:to-green-800/90 transition-colors duration-300"></div>
            <div className="relative p-6">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white text-center mb-3">
                {service.title}
              </h3>
              <p className="text-green-100 text-center">
                {service.description}
              </p>
            </div>
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
              {React.cloneElement(selectedService.icon, { className: "w-16 h-16 text-green-600" })}
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