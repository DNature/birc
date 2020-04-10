const Home = () => (
  <>
    <div className="relative">
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
              Get started
            </button>
          </div>
          <div className="col-span-4 overflow-hidden">
            <img
              src="/images/woman.jpg"
              alt="Birc limited"
              className="w-full h-full rounded"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="relative bg-gray-15">
      <div className="container mx-auto">
        <div className="lg:grid grid-cols-7 gap-4 py-40">
          <div
            className="col-span-3 my-auto grid relative mr-12"
            style={{ placeContent: "center" }}
          >
            <div className="w-full h-full bg-white block absolute top-0 -mt-8 rounded" />
            <img
              src="/images/apple.jpg"
              alt="apple"
              className="w-full hidden md:block lg:-ml-8 rounded shadow-lg z-10"
            />
          </div>
          <div className="col-span-4 overflow-hidden my-auto">
            <h3 className="text-2xl font-bold">Your Best Value Proposition</h3>
            <p className="lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Home;
