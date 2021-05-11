import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import NewsCard from '../components/NewsCard';

function NewsFeed() {
  return (
    <>
      <StaticQuery
        query={graphql`
          query {
            allWpPost(sort: { fields: [date], order: [DESC] }) {
              nodes {
                title
                excerpt
                slug
                date(formatString: "DD MMMM, YYYY")
                featuredImage {
                  node {
                    sourceUrl
                    localFile {
                      childImageSharp {
                        fluid(quality: 90, maxWidth: 1920) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={(data) => (
          <section className='[news] p-12 md:p-24 bg-gray-300'>
            <div className='text-center  m-auto mb-4'>
              <h2 className='block text-lg text-black text-opacity-50 uppercase'>
                News
              </h2>

              <p className='inline-block text-xl md:text-2xl lg:text-4xl font-bold mb-4'>
                The latest updates from our newsfeed.
              </p>
            </div>
            <div className='[news_grid] md:max-w-6xl md:grid grid-cols-3 gap-12 mb-12  m-auto text-center'>
              {data.allWpPost.nodes.map((node) => (
                <div key={node}>
                  <NewsCard
                    title={node.title}
                    slug={node.slug}
                    image={
                      node.featuredImage &&
                      node.featuredImage.node.localFile.childImageSharp.fluid
                    }
                    date={node.date}
                  ></NewsCard>

                  {/*    <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />*/}
                </div>
              ))}
            </div>
          </section>
        )}
      />
    </>
  );
}

export default NewsFeed;
