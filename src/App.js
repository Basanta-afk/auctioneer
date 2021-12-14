import React from "react";
import { AuctionBody } from "./components/auctions/AuctionBody";
import { NavComp } from "./components/authentication/NavComp";
import { Landing } from "./components/base/Landing";
import { Footer } from "./components/Pages/Footer";
import { Hero } from "./components/Pages/Hero";
import { AuthProvider } from "./context/AuthContext";

export const App = () => {
  return (
    <>
      <AuthProvider>
        <Landing />
      </AuthProvider>
    </>
  );
};
