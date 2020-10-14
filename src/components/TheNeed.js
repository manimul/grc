import React from "react";
import Image from "./Image";
import { Link } from "gatsby";

function TheNeed(props) {
  return (
    <div>
      <section id="the-need" className="[need] p-12 md:p-24 bg-gray-200">
        <div>
          <div className="text-center max-w-6xl m-auto mb-4">
            <h2 className="block text-lg text-black text-opacity-50 uppercase">
              The Need
            </h2>
            <p className="inline-block text-xl md:text-4xl  font-bold mb-4">
              What people say about our concept.
            </p>
          </div>

          <div className="md:grid md:gap-4 md:grid-cols-3 mb-12 max-w-6xl m-auto ">
            <div className="bg-white block w-full p-6 text-center h_fit_content rounded-md ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                x="0px"
                y="0px"
                className="w-6 m-auto"
                viewBox="0 0 100 125"
              >
                <path d="M44.5,24.7c-7,3-12.4,6.3-16.2,9.9c-3.9,3.6-5.8,8.2-5.8,13.8c0,5.1,1.7,9.1,5.2,12c3.5,2.9,7.6,4.8,12.3,5.8  c0.9,0.2,1.8,0.8,2.7,1.7c0.8,0.9,1.3,2.3,1.3,3.9c0,3.8-1.4,6.5-4.2,8.2c-2.8,1.7-5.5,2.5-7.9,2.5h-0.3c-3,0-6.1-0.7-9.2-2  c-3.1-1.3-5.9-3.1-8.5-5.5c-2.5-2.4-4.7-5.3-6.3-8.7C5.8,62.9,5,58.9,5,54.4c0-5.1,1.1-9.6,3.2-13.7c2.2-4,5-7.6,8.5-10.7  c3.5-3.1,7.4-5.7,11.7-7.8c4.3-2.1,8.7-3.7,13.3-4.8L44.5,24.7z" />
                <path d="M95,24.7c-7,3-12.4,6.3-16.2,9.9c-3.9,3.6-5.8,8.2-5.8,13.8c0,5.1,1.7,9.1,5.2,12c3.5,2.9,7.6,4.8,12.3,5.8  c0.9,0.2,1.8,0.8,2.7,1.7c0.8,0.9,1.3,2.3,1.3,3.9c0,3.8-1.4,6.5-4.2,8.2c-2.8,1.7-5.5,2.5-7.9,2.5H82c-3,0-6.1-0.7-9.2-2  c-3.1-1.3-5.9-3.1-8.5-5.5c-2.5-2.4-4.7-5.3-6.3-8.7c-1.7-3.5-2.5-7.5-2.5-12c0-5.1,1.1-9.6,3.2-13.7c2.2-4,5-7.6,8.5-10.7  c3.5-3.1,7.4-5.7,11.7-7.8c4.3-2.1,8.7-3.7,13.3-4.8L95,24.7z" />
              </svg>{" "}
              <p className=" italic text-gray-700">
                The River Center is exactly what we need. We want to be the
                first area having a River Center. The area needs this – we are
                ready.
              </p>
              <div className="text-center m-auto w-1/2">
                <Image
                  className="my-4  m-auto block rounded-full "
                  filename="need/nana-effah.jpg"
                ></Image>
              </div>
              <p className="font-bold">Ambassador Nana Effah-Apenteng</p>
              <p>Omanhene of Bompata Traditional Area, Ghana</p>
            </div>

            <div className="bg-white block w-full p-6 text-center h_fit_content rounded-md ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                x="0px"
                y="0px"
                className="w-6 m-auto"
                viewBox="0 0 100 125"
              >
                <path d="M44.5,24.7c-7,3-12.4,6.3-16.2,9.9c-3.9,3.6-5.8,8.2-5.8,13.8c0,5.1,1.7,9.1,5.2,12c3.5,2.9,7.6,4.8,12.3,5.8  c0.9,0.2,1.8,0.8,2.7,1.7c0.8,0.9,1.3,2.3,1.3,3.9c0,3.8-1.4,6.5-4.2,8.2c-2.8,1.7-5.5,2.5-7.9,2.5h-0.3c-3,0-6.1-0.7-9.2-2  c-3.1-1.3-5.9-3.1-8.5-5.5c-2.5-2.4-4.7-5.3-6.3-8.7C5.8,62.9,5,58.9,5,54.4c0-5.1,1.1-9.6,3.2-13.7c2.2-4,5-7.6,8.5-10.7  c3.5-3.1,7.4-5.7,11.7-7.8c4.3-2.1,8.7-3.7,13.3-4.8L44.5,24.7z" />
                <path d="M95,24.7c-7,3-12.4,6.3-16.2,9.9c-3.9,3.6-5.8,8.2-5.8,13.8c0,5.1,1.7,9.1,5.2,12c3.5,2.9,7.6,4.8,12.3,5.8  c0.9,0.2,1.8,0.8,2.7,1.7c0.8,0.9,1.3,2.3,1.3,3.9c0,3.8-1.4,6.5-4.2,8.2c-2.8,1.7-5.5,2.5-7.9,2.5H82c-3,0-6.1-0.7-9.2-2  c-3.1-1.3-5.9-3.1-8.5-5.5c-2.5-2.4-4.7-5.3-6.3-8.7c-1.7-3.5-2.5-7.5-2.5-12c0-5.1,1.1-9.6,3.2-13.7c2.2-4,5-7.6,8.5-10.7  c3.5-3.1,7.4-5.7,11.7-7.8c4.3-2.1,8.7-3.7,13.3-4.8L95,24.7z" />
              </svg>
              <p className=" italic text-gray-700">
                This is good. We need this in Kenya and we need it more than
                ever, as social structures are breaking up and investments tend
                to be more and more concentrated around the cities.
              </p>
              <div className="text-center m-auto w-1/2">
                <Image
                  className="my-4  m-auto block rounded-full"
                  filename="need/christine.jpg"
                ></Image>
              </div>
              <p className="font-bold">Christine Misiko</p>
              <p>UNDP, Kenya,Business Sector Support Programme</p>
            </div>

            <div className="bg-white block w-full p-6 text-center h_fit_content rounded-md ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                x="0px"
                y="0px"
                className="w-6 m-auto"
                viewBox="0 0 100 125"
              >
                <path d="M44.5,24.7c-7,3-12.4,6.3-16.2,9.9c-3.9,3.6-5.8,8.2-5.8,13.8c0,5.1,1.7,9.1,5.2,12c3.5,2.9,7.6,4.8,12.3,5.8  c0.9,0.2,1.8,0.8,2.7,1.7c0.8,0.9,1.3,2.3,1.3,3.9c0,3.8-1.4,6.5-4.2,8.2c-2.8,1.7-5.5,2.5-7.9,2.5h-0.3c-3,0-6.1-0.7-9.2-2  c-3.1-1.3-5.9-3.1-8.5-5.5c-2.5-2.4-4.7-5.3-6.3-8.7C5.8,62.9,5,58.9,5,54.4c0-5.1,1.1-9.6,3.2-13.7c2.2-4,5-7.6,8.5-10.7  c3.5-3.1,7.4-5.7,11.7-7.8c4.3-2.1,8.7-3.7,13.3-4.8L44.5,24.7z" />
                <path d="M95,24.7c-7,3-12.4,6.3-16.2,9.9c-3.9,3.6-5.8,8.2-5.8,13.8c0,5.1,1.7,9.1,5.2,12c3.5,2.9,7.6,4.8,12.3,5.8  c0.9,0.2,1.8,0.8,2.7,1.7c0.8,0.9,1.3,2.3,1.3,3.9c0,3.8-1.4,6.5-4.2,8.2c-2.8,1.7-5.5,2.5-7.9,2.5H82c-3,0-6.1-0.7-9.2-2  c-3.1-1.3-5.9-3.1-8.5-5.5c-2.5-2.4-4.7-5.3-6.3-8.7c-1.7-3.5-2.5-7.5-2.5-12c0-5.1,1.1-9.6,3.2-13.7c2.2-4,5-7.6,8.5-10.7  c3.5-3.1,7.4-5.7,11.7-7.8c4.3-2.1,8.7-3.7,13.3-4.8L95,24.7z" />
              </svg>
              <p className=" italic text-gray-700">
                I want to support this, this is needed. Even beyond the city
                border jurisdiction of Accra – I will be able to facilitate the
                support beyond too.
              </p>
              <div className="text-center m-auto w-1/2">
                <Image
                  className="my-4  m-auto block rounded-full"
                  filename="need/agyei.jpg"
                ></Image>
              </div>
              <p className="font-bold">Agyei Sowah</p>
              <p>Hon Mayor of Accra, Ghana</p>
            </div>
            {props.extended && (
              <>
                <div className="bg-white block w-full p-6 text-center h_fit_content rounded-md ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    x="0px"
                    y="0px"
                    className="w-6 m-auto"
                    viewBox="0 0 100 125"
                  >
                    <path d="M44.5,24.7c-7,3-12.4,6.3-16.2,9.9c-3.9,3.6-5.8,8.2-5.8,13.8c0,5.1,1.7,9.1,5.2,12c3.5,2.9,7.6,4.8,12.3,5.8  c0.9,0.2,1.8,0.8,2.7,1.7c0.8,0.9,1.3,2.3,1.3,3.9c0,3.8-1.4,6.5-4.2,8.2c-2.8,1.7-5.5,2.5-7.9,2.5h-0.3c-3,0-6.1-0.7-9.2-2  c-3.1-1.3-5.9-3.1-8.5-5.5c-2.5-2.4-4.7-5.3-6.3-8.7C5.8,62.9,5,58.9,5,54.4c0-5.1,1.1-9.6,3.2-13.7c2.2-4,5-7.6,8.5-10.7  c3.5-3.1,7.4-5.7,11.7-7.8c4.3-2.1,8.7-3.7,13.3-4.8L44.5,24.7z" />
                    <path d="M95,24.7c-7,3-12.4,6.3-16.2,9.9c-3.9,3.6-5.8,8.2-5.8,13.8c0,5.1,1.7,9.1,5.2,12c3.5,2.9,7.6,4.8,12.3,5.8  c0.9,0.2,1.8,0.8,2.7,1.7c0.8,0.9,1.3,2.3,1.3,3.9c0,3.8-1.4,6.5-4.2,8.2c-2.8,1.7-5.5,2.5-7.9,2.5H82c-3,0-6.1-0.7-9.2-2  c-3.1-1.3-5.9-3.1-8.5-5.5c-2.5-2.4-4.7-5.3-6.3-8.7c-1.7-3.5-2.5-7.5-2.5-12c0-5.1,1.1-9.6,3.2-13.7c2.2-4,5-7.6,8.5-10.7  c3.5-3.1,7.4-5.7,11.7-7.8c4.3-2.1,8.7-3.7,13.3-4.8L95,24.7z" />
                  </svg>
                  <p className=" italic text-gray-700">
                    The River Center concept is reassuring and timely. I see it
                    as a unique and viable way of transforming the unemployed
                    youth into valuable assets for development through community
                    building, job creation and provision of social amenities in
                    rural Ghana. This is an opportunity for all of us to tap in
                    and would want to encourage communities to embrace this
                    concept for accelerated socioeconomic development.
                  </p>
                  <div className="text-center m-auto w-1/2">
                    <Image
                      className="my-4  m-auto block rounded-full"
                      filename="need/amery-ambassador.jpg"
                    ></Image>
                  </div>
                  <p className="font-bold">Amerley Ollennu Awua-Asamoa,</p>
                  <p>Ambassador of Ghana to the Kingdom of Denmark</p>
                </div>

                <div className="bg-white block w-full p-6 text-center h_fit_content rounded-md ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    x="0px"
                    y="0px"
                    className="w-6 m-auto"
                    viewBox="0 0 100 125"
                  >
                    <path d="M44.5,24.7c-7,3-12.4,6.3-16.2,9.9c-3.9,3.6-5.8,8.2-5.8,13.8c0,5.1,1.7,9.1,5.2,12c3.5,2.9,7.6,4.8,12.3,5.8  c0.9,0.2,1.8,0.8,2.7,1.7c0.8,0.9,1.3,2.3,1.3,3.9c0,3.8-1.4,6.5-4.2,8.2c-2.8,1.7-5.5,2.5-7.9,2.5h-0.3c-3,0-6.1-0.7-9.2-2  c-3.1-1.3-5.9-3.1-8.5-5.5c-2.5-2.4-4.7-5.3-6.3-8.7C5.8,62.9,5,58.9,5,54.4c0-5.1,1.1-9.6,3.2-13.7c2.2-4,5-7.6,8.5-10.7  c3.5-3.1,7.4-5.7,11.7-7.8c4.3-2.1,8.7-3.7,13.3-4.8L44.5,24.7z" />
                    <path d="M95,24.7c-7,3-12.4,6.3-16.2,9.9c-3.9,3.6-5.8,8.2-5.8,13.8c0,5.1,1.7,9.1,5.2,12c3.5,2.9,7.6,4.8,12.3,5.8  c0.9,0.2,1.8,0.8,2.7,1.7c0.8,0.9,1.3,2.3,1.3,3.9c0,3.8-1.4,6.5-4.2,8.2c-2.8,1.7-5.5,2.5-7.9,2.5H82c-3,0-6.1-0.7-9.2-2  c-3.1-1.3-5.9-3.1-8.5-5.5c-2.5-2.4-4.7-5.3-6.3-8.7c-1.7-3.5-2.5-7.5-2.5-12c0-5.1,1.1-9.6,3.2-13.7c2.2-4,5-7.6,8.5-10.7  c3.5-3.1,7.4-5.7,11.7-7.8c4.3-2.1,8.7-3.7,13.3-4.8L95,24.7z" />
                  </svg>
                  <p className=" italic text-gray-700 justify-between">
                    We have a community center stranding obsolete and youth
                    hanging around in boredom not attending school. We have been
                    struggling to find ways to engage them, the River Center is
                    exactly what we need.
                  </p>

                  <div className="text-center m-auto w-1/2">
                    <Image
                      className="my-4  m-auto block rounded-full"
                      filename="need/osabrima.jpg"
                    ></Image>
                  </div>
                  <p className="font-bold ">Osabarima Ansah Sasraku III</p>
                  <p>Mamfehene & Kyidomhene of Akuapem, Ghana</p>
                </div>

                <div className="bg-white block w-full p-6 text-center h_fit_content flex-col rounded-md ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    x="0px"
                    y="0px"
                    className="w-6 m-auto"
                    viewBox="0 0 100 125"
                  >
                    <path d="M44.5,24.7c-7,3-12.4,6.3-16.2,9.9c-3.9,3.6-5.8,8.2-5.8,13.8c0,5.1,1.7,9.1,5.2,12c3.5,2.9,7.6,4.8,12.3,5.8  c0.9,0.2,1.8,0.8,2.7,1.7c0.8,0.9,1.3,2.3,1.3,3.9c0,3.8-1.4,6.5-4.2,8.2c-2.8,1.7-5.5,2.5-7.9,2.5h-0.3c-3,0-6.1-0.7-9.2-2  c-3.1-1.3-5.9-3.1-8.5-5.5c-2.5-2.4-4.7-5.3-6.3-8.7C5.8,62.9,5,58.9,5,54.4c0-5.1,1.1-9.6,3.2-13.7c2.2-4,5-7.6,8.5-10.7  c3.5-3.1,7.4-5.7,11.7-7.8c4.3-2.1,8.7-3.7,13.3-4.8L44.5,24.7z" />
                    <path d="M95,24.7c-7,3-12.4,6.3-16.2,9.9c-3.9,3.6-5.8,8.2-5.8,13.8c0,5.1,1.7,9.1,5.2,12c3.5,2.9,7.6,4.8,12.3,5.8  c0.9,0.2,1.8,0.8,2.7,1.7c0.8,0.9,1.3,2.3,1.3,3.9c0,3.8-1.4,6.5-4.2,8.2c-2.8,1.7-5.5,2.5-7.9,2.5H82c-3,0-6.1-0.7-9.2-2  c-3.1-1.3-5.9-3.1-8.5-5.5c-2.5-2.4-4.7-5.3-6.3-8.7c-1.7-3.5-2.5-7.5-2.5-12c0-5.1,1.1-9.6,3.2-13.7c2.2-4,5-7.6,8.5-10.7  c3.5-3.1,7.4-5.7,11.7-7.8c4.3-2.1,8.7-3.7,13.3-4.8L95,24.7z" />
                  </svg>

                  <p className=" italic text-gray-700">
                    The leadership and responsibility for building Africa rests
                    squarely on Africans. The River Centers are relevant
                    contributors to reinforce inclusive rural community
                    development. Not least with its focus on empowering and
                    supporting the youth and intergenerational relationship
                    building for future development.
                  </p>

                  <div className="text-center m-auto w-1/2">
                    <Image
                      className="my-4  m-auto block rounded-full"
                      filename="need/jonas.jpg"
                    ></Image>
                  </div>
                  <p className="font-bold">Dr. Jonas Chianu</p>
                  <p>Principal Agricultural Economist. AfDB - Ivory Coast</p>
                </div>

                <div className="bg-white block w-full p-6 text-center h_fit_content rounded-md ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    x="0px"
                    y="0px"
                    className="w-6 m-auto"
                    viewBox="0 0 100 125"
                  >
                    <path d="M44.5,24.7c-7,3-12.4,6.3-16.2,9.9c-3.9,3.6-5.8,8.2-5.8,13.8c0,5.1,1.7,9.1,5.2,12c3.5,2.9,7.6,4.8,12.3,5.8  c0.9,0.2,1.8,0.8,2.7,1.7c0.8,0.9,1.3,2.3,1.3,3.9c0,3.8-1.4,6.5-4.2,8.2c-2.8,1.7-5.5,2.5-7.9,2.5h-0.3c-3,0-6.1-0.7-9.2-2  c-3.1-1.3-5.9-3.1-8.5-5.5c-2.5-2.4-4.7-5.3-6.3-8.7C5.8,62.9,5,58.9,5,54.4c0-5.1,1.1-9.6,3.2-13.7c2.2-4,5-7.6,8.5-10.7  c3.5-3.1,7.4-5.7,11.7-7.8c4.3-2.1,8.7-3.7,13.3-4.8L44.5,24.7z" />
                    <path d="M95,24.7c-7,3-12.4,6.3-16.2,9.9c-3.9,3.6-5.8,8.2-5.8,13.8c0,5.1,1.7,9.1,5.2,12c3.5,2.9,7.6,4.8,12.3,5.8  c0.9,0.2,1.8,0.8,2.7,1.7c0.8,0.9,1.3,2.3,1.3,3.9c0,3.8-1.4,6.5-4.2,8.2c-2.8,1.7-5.5,2.5-7.9,2.5H82c-3,0-6.1-0.7-9.2-2  c-3.1-1.3-5.9-3.1-8.5-5.5c-2.5-2.4-4.7-5.3-6.3-8.7c-1.7-3.5-2.5-7.5-2.5-12c0-5.1,1.1-9.6,3.2-13.7c2.2-4,5-7.6,8.5-10.7  c3.5-3.1,7.4-5.7,11.7-7.8c4.3-2.1,8.7-3.7,13.3-4.8L95,24.7z" />
                  </svg>{" "}
                  <p className=" italic text-gray-700">
                    This is very interesting – I can see the huge potential in
                    this.
                  </p>
                  <div className="text-center m-auto w-1/2">
                    <Image
                      className="my-4  m-auto block rounded-full"
                      filename="need/principle.jpg"
                    ></Image>
                  </div>
                  <p className="font-bold">Dr Julius Muia</p>
                  <p>Principal Secretary in the Kenyan Ministry of Finance</p>
                </div>
                <div className="bg-white block w-full p-6 text-center h_fit_content rounded-md ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    x="0px"
                    y="0px"
                    className="w-6 m-auto"
                    viewBox="0 0 100 125"
                  >
                    <path d="M44.5,24.7c-7,3-12.4,6.3-16.2,9.9c-3.9,3.6-5.8,8.2-5.8,13.8c0,5.1,1.7,9.1,5.2,12c3.5,2.9,7.6,4.8,12.3,5.8  c0.9,0.2,1.8,0.8,2.7,1.7c0.8,0.9,1.3,2.3,1.3,3.9c0,3.8-1.4,6.5-4.2,8.2c-2.8,1.7-5.5,2.5-7.9,2.5h-0.3c-3,0-6.1-0.7-9.2-2  c-3.1-1.3-5.9-3.1-8.5-5.5c-2.5-2.4-4.7-5.3-6.3-8.7C5.8,62.9,5,58.9,5,54.4c0-5.1,1.1-9.6,3.2-13.7c2.2-4,5-7.6,8.5-10.7  c3.5-3.1,7.4-5.7,11.7-7.8c4.3-2.1,8.7-3.7,13.3-4.8L44.5,24.7z" />
                    <path d="M95,24.7c-7,3-12.4,6.3-16.2,9.9c-3.9,3.6-5.8,8.2-5.8,13.8c0,5.1,1.7,9.1,5.2,12c3.5,2.9,7.6,4.8,12.3,5.8  c0.9,0.2,1.8,0.8,2.7,1.7c0.8,0.9,1.3,2.3,1.3,3.9c0,3.8-1.4,6.5-4.2,8.2c-2.8,1.7-5.5,2.5-7.9,2.5H82c-3,0-6.1-0.7-9.2-2  c-3.1-1.3-5.9-3.1-8.5-5.5c-2.5-2.4-4.7-5.3-6.3-8.7c-1.7-3.5-2.5-7.5-2.5-12c0-5.1,1.1-9.6,3.2-13.7c2.2-4,5-7.6,8.5-10.7  c3.5-3.1,7.4-5.7,11.7-7.8c4.3-2.1,8.7-3.7,13.3-4.8L95,24.7z" />
                  </svg>{" "}
                  <p className=" italic text-gray-700">
                    It is exactly the combination of trade and community
                    activities and learning that match the current need in Kenya
                    right now – this is brilliant. Trade does not do it alone.
                  </p>
                  <div className="text-center m-auto w-1/2">
                    <Image
                      className="my-4  m-auto block rounded-full"
                      filename="need/gervase.jpg"
                    ></Image>
                  </div>
                  <p className="font-bold">Gervase Wakoli</p>
                  <p>Kenya Industrial Research and Development Institute</p>
                </div>
              </>
            )}
          </div>
          {!props.extended && (
            <Link
              to="/story/#the-need"
              className="text-center underline font-bold block m-auto text-green-700"
            >
              Learn more about the Need for GRC
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
TheNeed.defaultProps = {
  extended: true,
};

export default TheNeed;
