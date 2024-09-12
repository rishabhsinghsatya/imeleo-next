import React from "react";
import {
  Computer,
  Smartphone,
  Users,
  Code,
  Cloud,
  Database,
} from "lucide-react";

const services = [
  {
    title: "Web App Development",
    description:
      "Building cutting-edge high-performing web applications for diverse business needs. Our solutions ensure seamless user experiences.",
    icon: Computer,
  },
  {
    title: "App Development",
    description:
      "Crafting innovative mobile applications that engage users and drive growth. Our solutions deliver intuitive high-performance experiences.",
    icon: Smartphone,
  },
  {
    title: "IT Consulting",
    description:
      "Providing expert guidance on leveraging technology to achieve business goals. We analyze your needs, recommend strategies, and provide expert implementation support.",
    icon: Users,
  },
  {
    title: "Software Development",
    description:
      "Developing custom software solutions tailored to your unique business requirements and goals.",
    icon: Code,
  },
  {
    title: "Cloud Services",
    description:
      "Enabling businesses to leverage the full potential of cloud computing for enhanced flexibility, scalability, and cost-effectiveness.",
    icon: Cloud,
  },
  {
    title: "Data Engineering",
    description:
      "Building robust data pipelines and infrastructure for efficient storage, processing, and analysis of your data, no matter the volume.",
    icon: Database,
  },
];

const ServicesGrid = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-primary font-urbanist">
          Services
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Comprehensive business services designed to support growth and
          innovation with unmatched skills
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <service.icon className="text-blue-600 w-8 h-8 mr-3" />
                <h3 className="text-xl font-semibold text-primary font-urbanist">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="text-sm bg-white border border-primary font-semibold text-greytext px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
