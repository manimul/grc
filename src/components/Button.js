import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby";

function Button(props) {
  return (
    <div>
      {props.anchor && (
        <AnchorLink
          to={props.to}
          className={`${
            props.dark
              ? `border-grc-navy text-grc-navy hover:text-white hover:bg-grc-navy`
              : `border-white text-white hover:text-gray-900 hover:bg-white`
          } inline-block mt-4  border-2 px-4 py-2`}
        >
          {props.children}
        </AnchorLink>
      )}
      {props.link && (
        <Link
          to={props.to}
          className="inline-block mt-4 border-white border-2 px-4 py-2 hover:text-gray-900 hover:bg-white"
        >
          {props.children}
        </Link>
      )}
    </div>
  );
}

export default Button;
