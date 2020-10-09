import React from "react";

function NewsFeed() {
  return (
    <section className="[news] p-12 md:p-24 bg-gray-300">
      <div className="text-center  m-auto mb-4">
        <h2 className="block text-lg text-black text-opacity-50 uppercase">
          News
        </h2>
        <p className="inline-block text-xl md:text-4xl  font-bold mb-4">
          The latest updates from our newsfeed.
        </p>
      </div>

      <div className="[news_grid] md:max-w-6xl md:grid grid-cols-3 gap-12 mb-12  m-auto text-center">
        <article className="[news_card] hover:bg-white opacity-75 transition duration-500 ease-in-out hover:opacity-100 transform hover:-translate-y-1 rounded-lg cursor-pointer hover:shadow-xl">
          <div className="[card_media]">
            <img
              className="h-full w-full object-cover object-center"
              src="https://source.unsplash.com/600x400/?business"
            />
          </div>

          <div className="[card_content] p-4 ">
            <header>
              <h2 className="text-lg font-bold">
                This is the headline of the news article and it....
              </h2>
            </header>
            <footer>
              <span>Aug 05 2020</span>
              <a
                href="#"
                className=" underline font-bold block m-auto text-green-700"
              >
                Linkedin
              </a>
            </footer>
          </div>
        </article>

        <article className="[news_card] hover:bg-white opacity-75 transition duration-500 ease-in-out hover:opacity-100 transform hover:-translate-y-1 rounded-lg cursor-pointer hover:shadow-xl">
          <div className="[card_media]">
            <img
              className="h-full w-full object-cover object-center"
              src="https://source.unsplash.com/600x400/?africa"
            />
          </div>

          <div className="[card_content] p-4 ">
            <header>
              <h2 className="text-lg font-bold">
                This is the headline of the news article and it....
              </h2>
            </header>
            <footer>
              <span>Aug 05 2020</span>
              <a
                href="#"
                className=" underline font-bold block m-auto text-green-700"
              >
                Linkedin
              </a>
            </footer>
          </div>
        </article>

        <article className="[news_card] hover:bg-white opacity-75 transition duration-500 ease-in-out hover:opacity-100 transform hover:-translate-y-1 rounded-lg cursor-pointer hover:shadow-xl">
          <div className="[card_media]">
            <img
              className="h-full w-full object-cover object-center"
              src="https://source.unsplash.com/600x400/?africans"
            />
          </div>

          <div className="[card_content] p-4 ">
            <header>
              <h2 className="text-lg font-bold">
                This is the headline of the news article and it....
              </h2>
            </header>
            <footer>
              <span>Aug 05 2020</span>
              <a
                href="#"
                className=" underline font-bold block m-auto text-green-700"
              >
                Linkedin
              </a>
            </footer>
          </div>
        </article>
      </div>
      <a
        href="#"
        className="text-center underline font-bold block m-auto text-green-700"
      >
        Read More News
      </a>
    </section>
  );
}

export default NewsFeed;
