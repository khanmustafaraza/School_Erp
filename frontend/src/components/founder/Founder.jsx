import React from "react";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa"; // Importing social media icons

const FounderCard = ({ name, role, image, description, twitter, linkedin, facebook }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 mx-auto rounded-full mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-lg text-gray-600 mb-4">{role}</p>
      <p className="text-gray-500 mb-4">{description}</p>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4 mt-4">
        {twitter && (
          <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-500">
            <FaTwitter size={24} />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-700">
            <FaLinkedin size={24} />
          </a>
        )}
        {facebook && (
          <a href={facebook} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600">
            <FaFacebook size={24} />
          </a>
        )}
      </div>
    </div>
  );
};

const Founder = () => {
  const founders = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      image: "/ceo.jpg", // Replace with actual image URL
      description: "John has over 20 years of experience in the tech industry, focusing on educational platforms.",
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      facebook: "https://facebook.com/johndoe"
    },
    {
      name: "Jane Smith",
      role: "Co-Founder & CTO",
      image: "dean.jpg", // Replace with actual image URL
      description: "Jane is a tech enthusiast and an expert in AI and Machine Learning, constantly working to innovate our platform.",
      twitter: "https://twitter.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
      facebook: "https://facebook.com/janesmith"
    },
    {
      name: "Sam Wilson",
      role: "Co-Founder & COO",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      description: "Sam ensures smooth operations, managing teams and processes that deliver high-quality education.",
      twitter: "https://twitter.com/samwilson",
      linkedin: "https://linkedin.com/in/samwilson",
      facebook: "https://facebook.com/samwilson"
    }
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Meet Our Founders
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <FounderCard key={index} {...founder} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Founder;
