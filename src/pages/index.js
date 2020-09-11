import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundImage from 'gatsby-background-image'
import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types';




const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "main-hero-bg.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className }
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
           <div className="md:px-24   m-auto bg-gradient-to-r from-grc-navy  min-h-screen ">
          <div className="max-w-2xl pt-56">
            <h1 className=" mb-4 text-5xl font-bold  leading-tight">
          We are building better futures for young people in non-urban Africa
            </h1>
    
            <p className="leading-loose inline-block">
            Our River Center concept combines in-demand services in a sustainable commercial business model. We want to improve the quality of life in non-urban African communities by offering a viable alternative to city migration.
            </p>
            <a href="#vision" className="inline-block mt-4 border-white border-2 px-4 py-2">Learn More</a>
          </div>
          <div className="mt-24 ">
          <p className="inline-block font-bold">We are proudly sponsored by:</p>
          <div className="grid grid-cols-5 gap-4 mt-8">
            <img src="https://via.placeholder.com/400x200"/>
            <img src="https://via.placeholder.com/400x200"/>
            <img src="https://via.placeholder.com/400x200"/>
            <img src="https://via.placeholder.com/400x200"/>
            <img src="https://via.placeholder.com/400x200"/>
          </div>
        </div>
        </div>
        </BackgroundImage>
      )
    }}
  />
)
BackgroundSection.propTypes = {
  className: PropTypes.array,
};

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      
      <BackgroundSection className="hero  min-h-screen  text-white "></BackgroundSection>

      <section id="vision" className="[vision] grid grid-cols-2 gap-4 ">
        
          <div className="p-24">
            <h2 className="inline-block text-xl  mb-1 text-black text-opacity-50 uppercase">
              Our Vision
            </h2>
            <p className="inline-block text-4xl font-bold mb-4 leading-tight">Enhancing the quality of life for citizens in non-urban sub-Saharan Africa by building 200 Global River Centers 
</p>

 <p className="inline-block font-bold mb-4"> Particularly for the 200 million marginalized young Africans. </p>
 <p className="mb-4">We aim to create an alternative to city migration by enhancing inclusive local economic development, democratisation and skills training.
