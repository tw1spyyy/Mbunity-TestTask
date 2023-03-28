import React from "react";
import styled from "styled-components";
import { Contact } from "./Components/Pages/Contact";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import "./css/main.css";
import { Route, Routes } from "react-router-dom";
import { About } from "./Components/Pages/About";
import { Shop } from "./Components/Pages/Shop";
import { Blog } from "./Components/Pages/Blog";
import { Feautures1 } from "./Components/Pages/Feautures1";
import { Feautures2 } from "./Components/Pages/Feautures2";
import { Home } from "./Components/Pages/Home";

export const App = () => {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/features1" element={<Feautures2 />} />
          <Route path="/features2" element={<Feautures1 />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Content>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;
const Content = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  @media (max-width: 360px) {
    max-width: 360px;
  }
`;
