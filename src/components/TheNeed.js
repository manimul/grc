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
              <span className="text-4xl italic leading-snug">&quot;</span>
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
              <span className="text-4xl italic leading-snug">&quot;</span>
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
              <span className="text-4xl italic leading-snug">&quot;</span>
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
                  <span className="text-4xl italic leading-snug">&quot;</span>
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
                  <span className="text-4xl italic leading-snug justify-between">
                    &quot;
                  </span>
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

                <div className="bg-white block w-full p-6 text-center h_fit_content rounded-md ">
                  <span className="text-4xl italic leading-snug">&quot;</span>
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
                  <span className="text-4xl italic leading-snug">&quot;</span>
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
                  <span className="text-4xl italic leading-snug">&quot;</span>
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
