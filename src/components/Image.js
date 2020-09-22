import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";
import React from "react";

const Image = (props) => (
  <StaticQuery
    query={graphql`
      query {
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
      const image = data.images.edges.find((n) => {
        return n.node.relativePath.includes(props.filename);
      });

      if (!image) {
        console.log(image);
        return null;
      }

      const imageSizes = image.node.childImageSharp.sizes;
      return (
        <Img
          alt={props.alt}
          sizes={imageSizes}
          style={props.style}
          imgStyle={props.imageStyle}
          className={props.className}
        />
      );
    }}
  />
);

export default Image;
