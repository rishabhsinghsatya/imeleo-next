import React from "react";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "Why Data-Driven Decision Making is Key for Business Growth",
    description:
      "Learn how leveraging software that offers data-driven insights can enhance strategic decisions, boost productivity, and drive sustainable growth.",
    image: "/images/blog/first-blog.png",
    date: "January 15, 2024",
  },
  {
    id: 2,
    title: "Top 5 Business Services to Boost Customer Satisfaction",
    description:
      "Explore essential services such as CRM, help desk solutions, and automated support systems that can enhance customer experiences and foster long-term loyalty.",
    image: "/images/blog/second-blog.png",
    date: "September 1, 2024",
  },
  {
    id: 3,
    title: "Leveraging Software Solutions to Enhance Business Efficiency",
    description:
      "Discover how modern software tools can streamline your operations, automate tasks, and improve workflow efficiency to help your business stay competitive.",
    image: "/images/blog/third-blog.png",
    date: "January 15, 2024",
  },
];

const BlogsSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-primary font-urbanist">
          Blogs
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Explore our blog for expert tips, industry insights, and engaging
          content on the latest trends. Stay informed and inspired!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md p-5"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2 border rounded-full px-2 py-1">
                  {post.date}
                </p>
                <h3 className="text-l font-semibold mb-2 text-primary font-urbanist">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                {/* <a href="#" className="text-blue-600 hover:underline">
                  Read more
                </a> */}
              </div>
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

export default BlogsSection;
