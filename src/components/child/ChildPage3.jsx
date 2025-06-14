import React from 'react';
import { ArrowLeft } from 'lucide-react';

function ChildPage3({ onNext, onBack, progress }) {
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
          Can Luma speak English?
        </h1>
      </div>

      {/* Options */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">

          {/* Option 1 */}
          <div
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition hover:bg-yellow-300 cursor-pointer flex flex-col items-center text-center"
            onClick={onNext}
          >
            <img
              src="https://i.ibb.co/ndws0Rn/step3-icon1.png"
              alt="speaks long"
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain mb-4"
            />
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">
              Yes, long sentences
            </h2>
          </div>

          {/* Option 2 */}
          <div
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition hover:bg-green-300 cursor-pointer flex flex-col items-center text-center"
            onClick={onNext}
          >
            <img
              src="https://i.ibb.co/bgr1Lrg6/step3-icon2.png"
              alt="simple"
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain mb-4"
            />
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">
              Only simple sentences and words
            </h2>
          </div>

          {/* Option 3 */}
          <div
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition hover:bg-purple-300 cursor-pointer flex flex-col items-center text-center"
            onClick={onNext}
          >
            <img
              src="https://i.ibb.co/1k2xDFT/step3-icon3-1.png"
              alt="not at all"
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain mb-4"
            />
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">
              No, not at all
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChildPage3;
