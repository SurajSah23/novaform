import React from 'react';
import { ArrowLeft } from 'lucide-react';

function ChildPage5({ onNext, onBack, progress }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Progress Bar */}
      <div className="w-full px-4 sm:px-8 pt-8">
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
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors text-sm sm:text-base"
        >
          <ArrowLeft size={20} />
          Back
        </button>
      </div>

      {/* Heading */}
      <div className="flex justify-center px-4 sm:px-8 text-center mt-6">
        <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl leading-snug">
          Why does Luma need to learn English?
        </h1>
      </div>

      {/* Option Cards */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 mt-12 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">

          {/* Card 1 */}
          <div
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition hover:bg-blue-300 cursor-pointer flex flex-col items-center text-center"
            onClick={onNext}
          >
            <img
              src="https://i.ibb.co/3yncjRGx/step-purpose-school-results.png"
              alt="Improve school results"
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain mb-4"
            />
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">
              Improve school results
            </h2>
          </div>

          {/* Card 2 */}
          <div
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition hover:bg-purple-300 cursor-pointer flex flex-col items-center text-center"
            onClick={onNext}
          >
            <img
              src="https://i.ibb.co/8gz3CNLs/step-purpose-screen-time.png"
              alt="Efficient screen time"
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain mb-4"
            />
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">
              For efficient screen time
            </h2>
          </div>

          {/* Card 3 */}
          <div
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition hover:bg-pink-200 cursor-pointer flex flex-col items-center text-center"
            onClick={onNext}
          >
            <img
              src="https://i.ibb.co/Gv4cP1SK/step-purpose-thinking-skills.png"
              alt="Thinking skills"
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain mb-4"
            />
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">
              To develop thinking skills
            </h2>
          </div>

          {/* Card 4 */}
          <div
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition hover:bg-sky-200 cursor-pointer flex flex-col items-center text-center"
            onClick={onNext}
          >
            <img
              src="https://i.ibb.co/NdcQMd3F/step-purpose-international-communication.png"
              alt="Speaking abroad"
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain mb-4"
            />
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">
              Speaking confidently abroad
            </h2>
          </div>

          {/* Card 5 */}
          <div
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition hover:bg-yellow-300 cursor-pointer flex flex-col items-center text-center"
            onClick={onNext}
          >
            <img
              src="https://i.ibb.co/215QSZ8k/step-purpose-career.png"
              alt="Career prospects"
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain mb-4"
            />
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">
              For better career prospects
            </h2>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ChildPage5;
