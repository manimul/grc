import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import NewsFeed from "../../components/NewsFeed";
import BackgroundImage from "gatsby-background-image";
import { graphql, StaticQuery } from "gatsby";
import PropTypes from "prop-types";
import CtaNews from "../../components/CtaNewsletter";
import { Icon } from "@iconify/react";
import arrowDownCircle from "@iconify/icons-feather/arrow-down-circle";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "khadija-jorgen.jpg" }) {
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
              <p className="block text-xl  mb-1 text-white text-opacity-50 uppercase">
                Latest News
              </p>
              <h1 className="block text-5xl   leading-tight font-bold mb-4">
                Khadija Meets Jørgen
              </h1>
              <p>4th September 2020</p>
              <AnchorLink
                to={"/news/khadija-jorgen#news-intro"}
                title="See why"
              >
                <Icon
                  className="inline-block mt-4 "
                  icon={arrowDownCircle}
                  style={{ fontSize: "60px" }}
                />
              </AnchorLink>
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

function KhadijaJorgen() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />
      <BackgroundSection className=" text-white text-center"></BackgroundSection>
      <section id="news-intro" className="p-24 max-w-4xl m-auto">
        <p className="pb-12">
          Last week we announced a new member to the GRC Taskforce (read more on
          the Taskforce below👇) on our social media channels. If you missed
          this post now is a good time to follow us and keep up with everything
          we share!
        </p>
        <p className="pb-12">
          The new addition we proudly announced is Dr. Lars Chr. Kyburg. Dr
          Kyburg is a Health Care Systems Development and Strengthening
          Specialist with more than 25 years experience in advising health
          ministries, health insurance/health financing authorities, and other
          health managing stakeholders in strategy development. With his broad
          background working with health in different contexts and across the
          globe - especially his work in Africa where he has consulted on
          several important health projects - we are grateful to have the chance
          to tap in to his vast knowledge and experience.
        </p>
        <p className="pb-12">
          His role on our Taskforce is to help shape and define the health
          services that play an integral role in the River Center concept. Each
          River Center we build will offer health-wise educational and training
          services, provide nutritious food, and grant access to sports
          facilities and a health clinic, supporting good health practices and
          wellbeing of all our users.
        </p>
        <p className="pb-12">
          With the expert guidance and collaboration of Dr Kyburg, we have an
          even greater confidence that we can develop and offer truly impactful
          and life enhancing experiences to our users. We hope you will join us
          in celebrating this great new addition to the GRC family. Keep an eye
          out for our next newsletter where we will have another exciting
          introduction to make! Interestingly enough in the given context, Dr
          Kyburg reached out to us after reading one of our previous
          newsletters. If, like Dr Kyburg, you think you have something to offer
          GRC, keep on reading...
        </p>
        <img
          className="min-h-half_screen w-full object-cover object-center pb-12"
          src="https://source.unsplash.com/0cgpyigyIkM/1600x1600"
        />

        <p className="pb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img
          className="min-h-half_screen w-full object-cover object-center pb-12"
          src="https://source.unsplash.com/0cgpyigyIkM/1600x1600"
        />

        <p className="pb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
      <NewsFeed></NewsFeed>
      <CtaNews></CtaNews>
    </Layout>
  );
}

export default KhadijaJorgen;
