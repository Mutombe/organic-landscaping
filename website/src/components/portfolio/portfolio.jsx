import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Flower, 
  TreePine, 
  Home as HomeIcon, 
  Waves 
} from 'lucide-react';

// Placeholder for project images - replace with actual project photos
const projects = [
  {
    id: 1,
    title: "Urban Zen Garden",
    category: "residential",
    description: "Transforming a compact city backyard into a serene meditation space.",
    images: [
      'ls1.jpg',
    ]
  },
  {
    id: 2,
    title: "Sustainable Corporate Landscape",
    category: "commercial",
    description: "Creating an eco-friendly green space for a tech company's campus.",
    images: [
      '/ls2.jpg',
    ]
  },
  {
    id: 3,
    title: "Native Wildflower Meadow",
    category: "ecological",
    description: "Restoring a degraded area with native plant species to support local biodiversity.",
    images: [
      '/pic1.webp',
    ]
  },
  {
    id: 4,
    title: "Coastal Resilient Landscape",
    category: "environmental",
    description: "Designing a landscape that protects against erosion while maintaining natural beauty.",
    images: [
      '/pic2.jpg',
    ]
  }
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { 
      name: "residential", 
      icon: <HomeIcon className="w-6 h-6" /> 
    },
    { 
      name: "commercial", 
      icon: <TreePine className="w-6 h-6" /> 
    },
    { 
      name: "ecological", 
      icon: <Flower className="w-6 h-6" /> 
    },
    { 
      name: "environmental", 
      icon: <Waves className="w-6 h-6" /> 
    }
  ];

  const filteredProjects = selectedCategory 
    ? projects.filter(project => project.category === selectedCategory)
    : projects;

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      (prev + 1) % selectedProject.images.length
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      (prev - 1 + selectedProject.images.length) % selectedProject.images.length
    );
  };

  return (
    <div className="bg-green-50 min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 py-12"
      >
        <h1 className="text-4xl font-bold text-green-900 text-center mb-8">
          Our Transformative Projects
        </h1>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(
                selectedCategory === category.name ? null : category.name
              )}
              className={`
                flex items-center space-x-2 px-4 py-2 rounded-full 
                ${selectedCategory === category.name 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white text-green-700 border border-green-600'}
              `}
            >
              {category.icon}
              <span className="capitalize">{category.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleProjectClick(project)}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            >
              <img 
                src={project.images[0]} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-green-700 text-sm">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Project Image Carousel */}
                <div className="relative">
                  <img 
                    src={selectedProject.images[currentImageIndex]} 
                    alt={selectedProject.title}
                    className="w-full h-80 object-cover"
                  />
                  <button 
                    onClick={handlePrevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full"
                  >
                    ◀️
                  </button>
                  <button 
                    onClick={handleNextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full"
                  >
                    ▶️
                  </button>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h2 className="text-3xl font-bold text-green-900 mb-4">
                    {selectedProject.title}
                  </h2>
                  <p className="text-green-700 mb-4">
                    {selectedProject.description}
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600">Category:</span>
                    <span className="capitalize text-green-800">
                      {selectedProject.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Portfolio;