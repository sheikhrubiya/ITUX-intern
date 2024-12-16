import React from 'react';
import { 
  FaCouch, 
  FaLeaf, 
  FaHandsHelping, 
  FaTruck, 
  FaUsers, 
  FaAward 
} from 'react-icons/fa';
import image1 from '../../assets/banner.jpg'
const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Crafting Comfort, 
            <br />
            <span className="text-blue-600">Designing Dreams</span>
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            At Furniture Haven, we believe that furniture is more than just a functional necessity. 
            It's an expression of your personal style, a reflection of your home's soul, 
            and a canvas for creating memories.
          </p>
          <div className="flex space-x-4">
            <div className="bg-blue-50 p-3 rounded-full">
              <FaCouch className="text-blue-600 text-3xl" />
            </div>
            <div className="bg-green-50 p-3 rounded-full">
              <FaLeaf className="text-green-600 text-3xl" />
            </div>
            <div className="bg-purple-50 p-3 rounded-full">
              <FaHandsHelping className="text-purple-600 text-3xl" />
            </div>
          </div>
        </div>
        <div>
          <img 
            src={image1} 
            alt="Furniture Workshop" 
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Our Values Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaTruck className="text-4xl text-blue-600 mb-4" />,
              title: "Quality Assurance",
              description: "Every piece undergoes rigorous quality checks to ensure durability and excellence."
            },
            {
              icon: <FaUsers className="text-4xl text-green-600 mb-4" />,
              title: "Customer First",
              description: "We prioritize your comfort and satisfaction in every interaction and product."
            },
            {
              icon: <FaAward className="text-4xl text-purple-600 mb-4" />,
              title: "Sustainable Design",
              description: "Committed to eco-friendly practices and responsible manufacturing."
            }
          ].map((value, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow"
            >
              {value.icon}
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-gray-50 rounded-lg p-12 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Our Journey
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed mb-8">
          Founded in 2010, Furniture Haven started as a small workshop with a big dream: 
          to create furniture that tells a story. From humble beginnings to becoming a 
          trusted name in home furnishings, our passion for craftsmanship and design 
          has been our constant companion.
        </p>
        <div className="flex justify-center space-x-6">
          <div>
            <span className="text-4xl font-bold text-blue-600">10+</span>
            <p className="text-gray-600">Years of Experience</p>
          </div>
          <div>
            <span className="text-4xl font-bold text-green-600">5000+</span>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div>
            <span className="text-4xl font-bold text-purple-600">500+</span>
            <p className="text-gray-600">Unique Designs</p>
          </div>
        </div>
      </section>

      {/* Contact Teaser */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Let's Create Your Perfect Space
        </h2>
        <p className="max-w-xl mx-auto text-gray-600 mb-8">
          Have questions or need design advice? Our team of expert designers 
          is ready to help you transform your home.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default About;