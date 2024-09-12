import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const AboutImeleo = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-primary font-urbanist">
          About Imeleo
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Imeleo provides cutting-edge solutions and expert insights to drive
          your business success in the digital age
        </p>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 relative h-80 md:h-96">
            <Image
              src="/images/about/about-imeleo.jpg"
              alt="Team working together"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-semibold mb-4">
              We Are Increasing <span className="text-blue-600">Business</span>{" "}
              Success With <span className="text-blue-600">Technology</span>
            </h3>
            <p className="text-gray-600 mb-6">
              At Imeleo, we use technology to help businesses grow, work
              smarter, and get better results. Our goal is to make it easier for
              companies to succeed in today's digital world.
            </p>
            <ul className="space-y-2">
              {[
                "Problem Solving",
                "Strategic Growth",
                "Enhanced Performance",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-2" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="mt-6 bg-primary text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutImeleo;
