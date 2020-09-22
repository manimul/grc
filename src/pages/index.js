import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import CtaNews from "../components/CtaNewsletter";
import BackgroundImage from "gatsby-background-image";
import { graphql, StaticQuery, Link } from "gatsby";
import PropTypes from "prop-types";
import NewsFeed from "../components/NewsFeed";
import AdvisorGrid from "../components/AdvisoryGrid";
import TeamGrid from "../components/TeamGrid";
import Image from "../components/Image";
import SDG from "../images/sdgs.svg";
import ConceptSection from "../components/ConceptSection";
import PartnerRow from "../components/PartnerRow";
import TheNeed from "../components/TheNeed";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import CtaTaskforce from "../components/CtaTaskforce";

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "main-hero-bg.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 600) {
                  ...GatsbyImageSharpSizes
                }
              }
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
          <div className="md:px-24 pb-24  m-auto bg-gradient-to-r from-grc-navy  min-h-screen ">
            <div className="max-w-2xl pt-40">
              <h1 className=" mb-4 text-5xl font-bold  leading-tight">
                We are building better futures for young people in non-urban
                Africa
              </h1>

              <p className="leading-loose inline-block">
                Our River Center concept combines in-demand services in a
                sustainable commercial business model. We want to improve the
                quality of life in non-urban African communities by offering a
                viable alternative to city migration.
              </p>
              <AnchorLink
                to="/#vision"
                className="inline-block mt-4 border-white border-2 px-4 py-2"
              >
                Learn More
              </AnchorLink>
            </div>
            <PartnerRow></PartnerRow>
          </div>
        </BackgroundImage>
      );
    }}
  />
);
BackgroundSection.propTypes = {
  className: PropTypes.array,
};

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <BackgroundSection className="hero  min-h-screen  text-white "></BackgroundSection>
      <section
        id="vision"
        className="[vision] grid grid-cols-2 gap-4 min-h-screen/2/3"
      >
        <div className="p-24 max-w-2xl">
          <h2 className="inline-block text-xl  mb-1 text-black text-opacity-50 uppercase">
            Our Vision
          </h2>
          <p className="inline-block text-4xl font-bold mb-4 leading-tight">
            Enhancing the quality of life for citizens in non-urban sub-Saharan
            Africa by building 200 Global River Centers
          </p>

          <p className="inline-block font-bold mb-4">
            {" "}
            Particularly for the 200 million marginalized young Africans.{" "}
          </p>
          <p className="mb-4">
            We aim to create an alternative to city migration by enhancing
            inclusive local economic development, democratisation and skills
            training.
          </p>
          <Link
            to="/our-concept"
            className=" underline font-bold block m-auto text-green-700"
          >
            Learn more about our concept{" "}
          </Link>
        </div>

        <Image
          className="h-full w-full object-cover object-center"
          filename="home_vision.jpeg"
        />
      </section>

      <CtaTaskforce></CtaTaskforce>

      <ConceptSection fullPage={false}></ConceptSection>

      <section id="impact" className="[impact] py-24 text-white bg-grc-navy ">
        <div className="[impact] max-w-6xl m-auto grid grid-cols-5 grid-flow-col  ">
          <div className="  col-span-3  max-w-2xl">
            <h2 className="inline-block text-lg    text-opacity-50 uppercase">
              Our Impact
            </h2>
            <p className="inline-block text-4xl font-bold mb-4 md:pr-16">
              We directly contribute to 8 of the UNs Sustainable Development
              Goals{" "}
            </p>

            <p className="inline-block font-bold mb-4 md:pr-16">
              {" "}
              The spin-off effect from our work means we also contribute to 3
              other Goals. Furthermore, the long term impact of our work means
              we can indirectly contribute towards 4 more goals.{" "}
            </p>
            <a
              href="#"
              className=" underline font-bold block m-auto text-green-700"
            >
              Learn More About Our SDG Impact
            </a>
          </div>

          <div className="col-span-2  ">
            <SDG className="w-full align-top h-auto" />
          </div>
        </div>
      </section>

      <TheNeed extended={false}></TheNeed>
      <TeamGrid fullpage={false}></TeamGrid>
      <AdvisorGrid></AdvisorGrid>
      <CtaNews></CtaNews>
      <NewsFeed></NewsFeed>
    </Layout>
  );
}

export default IndexPage;
