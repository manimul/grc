import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { Icon } from '@iconify/react';
import arrowDownCircle from '@iconify/icons-feather/arrow-down-circle';
import CtaNews from '../components/CtaNewsletter';
import CtaTaskforce from '../components/CtaTaskforce';
import NewsFeed from '../components/NewsFeed';

export default function BlogPost({ data }) {
  const post = data.allWpPost.nodes[0];

  console.log(post);
  return (
    <Layout>
      {post.featuredImage ? (
        <BackgroundImage
          Tag='section'
          fluid={post.featuredImage.node.localFile.childImageSharp.fluid}
          backgroundColor={`#040e18`}
          className=' text-white text-center'
        >
          <div className='md:p-24   m-auto bg-gradient-to-r from-grc-navy  min-h-screen w-full'>
            <div className='max-w-4xl m-auto  py-24'>
              <h1 className='block text-5xl   leading-tight font-bold mb-4'>
                {post.title}
              </h1>
              <p>{post.date}</p>
              <AnchorLink
                to={'/news/' + post.slug + '/#news-post'}
                title='See why'
              >
                <Icon
                  className='inline-block mt-4 '
                  icon={arrowDownCircle}
                  style={{ fontSize: '60px' }}
                />
              </AnchorLink>
            </div>
          </div>
        </BackgroundImage>
      ) : (
        <section className=' text-white text-center bg-grc-navy'>
          <div className='md:p-24   m-auto bg-gradient-to-r from-grc-navy  min-h-screen w-full'>
            <div className='max-w-4xl m-auto  py-24'>
              <h1 className='block text-5xl   leading-tight font-bold mb-4'>
                {post.title}
              </h1>
              <p>{post.date}</p>
              <AnchorLink
                to={'/news/' + post.slug + '/#news-post'}
                title='See why'
              >
                <Icon
                  className='inline-block mt-4 '
                  icon={arrowDownCircle}
                  style={{ fontSize: '60px' }}
                />
              </AnchorLink>
            </div>
          </div>
        </section>
      )}
      <section id='news-post' className='p-12 md:p-24 md:max-w-4xl m-auto'>
        <div
          className='space-y-6 '
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </section>
      <NewsFeed newsPosts={data}></NewsFeed>
      <CtaNews></CtaNews>
      <CtaTaskforce></CtaTaskforce>
    </Layout>
  );
}
export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
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
