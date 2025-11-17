export function HeroSection() {
  return (
    <div className="relative bg-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://placehold.co/1600x600/334155/E2E8F0?text=Learn+In-Demand+Skills"
          alt="Man holding a certificate"
        />
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-48 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
          Certify Your Skills. Advance Your Career.
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-200">
          Explore thousands of hands-on courses from top industry experts. HRD
          Corp claimable.
        </p>
        <div className="mt-10 max-w-lg mx-auto">
          <form className="sm:flex">
            <label htmlFor="search-course" className="sr-only">
              Search for a course
            </label>
            <input
              type="text"
              name="search-course"
              id="search-course"
              className="block w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              placeholder="What do you want to learn?"
            />
            <button
              type="submit"
              className="mt-3 sm:mt-0 sm:ml-3 w-full sm:w-auto px-6 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
