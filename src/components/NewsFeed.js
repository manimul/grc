import React from 'react';
import Image from './Image';
import { Link } from 'gatsby';

function NewsFeed() {
  return (
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
        <Link to='/news/khadija-jorgen'>
          <article className='[news_card] hover:bg-white opacity-75 transition duration-500 ease-in-out hover:opacity-100 transform hover:-translate-y-1 rounded-lg cursor-pointer hover:shadow-xl'>
            <div className='[card_media]'>
              <Image filename='khadija-jorgen.jpg'></Image>
            </div>

            <div className='[card_content] p-4 '>
              <header>
                <h2 className='text-lg font-bold'>Khadija Meets Jørgen....</h2>
              </header>
              <footer>
                <p>4th September 2020</p>
                <Link
                  to='/news/khadija-jorgen'
                  className=' underline font-bold block m-auto text-green-700'
                >
                  Read Now
                </Link>
              </footer>
            </div>
          </article>
        </Link>
        <Link to='/news/healthy-growth'>
          <article className='[news_card] hover:bg-white opacity-75 transition duration-500 ease-in-out hover:opacity-100 transform hover:-translate-y-1 rounded-lg cursor-pointer hover:shadow-xl'>
            <div className='[card_media]'>
              <Image filename='healthy-growth.jpg'></Image>
            </div>

            <div className='[card_content] p-4 '>
              <header>
                <h2 className='text-lg font-bold'>
                  Healthy Growth, New Shoots....
                </h2>
              </header>
              <footer>
                <p>26th August 2020</p>
                <Link
                  to='/news/healthy-growth'
                  className=' underline font-bold block m-auto text-green-700'
                >
                  Read Now
                </Link>
              </footer>
            </div>
          </article>
        </Link>
        <Link to='/news/new-partners'>
          <article className='[news_card] hover:bg-white opacity-75 transition duration-500 ease-in-out hover:opacity-100 transform hover:-translate-y-1 rounded-lg cursor-pointer hover:shadow-xl'>
            <div className='[card_media]'>
              <Image filename='new-partners.jpg'></Image>
            </div>

            <div className='[card_content] p-4 '>
              <header>
                <h2 className='text-lg font-bold'>Our New Partners...</h2>
              </header>
              <footer>
                <p>26th August 2020</p>
                <Link
                  to='/news/new-partners'
                  className=' underline font-bold block m-auto text-green-700'
                >
                  Read Now
                </Link>
              </footer>
            </div>
          </article>
        </Link>
      </div>
      <Link
        to='/news'
        className='text-center underline font-bold block m-auto text-green-700'
      >
        Read More News
      </Link>
    </section>
  );
}

export default NewsFeed;
