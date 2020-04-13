import React, { useState } from "react";
import MainLayout from "../components/layouts/layout";

const Vision = () => (
  <div className="bg-gray-25 p-4 rounded rounded-tl-none">
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi mollitia,
      ut temporibus nobis exercitationem totam consectetur quibusdam,
      necessitatibus magnam hic velit labore reiciendis nulla aperiam nihil
      voluptate, alias nemo. Ipsum, deserunt excepturi rerum repudiandae harum
      dolores nemo qui, laborum praesentium exercitationem officia doloribus
      iusto necessitatibus corrupti laudantium, dicta quae soluta?
    </p>
  </div>
);

const Mission = () => (
  <div className="bg-gray-25 p-4 rounded">
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi mollitia,
      ut temporibus nobis exercitationem totam consectetur quibusdam,
      necessitatibus magnam hic velit labore reiciendis nulla aperiam nihil
      voluptate, alias nemo. Ipsum, deserunt excepturi rerum repudiandae harum
      dolores nemo qui, laborum praesentium exercitationem officia doloribus
      iusto necessitatibus corrupti laudantium, dicta quae soluta?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aut rerum
      animi fuga laborum neque perspiciatis consectetur itaque. Dolorum possimus
      eos cupiditate asperiores a ullam ipsum sapiente pariatur exercitationem
      corporis!
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
      <div className="">
        <div className="container max-w-2xl mx-auto py-8">
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-100">
              ABOUT <b>BIRC</b> LTD
            </h2>

            <div className="my-4 h-1 bg-gray-100 lg:w-1/6 w-2/6"></div>
          </div>
          <p className="text-gray-75 mb-6">
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
            <p className="text-gray-75 mb-6">
              <b>BIRC</b> provide solutions to clients in various sectors of the
              We have a strong team, comprising individuals with unique
              competencies in each of our practice areas.
            </p>

            <p className="text-gray-75 mb-6">
              Using technology, our methodology is premised on simplicity,
              learning with ease, best-practice localization, quality,
              value-derivation, practicality and uniqueness. These have endeared
              us to most of our clients, most of whom have retained us for
              several years.
            </p>

            <p className="text-gray-75 mb-6">
              With our focus on leadership in the Market, we currently have our
              presence in Abuja, Kaduna and Jos. This provides us with the
              requisite proximity to our clients.
            </p>
          </div>

          <button className={`text-primary-100 font-bold`} onClick={toggleOpen}>
            {open ? "Read less" : "Read more..."}
          </button>
          <hr className="my-4 text-gray-25" />

          <div className="mt-12">
            <button
              className={`text-lg font-bold text-gray-100 px-4 py-2 rounded-tr ${
                page !== pages.length - 1 && "bg-gray-25"
              }`}
              onClick={prevPage}
            >
              OUR VISION
            </button>
            <button
              className={`text-lg font-bold text-gray-100 px-4 rounded-tl rounded-tr py-2 ${
                page === pages.length - 1 && "bg-gray-25"
              }`}
              onClick={nextPage}
            >
              OUR MISSION
            </button>

            {pages[page]}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
