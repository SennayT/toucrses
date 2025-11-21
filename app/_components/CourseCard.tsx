import { Star } from "lucide-react";

export const CourseCard = ({ course, type = "standard" }: { course: any, type: string | undefined }) => {
  if (type === "microsoft") {
    return (
      <div className="bg-white p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
        <img src={course.image} alt={course.title} className="w-32 h-32 object-contain mb-4" />
        <h4 className="text-sm font-bold text-gray-700 leading-tight mb-2 line-clamp-3 min-h-[3rem]">{course.title}</h4>
        <div className="mt-auto">
          {/* Badge Mock */}
          <div className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-sm inline-block mb-2">
            ASSOCIATE
          </div>
          <div className="flex justify-center gap-1 text-blue-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} fill={i < 2 ? "currentColor" : "none"} className={i < 2 ? "text-blue-500" : "text-gray-300"} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 flex flex-col items-center text-center group">
      <div className="mb-4 relative w-24 h-24 flex items-center justify-center">
        <img src={course.image} alt={course.title} className="max-w-full max-h-full object-contain" />
      </div>
      <h4 className="text-base font-semibold text-gray-800 mb-2 leading-snug min-h-[3rem] line-clamp-2">
        {course.title}
      </h4>

      <div className="flex items-center gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={12} className={i < Math.floor(course.rating) ? "text-black fill-black" : "text-gray-300"} />
        ))}
        <span className="text-xs text-gray-400 ml-1">{course.reviews} REVIEW(S)</span>
      </div>

      <div className="text-blue-600 font-medium mb-3">{course.price}</div>

      <button className="bg-blue-900 text-white text-xs font-medium py-2 px-6 hover:bg-blue-800 transition-colors">
        See Details
      </button>
    </div>
  );
};