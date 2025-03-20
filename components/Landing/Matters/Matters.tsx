export const Matters = () => {
  return (
    <section
      id="matters"
      className="flex items-center justify-between px-4 py-16"
    >
      {/* Left side (Image) */}
      <div className="hidden sm:flex sm:w-full lg:w-1/2">
        <img
          src="/landing/matters.png"
          alt="Matters Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side (Title and 3 items) */}
      <div className="w-full lg:w-1/2 sm:pl-8">
        <h2 className="text-3xl sm:text-2xl lg:text-3xl font-semibold mb-6">
          Why This Matters Title
        </h2>

        {/* Item 1 */}
        <div className="flex items-start mb-6 gap-3">
          <img src="/landing/checkbox.png" className="pt-1" />

          <div>
            <h3 className="text-xl font-semibold mb-2">1 </h3>
            <p className="text-lg">description</p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex items-start mb-6 gap-3">
          <img src="/landing/checkbox.png" className="pt-1" />

          <div>
            <h3 className="text-xl font-semibold mb-2">2</h3>
            <p className="text-lg">description</p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex items-start mb-6 gap-3">
          <img src="/landing/checkbox.png" className="pt-1" />

          <div>
            <h3 className="text-xl font-semibold mb-2">3</h3>
            <p className="text-lg">description</p>
          </div>
        </div>
      </div>
    </section>
  );
};
