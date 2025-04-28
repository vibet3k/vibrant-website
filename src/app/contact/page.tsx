'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      // Here we'll use Formspree as a simple solution
      // Replace 'YOUR_FORM_ID' with the form ID you get from Formspree
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Contact from ${formData.name} at ${formData.company}`
        })
      });
      
      if (response.ok) {
        setFormStatus('success');
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="w-full">
      {formStatus === 'success' ? (
        <div className="bg-vt-green/10 p-6 rounded-lg border border-vt-green">
          <h3 className="text-xl font-semibold text-vt-green mb-2 font-lexend-deca">Message Sent Successfully!</h3>
          <p className="text-gray-700 font-radley">Thank you for reaching out. We'll be in touch with you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 font-lexend-deca">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:ring-2 focus:ring-vt-blue focus:border-transparent transition-all duration-200 font-radley"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1 font-lexend-deca">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:ring-2 focus:ring-vt-blue focus:border-transparent transition-all duration-200 font-radley"
                placeholder="Your company"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 font-lexend-deca">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:ring-2 focus:ring-vt-blue focus:border-transparent transition-all duration-200 font-radley"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 font-lexend-deca">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:ring-2 focus:ring-vt-blue focus:border-transparent transition-all duration-200 font-radley"
                placeholder="(000) 000-0000"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 font-lexend-deca">
              How can we help your business?
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:ring-2 focus:ring-vt-blue focus:border-transparent transition-all duration-200 font-radley"
              placeholder="Tell us about your IT challenges and goals..."
            />
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              className="flex items-center justify-center gap-2 bg-vt-blue text-white px-8 py-3 rounded-md font-medium hover:bg-vt-blue/90 transition-colors disabled:opacity-70 font-lexend-deca relative overflow-hidden group"
            >
              <span className="relative z-10">
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </span>
              <span className="relative z-10 group-hover:translate-x-1 transition-transform">
                <ArrowRight size={18} />
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-full bg-vt-pink group-hover:w-full transition-all duration-300"></span>
            </button>
          </div>
          
          {formStatus === 'error' && (
            <div className="bg-red-50 p-4 rounded-md border border-red-200 text-red-600 font-radley">
              Something went wrong. Please try again or contact us directly at info@vibet3k.com.
            </div>
          )}
        </form>
      )}
    </div>
  );
}