import React from 'react'
import { ArrowLeft, ArrowRight, BarChart3 } from 'lucide-react'

function ChildPage6({ onNext, onBack, progress }) {
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
          Why does luma need to learn English?
        </h1>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center px-8 mt-24">
        <div className="max-w-4xl w-full text-center">

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full -translate-y-14">
            {/* <!-- Card 1 --> */}
            <div class="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition hover:bg-blue-300" >
              <img src="https://i.ibb.co/C5MqHnHN/step5-icon1.png" alt="emojione" className='h-30 w-30 translate-x-12' />
              <h1 class="text-xl font-bold text-gray-800 mb-2 pt-4">Outdoor activities</h1>
            </div>

            <div class="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition hover:bg-purple-300" >
              <img src="https://i.ibb.co/CKRJfsq1/step5-icon2.png" alt="emojione" className='h-30 w-30 translate-x-12' />
              <h1 class="text-xl font-bold text-gray-800 mb-2 pt-4">Art and music</h1>
            </div>

            <div class="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition hover:bg-pink-200" >
              <img src="https://i.ibb.co/NgWdNGDX/step5-icon3.png" alt="emojione" className='h-30 w-30 translate-x-12' />
              <h1 class="text-xl font-bold text-gray-800 mb-2 pt-4">Team sports and games</h1>
            </div>

            <div class="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition hover:bg-sky-200 translate-x-12" >
              <img src="https://i.ibb.co/9HSDBqzf/step5-icon4.png" alt="emojione" className='h-30 w-30 translate-x-12' />
              <h1 class="text-xl font-bold text-gray-800 mb-2 pt-4">Video games</h1>
            </div>

            <div class="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition hover:bg-yellow-300 translate-x-12" >
              <img src="https://i.ibb.co/ds54rkbL/step5-icon5.png" alt="emojione" className='h-30 w-30 translate-x-12' />
              <h1 class="text-xl font-bold text-gray-800 mb-2 pt-4">Watching movies</h1>
            </div>

            <div class="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition hover:bg-yellow-300 translate-x-12" >
              <img src="https://i.ibb.co/tpmLw2YN/step5-icon6.png" alt="emojione" className='h-30 w-30 translate-x-12' />
              <h1 class="text-xl font-bold text-gray-800 mb-2 pt-4">Books</h1>
            </div>
          </div>

          <button
            onClick={onNext}
            className="bg-blue-600 hover:bg-yellow-400 text-white px-8 py-4 rounded-4xl text-lg font-semibold transition-colors flex items-center justify-center gap-2 mx-auto w-60 mb-20 cursor-pointer"
          >
            GET RESULT
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChildPage6
