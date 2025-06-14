import React from 'react';
import { ArrowLeft } from 'lucide-react';

function ChildPage6({ onNext, onBack, progress }) {
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

      {/* Title */}
      <div className="flex justify-center px-4 sm:px-8 text-center mt-6">
        <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl leading-snug">
          What does Luma enjoy doing?
        </h1>
      </div>

      {/* Cards */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 mt-12 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">

          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition hover:bg-blue-300 cursor-pointer flex flex-col items-center text-center">
            <img
              src="https://i.ibb.co/C5MqHnHN/step5-icon1.png"
              alt="Outdoor activities"
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain mb-4"
            />
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">Outdoor activities</h2>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition hover:bg-purple-300 cursor-pointer flex flex-col items-center text-center">
            <img
              src="https://i.ibb.co/CKRJfsq1/step5-icon2.png"
              alt="Art and music"
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain mb-4"
            />
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">Art and music</h2>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition hover:bg-pink-200 cursor-pointer flex flex-col items-center text-center">
            <img
              src="https://i.ibb.co/NgWdNGDX/step5-icon3.png"
              alt="Team sports and games"
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain mb-4"
            />
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">Team sports and games</h2>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition hover:bg-sky-200 cursor-pointer flex flex-col items-center text-center">
            <img
              src="https://i.ibb.co/9HSDBqzf/step5-icon4.png"
              alt="Video games"
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain mb-4"
            />
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">Video games</h2>
          </div>

          {/* Card 5 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition hover:bg-yellow-300 cursor-pointer flex flex-col items-center text-center">
            <img
              src="https://i.ibb.co/ds54rkbL/step5-icon5.png"
              alt="Watching movies"
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain mb-4"
            />
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">Watching movies</h2>
          </div>

          {/* Card 6 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition hover:bg-yellow-300 cursor-pointer flex flex-col items-center text-center">
            <img
              src="https://i.ibb.co/tpmLw2YN/step5-icon6.png"
              alt="Books"
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain mb-4"
            />
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">Books</h2>
          </div>
        </div>

        {/* Get Result Button */}
        <button
          onClick={onNext}
          className="bg-blue-600 hover:bg-yellow-400 text-white hover:text-black mt-12 px-8 py-4 rounded-2xl text-lg font-semibold transition-colors flex items-center justify-center gap-2 mx-auto w-60"
        >
          GET RESULT
        </button>
      </div>
    </div>
  );
}

export default ChildPage6;
