import { getParentsForCategory } from "@/services/category/category.service";
import Link from "next/link";
interface props {
  categoryId: string;
  courseName: string;
}

const icons = {
  // Navigation
  ChevronRight: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-chevron-right"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  ),
};

export async function CategoryNavigation({ categoryId, courseName }: props) {
  const data = await getParentsForCategory(categoryId);

  return (
    <div>
      <nav className="flex mb-6 text-sm" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-2 text-gray-500">
          <li>
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li></li>
          {data.map((d) => (
            <div className="flex items-center" key={d.id}>
              <li>
                <Link
                  href={`/category/${d.id}`}
                  className="hover:text-blue-600"
                >
                  {d.name}
                </Link>
              </li>
              <li>{icons.ChevronRight}</li>
            </div>
          ))}

          <li>
            <span className="font-medium text-gray-700">{courseName}</span>
          </li>
        </ol>
      </nav>
    </div>
  );
}
