import React from 'react';
import { ArrowLeft } from 'lucide-react';

function ParentPage2({ onNext, onBack, progress }) {
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
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="text-sm sm:text-base">Back</span>
        </button>
      </div>

      {/* Question Heading */}
      <div className="text-center mt-6 sm:mt-10 px-4">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
          Can Luma read English?
        </h1>
      </div>

      {/* Options */}
      <div className="flex-1 flex items-center justify-center px-4 py-10 sm:px-8">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition hover:bg-yellow-300 cursor-pointer flex flex-col items-center text-center"
              onClick={onNext}
            >
              <img
                src="https://i.ibb.co/zWjyvvwT/step2-icon1.png"
                alt="reads well"
                className="h-24 w-24 sm:h-28 sm:w-28 object-contain mb-4"
              />
              <h2 className="text-base sm:text-lg font-bold text-gray-800">
                Can read short English sentences
              </h2>
            </div>

            {/* Card 2 */}
            <div
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition hover:bg-green-300 cursor-pointer flex flex-col items-center text-center"
              onClick={onNext}
            >
              <img
                src="https://i.ibb.co/39t6g8wR/step2-icon2.png"
                alt="some words"
                className="h-24 w-24 sm:h-28 sm:w-28 object-contain mb-4"
              />
              <h2 className="text-base sm:text-lg font-bold text-gray-800">
                Can read some English words
              </h2>
            </div>

            {/* Card 3 */}
            <div
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition hover:bg-purple-300 cursor-pointer flex flex-col items-center text-center"
              onClick={onNext}
            >
              <img
                src="https://i.ibb.co/SXQHsFn1/step2-icon3.png"
                alt="needs support"
                className="h-24 w-24 sm:h-28 sm:w-28 object-contain mb-4"
              />
              <h2 className="text-base sm:text-lg font-bold text-gray-800">
                Needs support to read English
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParentPage2;
