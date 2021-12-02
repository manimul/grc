import React from 'react';
import Image from '../components/Image';
import Layout from '../components/layout';
import SEO from '../components/seo';

function markusInGhana() {
  return (
    <div>
      <Layout>
        <SEO
          keywords={[
            `global river center`,
            `partners`,
            `danish`,
            `africa`,
            `development`,
            `building better futures`,
            `sustainability`,
            `sdg`,
          ]}
          title='Our Partners'
        />

        <section>
          <div className='w-full bg-grc-navy h-screen grid grid-cols-10 mb-24'>
            <div className='[text-section] min-h-screen text-white row-span-full col-start-1 col-span-8 z-10 self-center justify-self-center  '>
              <h1 className='text-6xl  font-black uppercase'>
                A Danishman Abroad
              </h1>
              <p>Subheading text goes here and overlaps</p>
            </div>

            <div className=' -mb-12 min-h-screen row-span-full  col-span-6 col-end-11  '>
              <Image
                className='min-h-full object-cover'
                filename='markus-trip/day2/2_4.jpg'
              ></Image>
            </div>
          </div>
        </section>

        {/* DAY ONE - 3 Images */}

        <section className='[2-image-default] '>
          <div
            className='md:grid  grid-cols-10   gap-4 
           mb-12'
          >
            <div className=' col-start-3 col-span-4   md:pr-24  space-y-10'>
              <h2 className=' md:text-4xl text-2xl font-bold mb-4   '>
                Day 1 - Friday
              </h2>
              <p>
                When I woke up friday morning I was very excited. I had no idea
                what to expect nor hope for. The days leadinq up to our
                departure had been filled with us making sure we had the right
                permits, so I was a bit nervous about getting past security etc.
                without problems. But everything went well.
              </p>
              <p>
                {' '}
                The first picture on the right shows me at the gate ready to
                board the flight in CPH Airport. It was a long flight and about
                9 hours later we were in Ghana as you can see on the next
                picture. The black sky reveals that it was in the evening when
                we got there.
              </p>
              <p>
                {' '}
                The third picture shows me, Elizabeth (CEO) and Michael
                (Chairman) waiting for the shuttle bus that will take us to the
                hotel. When we arrive at the hotel we got a glass of juice in a
                very fancy glass as you can see on the last picture. After we
                check in we go straight to bed because we are tired after the
                long flight.
              </p>
            </div>

            <div className='col-start-7 col-span-3  '>
              {' '}
              <Image
                className='object-cover min-h-half_screen'
                filename='markus-trip/day1/1_1.jpg'
              ></Image>
              <p className='p-2 text-center'>description</p>
            </div>

            <div className='col-start-1 col-span-6  '>
              <Image
                className='object-center  h-screen/2'
                filename='markus-trip/day1/1_2.jpg'
              ></Image>
              <p className='p-2 text-center'>description</p>
            </div>

            <div className='col-start-7 col-span-4 '>
              <Image
                className='object-center h-screen/2'
                filename='markus-trip/day1/1_3.jpg'
              ></Image>
              <p className='p-2 text-center'>description</p>
            </div>
          </div>
        </section>

        {/* DAY TWO - FOUR IMAGES */}

        <section className='[2-image-default] pb-12'>
          <div
            className='md:grid  grid-cols-10   gap-4 
           mb-12'
          >
            <div className='col-start-3 col-span-4  '>
              {' '}
              <Image
                className='object-cover min-h-half_screen'
                filename='markus-trip/day2/2_1.jpg'
              ></Image>
              <p className='p-2 text-center'>description</p>
            </div>

            <div className=' col-start-7 col-span-3 md:pl-12 space-y-6 pb-12'>
              <h2 className=' md:text-4xl text-2xl font-bold mb-4   '>
                Day 2 - Friday
              </h2>
              <p>
                When I woke up friday morning I was very excited. I had no idea
                what to expect nor hope for. The days leadinq up to our
                departure had been filled with us making sure we had the right
                permits, so I was a bit nervous about getting past security etc.
                without problems. But everything went well.
              </p>
              <p>
                {' '}
                The first picture on the right shows me at the gate ready to
                board the flight in CPH Airport. It was a long flight and about
                9 hours later we were in Ghana as you can see on the next
                picture. The black sky reveals that it was in the evening when
                we got there.
              </p>
              <p>
                {' '}
                The third picture shows me, Elizabeth (CEO) and Michael
                (Chairman) waiting for the shuttle bus that will take us to the
                hotel. When we arrive at the hotel we got a glass of juice in a
                very fancy glass as you can see on the last picture. After we
                check in we go straight to bed because we are tired after the
                long flight.
              </p>
            </div>

            <div className='col-start-2 col-span-3  '>
              <Image
                className='object-center  h-screen/2'
                filename='markus-trip/day2/2_2.jpg'
              ></Image>
              <p className='p-2 text-center'>description</p>
            </div>

            <div className='col-start-5 col-span-5 '>
              <Image
                className='object-center h-screen/2'
                filename='markus-trip/day2/2_3.jpg'
              ></Image>
              <p className='p-2 text-center'>description is known</p>
            </div>
            <div className='col-start-1 col-span-10 '>
              <Image
                className='object-center h-screen'
                filename='markus-trip/day2/2_4.jpg'
              ></Image>
              <p className='p-2 text-center'>description</p>
            </div>
          </div>
        </section>

        {/* DAY THREE - THREE IMAGES */}

        <section className='[2-image-default] '>
          <div
            className='md:grid  grid-cols-10   gap-4 
           mb-12'
          >
            <div className=' col-start-3 col-span-4   md:pr-24  space-y-10'>
              <h2 className=' md:text-4xl text-2xl font-bold mb-4   '>
                Day 3 - Sunday
              </h2>
              <p>
                When I woke up friday morning I was very excited. I had no idea
                what to expect nor hope for. The days leadinq up to our
                departure had been filled with us making sure we had the right
                permits, so I was a bit nervous about getting past security etc.
                without problems. But everything went well.
              </p>
              <p>
                {' '}
                The first picture on the right shows me at the gate ready to
                board the flight in CPH Airport. It was a long flight and about
                9 hours later we were in Ghana as you can see on the next
                picture. The black sky reveals that it was in the evening when
                we got there.
              </p>
              <p>
                {' '}
                The third picture shows me, Elizabeth (CEO) and Michael
                (Chairman) waiting for the shuttle bus that will take us to the
                hotel. When we arrive at the hotel we got a glass of juice in a
                very fancy glass as you can see on the last picture. After we
                check in we go straight to bed because we are tired after the
                long flight.
              </p>
            </div>

            <div className='col-start-7 col-span-3  '>
              {' '}
              <Image
                className='object-cover min-h-half_screen'
                filename='markus-trip/day3/3_1.jpg'
              ></Image>
              <p className='p-2 text-center'>description</p>
            </div>

            <div className='col-start-2 col-span-5  '>
              <Image
                className='object-center  h-screen/2'
                filename='markus-trip/day3/3_2.jpg'
              ></Image>
              <p className='p-2 text-center'>description</p>
            </div>

            <div className='col-start-7 col-span-3 self-center justify-self-center '>
              <blockquote className='text-6xl leading-none p-12 font-black'>
                &quot;This is where a blockquotes goes and looks good &quot;
              </blockquote>
            </div>
            <div className='col-start-2 col-span-3 '>
              <Image
                className='object-center h-screen/2'
                filename='markus-trip/day3/3_3.jpg'
              ></Image>
              <p className='p-2 text-center'>description</p>
            </div>

            <div className='col-start-5 col-span-5 '>
              <Image
                className='object-center h-screen/2'
                filename='markus-trip/day3/3_4.jpg'
              ></Image>
              <p className='p-2 text-center'>description</p>
            </div>
          </div>
        </section>

        {/* DAY FOUR - FOUR IMAGES */}

        <section className='[2-image-default] pb-12'>
          <div
            className='md:grid  grid-cols-10   gap-4 
           mb-12'
          >
            <div className='col-start-3 col-span-4  '>
              {' '}
              <Image
                className='object-cover'
                filename='markus-trip/day4/4_1.jpg'
              ></Image>
              <p className='p-2 text-center'>description</p>
            </div>

            <div className=' col-start-7 col-span-3 md:pl-12 space-y-6 pb-12'>
              <h2 className=' md:text-4xl text-2xl font-bold mb-4   '>
                Day 4 - Monday
              </h2>
              <p>
                When I woke up friday morning I was very excited. I had no idea
                what to expect nor hope for. The days leadinq up to our
                departure had been filled with us making sure we had the right
                permits, so I was a bit nervous about getting past security etc.
                without problems. But everything went well.
              </p>
              <p>
                {' '}
                The first picture on the right shows me at the gate ready to
                board the flight in CPH Airport. It was a long flight and about
                9 hours later we were in Ghana as you can see on the next
                picture. The black sky reveals that it was in the evening when
                we got there.
              </p>
              <p>
                {' '}
                The third picture shows me, Elizabeth (CEO) and Michael
                (Chairman) waiting for the shuttle bus that will take us to the
                hotel. When we arrive at the hotel we got a glass of juice in a
                very fancy glass as you can see on the last picture. After we
                check in we go straight to bed because we are tired after the
                long flight.
              </p>
            </div>

            <div className='col-start-1 col-span-5  '>
              <Image
                className='object-center  h-screen/2'
                filename='markus-trip/day4/4_2.jpg'
              ></Image>
              <p className='p-2 text-center'>description</p>
            </div>

            <div className='col-start-6 col-span-6 '>
              <Image
                className='object-center h-screen/2'
                filename='markus-trip/day4/4_4.jpg'
              ></Image>
              <p className='p-2 text-center'>description is known</p>
            </div>
          </div>
        </section>

        {/* DAY FIVE - THREE IMAGES */}

        <section className='[2-image-default] '>
          <div
            className='md:grid  grid-cols-10   gap-4 
           mb-12'
          >
            <div className=' col-start-3 col-span-4   md:pr-24  space-y-10'>
              <h2 className=' md:text-4xl text-2xl font-bold mb-4   '>
                Day 5 - Tuesday
              </h2>
              <p>
                When I woke up friday morning I was very excited. I had no idea
                what to expect nor hope for. The days leadinq up to our
                departure had been filled with us making sure we had the right
                permits, so I was a bit nervous about getting past security etc.
                without problems. But everything went well.
              </p>
              <p>
                {' '}
                The first picture on the right shows me at the gate ready to
                board the flight in CPH Airport. It was a long flight and about
                9 hours later we were in Ghana as you can see on the next
                picture. The black sky reveals that it was in the evening when
                we got there.
              </p>
              <p>
                {' '}
                The third picture shows me, Elizabeth (CEO) and Michael
                (Chairman) waiting for the shuttle bus that will take us to the
                hotel. When we arrive at the hotel we got a glass of juice in a
                very fancy glass as you can see on the last picture. After we
                check in we go straight to bed because we are tired after the
                long flight.
              </p>
            </div>

            <div className='col-start-7 col-span-3  '>
              {' '}
              <Image
                className='object-cover min-h-half_screen'
                filename='markus-trip/day5/5_1.jpg'
              ></Image>
              <p className='p-2 text-center'>description</p>
            </div>

            <div className='col-start-1 col-span-6  '>
              <Image
                className='object-center  h-screen'
                filename='markus-trip/day5/5_2.jpg'
              ></Image>
              <p className='p-2 text-center'>description</p>
            </div>

            <div className='col-start-7 col-span-4  '>
              <Image
                className='object-center  h-screen'
                filename='markus-trip/day5/5_4.jpg'
              ></Image>
            </div>
          </div>
        </section>

        {/* DAY FIVE - FOUR IMAGES */}

        <section className='[2-image-default] pb-12'>
          <div
            className='md:grid  grid-cols-10   gap-4 
           mb-12'
          >
            <div className='col-start-3 col-span-4  '>
              {' '}
              <Image
                className='object-cover'
                filename='markus-trip/day6/6_1.jpg'
              ></Image>
              <p className='p-2 text-center'>description</p>
            </div>

            <div className=' col-start-7 col-span-3 md:pl-12 space-y-6 pb-12'>
              <h2 className=' md:text-4xl text-2xl font-bold mb-4   '>
                Day 6 - Wednesday
              </h2>
              <p>
                When I woke up friday morning I was very excited. I had no idea
                what to expect nor hope for. The days leadinq up to our
                departure had been filled with us making sure we had the right
                permits, so I was a bit nervous about getting past security etc.
                without problems. But everything went well.
              </p>
              <p>
                {' '}
                The first picture on the right shows me at the gate ready to
                board the flight in CPH Airport. It was a long flight and about
                9 hours later we were in Ghana as you can see on the next
                picture. The black sky reveals that it was in the evening when
                we got there.
              </p>
              <p>
                {' '}
                The third picture shows me, Elizabeth (CEO) and Michael
                (Chairman) waiting for the shuttle bus that will take us to the
                hotel. When we arrive at the hotel we got a glass of juice in a
                very fancy glass as you can see on the last picture. After we
                check in we go straight to bed because we are tired after the
                long flight.
              </p>
            </div>

            <div className='col-start-1 col-span-5  '>
              <Image
                className='object-center  h-screen/2'
                filename='markus-trip/day6/6_2.jpg'
              ></Image>
            </div>

            <div className='col-start-6 col-span-6 '>
              <Image
                className='object-center h-screen/2'
                filename='markus-trip/day6/6_3.jpg'
              ></Image>
            </div>
            <div className='col-start-1 col-span-11 '>
              <Image
                className='object-cover  h-screen/2/3'
                filename='markus-trip/day6/6_4.jpg'
              ></Image>
              <p className='p-2 text-center'>description</p>
            </div>
          </div>
        </section>

        {/* DAY SIX - THREE IMAGES */}

        <section className='[2-image-default] '>
          <div
            className='md:grid  grid-cols-10   gap-4 
           mb-12'
          >
            <div className=' col-start-3 col-span-4   md:pr-24  space-y-10'>
              <h2 className=' md:text-4xl text-2xl font-bold mb-4   '>
                Day 7 - Thursday
              </h2>
              <p>
                When I woke up friday morning I was very excited. I had no idea
                what to expect nor hope for. The days leadinq up to our
                departure had been filled with us making sure we had the right
                permits, so I was a bit nervous about getting past security etc.
                without problems. But everything went well.
              </p>
              <p>
                {' '}
                The first picture on the right shows me at the gate ready to
                board the flight in CPH Airport. It was a long flight and about
                9 hours later we were in Ghana as you can see on the next
                picture. The black sky reveals that it was in the evening when
                we got there.
              </p>
              <p>
                {' '}
                The third picture shows me, Elizabeth (CEO) and Michael
                (Chairman) waiting for the shuttle bus that will take us to the
                hotel. When we arrive at the hotel we got a glass of juice in a
                very fancy glass as you can see on the last picture. After we
                check in we go straight to bed because we are tired after the
                long flight.
              </p>
            </div>

            <div className='col-start-7 col-span-3  '>
              {' '}
              <Image
                className='object-cover min-h-half_screen'
                filename='markus-trip/day7/7_1.jpg'
              ></Image>
              <p className='p-2 text-center'>description</p>
            </div>

            <div className='col-start-2 col-span-5  '>
              <Image
                className='object-center  h-screen/2'
                filename='markus-trip/day7/7_2.jpg'
              ></Image>
              <p className='p-2 text-center'>description</p>
            </div>

            <div className='col-start-7 col-span-3 self-center justify-self-center '>
              <blockquote className='text-6xl leading-none p-12 font-black'>
                &quot;This is where a blockquotes goes and looks good &quot;
              </blockquote>
            </div>
            <div className='col-start-2 col-span-3 '>
              <Image
                className='object-center h-screen/2'
                filename='markus-trip/day7/7_3.jpg'
              ></Image>
              <p className='p-2 text-center'>description</p>
            </div>

            <div className='col-start-5 col-span-5 '>
              <Image
                className='object-center h-screen/2'
                filename='markus-trip/day7/7_4.jpg'
              ></Image>
              <p className='p-2 text-center'>description</p>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}

export default markusInGhana;
