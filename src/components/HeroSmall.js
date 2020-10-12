import React from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import arrowDownCircle from "@iconify/icons-feather/arrow-down-circle";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby";

function HeroSmall(props) {
  return (
    <section
      className={
        "[story_hero] p-12 md:p-24  text-white text-center " +
        (props.bgGreen ? " cta_green_shapes" : " cta_blue_shapes")
      }
    >
      <div className="md:max-w-6xl m-auto py-12 md:py-24">
        <h2 className="block text-xl  mb-1 text-white text-opacity-50 uppercase">
          {props.title}
        </h2>
        <p className="block text-2xl md:text-5xl   leading-tight font-bold mb-4">
          {props.heading}
        </p>

        {props.singleNav ? (
          <AnchorLink to={props.linkTo} title="See why">
            <Icon
              className="inline-block mt-4 "
              icon={arrowDownCircle}
              style={{ fontSize: "60px" }}
            />
          </AnchorLink>
        ) : (
          <div>
            <Link
              to="/team"
              className="inline-block m-4 border-white border-2 px-4 py-2"
              activeClassName="bg-white text-black"
            >
              Team
            </Link>
            <Link
              to="/advisors"
              className="inline-block m-4 border-white border-2 px-4 py-2"
              activeClassName="bg-white text-black"
            >
              Advisors & Taskforce
            </Link>
            <Link
              to="/partners"
              className="inline-block m-4 border-white border-2 px-4 py-2"
              activeClassName="bg-white text-black"
            >
              Partners
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

HeroSmall.defaultProps = {
  title: "Default Title",
  heading: "Default Heading",
  bgGreen: false,
  singleNav: true,
};

HeroSmall.propTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  bgGreen: PropTypes.boolean,
  linkTo: PropTypes.string,
  singleNav: PropTypes.boolean,
};

export default HeroSmall;
