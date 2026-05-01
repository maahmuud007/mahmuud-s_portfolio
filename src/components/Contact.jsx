import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full shadow-[0_0_10px_rgba(52,211,153,0.5)] mx-auto"></div>
        <p className="mt-6 text-gray-400 max-w-lg mx-auto">
          Have a question or want to work together? Feel free to reach out. I'm always open to discussing new projects and opportunities.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Contact Info */}
        <motion.div 
          className="md:col-span-2 space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card p-6 flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-[#0b0f14] transition-all duration-300">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
              <p className="text-gray-400 text-sm">mahmudulhasan.mh444@gmail.com</p>
              <a href="mailto:mahmudulhasan.mh444@gmail.com" className="text-primary text-sm mt-2 inline-block hover:underline">Write me →</a>
            </div>
          </div>

          <div className="glass-card p-6 flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-[#0b0f14] transition-all duration-300">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
              <p className="text-gray-400 text-sm">01571239117</p>
              <a href="tel:01571239117" className="text-primary text-sm mt-2 inline-block hover:underline">Call me →</a>
            </div>
          </div>

          <div className="glass-card p-6 flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-[#0b0f14] transition-all duration-300">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
              <p className="text-gray-400 text-sm">Dhaka, Bangladesh</p>
              <span className="text-primary text-sm mt-2 inline-block opacity-70">Available for remote work</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="md:col-span-3"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300 pl-1">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0b0f14]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300 pl-1">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0b0f14]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300 pl-1">Message</label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full bg-[#0b0f14]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-600 resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                submitted 
                ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                : 'bg-primary text-[#0b0f14] hover:bg-accent hover:shadow-[0_0_20px_rgba(45,212,191,0.4)]'
              }`}
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-[#0b0f14] border-t-transparent rounded-full animate-spin"></div>
              ) : submitted ? (
                <>Message Sent Successfully!</>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={18} />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
