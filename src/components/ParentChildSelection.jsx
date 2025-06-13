import React, { useState } from 'react'

function ParentChildSelection({ onSelect, progress }) {
  const [selectedOption, setSelectedOption] = useState(null)

  const handleSelection = (type) => {
    setSelectedOption(type)
    setTimeout(() => {
      onSelect(type)
    }, 200)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Progress Bar */}
      <div className="w-full px-8 pt-8">
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
      <div className="flex-1 flex flex-col items-center justify-center px-8 -mt-16">
        <div className="max-w-4xl w-full">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-16">
            Are you a parent or a child?
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Parent Card */}
            <div 
              className={`bg-white rounded-3xl p-12 border-2 cursor-pointer transition-all duration-200 hover:shadow-lg ${
                selectedOption === 'parent' ? 'border-blue-300 shadow-lg scale-105' : 'border-gray-200'
              }`}
              onClick={() => handleSelection('parent')}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mb-8 relative">
                  <div className="w-8 h-8 bg-amber-700 rounded-full absolute left-4 flex items-center justify-center">
                    <div className="w-6 h-6 bg-amber-600 rounded-full relative">
                      <div className="w-1 h-1 bg-black rounded-full absolute top-1.5 left-1.5"></div>
                      <div className="w-1 h-1 bg-black rounded-full absolute top-1.5 right-1.5"></div>
                      <div className="w-2 h-1 bg-pink-400 rounded-full absolute bottom-1.5 left-2"></div>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-orange-300 rounded-full absolute right-4 flex items-center justify-center">
                    <div className="w-6 h-6 bg-orange-200 rounded-full relative">
                      <div className="w-1 h-1 bg-black rounded-full absolute top-1.5 left-1.5"></div>
                      <div className="w-1 h-1 bg-black rounded-full absolute top-1.5 right-1.5"></div>
                      <div className="w-2 h-1 bg-red-400 rounded-full absolute bottom-1.5 left-2"></div>
                    </div>
                  </div>
                </div>
                <p className="text-xl font-semibold text-gray-800">I am a parent</p>
              </div>
            </div>

            {/* Child Card */}
            <div 
              className={`bg-white rounded-3xl p-12 border-2 cursor-pointer transition-all duration-200 hover:shadow-lg ${
                selectedOption === 'child' ? 'border-blue-300 shadow-lg scale-105' : 'border-gray-200'
              }`}
              onClick={() => handleSelection('child')}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-green-400 rounded-full flex items-center justify-center mb-8">
                  <div className="w-12 h-12 bg-amber-600 rounded-full relative flex items-center justify-center">
                    <div className="w-10 h-10 bg-amber-500 rounded-full relative">
                      <div className="w-1.5 h-1.5 bg-black rounded-full absolute top-2 left-2"></div>
                      <div className="w-1.5 h-1.5 bg-black rounded-full absolute top-2 right-2"></div>
                      <div className="w-3 h-1.5 bg-pink-400 rounded-full absolute bottom-2 left-3.5"></div>
                      <div className="w-8 h-4 bg-amber-800 rounded-t-full absolute -top-1 left-1"></div>
                    </div>
                  </div>
                </div>
                <p className="text-xl font-semibold text-gray-800">I am a child</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ParentChildSelection
