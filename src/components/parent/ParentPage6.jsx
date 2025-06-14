import React from 'react';
import { ArrowLeft } from 'lucide-react';

function ParentPage6({ onNext, onBack, progress }) {
  const cards = [
    {
      title: 'Outdoor activities',
      img: 'https://i.ibb.co/C5MqHnHN/step5-icon1.png',
      bg: 'hover:bg-blue-300',
    },
    {
      title: 'Art and music',
      img: 'https://i.ibb.co/CKRJfsq1/step5-icon2.png',
      bg: 'hover:bg-purple-300',
    },
    {
      title: 'Team sports and games',
      img: 'https://i.ibb.co/NgWdNGDX/step5-icon3.png',
      bg: 'hover:bg-pink-200',
    },
    {
      title: 'Video games',
      img: 'https://i.ibb.co/9HSDBqzf/step5-icon4.png',
      bg: 'hover:bg-sky-200',
    },
    {
      title: 'Watching movies',
      img: 'https://i.ibb.co/ds54rkbL/step5-icon5.png',
      bg: 'hover:bg-yellow-300',
    },
    {
      title: 'Books',
      img: 'https://i.ibb.co/tpmLw2YN/step5-icon6.png',
      bg: 'hover:bg-yellow-300',
    },
  ];

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

      {/* Question */}
      <div className="text-center mt-6 sm:mt-10 px-4">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
          What does Luma enjoy doing?
        </h1>
      </div>

      {/* Card Grid */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 py-10">
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cards.map(({ title, img, bg }, index) => (
              <div
                key={index}
                className={`bg-white shadow-lg rounded-2xl p-6 transition hover:shadow-xl cursor-pointer flex flex-col items-center text-center ${bg}`}
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

      {/* Get Result Button */}
      <div className="flex justify-center pb-12">
        <button
          onClick={onNext}
          className="bg-blue-600 hover:bg-yellow-400 text-white hover:text-gray-900 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-colors flex items-center justify-center gap-2"
        >
          GET RESULT
        </button>
      </div>
    </div>
  );
}

export default ParentPage6;
