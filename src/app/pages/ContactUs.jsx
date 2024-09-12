// components/ContactUs.js
export default function ContactUs() {
    return (
      <div className="bg-white flex flex-col items-center py-16 relative">
        {/* Title Section */}
        <h2 className="text-4xl font-semibold text-center text-gray-800">
          Contact Us
        </h2>
        <p className="text-lg text-gray-500 mt-4 text-center">
          Reach out to discuss how we can transform your business with tailored solutions and expert support.
        </p>
  
        {/* Contact Card Section */}
        <div className="bg-blue-600 text-white rounded-lg p-8 mt-8 flex flex-col md:flex-row items-center justify-between max-w-4xl w-full absolute overflow-hidden">
          {/* Left side: Image */}
          <div className="relative mb-6 md:mb-0 md:w-1/3">
            <img
              src="/images/avatar.png" // Replace with the actual image path
              alt="Person with laptop"
              className="w-48  relative -top-50 -left-8 bottom-0"
            />
          </div>
  
          {/* Right side: Contact details */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-semibold">
              We help you to grow your business faster & easier.
            </h3>
            <p className="mt-4">
              Partner with us to simplify the path to your success. We’ll make reaching your business goals faster and easier than ever.
            </p>
  
            {/* Contact Details */}
            <div className="mt-6">
              <p className="text-lg">
                <span className="font-bold">Phone: </span>+91-8873-33-8873
              </p>
              <p className="text-lg">
                <span className="font-bold">Email: </span>contact@imeleo.com
              </p>
            </div>
  
            {/* Contact Us Button */}
            <div className="mt-6">
              <a
                href="mailto:contact@imeleo.com"
                className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-500 hover:text-white transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  