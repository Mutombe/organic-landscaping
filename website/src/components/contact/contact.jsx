import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  Check, 
  AlertTriangle 
} from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const LeafletMap = () => {
  // Coordinates for Harare, Zimbabwe
  const position = [-17.8292, 31.0522];

  return (
    <MapContainer 
      center={position} 
      zoom={13} 
      scrollWheelZoom={false}
      className="w-full h-96 z-10"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Organic Landscaping <br /> 651 North Road, Harare
        </Popup>
      </Marker>
    </MapContainer>
  );
};


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitStatus('success');
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="bg-green-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-green-900 mb-4">
            Let's Grow Something Beautiful Together
          </h1>
          <p className="text-green-700 max-w-2xl mx-auto">
            Have a vision for your outdoor space? We're here to turn it into reality. 
            Reach out and let's start your landscaping journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold text-green-900 mb-6">
              Contact Information
            </h2>
            
            <div className="space-y-4">
              {[
                { 
                  icon: <MapPin className="text-green-600 w-6 h-6" />, 
                  text: "651 North Road, Harare" 
                },
                { 
                  icon: <Phone className="text-green-600 w-6 h-6" />, 
                  text: "+263 78 448 8794" 
                },
                { 
                  icon: <Mail className="text-green-600 w-6 h-6" />, 
                  text: "info@organiclandscaping.com" 
                }
              ].map((contact, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-4"
                >
                  {contact.icon}
                  <span className="text-green-800">{contact.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-green-900 mb-4">
                Business Hours
              </h3>
              <div className="text-green-700">
                <p>Monday - Friday: 8am - 6pm</p>
                <p>Saturday: 9am - 3pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <form 
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold text-green-900 mb-6">
                Request a Consultation
              </h2>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-100 text-green-800 p-4 rounded-md mb-4 flex items-center"
                >
                  <Check className="mr-2 text-green-600" />
                  Thank you! We'll be in touch soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-100 text-red-800 p-4 rounded-md mb-4 flex items-center"
                >
                  <AlertTriangle className="mr-2 text-red-600" />
                  Please fill out all required fields.
                </motion.div>
              )}

              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number (Optional)"
                  className="w-full p-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows="4"
                  className="w-full p-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-green-600 text-white p-3 rounded-md flex items-center justify-center space-x-2 hover:bg-green-700 transition"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="p-6">
            <h2 className="text-3xl font-bold text-green-900 mb-4">
              Our Location
            </h2>
            <p className="text-green-700 mb-6">
              We're centrally located and ready to transform landscapes across the region. 
              Our ecological approach means we're always close to nature.
            </p>
          </div>
          {/* Placeholder for map - in a real implementation, you'd use Google Maps or similar */}
          <div className="w-full h-96 bg-green-100 flex items-center justify-center">
            <div className="text-center">
              <LeafletMap />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;