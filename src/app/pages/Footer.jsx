// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Social Links */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-semibold">Imeleo</h2>
            <p className="mt-2">Business Software Solutions And Services</p>
            {/* Social Links */}
            <div className="flex mt-4 space-x-4">
              {/* Social media icons (Replace # with actual links) */}
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" aria-label="X (Twitter)">
                <i className="fab fa-x-twitter"></i>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold">Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Web App Dev
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Mobile App Dev
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  IT Consulting
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Custom Software
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cloud Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Data Engineering
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold">Solutions</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Content Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Employee Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Vehicle Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Lead Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Inventory Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Hospital Management
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                +91-8873-33-8873
              </li>
              <li className="flex items-center">
                <span className="mr-2">✉️</span>
                contact@imeleo.com
              </li>
              <li className="flex items-center">
                <span className="mr-2">📍</span>
                Noida, Uttar Pradesh
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-white/30 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2023 Imeleo Consulting. All rights reserved</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">
              Privacy policy
            </a>
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
          </div>
          <div className="flex items-center space-x-2 mt-2 md:mt-0">
            <span>info@imeleo.com</span>
            <img
              src="/path-to-india-flag.png"
              alt="India Flag"
              className="w-5 h-5"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
