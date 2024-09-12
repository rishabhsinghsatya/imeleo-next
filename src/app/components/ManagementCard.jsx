import React from "react";
import Image from "next/image";

const ManagementCard = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-lg border overflow-hidden h-100">
      <div className="relative h-48">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary  mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ManagementCard;