</p>
<a href="#" className=" underline font-bold block m-auto text-green-700" >Learn more about our concept </a>

          </div>
          <img className=" " src="https://source.unsplash.com/0cgpyigyIkM/1600x1600"/>
          
         
        
      </section>



      <section className="[cta_taskforce] p-24 bg-green-500 text-white text-center">
        <div className="max-w-4xl m-auto">
          <p className="text-4xl">💪</p>
          <h2 className="inline-block text-xl  mb-1 text-white text-opacity-50 uppercase">
          Join Our Taskforce 
          </h2>
          <p className="inline-block text-4xl font-bold mb-4">Would you like to join the mission to improve the quality of life for thousands of young Africans?</p>
          <a href="#vision" className="inline-block mt-4 border-white border-2 px-4 py-2">Join the taskforce</a>

        </div>
      </section>

      <section className="[concept] py-24  px-4">
      <div >
        <div className="text-center max-w-4xl m-auto mb-4">
          <h2 className="block text-xl  mb-1 text-black text-opacity-50 uppercase">
            Our Concept
          </h2>
          <p className="inline-block text-4xl  font-bold mb-4">Our Global River Center concept is an innovative and creative combination of needed elements in a cutting-edge sustainable building</p>
          <p >Creating a multi-functional powerhouse consisting of the following elements: </p>
        </div>
        <div className="md:grid gap-0 grid-cols-3 grid-rows-2  grid-flow-col leading-tight  mb-12 text-white">
        
        <div className=" col-span-1 min-h-64 row-span-2 bg-gray-300 p-4 ">
          <div className="bg-blue-900  inline-block p-6 w-1/2">
            <h3 className="font-bold text-xl">River<br></br> Center<br></br> Infrastructure</h3>
            <p className="text-sm my-4">An environment designed to support local trade...</p>
            <a href="#" className="underline font-bold block m-auto" >Learn more</a>          </div>
        </div>

        <div className="col-span-1 bg-gray-400 p-4">
        <div className="bg-blue-600  inline-block p-6 w-1/2">
            <h3 className="font-bold text-xl">River<br></br> Trading <br></br> Hub</h3>
            <p className="text-sm my-4">An environment designed to support local trade.</p>
            <a href="#" className="underline font-bold block m-auto" >Learn more</a>          </div>
        </div>

        <div className=" col-span-1 bg-gray-500 p-4">
        <div className="bg-green-600 inline-block p-6 w-1/2">
            <h3 className="font-bold text-xl">River<br></br> Community <br></br>Hub</h3>
            <p className="text-sm my-4">An enviroment for local community gatherings.</p>
            <a href="#" className="underline font-bold block m-auto" >Learn more</a>          </div>
        </div>

        <div className=" col-span-1 bg-gray-600 p-4">
        <div className="bg-red-600  inline-block p-6 w-1/2">
            <h3 className="font-bold text-xl">River <br></br>Entertainment<br></br> Hub</h3>
            <p className="text-sm my-4">A space tailored for sports, arts and cultural activities.</p>
            <a href="#" className="underline font-bold block m-auto" >Learn more</a>          </div>
        </div>

        <div className="col-span-1 bg-gray-700 p-4">
        <div className="bg-yellow-600  inline-block p-6 w-1/2">
            <h3 className="font-bold  text-xl">River<br></br> Education<br></br> Hub</h3>
            <p className="text-sm my-4">Education and skills learning facilities and programs that take place in the center.</p>
            <a href="#" className="underline font-bold block m-auto" >Learn more</a>

          </div>
        </div>

    


        </div>
        <a href="#" className="text-center underline font-bold block m-auto text-green-700" >Learn more about our concept </a>
      </div>
      </section>

      <section id="impact" className="[impact] text-white bg-blue-900 ">
        
          <div className="[impact]  m-auto grid grid-cols-5 grid-flow-col gap-12 ">
            <div className="md:p-24  col-span-3">
              <h2 className="inline-block text-lg    text-opacity-50 uppercase">
                Our Impact
              </h2>
              <p className="inline-block text-4xl font-bold mb-4">We directly contribute to 8 of the UNs Sustainable Development Goals </p>
  
   <p className="inline-block font-bold mb-4"> The spin-off effect from our work means we also contribute to 3 other Goals. Furthermore, the long term impact of our work means we can indirectly contribute towards 4 more goals. </p>
   <a href="#" className=" underline font-bold block m-auto text-green-700" >Learn More About Our SDG Impact</a>
  
            </div>
            <img  className="md:p-24 col-span-2 " src="https://via.placeholder.com/800"/>
          </div>
        
      </section>

      <section className="[need] p-24 bg-gray-200">
      <div >
        <div className="text-center max-w-6xl m-auto mb-4">
          <h2 className="block text-lg text-black text-opacity-50 uppercase">
            The Need
          </h2>
          <p className="inline-block text-4xl  font-bold mb-4">What people say about our concept.</p>
        </div>
        <div className="md:grid md:gap-4 md:grid-cols-3 mb-12 max-w-4xl m-auto">
        <div className="bg-white block w-full p-6 shadow-lg text-center ">
        <span  className="text-4xl italic leading-snug" >&quot;</span>
        <p className=" italic text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis tellus risus erat ullamcorper. lestie massa etiam sed orci.</p>
        
          
            <div className="text-center m-auto" >
              <img  className="my-4  m-auto block rounded-full" src="https://via.placeholder.com/100"></img>
            </div>
            <p className="font-bold">Firstname Lastname</p>
            <p>Long Professional Title at Some Company</p>

        </div>
        <div className="bg-white block w-full p-6 shadow-lg text-center ">
        <span  className="text-4xl italic leading-snug" >&quot;</span>
        <p className=" italic text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis tellus risus erat ullamcorper. lestie massa etiam sed orci.</p>
        
          
            <div className="text-center m-auto" >
              <img  className="my-4  m-auto block rounded-full" src="https://via.placeholder.com/100"></img>
            </div>
            <p className="font-bold">Firstname Lastname</p>
            <p>Long Professional Title at Some Company</p>

        </div>  <div className="bg-white block w-full p-6 shadow-lg text-center ">
        <span  className="text-4xl italic leading-snug" >&quot;</span>
        <p className=" italic text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis tellus risus erat ullamcorper. lestie massa etiam sed orci.</p>
        
          
            <div className="text-center m-auto" >
              <img  className="my-4  m-auto block rounded-full" src="https://via.placeholder.com/100"></img>
            </div>
            <p className="font-bold">Firstname Lastname</p>
            <p>Long Professional Title at Some Company</p>

        </div>


        </div>
        <a href="#" className="text-center underline font-bold block m-auto text-green-700" >Learn more about the Need for GRC</a>
      </div>
      </section>



     <section className="[team] p-24">
     <div className="text-center  px-24 m-auto mb-4">
          <h2 className="block text-lg text-black text-opacity-50 uppercase">
            Our Team
          </h2>
          <p className="inline-block text-4xl  font-bold mb-4">Equal parts passion and expertise.</p>
        </div>
        <div className=" grid grid-cols-2 gap-12  m-auto ">

          <div><img src="https://via.placeholder.com/800x800"/></div>

          <div className="mt-6 pr-32">
            <p className="block  mb-1 text-black text-opacity-50 uppercase">CEo and founder</p>
            <p className="block text-2xl font-bold mb-1 leading-tight">Elizabeth Boye</p>
            <a href="#" className=" underline font-bold  mb-4 block m-auto text-green-700" >Linkedin</a>
            <p className="mb-4">Elizabeth is the renowned Responsible Business and Cross-Sector Partnerships for Growth professional. She has more than 26 years of experience working in various Southern, Western and Eastern African as well as South Eastern Asian countries for an impressive range of governments, international corporations and development institutions...</p>
            <a href="#" className=" underline font-bold block m-auto text-green-700" >Read more</a>
          </div>


          <div className="mt-6 pl-32 ">
            <p className="block  mb-1 text-black text-opacity-50 uppercase">CEo and founder</p>
            <p className="block text-2xl font-bold mb-1 leading-tight">Elizabeth Boye</p>
            <a href="#" className=" underline font-bold  mb-4 block m-auto text-green-700" >Linkedin</a>
            <p className="mb-4">Elizabeth is the renowned Responsible Business and Cross-Sector Partnerships for Growth professional. She has more than 26 years of experience working in various Southern, Western and Eastern African as well as South Eastern Asian countries for an impressive range of governments, international corporations and development institutions...</p>
            <a href="#" className=" underline font-bold block m-auto text-green-700" >Read more</a>
          </div>

          <div><img src="https://via.placeholder.com/800x800"/></div>

          <div><img src="https://via.placeholder.com/800x800"/></div>

