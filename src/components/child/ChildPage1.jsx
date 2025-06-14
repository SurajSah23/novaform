import React from 'react';
import { ArrowLeft } from 'lucide-react';

function ChildPage1({ onNext, onBack, progress }) {
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

      {/* Main Heading */}
      <div className="flex justify-center px-4 sm:px-8 text-center mt-6">
        <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl leading-snug">
          Choose which best fits Luma
        </h1>
      </div>

      {/* Option Cards */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">

          {/* Card 1 */}
          <div
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition hover:bg-yellow-300 cursor-pointer flex flex-col items-center text-center"
            onClick={onNext}
          >
            <img
              src="https://i.ibb.co/GffYf9D4/step1-icon1.png"
              alt="social"
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain mb-4"
            />
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">
              Is social and likes playing with friends
            </h2>
          </div>

          {/* Card 2 */}
          <div
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition hover:bg-green-300 cursor-pointer flex flex-col items-center text-center"
            onClick={onNext}
          >
            <img
              src="https://i.ibb.co/CpnpG7DT/step1-icon2.png"
              alt="shy"
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain mb-4"
            />
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">
              Is shy, but likes to speak with friends
            </h2>
          </div>

          {/* Card 3 */}
          <div
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition hover:bg-purple-300 cursor-pointer flex flex-col items-center text-center"
            onClick={onNext}
          >
            <img
              src="https://i.ibb.co/3bcsBNg/step1-icon3.png"
              alt="support"
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain mb-4"
            />
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">
              Needs support to speak with other children
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChildPage1;
