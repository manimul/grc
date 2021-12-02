import React from 'react';
//import Image from './Image';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

function NewsCard({ title, slug, image, date }) {
  return (
    <>
      <Link to={slug}>
        <article className='[news_card] hover:bg-white opacity-75 transition duration-500 ease-in-out hover:opacity-100 transform hover:-translate-y-1 rounded-lg cursor-pointer hover:shadow-xl'>
          <div className='[card_media] bg-grc-navy '>
            <Img className='h-48' fluid={image}></Img>
          </div>

          <div className='[card_content] p-4 '>
            <header>
              <h2 className='text-lg font-bold'>{title} </h2>
            </header>
            <footer>
              <p>{date}</p>
              <Link
                to={slug}
                className=' underline font-bold block m-auto text-green-700'
              >
                Read Now
              </Link>
            </footer>
          </div>
        </article>
      </Link>
    </>
  );
}

export default NewsCard;
