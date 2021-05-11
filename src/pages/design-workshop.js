import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

function DesignWorkshop() {
  return (
    <Layout>
      <SEO
        keywords={[`global river center`, `danish`, `africa`, `development`]}
        title='Contact Global River Center'
      />
      <StaticQuery
        query={graphql`
          query {
            allWpPage(filter: { title: { eq: "Videos" } }) {
              nodes {
                title
                slug
                content
              }
            }
          }
        `}
        render={(data) => (
          <>
            <section className='[news] p-12 md:p-24 bg-gray-300'>
              <div className='text-center  m-auto mb-4'>
                <h2 className='block text-lg text-black text-opacity-50 uppercase'>
                  News
                </h2>

                <p className='inline-block text-xl md:text-2xl lg:text-4xl font-bold mb-4'>
                  The latest updates from our newsfeed.
                </p>
              </div>
              <div className='[news_grid] md:max-w-6xl md:grid grid-cols-3 gap-12 mb-12  m-auto text-center'></div>
            </section>

            <section
              id='news-post'
              className='p-12 md:p-24 md:max-w-4xl m-auto'
            >
              <div
                className='space-y-6 '
                dangerouslySetInnerHTML={{
                  __html: data.allWpPage.nodes[0].content,
                }}
              />
            </section>
          </>
        )}
      />
    </Layout>
  );
}

export default DesignWorkshop;
