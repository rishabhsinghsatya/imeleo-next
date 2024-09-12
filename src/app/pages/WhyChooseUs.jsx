import React from "react";
import {
  Users,
  Building2,
  Target,
  Headphones,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    title: "Technical Expertise",
    description:
      "Building cutting-edge, high-performing web apps tailored to your business needs. Our solutions ensure seamless user experiences.",
    icon: Users,
  },
  {
    title: "Business Centric Approach",
    description:
      "Putting business first, providing tailored IT solutions based on the unique needs of each business.",
    icon: Building2,
  },
  {
    title: "Process & Quality Assurance",
    description:
      "Implementing rigorous testing and quality checks to deliver high-performing and secure IT solutions.",
    icon: Target,
  },
  {
    title: "Support",
    description:
      "Offering timely support and quick resolution of issues to minimize downtime for customers.",
    icon: Headphones,
  },
  {
    title: "Innovation",
    description:
      "Continuously adopting and integrating new technologies to stay competitive and drive cutting-edge solutions.",
    icon: Lightbulb,
  },
  {
    title: "Scalability",
    description:
      "Providing scalable IT infrastructure and services that grow as the client's business grows.",
    icon: ArrowUpRight,
  },
];

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-2">
          Why Choose Us
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Trusted expertise, cutting-edge technology, and a customer-first
          approach to drive your success
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border">
              {/* <div className="flex items-center mb-4"> */}
                <feature.icon className="text-blue-600 w-8 h-8 mr-3" />
                <h3 className="text-xl font-semibold text-blue-600">
                  {feature.title}
                </h3>
              {/* </div> */}
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
