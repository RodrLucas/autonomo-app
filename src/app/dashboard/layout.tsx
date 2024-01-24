import React, { ReactNode } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "@/app/dashboard/components/NavBar";
import Sidebar from "@/app/dashboard/components/SideBar";
import { ChakraProvider } from "@chakra-ui/react";
// import HeaderStats from "components/Headers/HeaderStats.js";
// import FooterAdmin from "components/Footers/FooterAdmin.js";

export default function Admin({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider>
      <Sidebar />
      <div className="relative md:ml-64 bg-blue-100">
        <Navbar />
        {/* <HeaderStats /> */}
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          {/* <FooterAdmin /> */}
        </div>
      </div>
    </ChakraProvider>
  );
}
