import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroSmall from "../components/HeroSmall";

function PartnersPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />
      <HeroSmall
        title="Our Partners"
        heading="Passionate experts. Meet the people behind Global River Center. "
        linkTo="/team#intro"
        singleNav={false}
      ></HeroSmall>
      <section id="partners-intro" className="[team] p-24">
        <div className="text-center  px-24 m-auto mb-4">
          <h2 className="block text-lg text-black text-opacity-50 uppercase">
            Our Partners
          </h2>
          <p className="inline-block text-4xl  font-bold mb-4">
            Our strength lies in the contribution of our partners.
          </p>
        </div>
        <div className="max-w-6xl grid grid-cols-3 gap-12  m-auto ">
          <div className="col-span-1">
            <img src="https://via.placeholder.com/800x800" />
          </div>

          <div className="mt-6 pr-32 col-span-2 ">
            <p className="block text-2xl font-bold mb-1 leading-tight">
              Partner
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              integer cras odio habitasse diam facilisis iaculis fringilla
              venenatis. Praesent nam suspendisse vel at semper vitae neque. Leo
              mollis fringilla donec eu. Augue turpis sed faucibus eu volutpat.
              Fringilla dolor adipiscing amet duis nisl tellus metus lorem.{" "}
            </p>
            <a
              href="#"
              className=" underline font-bold block m-auto text-green-700"
            >
              Website
            </a>
          </div>

          <div className="mt-6 pl-32 col-span-2 ">
            <p className="block text-2xl font-bold mb-1 leading-tight">
              Partner
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              integer cras odio habitasse diam facilisis iaculis fringilla
              venenatis. Praesent nam suspendisse vel at semper vitae neque. Leo
              mollis fringilla donec eu. Augue turpis sed faucibus eu volutpat.
              Fringilla dolor adipiscing amet duis nisl tellus metus lorem.{" "}
            </p>
            <a
              href="#"
              className=" underline font-bold block m-auto text-green-700"
            >
              Website
            </a>
          </div>

          <div className="col-span-1">
            <img src="https://via.placeholder.com/800x800" />
          </div>

          <div className="col-span-1">
            <img src="https://via.placeholder.com/800x800" />
          </div>

          <div className="mt-6 pr-32 col-span-2 ">
            <p className="block text-2xl font-bold mb-1 leading-tight">
              Partner
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              integer cras odio habitasse diam facilisis iaculis fringilla
              venenatis. Praesent nam suspendisse vel at semper vitae neque. Leo
              mollis fringilla donec eu. Augue turpis sed faucibus eu volutpat.
              Fringilla dolor adipiscing amet duis nisl tellus metus lorem.{" "}
            </p>
            <a
              href="#"
              className=" underline font-bold block m-auto text-green-700"
            >
              Website
            </a>
          </div>

          <div className="mt-6 pl-32 col-span-2 ">
            <p className="block text-2xl font-bold mb-1 leading-tight">
              Partner
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              integer cras odio habitasse diam facilisis iaculis fringilla
              venenatis. Praesent nam suspendisse vel at semper vitae neque. Leo
              mollis fringilla donec eu. Augue turpis sed faucibus eu volutpat.
              Fringilla dolor adipiscing amet duis nisl tellus metus lorem.{" "}
            </p>
            <a
              href="#"
              className=" underline font-bold block m-auto text-green-700"
            >
              Website
            </a>
          </div>

          <div className="col-span-1">
            <img src="https://via.placeholder.com/800x800" />
          </div>

          <div className="col-span-1">
            <img src="https://via.placeholder.com/800x800" />
          </div>

          <div className="mt-6 pr-32 col-span-2 ">
            <p className="block text-2xl font-bold mb-1 leading-tight">
              Partner
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              integer cras odio habitasse diam facilisis iaculis fringilla
              venenatis. Praesent nam suspendisse vel at semper vitae neque. Leo
              mollis fringilla donec eu. Augue turpis sed faucibus eu volutpat.
              Fringilla dolor adipiscing amet duis nisl tellus metus lorem.{" "}
            </p>
            <a
              href="#"
              className=" underline font-bold block m-auto text-green-700"
            >
              Website
            </a>
          </div>

          <div className="mt-6 pl-32 col-span-2 ">
            <p className="block text-2xl font-bold mb-1 leading-tight">
              Partner
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              integer cras odio habitasse diam facilisis iaculis fringilla
              venenatis. Praesent nam suspendisse vel at semper vitae neque. Leo
              mollis fringilla donec eu. Augue turpis sed faucibus eu volutpat.
              Fringilla dolor adipiscing amet duis nisl tellus metus lorem.{" "}
            </p>
            <a
              href="#"
              className=" underline font-bold block m-auto text-green-700"
            >
              Website
            </a>
          </div>

          <div className="col-span-1">
            <img src="https://via.placeholder.com/800x800" />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default PartnersPage;
