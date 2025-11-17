import prisma from "@/lib/prisma";

export async function ExploreCategoriesSection() {
  const categories = await prisma.courseCategory.findMany({
    take: 10,
  });

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Explore by Category
        </h2>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <a
              key={category.name}
              href="#"
              className="group p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
            >
              <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {category.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
