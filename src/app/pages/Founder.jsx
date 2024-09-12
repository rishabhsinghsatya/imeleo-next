import React from "react";
import Image from "next/image";
import { Linkedin } from "lucide-react";

const MeetOurFounder = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-blue-600 mr-2">&#128640;</span> Meet Our
              <span className="text-primary font-urbanist">Founder</span>
            </h2>
            <p className="text-gray-600 mb-4">
              With decades of industry experience,{" "}
              <span className="font-semibold">Mayank</span> is a highly skilled
              software developer, solution architect and technology
              entrepreneur. He specializes in building modular and scalable
              cross platform software solutions.
            </p>
            <p className="text-gray-600 mb-4">
              Over the years, he has worked with numerous businesses, helping
              them overcome complex business challenges by building innovative
              technology solutions.
            </p>
            <p className="text-gray-600">
              Admired by clients, developers and designers alike, his
              entrepreneurial vision drives Imeleo in empowering businesses with
              cutting-edge technology solutions, thus fueling growth and
              innovation.
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <div className="bg-white rounded-lg shadow-md">
              <div className="relative h-64 w-full mb-4">
                <Image
                  src="/images/founder.png"
                  alt="Mayank Mahajan"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Mayank Mahajan
                  </h3>
                  <p className="text-gray-600">Founder, Imeleo</p>
                </div>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurFounder;
