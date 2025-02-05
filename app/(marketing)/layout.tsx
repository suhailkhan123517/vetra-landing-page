import React from "react";

import Footer from "@/components/marketing/footer";
import Navbar from "@/components/marketing/navbar";

interface Props {
  children: React.ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full z-40 relative">{children}</main>
      <Footer />
    </>
  );
};

export default MarketingLayout;
