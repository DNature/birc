import React, { useState } from "react";
import MainLayout from "../components/layouts/layout";

const Vision = () => (
  <div className="bg-gray-25 p-4 rounded rounded-tl-none">
    <p className="text-lg">
      Our vision is to maximise opportunities, expand horizons and place our
      clients in market leadership within their various businesses.
    </p>
  </div>
);

const Mission = () => (
  <div className="bg-gray-25 p-4 rounded">
    <p className="text-lg">
      We seek to always provide our clients with customised services by
      transforming and improving businesses and individuals, by the quality
      service we deliver, which is translated to revenue generated.
    </p>
  </div>
);

const pages = [<Vision />, <Mission />];

const About = () => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);

  console.log(page);

  const nextPage = () => {
    setPage(page < pages.length - 1 ? page + 1 : page);
  };
  const prevPage = () => {
    setPage(page > 0 ? page - 1 : page);
  };

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <MainLayout pathname="/about">
      <div className="w-full relative mt-24">
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
          className="container py-24 text-white mx-auto relative h-full max-w-2xl mx-auto py-8 "
          style={{ zIndex: 3 }}
        >
          <h2 className="text-white text-2xl font-bold">ABOUT US</h2>
          <div className="my-4 h-2 bg-gray-25 lg:w-1/6 w-2/6" />
        </div>
      </div>

      {/* About Birc */}
      <div className="">
        <div className="container max-w-2xl mx-auto py-8">
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-100">
              ABOUT <b>BIRC</b> LTD
            </h2>

            <div className="my-4 h-1 bg-gray-100 lg:w-1/6 w-2/6"></div>
          </div>
          <p className="text-gray-75 mb-6 text-md">
            <b>BIRC</b> is a multi-disciplinary consultancy company with core
            consultants as staff. At <b>BIRC</b> we rely upon the expertise of
            these consultants who are not only academically sound but also
            professionals with years of experience to readily tackle current and
            future challenges our clients might experience in the course of
            their business. Our staff is a mix of e external consultants to
            various organisations, Government and business schools, both locally
            and internationally.
          </p>
          <div className={`${!open && "hidden"} `} data-open={open}>
            <p className="text-gray-75 mb-6 text-md">
              <b>BIRC</b> provide solutions to clients in various sectors of the
              We have a strong team, comprising individuals with unique
              competencies in each of our practice areas.
            </p>

            <p className="text-gray-75 mb-6 text-md">
              Using technology, our methodology is premised on simplicity,
              learning with ease, best-practice localization, quality,
              value-derivation, practicality and uniqueness. These have endeared
              us to most of our clients, most of whom have retained us for
              several years.
            </p>

            <p className="text-gray-75 mb-6 text-md">
              With our focus on leadership in the Market, we currently have our
              presence in Abuja, Kaduna and Jos. This provides us with the
              requisite proximity to our clients.
            </p>
          </div>

          <button className={`text-primary-100 font-bold`} onClick={toggleOpen}>
            {open ? "Read less" : "Read more..."}
          </button>
          <hr className="my-4 text-gray-25" />

          {/* Mission and vision */}
          <div className="mt-12">
            <button
              className={`md:text-lg font-bold text-gray-100 px-4 py-2 rounded-tr ${
                page !== pages.length - 1 ? "bg-gray-25" : "hover:bg-gray-15"
              }`}
              onClick={prevPage}
            >
              OUR VISION
            </button>
            <button
              className={`md:text-lg font-bold text-gray-100 px-4 rounded-tl rounded-tr py-2 ${
                page === pages.length - 1 ? "bg-gray-25" : "hover:bg-gray-15"
              }`}
              onClick={nextPage}
            >
              OUR MISSION
            </button>

            {pages[page]}
          </div>
        </div>

        {/* Partners */}
        <div className="bg-gray-15">
          <div className="container mx-auto max-w-2xl py-20">
            <div className="mb-20">
              <h2 className="text-xl font-bold text-gray-100">
                WE ONLY PARTNER WITH TOP CLASS FIRMS
              </h2>

              <div className="my-4 h-2 bg-gray-100 lg:w-1/6 w-2/6"></div>
            </div>

            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="rounded md:w-56"
                  src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
                  alt="Woman paying for a purchase"
                />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline focus:text-primary-100"
                >
                  IT Support LTD.
                </a>
                <p className="mt-2 text-gray-600">
                  Getting a new business off the ground is a lot of hard work.
                  Here are five ideas you can use to find your first customers.
                </p>
              </div>
            </div>
            <div className="md:flex mt-6">
              <div className="md:flex-shrink-0">
                <img
                  className="rounded md:w-56"
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  alt="Woman paying for a purchase"
                />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
                >
                  Finding customers for your new business
                </a>
                <p className="mt-2 text-gray-600">
                  Getting a new business off the ground is a lot of hard work.
                  Here are five ideas you can use to find your first customers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Management */}
        <div className="">
          <div className="container mx-auto max-w-2xl py-20">
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-100">
                OUR MANAGEMENT
              </h2>

              <div className="my-4 h-2 bg-gray-100 lg:w-1/6 w-2/6"></div>
            </div>

            <div className="">
              <p className="text-lg font-semibold">
                BIRC is under the Leadership of four professionals as Directors
                with:
              </p>
            </div>
          </div>
        </div>

        {/*  */}
      </div>
    </MainLayout>
  );
};

export default About;
