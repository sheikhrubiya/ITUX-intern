import React, { useState } from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock, 
  FaUser, 
  FaMailBulk, 
  FaCommentDots 
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert('Message sent! We will get back to you soon.');
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Contact Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Get In Touch
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We'd love to hear from you. Whether you have a question about our furniture, 
          need design advice, or want to discuss a custom order, our team is ready to help.
        </p>
      </section>

      {/* Contact Content */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Contact Information
          </h2>
          
          <div className="space-y-6">
            {[
              {
                icon: <FaMapMarkerAlt className="text-[#431407] text-2xl" />,
                title: 'Address',
                content: '123 Furniture Lane, Design District, Creative City'
              },
              {
                icon: <FaPhoneAlt className="text-[#431407] text-2xl" />,
                title: 'Phone',
                content: '(555) 123-4567'
              },
              {
                icon: <FaEnvelope className="text-[#431407] text-2xl" />,
                title: 'Email',
                content: 'support@furniturehaven.com'
              },
              {
                icon: <FaClock className="text-[#431407] text-2xl" />,
                title: 'Hours',
                content: 'Monday-Saturday: 9am-6pm, Sunday: 11am-4pm'
              }
            ].map((contact, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="bg-white p-3 rounded-full shadow-md">
                  {contact.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{contact.title}</h3>
                  <p className="text-gray-600">{contact.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Embedded Map (Placeholder) */}
          <div className="mt-8 w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
            <p className="text-gray-600">Google Maps Integration</p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Send us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="name" className="block mb-2 text-gray-700">
                  <FaUser className="inline mr-2 text-[#431407]" /> Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900"
                  placeholder="Your Name"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="email" className="block mb-2 text-gray-700">
                  <FaMailBulk className="inline mr-2 text-[#431407]" /> Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900"
                  placeholder="Your Email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block mb-2 text-gray-700">
                <FaPhoneAlt className="inline mr-2 text-[#431407]" /> Phone (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900"
                placeholder="Your Phone Number"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-gray-700">
                <FaCommentDots className="inline mr-2 text-[#431407]" /> Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-900 text-white py-3 rounded-lg hover:bg-amber-700 transition duration-300 flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="mt-16 bg-gray-50 p-12 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              question: "Do you offer custom furniture design?",
              answer: "Yes! We provide custom furniture design services. Contact our team to discuss your specific requirements."
            },
            {
              question: "What is your delivery process?",
              answer: "We offer nationwide delivery with tracking. Typical delivery times are 5-7 business days."
            },
            {
              question: "Can I return or exchange a product?",
              answer: "We have a 30-day return policy. Products must be unused and in original packaging."
            },
            {
              question: "Do you offer installation services?",
              answer: "Yes, we provide professional installation for most of our furniture pieces at an additional cost."
            }
          ].map((faq, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg mb-3 text-gray-800">
                {faq.question}
              </h3>
              <p className="text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;