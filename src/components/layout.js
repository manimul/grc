import PropTypes from "prop-types";
import React from "react";
import Logo from "../images/grc-logo.svg";

import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900  ">
      <Header />

      <main className="flex-1 w-full  mx-auto  pt-24 -mt-24">{children}</main>

      <section className="[contact] grid grid-cols-2 gap-4 ">
        <div className="p-24">
          <h2 className="inline-block text-xl  mb-1 text-black text-opacity-50 uppercase">
            Contact Us
          </h2>
          <p className="inline-block text-4xl font-bold mb-4 leading-tight">
            Please get in touch if you have any questions or would like to work
            with us
          </p>

          <p className="mb-4">
            We are always looking for exciting partnership prospects and we are
            equally enthuastic to discuss our concept with interested parties.
            If this sounds like you get in touch.
          </p>
          <a
            href="#"
            className=" underline font-bold block m-auto text-green-700"
          >
            Learn more about our concept{" "}
          </a>
        </div>
        <div className="p-24">
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  E-mail
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Message
                </label>
                <textarea
                  className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  id="message"
                ></textarea>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <button
                  className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Send
                </button>
              </div>
              <div className="md:w-2/3"></div>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-grc-navy ">
        <div className="flex justify-between max-w-6xl  mx-auto text-white text-sm md:py-24">
          <div className="w-1/4 pr-12 ">
            <Logo className="w-4/5 h-auto"></Logo>
            <p className="py-4 pr-4">
              Our River Center concept combines in-demand services in a
              sustainable commercial business model.{" "}
            </p>
            <div className="[social_icons] inline-flex ">
              <img
                className="w-1/4 pr-2 "
                src="https://via.placeholder.com/32x32"
              />
              <img
                className="w-1/4 pr-2"
                src="https://via.placeholder.com/32x32"
              />
              <img
                className="w-1/4 pr-2"
                src="https://via.placeholder.com/32x32"
              />
              <img
                className="w-1/4 pr-2"
                src="https://via.placeholder.com/32x32"
              />
            </div>
            <p className="py-4 font-bold">#BuildingBetterFutures</p>
          </div>

          <div className="w-1/4">
            <nav className="pb-8">
              <h1 className="font-bold pb-2">The Story</h1>
              <ul>
                <li className="pb-1 opacity-75 hover:opacity-100 cursor-pointer">
                  <a href="#">The Problem</a>
                </li>
                <li className="pb-1 opacity-75 hover:opacity-100 cursor-pointer">
                  <a href="#">The Problem</a>
                </li>
                <li className="pb-1 opacity-75 hover:opacity-100 cursor-pointer">
                  <a href="#">The Problem</a>
                </li>
                <li className="pb-1 opacity-75 hover:opacity-100 cursor-pointer">
                  <a href="#">The Problem</a>
                </li>
              </ul>
            </nav>

            <nav className="pb-8">
              <h1 className="font-bold pb-2">The Story</h1>
              <ul>
                <li className="pb-1 opacity-75 hover:opacity-100 cursor-pointer">
                  <a href="#">The Problem</a>
                </li>
                <li className="pb-1 opacity-75 hover:opacity-100 cursor-pointer">
                  <a href="#">The Problem</a>
                </li>
                <li className="pb-1 opacity-75 hover:opacity-100 cursor-pointer">
                  <a href="#">The Problem</a>
                </li>
                <li className="pb-1 opacity-75 hover:opacity-100 cursor-pointer">
                  <a href="#">The Problem</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="w-1/4">
            <nav className="pb-8">
              <h1 className="font-bold pb-2">The Story</h1>
              <ul>
                <li className="pb-1 opacity-75 hover:opacity-100 cursor-pointer">
                  <a href="#">The Problem</a>
                </li>
                <li className="pb-1 opacity-75 hover:opacity-100 cursor-pointer">
                  <a href="#">The Problem</a>
                </li>
                <li className="pb-1 opacity-75 hover:opacity-100 cursor-pointer">
                  <a href="#">The Problem</a>
                </li>
                <li className="pb-1 opacity-75 hover:opacity-100 cursor-pointer">
                  <a href="#">The Problem</a>
                </li>
              </ul>
            </nav>

            <nav className="pb-8">
              <h1 className="font-bold pb-2">The Story</h1>
              <ul>
                <li className="pb-1 opacity-75 hover:opacity-100 cursor-pointer">
                  <a href="#">The Problem</a>
                </li>
                <li className="pb-1 opacity-75 hover:opacity-100 cursor-pointer">
                  <a href="#">The Problem</a>
                </li>
                <li className="pb-1 opacity-75 hover:opacity-100 cursor-pointer">
                  <a href="#">The Problem</a>
                </li>
                <li className="pb-1 opacity-75 hover:opacity-100 cursor-pointer">
                  <a href="#">The Problem</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="w-1/4">
            <nav className="pb-8">
              <h1 className="font-bold pb-2">The Story</h1>
              <ul>
                <li className="pb-1 opacity-75 hover:opacity-100 cursor-pointer">
                  <a href="#">The Problem</a>
                </li>
                <li className="pb-1 opacity-75 hover:opacity-100 cursor-pointer">
                  <a href="#">The Problem</a>
                </li>
                <li className="pb-1 opacity-75 hover:opacity-100 cursor-pointer">
                  <a href="#">The Problem</a>
                </li>
                <li className="pb-1 opacity-75 hover:opacity-100 cursor-pointer">
                  <a href="#">The Problem</a>
                </li>
              </ul>
            </nav>

            <nav className="pb-8">
              <h1 className="font-bold pb-2">The Story</h1>
              <ul>
                <li className="pb-1 opacity-75 hover:opacity-100 cursor-pointer">
                  <a href="#">The Problem</a>
                </li>
                <li className="pb-1 opacity-75 hover:opacity-100 cursor-pointer">
                  <a href="#">The Problem</a>
                </li>
                <li className="pb-1 opacity-75 hover:opacity-100 cursor-pointer">
                  <a href="#">The Problem</a>
                </li>
                <li className="pb-1 opacity-75 hover:opacity-100 cursor-pointer">
                  <a href="#">The Problem</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="flex-row border-t border-white  opacity-25 max-w-6xl m-auto  text-white text-center">
          <p className="py-6 text-sm">
            Global River Center A/S 2020 | CVR: 40882669
          </p>
        </div>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
