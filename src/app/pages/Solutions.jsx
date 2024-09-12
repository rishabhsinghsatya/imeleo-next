// Solutions.js
import React from "react";
import ManagementCard from "../components/ManagementCard";

const solutions = [
  {
    title: "Content Management",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/content.png",
  },
  {
    title: "Employee Management",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/employee.png",
  },
  {
    title: "Vehicle Management",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/vehicle.png",
  },
  {
    title: "Lead Management",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/lead.png",
  },
  {
    title: "Inventory Management",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/inventory.png",
  },
  {
    title: "Hospital Management",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/hospital.png",
  },
];

const Solutions = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-2 font-urbanist">
          Solutions
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Innovative software solutions tailored to streamline your
          <br /> business operations and maximize efficiency
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <ManagementCard
              key={index}
              title={solution.title}
              description={solution.description}
              image={solution.image}
            />
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

export default Solutions;
