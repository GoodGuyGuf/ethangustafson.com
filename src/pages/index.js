import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Intro from "../components/main/Intro.js";
import PortfolioImages from "../components/main/images/PortfolioImagesQuery.js";
import Blog from "../components/main/Blog.js";
import Contact from "../components/main/Contact.js"
import Footer from "../components/main/Footer";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro/>
    <PortfolioImages/>
    <Blog/>
    <Contact/>
    <Footer/>
  </Layout>
);

export default IndexPage;
