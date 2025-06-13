import React from 'react'
import { ArrowLeft, ArrowRight, Users } from 'lucide-react'

function ChildPage3({ onNext, onBack, progress }) {
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

      {/* Back Button */}
      <div className="px-8 pt-4">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer"
        >
          <ArrowLeft size={20} />
          Back
        </button>
      </div>

      {/* Main Content */}
      <div className='flex justify-center'>
        <h1 className='font-bold text-5xl'>
          Can luma speak English?
        </h1>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        <div className="max-w-4xl w-full text-center">

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full -translate-y-14">
            {/* <!-- Card 1 --> */}
            <div class="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition hover:bg-yellow-300" onClick={onNext}>
              <img src="https://i.ibb.co/ndws0Rn/step3-icon1.png" alt="emojione" className='h-30 w-30 translate-x-12' />
              <h1 class="text-xl font-bold text-gray-800 mb-2 pt-4">Yes, long sentences</h1>
            </div>

            <div class="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition hover:bg-green-300" onClick={onNext}>
              <img src="https://i.ibb.co/bgr1Lrg6/step3-icon2.png" alt="emojione" className='h-30 w-30 translate-x-12' />
              <h1 class="text-xl font-bold text-gray-800 mb-2 pt-4">Only simple sentences and words</h1>
            </div>

            <div class="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition hover:bg-purple-300" onClick={onNext}>
              <img src="https://i.ibb.co/1k2xDFT/step3-icon3-1.png" alt="emojione" className='h-30 w-30 translate-x-12' />
              <h1 class="text-xl font-bold text-gray-800 mb-2 pt-4">No, not at all</h1>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ChildPage3
