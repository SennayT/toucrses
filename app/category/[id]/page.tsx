import prisma from "@/lib/prisma";
import { CategoryDetail } from "./_components/CategoryDetail";

interface Props {
  params: Promise<{ id: string }>;
}

const getColor = (index: number) => {
  const colors = [
    {
      bg: "bg-blue-500/10",
      color: "text-blue-700",
    },
    {
      bg: "bg-pink-500/10",
      color: "text-pink-700",
    },
    {
      bg: "bg-yellow-500/10",
      color: "text-yellow-700",
    },
    {
      bg: "bg-green-500/10",
      color: "text-green-700",
    },
    {
      bg: "bg-indigo-500/10",
      color: "text-indigo-700",
    },
  ];
  if (index > colors.length) return colors[0];
  return colors[index];
};

export default async function Page({ params }: Props) {
  const { id } = await params;
  const category = await prisma.courseCategory.findUnique({ where: { id } });
  if (!category) return <p>Category not found</p>;
  const tags = await prisma.categoryTags.findMany({
    where: {
      categoryId: category.id,
    },
    include: {
      tag: true,
    },
  });
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="py-6 border-b border-gray-200 mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {category.name}
          </h1>
        </header>

        {/* Introductory Content Section */}
        <section className="bg-white p-8 rounded-xl shadow-lg mb-12 border border-indigo-100">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">
            Wide Range of Certified Courses
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>{category.description}</p>
          </div>

          {/* Simple, modern representation of the platforms */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            {tags.map((t, i) => (
              <span
                className={`p-3 bg-blue-500/10 text-blue-700 rounded-lg text-xs font-semibold ${
                  getColor(i).bg
                } ${getColor(i).color}`}
                key={t.tagId}
              >
                #{t.tag.name}
              </span>
            ))}
          </div>
        </section>
        <CategoryDetail />
      </div>
    </div>
  );
}