<div className="mt-6 pr-32">
  <p className="block  mb-1 text-black text-opacity-50 uppercase">CEo and founder</p>
  <p className="block text-2xl font-bold mb-1 leading-tight">Elizabeth Boye</p>
  <a href="#" className=" underline font-bold  mb-4 block m-auto text-green-700" >Linkedin</a>
  <p className="mb-4">Elizabeth is the renowned Responsible Business and Cross-Sector Partnerships for Growth professional. She has more than 26 years of experience working in various Southern, Western and Eastern African as well as South Eastern Asian countries for an impressive range of governments, international corporations and development institutions...</p>
  <a href="#" className=" underline font-bold block m-auto text-green-700" >Read more</a>
</div>

        </div>
     </section>




     <section className="[advisory] p-24 bg-gray-200">
       <div className="text-center  m-auto mb-4">
          <h2 className="block text-lg text-black text-opacity-50 uppercase">
            Advisory Board
          </h2>
          <p className="inline-block text-4xl  font-bold mb-4">Equal parts passion and expertise.</p>
        </div>


      <div className="[advisor_grid]  grid grid-cols-3 gap-12 mb-12  m-auto text-center">

        <article className="[advisor_card]">
          <div className="[card_media]">
          <img src="https://via.placeholder.com/800x800"/>
          </div>

          <div className="[card_content]">
            <header>
                <h2 className="text-lg font-bold">FirstName LastName</h2>
            </header>
            <p>Job Title</p>
            <footer>
              <a href="#" className=" underline font-bold block m-auto text-green-700" >Linkedin</a>
            </footer>
          </div>
        </article>

        <article className="[advisor_card]">
          <div className="[card_media]">
          <img src="https://via.placeholder.com/800x800"/>
          </div>

          <div className="[card_content]">
            <header>
                <h2 className="text-lg font-bold">FirstName LastName</h2>
            </header>
            <p>Job Title</p>
            <footer>
              <a href="#" className=" underline font-bold block m-auto text-green-700" >Linkedin</a>
            </footer>
          </div>
        </article>

        <article className="[advisor_card]">
          <div className="[card_media]">
          <img src="https://via.placeholder.com/800x800"/>
          </div>

          <div className="[card_content]">
            <header>
                <h2 className="text-lg font-bold">FirstName LastName</h2>
            </header>
            <p>Job Title</p>
            <footer>
              <a href="#" className=" underline font-bold block m-auto text-green-700" >Linkedin</a>
            </footer>
          </div>
        </article>

        <article className="[advisor_card]">
          <div className="[card_media]">
          <img src="https://via.placeholder.com/800x800"/>
          </div>

          <div className="[card_content]">
            <header>
                <h2 className="text-lg font-bold">FirstName LastName</h2>
            </header>
            <p>Job Title</p>
            <footer>
              <a href="#" className=" underline font-bold block m-auto text-green-700" >Linkedin</a>
            </footer>
          </div>
        </article>

        <article className="[advisor_card]">
          <div className="[card_media]">
          <img src="https://via.placeholder.com/800x800"/>
          </div>

          <div className="[card_content]">
            <header>
                <h2 className="text-lg font-bold">FirstName LastName</h2>
            </header>
            <p>Job Title</p>
            <footer>
              <a href="#" className=" underline font-bold block m-auto text-green-700" >Linkedin</a>
            </footer>
          </div>
        </article>

        <article className="[advisor_card]">
          <div className="[card_media]">
          <img src="https://via.placeholder.com/800x800"/>
          </div>

          <div className="[card_content]">
            <header>
                <h2 className="text-lg font-bold">FirstName LastName</h2>
            </header>
            <p>Job Title</p>
            <footer>
              <a href="#" className=" underline font-bold block m-auto text-green-700" >Linkedin</a>
            </footer>
          </div>
        </article>

        <article className="[advisor_card]">
          <div className="[card_media]">
          <img src="https://via.placeholder.com/800x800"/>
          </div>

          <div className="[card_content]">
            <header>
                <h2 className="text-lg font-bold">FirstName LastName</h2>
            </header>
            <p>Job Title</p>
            <footer>
              <a href="#" className=" underline font-bold block m-auto text-green-700" >Linkedin</a>
            </footer>
          </div>
        </article>

        <article className="[advisor_card]">
          <div className="[card_media]">
          <img src="https://via.placeholder.com/800x800"/>
          </div>

          <div className="[card_content]">
            <header>
                <h2 className="text-lg font-bold">FirstName LastName</h2>
            </header>
            <p>Job Title</p>
            <footer>
              <a href="#" className=" underline font-bold block m-auto text-green-700" >Linkedin</a>
            </footer>
          </div>
        </article>

        <article className="[advisor_card]">
          <div className="[card_media]">
          <img src="https://via.placeholder.com/800x800"/>
          </div>

          <div className="[card_content]">
            <header>
                <h2 className="text-lg font-bold">FirstName LastName</h2>
            </header>
            <p>Job Title</p>
            <footer>
              <a href="#" className=" underline font-bold block m-auto text-green-700" >Linkedin</a>
            </footer>
          </div>
        </article>

        <article className="[advisor_card]">
          <div className="[card_media]">
          <img src="https://via.placeholder.com/800x800"/>
          </div>

          <div className="[card_content]">
            <header>
                <h2 className="text-lg font-bold">FirstName LastName</h2>
            </header>
            <p>Job Title</p>
            <footer>
              <a href="#" className=" underline font-bold block m-auto text-green-700" >Linkedin</a>
            </footer>
          </div>
        </article>

        <article className="[advisor_card]">
          <div className="[card_media]">
          <img src="https://via.placeholder.com/800x800"/>
          </div>

          <div className="[card_content]">
            <header>
                <h2 className="text-lg font-bold">FirstName LastName</h2>
            </header>
            <p>Job Title</p>
            <footer>
              <a href="#" className=" underline font-bold block m-auto text-green-700" >Linkedin</a>
            </footer>
          </div>
        </article>

      </div>

      <a href="#" className="text-center underline font-bold block m-auto text-green-700" >Learn more about the people behind GRC</a>

     </section>

    

     <section className="[cta_newsletter]  p-24 bg-blue-500 text-white ">
        <div className=" m-auto  grid grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="inline-block text-xl  mb-1 text-white text-opacity-50 uppercase">
            Join Our Taskforce 
            </h2>
            <p className="inline-block text-4xl font-bold">Why don’t you join us and follow the Journey to the River Center. </p>
            <a href="#vision" className="inline-block mt-4 border-white border-2 px-4 py-2">Subscribe</a>
          </div>

