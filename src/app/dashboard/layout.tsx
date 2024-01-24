import { ReactNode } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Sidebar from "@/app/dashboard/components/SideBar";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Admin({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <Navbar />
        <div className="px-4 md:px-10 mx-auto w-full md:absolute md:top-32">
          {children}
          <Footer />
        </div>
      </div>
    </ChakraProvider>
  );
}
