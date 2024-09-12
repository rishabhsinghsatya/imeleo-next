import Image from "next/image";
import Navbar from "./components/Navbar/page";
import Solutions from "./pages/Solutions";
import ServicesGrid from "./pages/Services";
import BlogsSection from "./pages/BlogsSection";
import AboutImeleo from "./pages/AboutImeleo";
import MeetOurFounder from "./pages/Founder";
import WhyChooseUs from "./pages/WhyChooseUs";
import ContactUs from "./pages/ContactUs";
import Footer from "./pages/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Solutions />
      <ServicesGrid />
      <BlogsSection />
      <AboutImeleo />
      <MeetOurFounder />
      <WhyChooseUs />
      {/* <ContactUs /> */}
      <Footer />
    </div>
  );
}
