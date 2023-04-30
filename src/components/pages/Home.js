import React from "react";
import { Link } from "react-router-dom";
import CardList from "../cards/CardList";
import { Box, Container } from "@mui/material";
import { cardDetails, BigcardDetails, LargeBanner } from "../cards/CardDetails";
import NavBar from "../navbar/Navbar";
import LargeCard from "../cards/LargeCard";
import Footer from "../footer/Footer";
import { FooterLinks } from "../footer/footerLinks";
import Hero from "../herosection/Hero";
import TwoCard from "../cards/TwoCard";

function Home() {
  return (
    <>
      <NavBar />

      <Hero />
      <CardList cardDetails={cardDetails} />

      <TwoCard BigCardDetails={BigcardDetails} />

      <LargeCard LargeBanner={LargeBanner} />

      <Footer FooterLinks={FooterLinks} />
    </>
  );
}

export default Home;
