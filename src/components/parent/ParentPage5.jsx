import React from 'react'
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react'

function ParentPage5({ onNext, onBack, progress }) {
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
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
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
            <div class="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition hover:bg-blue-300" onClick={onNext}>
              <img src="https://i.ibb.co/3yncjRGx/step-purpose-school-results.png" alt="emojione" className='h-30 w-30 translate-x-12' />
              <h1 class="text-xl font-bold text-gray-800 mb-2 pt-4">Improve school results</h1>
            </div>

            <div class="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition hover:bg-purple-300" onClick={onNext}>
              <img src="https://i.ibb.co/8gz3CNLs/step-purpose-screen-time.png" alt="emojione" className='h-30 w-30 translate-x-12' />
              <h1 class="">For efficient screen time</h1>
            </div>

            <div class="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition hover:bg-pink-200" onClick={onNext}>
              <img src="https://i.ibb.co/Gv4cP1SK/step-purpose-thinking-skills.png" alt="emojione" className='h-30 w-30 translate-x-12' />
              <h1 class="text-xl font-bold text-gray-800 mb-2 pt-4">To develop thinking skills</h1>
            </div>

            <div class="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition hover:bg-sky-200 translate-x-24" onClick={onNext}>
              <img src="https://i.ibb.co/NdcQMd3F/step-purpose-international-communication.png" alt="emojione" className='h-30 w-30 translate-x-12' />
              <h1 class="text-xl font-bold text-gray-800 mb-2 pt-4">Speaking confidently abroad</h1>
            </div>

            <div class="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition hover:bg-yellow-300 translate-x-24" onClick={onNext}>
              <img src="https://i.ibb.co/215QSZ8k/step-purpose-career.png" alt="emojione" className='h-30 w-30 translate-x-12' />
              <h1 class="text-xl font-bold text-gray-800 mb-2 pt-4">For better career prospects</h1>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ParentPage5
