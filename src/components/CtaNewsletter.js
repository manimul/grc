import React from "react";

function CtaNews() {
  return (
    <section className="[cta_newsletter] text-center md:text-left p-12 md:p-24 cta_light_blue_wiggles text-white ">
      <div className=" m-auto  md:grid grid-cols-2 gap-12 md:mb-12">
        <div className="mb-12">
          <h2 className="inline-block text-xl  mb-1 text-white text-opacity-50 uppercase">
            Join Our Taskforce
          </h2>
          <p className="inline-block text-xl md:text-4xl font-bold">
            Why don’t you join us and follow the Journey to the River Center.{" "}
          </p>
          <a
            href="#vision"
            className="inline-block mt-4 border-white border-2 px-4 py-2"
          >
            Subscribe
          </a>
        </div>

        <div className="w-full m-auto text-center ">
          <img className="w-full" src="https://via.placeholder.com/200x200" />
        </div>
      </div>
    </section>
  );
}

export default CtaNews;
