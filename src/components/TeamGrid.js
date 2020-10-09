import React from "react";
import Image from "./Image";
import PropTypes from "prop-types";

function TeamGrid(props) {
  return (
    <section id="team-intro" className="[team] p-12 md:p-24">
      <div className="text-center  md:px-24 m-auto mb-4">
        <h2 className="block text-lg text-black text-opacity-50 uppercase">
          Our Team
        </h2>
        <p className="inline-block text-xl md:text-4xl  font-bold mb-4">
          Equal parts passion and expertise.
        </p>
      </div>
      <div className="md:max-w-6xl md:grid md:grid-cols-8 md:gap-12  m-auto ">
        <div className="md:col-span-3">
          <Image
            className=" w-full object-cover object-center"
            filename="elizabeth.jpg"
          />
        </div>

        <div className="mt-6 md:pr-32 md:col-span-5">
          <p className="block  mb-1 text-black text-opacity-50 uppercase">
            Ceo and founder
          </p>
          <p className="block text-2xl font-bold mb-1 leading-tight">
            Elizabeth Boye
          </p>
          <a
            href="https://www.linkedin.com/in/elizabethboye/"
            className=" underline font-bold  mb-4 block m-auto text-green-700"
          >
            Linkedin
          </a>
          {props.fullPage ? (
            <>
              <p className="mb-4">
                Elizabeth is the renowned Responsible Business and Cross-Sector
                Partnerships for Growth professional. She has more than 26 years
                of experience working in various Southern, Western and Eastern
                African as well as South Eastern Asian countries for an
                impressive range of governments, international corporations and
                development institutions. Always with a regional development
                focus, she programmed the COOP Savannah brand and programmed the
                Nordzucker sourcing. She was the program director for the CSR
                Juice Platform, mobilizing all stakeholders in the juice sector
                for pre-competitive cooperation on responsible business
                development. She prepared the FanMilk Nigeria for sale and she
                build the capacity of the business association organizing the
                exporting 5000 RMG factories in Bangladesh to mention a few. She
                advised all IFU partner companies in Sub-Saharan Africa on the
                implementation of the IFU CSR policy.
              </p>
              <p className="mb-4">
                {" "}
                She advised Government of Kenya, the National Economic and
                Social Council, on how to make the Public Private Partnership
                (PPP) work for the implementation of the National Development
                Plan (Vision2030). For the Government of Bangladesh she advised
                on effective implementation of the ADB SESIP PPP mandate within
                the National Education Policy, including the establishment of an
                operational platform for stimulation of public private
                innovation.{" "}
              </p>
              <p className="mb-4">
                Further, her work included input to PPP policy drafting
                processes in Ghana and Bangladesh and much more. She educated
                and provided advice to more than 600 high level decision and
                policy makers in how to make cross-sector partnership work for
                effective public and private service delivery in Danida
                programme countries across the globe, particularly in East and
                West Africa. Furthermore she is external course coordinator and
                lecturer at Copenhagen Business School, sole owner of
                Sociability and CEO of Global River Center.
              </p>
            </>
          ) : (
            <>
              <p className="mb-4">
                Elizabeth is the renowned Responsible Business and Cross-Sector
                Partnerships for Growth professional. She has more than 26 years
                of experience working in various Southern, Western and Eastern
                African as well as South Eastern Asian countries for an
                impressive range of governments, international corporations and
                development institutions...
              </p>
              <a
                href="#"
                className=" underline font-bold block m-auto text-green-700"
              >
                Read more
              </a>
            </>
          )}
        </div>

        <div className="mt-6 md:pl-32 md:col-span-5 ">
          <p className="block  mb-1 text-black text-opacity-50 uppercase">
            Chairman
          </p>
          <p className="block text-2xl font-bold mb-1 leading-tight">
            Michael Mathiesen
          </p>
          <a
            href="https://www.linkedin.com/in/michaelmathiesen/"
            className=" underline font-bold  mb-4 block m-auto text-green-700"
          >
            Linkedin
          </a>

          {props.fullPage ? (
            <>
              <p className="mb-4">
                Michael holds more than 30 years international business
                experience, with focus on Information Technology, Telecom and
                eCommerce. He has been hands-on involved in more than 325
                international investments in Europe, US, Canada, Russia, UAE,
                Taiwan, China and West Africa. 2 of them becoming Unicorns.
                Michael has experience from 9 IPOs (Stockholm, Copenhagen and
                London) and more than 35 trade sales. He has served as a
                non-exec board member in more than 100 international private,
                public and government companies as well as the board of Young
                Presidents’ Organization (YPO). Michael is currently engaged as
                CEO of Bambwa Group, a Nordic-African investment company. He is
                using his expertise as a global business leader and his
                experience from over 10 years working on the African continent
                to help establish a new wave of cross-continent investment,
                development and economic bridge-building.
              </p>
            </>
          ) : (
            <>
              <p className="mb-4">
                Michael holds more than 30 years international business
                experience, with focus on Information Technology, Telecom and
                eCommerce. He has been hands-on involved in more than 325
                international investments in Europe, US, Canada, Russia, UAE,
                Taiwan, China and West Africa. 2 of them becoming Unicorns...
              </p>

              <a
                href="#"
                className=" underline font-bold block m-auto text-green-700"
              >
                Read more
              </a>
            </>
          )}
        </div>

        <div className="md:col-span-3">
          <Image
            className=" w-full object-cover object-center"
            filename="michael.jpg"
          />
        </div>

        <div className="md:col-span-3">
          <Image
            className=" w-full object-cover object-center"
            filename="sandra.jpg"
          />
        </div>

        <div className="mt-6 md:pr-32 md:col-span-5">
          <p className="block  mb-1 text-black text-opacity-50 uppercase">
            Concept Developer
          </p>
          <p className="block text-2xl font-bold mb-1 leading-tight">
            Sandra Petersen
          </p>
          <a
            href="https://www.linkedin.com/in/sandra-petersen/"
            className=" underline font-bold  mb-4 block m-auto text-green-700"
          >
            Linkedin
          </a>
          {props.fullPage ? (
            <>
              <p className="mb-4">
                Sandra Petersen is a researcher at Global River Center. She is
                researching funding and strategic partnership opportunities,
                doing research for concept development as well as SoMe content.
                She has a broad background with a B.Sc. in Information Science
                and Cultural mediation, where she did a field study on Zambia’s
                possibilities to become an information society. Moreover, she
                has an MA in Peace, Development, Security and International
                Conflict Transformation gaining experience in multi-stakeholder
                management and engagement, and she has experience with project
                designing through volunteering with the Turkish organisation
                System and Generation, creating a project for cultural
                understanding between Turkey and The EU.{" "}
              </p>
            </>
          ) : (
            <>
              <p className="mb-4">
                Sandra Petersen is a researcher at Global River Center. She is
                researching funding and strategic partnership opportunities,
                doing research for concept development as well as SoMe content.
                She has a broad background with a B.Sc. in Information Science
                and Cultural mediation, where she did a field study on Zambia’s
                possibilities to become an information society...
              </p>

              <a
                href="#"
                className=" underline font-bold block m-auto text-green-700"
              >
                Read more
              </a>
            </>
          )}
        </div>
      </div>
      {!props.fullPage && (
        <a
          href="#"
          className="text-center underline font-bold block m-auto text-green-700 mt-24"
        >
          Learn more about the people behind GRC
        </a>
      )}
    </section>
  );
}
TeamGrid.defaultProps = {
  fullPage: false,
};

TeamGrid.propTypes = {
  fullPage: PropTypes.boolean,
};

export default TeamGrid;
