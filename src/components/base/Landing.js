import React, { useContext } from "react";
import { Footer } from "../Pages/Footer";
import { Hero } from "../Pages/Hero";
import { About } from "../Pages/About";
import { AuctionBody } from "../auctions/AuctionBody";
import { NavComp } from "../authentication/NavComp";
import { AuthContext } from "../../context/AuthContext";
import { Faq } from "../Pages/Faq";

export const Landing = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div>
      {currentUser ? (
        <>
          <NavComp />
          <AuctionBody />
        </>
      ) : (
        <>
          <NavComp />
          <Hero />
          <AuctionBody />
          <About />
          <Faq />
          <Footer />
        </>
      )}
    </div>
  );
};