<div className=" m-auto"><img src="https://via.placeholder.com/200x200"/></div>
        </div>
      </section>




     <section className="[news] p-24 bg-gray-300">
     <div className="text-center  m-auto mb-4">
          <h2 className="block text-lg text-black text-opacity-50 uppercase">
           News
          </h2>
          <p className="inline-block text-4xl  font-bold mb-4">The latest updates from our newsfeed.</p>
        </div>


        <div className="[news_grid]  grid grid-cols-3 gap-12 mb-12  m-auto text-center">

<article className="[news_card] hover:bg-white opacity-75 transition duration-500 ease-in-out hover:opacity-100 transform hover:-translate-y-1 rounded-lg cursor-pointer hover:shadow-xl">
  <div className="[card_media]">
  <img src="https://source.unsplash.com/600x400/?business"/>
  </div>

  <div className="[card_content] p-4 ">
    <header>
        <h2 className="text-lg font-bold">This is the headline of the news article and it....</h2>
    </header>
    <footer>
      <span>Aug 05 2020</span>
      <a href="#" className=" underline font-bold block m-auto text-green-700" >Linkedin</a>
    </footer>
  </div>
</article>

<article className="[news_card] hover:bg-white opacity-75 transition duration-500 ease-in-out hover:opacity-100 transform hover:-translate-y-1 rounded-lg cursor-pointer hover:shadow-xl">
  <div className="[card_media]">
  <img src="https://source.unsplash.com/600x400/?africa"/>
  </div>

  <div className="[card_content] p-4 ">
    <header>
        <h2 className="text-lg font-bold">This is the headline of the news article and it....</h2>
    </header>
    <footer>
      <span>Aug 05 2020</span>
      <a href="#" className=" underline font-bold block m-auto text-green-700" >Linkedin</a>
    </footer>
  </div>
</article>

<article className="[news_card] hover:bg-white opacity-75 transition duration-500 ease-in-out hover:opacity-100 transform hover:-translate-y-1 rounded-lg cursor-pointer hover:shadow-xl">
  <div className="[card_media]">
  <img src="https://source.unsplash.com/600x400/?africans"/>
  </div>

  <div className="[card_content] p-4 ">
    <header>
        <h2 className="text-lg font-bold">This is the headline of the news article and it....</h2>
    </header>
    <footer>
      <span>Aug 05 2020</span>
      <a href="#" className=" underline font-bold block m-auto text-green-700" >Linkedin</a>
    </footer>
  </div>
  
</article>


</div>
<a href="#" className="text-center underline font-bold block m-auto text-green-700" >Read More News</a>


     </section>


   
    </Layout>
  );
}

export default IndexPage;
