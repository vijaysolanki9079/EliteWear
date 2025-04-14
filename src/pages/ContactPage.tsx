
import { useState, FormEvent } from 'react';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Your message has been sent. We\'ll get back to you soon!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-brand-gray-500">
            Have questions about our products, orders, or anything else? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-brand-gray-100 p-8 rounded-lg text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-gold/10 mb-4">
              <Mail className="h-6 w-6 text-brand-gold" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email Us</h3>
            <p className="text-brand-gray-500 mb-3">For general inquiries and support</p>
            <a href="mailto:support@elitewear.in" className="font-medium hover:text-brand-gold transition-colors">
            support@elitewear.in
            </a>
          </div>
          
          <div className="bg-brand-gray-100 p-8 rounded-lg text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-gold/10 mb-4">
              <Phone className="h-6 w-6 text-brand-gold" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Call Us</h3>
            <p className="text-brand-gray-500 mb-3">Monday to Friday, 9am to 5pm</p>
            <a href="tel:+15551234567" className="font-medium hover:text-brand-gold transition-colors">
            +91 98765 43210
            </a>
          </div>
          
          <div className="bg-brand-gray-100 p-8 rounded-lg text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-gold/10 mb-4">
              <MapPin className="h-6 w-6 text-brand-gold" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
            <p className="text-brand-gray-500 mb-3">Our flagship store and offices</p>
            <address className="not-italic font-medium">
            78 Style Avenue, Fashion Hub,<br />
            Mumbai, Maharashtra, 400008
            </address>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="Product Inquiry">Product Inquiry</option>
                  <option value="Order Status">Order Status</option>
                  <option value="Returns & Exchanges">Returns & Exchanges</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message <span className="text-brand-red">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent resize-none"
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full sm:w-auto bg-brand-black hover:bg-black"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
          
          {/* Map or Image */}
          <div className="rounded-lg overflow-hidden h-[400px] lg:h-auto bg-brand-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Our store" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-brand-gray-100 p-6 rounded-lg">
              <h3 className="font-semibold mb-3">What are your shipping times?</h3>
              <p className="text-brand-gray-500">
                We process orders within 1-2 business days, and standard shipping takes 3-5 business days. Express shipping options are also available at checkout.
              </p>
            </div>
            <div className="bg-brand-gray-100 p-6 rounded-lg">
              <h3 className="font-semibold mb-3">How do I return an item?</h3>
              <p className="text-brand-gray-500">
                Returns are accepted within 30 days of purchase. Please visit our Returns page for detailed instructions on how to initiate a return.
              </p>
            </div>
            <div className="bg-brand-gray-100 p-6 rounded-lg">
              <h3 className="font-semibold mb-3">Do you ship internationally?</h3>
              <p className="text-brand-gray-500">
                Yes, we ship to most countries worldwide. International shipping times vary depending on the destination.
              </p>
            </div>
            <div className="bg-brand-gray-100 p-6 rounded-lg">
              <h3 className="font-semibold mb-3">How can I track my order?</h3>
              <p className="text-brand-gray-500">
                Once your order ships, you'll receive a confirmation email with a tracking number that you can use to monitor your delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
