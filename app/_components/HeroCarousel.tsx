import { ChevronLeft, ChevronRight } from "lucide-react";

export function HeroCarousel() {
  return (
    <div className="flex-grow relative group overflow-hidden rounded shadow-md bg-gray-100 h-[300px] md:h-[450px]">
      {/* Mock Hero Image Content */}
      <img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
        alt="Office Interior"
        className="w-full h-full object-cover"
      />

      {/* Overlays (Badge + Logo Mock) */}
      <div className="absolute top-10 left-10 bg-white p-4 rounded-full shadow-lg w-48 h-48 flex items-center justify-center opacity-90 hidden sm:flex">
        <div className="text-center">
          <div className="border-4 border-orange-500 rounded-full p-2 w-36 h-36 flex flex-col items-center justify-center">
            <span className="text-orange-500 font-bold text-xs">
              REGISTERED
            </span>
            <span className="text-blue-900 font-black text-xl leading-tight">
              HRD
              <br />
              <span className="text-sm">CORP</span>
            </span>
            <span className="bg-blue-900 text-white text-[10px] px-2 py-0.5 mt-1 rounded-sm">
              TRAINING PROVIDER
            </span>
          </div>
        </div>
      </div>

      <div className="absolute top-10 right-10 bg-white/90 p-6 shadow-sm hidden sm:block">
        <div className="text-2xl font-bold text-blue-900 flex items-center gap-2">
          <div className="bg-blue-900 text-white w-8 h-8 flex items-center justify-center rounded font-bold">
            T
          </div>
          Tertiary
          <br />
          Infotech
        </div>
        <p className="text-[10px] text-gray-500 mt-2">
          Corporate Training . Workplace Learning Solution . Curriculum
          Development
        </p>
      </div>

      {/* Carousel Controls */}
      <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-900/80 text-white p-3 hover:bg-blue-800 transition-colors">
        <ChevronLeft size={20} />
      </button>
      <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-900/80 text-white p-3 hover:bg-blue-800 transition-colors">
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        <div className="w-3 h-3 rounded-full bg-blue-600"></div>
        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
      </div>
    </div>
  );
}
