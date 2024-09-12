import React from "react";
// import Head from "next/head";
import bgImage from "../../../../public/images/Hero.png";

const Navbar = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/images/Hero.png')`,
      }}
    >
      {/* <Head>
        <title>Imeleo - Business Software Solutions and Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <header className="bg-primary">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">Imeleo</div>
          <div className=" flex gap-10 text-white">
            <a href="#">Solutions</a>
            <a href="#">Services</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Why Us</a>
            <a href="#">Blogs</a>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-8 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
        </nav>
      </header>

      <main className="container flex flex-col justify-center items-center h-screen text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-6">
          Business Software
          <br />
          <span className="font-medium pt-4">Solutions And Services</span>
        </h1>
        <p className="text-xl text-black mb-8">
          <span className="font-semibold underline"> Software</span> services
          and solutions to take your{" "}
          <span className="font-semibold underline">Business</span> to the next
          level 🚀
        </p>
        <div className="space-x-4">
          <button className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors font-semibold">
            Know more
          </button>
          <button className="bg-white text-black px-6 py-2 border border-primary rounded-md hover:bg-gray-100 transition-colors font-semibold">
            Contact Us
          </button>
        </div>
      </main>
    </div>
  );
};

export default Navbar;
