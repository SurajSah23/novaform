import React from 'react';
import { ArrowLeft } from 'lucide-react';

function ParentPage5({ onNext, onBack, progress }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Progress Bar */}
      <div className="w-full px-4 sm:px-8 pt-6 sm:pt-8">
        <div className="max-w-2xl mx-auto">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="px-4 sm:px-8 pt-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer"
        >
          <ArrowLeft size={20} />
          <span className="text-sm sm:text-base">Back</span>
        </button>
      </div>

      {/* Main Question */}
      <div className="text-center mt-6 sm:mt-10 px-4">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
          Why does Luma need to learn English?
        </h1>
      </div>

      {/* Cards Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 py-10">
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Improve school results",
                img: "https://i.ibb.co/3yncjRGx/step-purpose-school-results.png",
                bg: "hover:bg-blue-300",
              },
              {
                title: "For efficient screen time",
                img: "https://i.ibb.co/8gz3CNLs/step-purpose-screen-time.png",
                bg: "hover:bg-purple-300",
              },
              {
                title: "To develop thinking skills",
                img: "https://i.ibb.co/Gv4cP1SK/step-purpose-thinking-skills.png",
                bg: "hover:bg-pink-200",
              },
              {
                title: "Speaking confidently abroad",
                img: "https://i.ibb.co/NdcQMd3F/step-purpose-international-communication.png",
                bg: "hover:bg-sky-200",
              },
              {
                title: "For better career prospects",
                img: "https://i.ibb.co/215QSZ8k/step-purpose-career.png",
                bg: "hover:bg-yellow-300",
              },
            ].map(({ title, img, bg }, index) => (
              <div
                key={index}
                className={`bg-white shadow-lg rounded-2xl p-6 transition hover:shadow-xl cursor-pointer flex flex-col items-center text-center ${bg}`}
                onClick={onNext}
              >
                <img
                  src={img}
                  alt={title}
                  className="h-24 w-24 sm:h-28 sm:w-28 object-contain mb-4"
                />
                <h2 className="text-base sm:text-lg font-bold text-gray-800">
                  {title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParentPage5;
