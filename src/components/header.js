import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import Headroom from "react-headroom";
import Logo from "../images/grc-logo.svg";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Headroom id="nav" className=" z-50  w-full">
      <div className="flex flex-wrap items-center justify-between md:px-24 md:py-8 mx-auto p-4  bg-grc-navy ">
        <Link to="/">
          <div className="flex items-center ">
            <Logo
              alt={site.siteMetadata.title}
              className="w-32 md:w-48 align-top h-auto"
            />
          </div>
        </Link>

        <button
          className="items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/`,
              title: `Home`,
            },
            {
              route: `/story`,
              title: `The Story`,
            },
            {
              route: `/our-concept`,
              title: `Our Concept`,
            },
            {
              route: `/team`,
              title: `Who are we`,
            },
            {
              route: `/news`,
              title: `News`,
            },

            {
              route: `/contact`,
              title: `Contact Us`,
            },
          ].map((link) => (
            <Link
              className="block mt-4 text-white opacity-75 pb-2 no-underline md:inline-block md:mt-0 md:ml-6"
              activeClassName="font-bold opacity-100 border-b-2    "
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </Headroom>
  );
}

export default Header;
