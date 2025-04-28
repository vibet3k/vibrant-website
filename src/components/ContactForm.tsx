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
    <div className="w-full max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-vt-blue font-lexend-deca">Chart Your Course</h2>
      
      {formStatus === 'success' ? (
        <div className="bg-vt-green/10 p-6 rounded-lg border border-vt-green">
          <h3 className="text-xl font-semibold text-vt-green mb-2">Message Sent Successfully!</h3>
          <p className="text-gray-700">Thank you for reaching out. We'll be in touch with you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-vt-blue focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-vt-blue focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-vt-blue focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-vt-blue focus:border-transparent"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              How can we help?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-vt-blue focus:border-transparent"
            />
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              className="flex items-center justify-center gap-2 bg-vt-blue text-white px-6 py-3 rounded-md font-medium hover:bg-vt-blue/90 transition-colors disabled:opacity-70"
            >
              {formStatus === 'submitting' ? (
                'Sending...'
              ) : (
                <>
                  Send Message
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </div>
          
          {formStatus === 'error' && (
            <div className="bg-red-50 p-4 rounded-md border border-red-200 text-red-600">
              Something went wrong. Please try again or contact us directly at info@vibet3k.com.
            </div>
          )}
        </form>
      )}
    </div>
  );
}