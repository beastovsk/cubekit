export const Works = () => {
  return (
    <section id="about" className="py-20 px-3">
      <div className="text-center">
        <h2 className="text-3xl font-semibold">How It Works title</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center shadow-md rounded-lg p-6">
            <img src="landing/step-1.png" />
            <h3 className="text-3xl font-bold mt-4">title1</h3>
            <p className="mt-4 text-gray-600">description1 </p>
          </div>
          <div className="flex flex-col items-center shadow-md rounded-lg p-6">
            <img src="landing/step-2.png" />
            <h3 className="text-3xl font-bold mt-4">title2</h3>
            <p className="mt-4 text-gray-600">description2</p>
          </div>
          <div className="flex flex-col items-center shadow-md rounded-lg p-6">
            <img src="landing/step-3.png" />
            <h3 className="text-3xl font-bold mt-4">title3 </h3>
            <p className="mt-4 text-gray-600">description3</p>
          </div>
        </div>
      </div>
    </section>
  );
};
