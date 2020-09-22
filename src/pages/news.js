import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import NewsFeed from "../components/NewsFeed";
import BackgroundImage from "gatsby-background-image";
import { graphql, StaticQuery } from "gatsby";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import CtaNews from "../components/CtaNewsletter";

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "news-bg.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={(data) => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <div className="md:p-24   m-auto bg-gradient-to-r from-grc-navy  min-h-screen w-full">
            <div className="max-w-4xl m-auto  py-24">
              <h1 className="block text-xl  mb-1 text-white text-opacity-50 uppercase">
                Latest News
              </h1>
              <p className="block text-5xl   leading-tight font-bold mb-4">
                This is the headlines of the news article and it is this long
              </p>
              <p>Aug 05 2020</p>
              <Link
                to="/news-focus"
                className="inline-block m-4 border-white border-2 px-4 py-2"
                activeClassName="bg-white text-black"
              >
                Read Now
              </Link>
            </div>
          </div>
        </BackgroundImage>
      );
    }}
  />
);
BackgroundSection.propTypes = {
  className: PropTypes.array,
};

function NewsPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />
      <BackgroundSection className=" text-white text-center"></BackgroundSection>
      <NewsFeed></NewsFeed>
      <CtaNews></CtaNews>
    </Layout>
  );
}

export default NewsPage;
