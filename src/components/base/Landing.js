import React, { useContext } from "react";
import { Footer } from "../Pages/Footer";
import { Hero } from "../Pages/Hero";
import { AuctionBody } from "../auctions/AuctionBody";
import { NavComp } from "../authentication/NavComp";
import { AuthContext } from "../../context/AuthContext";

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
          <Footer />
        </>
      )}
    </div>
  );
};
