import React from "react";
import Head from "next/head";

const Home = () => (
  <>
    <html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="relative bg-gray-15">
        <div className="container mx-auto">
          <div className="lg:grid grid-cols-7 gap-4 py-40">
            <div className="col-span-3 lg:pr-6">
              <h1 className="text-2xl lg:text-4xl font-bold">
                Bussiness Innovation & Re-Engineering Company
              </h1>
              <p className="text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <button className="btn px-6 py-3 bg-primary-100 rounded text-white font-bold my-6">
                Get started <span>&rarr;</span>
              </button>
            </div>
            <div className="col-span-4 overflow-hidden hidden lg:block">
              <img
                src="/images/woman.jpg"
                alt="Birc limited"
                className="w-full h-full rounded"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="container mx-auto">
          <div className="lg:grid grid-cols-7 gap-4 py-40">
            <div
              className="col-span-3 my-auto grid relative mr-12"
              style={{ placeContent: "center" }}
            >
              <div className="w-full h-full  bg-gray-15 block absolute top-0 -mt-8 rounded" />
              <img
                src="/images/apple.jpg"
                alt="apple"
                className="w-full hidden md:block lg:-ml-8 rounded shadow-xl z-10"
              />
            </div>
            <div className="col-span-4 overflow-hidden my-auto">
              <h3 className="text-2xl font-bold">
                Your Best Value Proposition
              </h3>
              <p className="lg:text-xl text-gray-100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <p className="mt-8 text-gray-75 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-gray-15">
        <div className="container mx-auto py-40">
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-100">
              ACTIONABLE INSIGHTS
            </h2>

            <div className="my-4 h-2 bg-gray-100 lg:w-1/6 w-2/6"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="rounded-md bg-white hover:shadow-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1467664631004-58beab1ece0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt=""
                className="w-full"
              />

              <div className="p-5">
                <h3 className="lg:text-xl font-bold text-primary-100 my-3">
                  Learning
                </h3>
                <p className="lg:text-md text-gray-75">
                  We offer blended and digital learning solutions covering
                  technical and non-technical capacity building programmes, in
                  collaboration with our strategic alliances.
                </p>

                <a href="#" className="block mt-4 text-base text-primary-50">
                  Read more <span>&rarr;</span>
                </a>
              </div>
            </div>
            <div className="rounded-md bg-white hover:shadow-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80"
                alt=""
                className="w-full"
              />
              <div className="p-5">
                <h3 className="lg:text-xl font-bold text-primary-100 my-3">
                  Learning
                </h3>
                <p className="lg:text-md text-gray-75">
                  We offer blended and digital learning solutions covering
                  technical and non-technical capacity building programmes, in
                  collaboration with our strategic alliances.
                </p>
                <a href="#" className="block mt-4 text-base text-primary-50">
                  Read more <span>&rarr;</span>
                </a>
              </div>
            </div>
            <div className="rounded-md bg-white hover:shadow-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80"
                alt=""
                className="w-full"
              />
              <div className="p-5">
                <h3 className="lg:text-xl font-bold text-primary-100 my-3">
                  Learning
                </h3>
                <p className="lg:text-md text-gray-75">
                  We offer blended and digital learning solutions covering
                  technical and non-technical capacity building programmes, in
                  collaboration with our strategic alliances.
                </p>
                <a href="#" className="block mt-4 text-base text-primary-50">
                  Read more <span>&rarr;</span>
                </a>
              </div>
            </div>
            <div className="rounded-md bg-white hover:shadow-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1291&q=80"
                alt=""
                className="w-full"
              />
              <div className="p-5">
                <h3 className="lg:text-xl font-bold text-primary-100 my-3">
                  Learning
                </h3>
                <p className="lg:text-md text-gray-75">
                  We offer blended and digital learning solutions covering
                  technical and non-technical capacity building programmes, in
                  collaboration with our strategic alliances.
                </p>
                <a href="#" className="block mt-4 text-base text-primary-50">
                  Read more <span>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full relative">
        <div
          className="absolute top-0 left-0 bottom-0 right-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            zIndex: 1,
          }}
        />
        <div
          className="bg-black top-0 left-0 right-0 bottom-0 absolute opacity-75"
          style={{ zIndex: 2 }}
        />

        <div
          className="container py-40 text-white mx-auto relative h-full"
          style={{ zIndex: 3 }}
        >
          <h2 className="text-white text-2xl font-bold">WHO WE ARE</h2>
          <div className="my-4 h-2 bg-gray-25 lg:w-1/6 w-2/6" />
          <p className="text-gray-25 text-md lg:w-3/5">
            We are a boutique-consulting firm with over 60 seasoned
            professionals with varied experiences in both the private and public
            sectors with over 29 years of playing a leading role in providing
            consulting and capacity building solutions in various sectors of the
            economy (Power, Oil & Gas, Financial Services, Manufacturing,
            Agriculture, etc) in Nigeria and the West Coast.
          </p>
        </div>
      </div>

      <div className="relative bg-gray-15">
        <div className="container mx-auto py-40">
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-100">
              BIRC LATEST NEWS AND EVENTS
            </h2>

            <div className="my-4 h-2 bg-gray-100 lg:w-1/6 w-2/6"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            <div className="rounded-md bg-white hover:shadow-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1467664631004-58beab1ece0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt=""
                className="w-full"
              />

              <div className="p-5">
                <h3 className="lg:text-xl font-bold text-primary-100 my-3">
                  Covid-19 Economic impact
                </h3>
                <div className="py-4">
                  <span className="inline-block bg-gray-25 rounded-full px-3 py-1 text-sm font-semibold text-gray-75 mr-2">
                    #covid-19
                  </span>
                  <span className="inline-block bg-gray-25 rounded-full px-3 py-1 text-sm font-semibold text-gray-75 mr-2">
                    #news
                  </span>
                </div>
                <p className="lg:text-md text-gray-75">
                  3 things to do to ensure your business steer through the
                  pandemic and come out on top. “In the face of a global crisis,
                  well-prepared businesses can help protect their workers and
                  their bottom lines” culled from Strategy+Business The content
                  of most emails relating to the COVID-19 / Coronavirus pandemic
                  have been pretty much identical...
                </p>

                <a href="#" className="block mt-4 text-base text-primary-50">
                  Read more <span>&rarr;</span>
                </a>
              </div>
            </div>

            <div className="rounded-md bg-white hover:shadow-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80"
                alt=""
                className="w-full"
              />
              <div className="p-5">
                <h3 className="lg:text-xl font-bold text-primary-100 my-3">
                  Export Masterclass
                </h3>
                <div className="py-4">
                  <span className="inline-block bg-gray-25 rounded-full px-3 py-1 text-sm font-semibold text-gray-75 mr-2">
                    #training
                  </span>
                </div>
                <p className="lg:text-md text-gray-75">
                  Title: Succeeding in Export Business – Ground rules for
                  Beginners Date: March 5th, 2020 Time: Full Day Location: Lagos
                  Nigeria Precise location and agenda will be sent to
                  participants after registration. In light of constantly
                  changing government policies, new international standards,
                  currency instability, risk and trade duties; potential or new
                  exporters may be discouraged and perceive ...
                </p>
                <a href="#" className="block mt-4 text-base text-primary-50">
                  Read more <span>&rarr;</span>
                </a>
              </div>
            </div>
            <div className="rounded-md bg-white hover:shadow-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1291&q=80"
                alt=""
                className="w-full"
              />
              <div className="p-5">
                <h3 className="lg:text-xl font-bold text-primary-100 my-3">
                  Become a Pro Digital marketer
                </h3>
                <div className="py-4">
                  <span className="inline-block bg-gray-25 rounded-full px-3 py-1 text-sm font-semibold text-gray-75 mr-2">
                    #training
                  </span>
                </div>
                <p className="lg:text-md text-gray-75">
                  In a bid to develop a long-term view to strategic planning for
                  Plateau State, the Executive Governor of the state, Rt. Hon
                  Simon Bako Lalong, recently organised a four-day retreat to
                  unveil the broad vision for his second term in office and to
                  kick off the policy execution for the state. At the session,
                  the
                </p>
                <a href="#" className="block mt-4 text-base text-primary-50">
                  Read more <span>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
          <button className="btn px-6 py-3 bg-primary-100 rounded text-white font-bold my-6">
            Explore our articles <span>&rarr;</span>
          </button>
        </div>
      </div>

      <div className="">
        <div className="container mx-auto py-40">
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-100 text-center">
              What our clients stays about us
            </h2>

            <div className="my-4 h-2 bg-gray-100 lg:w-1/6 w-2/6 mx-auto"></div>
          </div>

          <div className="text-center md:w-3/5 mx-auto">
            <div className="text-md text-gray-75">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
              atque consequatur aperiam! Pariatur nulla maxime similique harum
              distinctio ad neque blanditiis eum explicabo quo omnis quos
              molestias labore sint tenetur, enim minima? Dolorem itaque, earum.
            </div>
          </div>
          <div className="md:flex bg-white rounded-lg p-6 justify-center content-center">
            <img
              className="h-16 w-16  rounded-full mx-auto md:mx-0 md:mr-6"
              src="/images/avatar.png"
            />
            <div className="text-center md:text-left my-auto">
              <h2 className="text-lg">Divine Hycenth</h2>
              <div className="text-primary-50">
                Developer @ Dreamworks Limited
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-25">
        <div className="container mx-auto py-20">
          <div className="">
            <h2 className="text-lg text-gray-100 text-center">
              BIRC &copy; 2020.
            </h2>

            <div className="mt-4 h-1 bg-gray-100 lg:w-1/6 w-2/6 mx-auto"></div>
          </div>
        </div>
      </div>
    </html>
  </>
);

export default Home;
