import React from "react";
import MainLayout from "../components/layouts/layout";

const About = () => (
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
        <p className="text-gray-75  ">
          We are a boutique-consulting firm with over 60 seasoned professionals
          with varied experiences in both the private and public sectors with
          over 29 years of playing a leading role in providing consulting and
          capacity building solutions in various sectors of the economy (Power,
          Oil & Gas, Financial Services, Manufacturing, Agriculture, etc) in
          Nigeria and the West Coast.
        </p>

        <p className="text-gray-75  ">
          We are a boutique-consulting firm with over 60 seasoned professionals
          with varied experiences in both the private and public sectors with
          over 29 years of playing a leading role in providing consulting and
          capacity building solutions in various sectors of the economy (Power,
          Oil & Gas, Financial Services, Manufacturing, Agriculture, etc) in
          Nigeria and the West Coast. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Amet culpa error blanditiis dolorem delectus. Nam
          quo deserunt in consequuntur aliquid delectus necessitatibus porro.
          Sunt, fugit facilis odit magni aliquam eius dolores repudiandae non
          doloremque iste a maiores ipsum debitis suscipit quisquam quos.
          Officiis quos officia dolorem eveniet delectus velit non dolore
          labore. Esse unde cumque sunt voluptatum. Explicabo odio iste veniam
          assumenda perspiciatis, voluptates qui ducimus, aut doloribus fugit
          necessitatibus consectetur sint voluptas, voluptatum deleniti velit
          corporis ipsum nam id maxime sapiente libero impedit magni. Ducimus
          doloremque alias blanditiis minima ullam atque sit dolorem, soluta
          labore pariatur aperiam autem nam harum ut quod obcaecati architecto,
          voluptates maxime eveniet laboriosam qui eaque. Tenetur repellendus
          cumque accusantium asperiores quam nobis ex natus cupiditate, magni
          quisquam sequi dolorem repellat sit illo aspernatur. Assumenda porro
          quia dolor perspiciatis quidem ipsum sit nam eos quam neque mollitia
          maxime, iure iusto vel voluptates? Ea distinctio eveniet, sit
          similique odio error sunt voluptate recusandae inventore, numquam
          accusantium quam suscipit repellat consectetur quisquam? Laboriosam
          nostrum excepturi libero, adipisci quia ut! In aspernatur reiciendis
          consectetur quibusdam, possimus accusamus porro voluptatibus aliquid
          illo, error atque eligendi. Repudiandae molestias facilis tempore
          sapiente, odio sint officia qui illum, molestiae voluptatibus esse
          consequatur.
        </p>
      </div>
    </div>
  </MainLayout>
);

export default About;
