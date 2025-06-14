import React, { useState } from 'react';

function ParentChildSelection({ onSelect, progress }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelection = (type) => {
    setSelectedOption(type);
    setTimeout(() => {
      onSelect(type);
    }, 200);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Progress Bar */}
      <div className="w-full px-4 sm:px-6 pt-6 sm:pt-8">
        <div className="max-w-2xl mx-auto">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 py-10 sm:py-16">
        <div className="w-full max-w-5xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12 sm:mb-16">
            Are you a parent or a child?
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 max-w-4xl mx-auto">
            {/* Parent Card */}
            <div
              className={`bg-white rounded-3xl p-6 sm:p-10 md:p-12 border-2 cursor-pointer transition-all duration-200 hover:shadow-lg hover:bg-yellow-500 ${
                selectedOption === 'parent'
                  ? 'border-blue-300 shadow-lg scale-[1.02]'
                  : 'border-gray-200'
              }`}
              onClick={() => handleSelection('parent')}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 sm:mb-8 w-full max-w-[150px]">
                  <img
                    src="https://i.ibb.co/r1Wp8R0/kid.webp"
                    alt="parent"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <p className="text-lg sm:text-xl font-semibold text-gray-800">
                  I am a parent
                </p>
              </div>
            </div>

            {/* Child Card */}
            <div
              className={`bg-white rounded-3xl p-6 sm:p-10 md:p-12 border-2 cursor-pointer transition-all duration-200 hover:shadow-lg hover:bg-green-500 ${
                selectedOption === 'child'
                  ? 'border-blue-300 shadow-lg scale-[1.02]'
                  : 'border-gray-200'
              }`}
              onClick={() => handleSelection('child')}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 sm:mb-8 w-full max-w-[150px]">
                  <img
                    src="https://i.ibb.co/qYHX5VgS/parent.webp"
                    alt="child"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <p className="text-lg sm:text-xl font-semibold text-gray-800">
                  I am a child
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParentChildSelection;
