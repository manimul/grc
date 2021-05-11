import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql } from 'gatsby';
import NewsFeed from '../components/NewsFeed';
import Button from '../components/Button';

import BackgroundImage from 'gatsby-background-image';

export default function NewsArchive({ data }) {
  //highlight-line
  return (
    <Layout>
      <SEO title='home' />
      {data.allWpPost.nodes[0].featuredImage ? (
        <BackgroundImage
          Tag='section'
          fluid={
            data.allWpPost.nodes[0].featuredImage.node.localFile.childImageSharp
              .fluid
          }
          backgroundColor={`#040e18`}
          className=' text-white text-center'
        >
          <div className='md:p-24   m-auto bg-gradient-to-r from-grc-navy  min-h-screen w-full'>
            <div className='max-w-4xl m-auto  py-24'>
              <p className='block text-xl  mb-1 text-white text-opacity-50 uppercase'>
                Latest News
              </p>
              <h1 className='block text-5xl   leading-tight font-bold mb-4'>
                {data.allWpPost.nodes[0].title}
              </h1>
              <p>{data.allWpPost.nodes[0].date}</p>

              <Button
                to={'/news/' + data.allWpPost.nodes[0].slug + '/#news-post'}
                link={true}
                className='inline-block m-4 border-white border-2 px-4 py-2'
                activeClassName='bg-white text-black'
              >
                Read Now
              </Button>
            </div>
          </div>
        </BackgroundImage>
      ) : (
        <section className=' text-white text-center bg-grc-navy '>
          <div className='md:p-24   m-auto bg-gradient-to-r from-grc-navy  min-h-screen w-full'>
            <div className='max-w-4xl m-auto  py-24'>
              <p className='block text-xl  mb-1 text-white text-opacity-50 uppercase'>
                Latest News
              </p>
              <h1 className='block text-5xl   leading-tight font-bold mb-4'>
                {data.allWpPost.nodes[0].title}
              </h1>
              <p>{data.allWpPost.nodes[0].date}</p>

              <Button
                to={'/news/' + data.allWpPost.nodes[0].slug + '/#news-post'}
                link={true}
                className='inline-block m-4 border-white border-2 px-4 py-2'
                activeClassName='bg-white text-black'
              >
                Read Now
              </Button>
            </div>
          </div>
        </section>
      )}
      <NewsFeed></NewsFeed>
    </Layout>
  );
}

//highlight-start
export const pageQuery = graphql`
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
`;
//highlight-end
