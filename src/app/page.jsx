import Image from "next/image";
import Navbar from "./components/Navbar/page";
import Solutions from "./pages/Solutions";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Solutions />
    </div>
  );
}
