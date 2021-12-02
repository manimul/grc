import { useStaticQuery, graphql } from 'gatsby';

export const usePartnersListQuery = () => {
  const partnerListData = useStaticQuery(graphql`
    query PartnerQuery {
      allWpPartner {
        edges {
          node {
            excerpt
            title
            content
            slug
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    fluid(quality: 90, maxWidth: 1920) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
            partnerFields {
              partnerLogo {
                localFile {
                  childImageSharp {
                    fluid(quality: 90, maxWidth: 1920) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              partnerType
              partnersWebsite
            }
          }
        }
      }
    }
  `);
  return partnerListData;
};
