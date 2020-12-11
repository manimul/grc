import React from 'react';
import Button from './Button';
import NewsletterImg from '../images/newsletter-2.gif';

function CtaNews() {
  return (
    <section className='[cta_newsletter] text-center md:text-left p-12 md:p-24 cta_light_blue_wiggles text-white '>
      <div className=' m-auto md:max-w-6xl  flex flex-wrap md:flex-no-wrap flex-row justify-between md:mb-12'>
        <div className='mb-12 md:mb-0   md:w-3/6'>
          <h2 className='inline-block text-xl  mb-1 text-white text-opacity-50 uppercase'>
            Subscribe to the GRC Newsletter
          </h2>
          <p className='inline-block text-xl md:text-2xl lg:text-4xl font-bold'>
            Why don’t you join us and follow the Journey to the River Center.{' '}
          </p>
          <p className='inline-block text-lg md:text-xl mb-2'>
            We send out a newsletter on a frequent basis that will keep you
            informed on all our activities, subscibe now to stay updated!{' '}
          </p>

          <Button link={true} to='http://eepurl.com/gOoeEb'>
            Subscribe
          </Button>
        </div>

        <div className='md:w-2/6  '>
          <img className=' ' src={NewsletterImg} />
        </div>
      </div>
    </section>
  );
}

export default CtaNews;
