'use client';

import { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

interface FormErrors {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Validation functions
  const validateEmail = (email: string): string | undefined => {
    if (!email) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    return undefined;
  };

  const validatePhone = (phone: string): string | undefined => {
    if (!phone) return undefined; // Phone is optional
    const phoneRegex = /^[\d\s\-\(\)]+$/;
    if (!phoneRegex.test(phone)) return 'Please enter a valid phone number';
    if (phone.replace(/\D/g, '').length < 10) return 'Phone number must be at least 10 digits';
    return undefined;
  };

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        return !value ? 'Name is required' : value.length < 2 ? 'Name must be at least 2 characters' : undefined;
      case 'company':
        return !value ? 'Company is required' : undefined;
      case 'email':
        return validateEmail(value);
      case 'phone':
        return validatePhone(value);
      case 'message':
        return !value ? 'Message is required' : value.length < 10 ? 'Message must be at least 10 characters' : undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: FormErrors = {
      name: validateField('name', formData.name),
      company: validateField('company', formData.company),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      message: validateField('message', formData.message),
    };

    // Mark all fields as touched
    setTouched({
      name: true,
      company: true,
      email: true,
      phone: true,
      message: true,
    });

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some(error => error !== undefined);
    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    setFormStatus('submitting');
    
    try {
      const response = await fetch('https://formspree.io/f/mzzrdppe', {
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
        setErrors({});
        setTouched({});
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
          <p className="text-gray-700 font-lexend-deca">Thank you for reaching out. We&apos;ll be in touch with you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 font-lexend-deca">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border-2 rounded-md focus:ring-2 focus:ring-vt-blue focus:border-transparent transition-all duration-200 font-lexend-deca ${
                  errors.name && touched.name ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="Your name"
              />
              {errors.name && touched.name && (
                <p className="mt-1 text-sm text-red-600 font-lexend-deca">{errors.name}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1 font-lexend-deca">
                Company <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border-2 rounded-md focus:ring-2 focus:ring-vt-blue focus:border-transparent transition-all duration-200 font-lexend-deca ${
                  errors.company && touched.company ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="Your company"
              />
              {errors.company && touched.company && (
                <p className="mt-1 text-sm text-red-600 font-lexend-deca">{errors.company}</p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 font-lexend-deca">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border-2 rounded-md focus:ring-2 focus:ring-vt-blue focus:border-transparent transition-all duration-200 font-lexend-deca ${
                  errors.email && touched.email ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && touched.email && (
                <p className="mt-1 text-sm text-red-600 font-lexend-deca">{errors.email}</p>
              )}
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
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border-2 rounded-md focus:ring-2 focus:ring-vt-blue focus:border-transparent transition-all duration-200 font-lexend-deca ${
                  errors.phone && touched.phone ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="(000) 000-0000"
              />
              {errors.phone && touched.phone && (
                <p className="mt-1 text-sm text-red-600 font-lexend-deca">{errors.phone}</p>
              )}
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 font-lexend-deca">
              How can we help your business? <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 border-2 rounded-md focus:ring-2 focus:ring-vt-blue focus:border-transparent transition-all duration-200 font-lexend-deca ${
                errors.message && touched.message ? 'border-red-500' : 'border-gray-200'
              }`}
              placeholder="Tell us about your IT challenges and goals..."
            />
            {errors.message && touched.message && (
              <p className="mt-1 text-sm text-red-600 font-lexend-deca">{errors.message}</p>
            )}
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              className="flex items-center justify-center gap-2 bg-vt-blue text-white px-8 py-3 rounded-md font-medium hover:bg-vt-blue/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed font-lexend-deca relative overflow-hidden group"
            >
              {formStatus === 'submitting' ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span className="relative z-10">Send Message</span>
                  <span className="relative z-10 group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={18} />
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-full bg-vt-pink group-hover:w-full transition-all duration-300"></span>
                </>
              )}
            </button>
          </div>
          
          {formStatus === 'error' && (
            <div className="bg-red-50 p-4 rounded-md border border-red-200 text-red-600 font-lexend-deca">
              Something went wrong. Please try again or contact us directly at info@vibet3k.com.
            </div>
          )}
        </form>
      )}
    </div>
  );
}