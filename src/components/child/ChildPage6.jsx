import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

function ChildPage6({ onNext, onBack, progress }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex flex-col">
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
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        <div className="max-w-4xl w-full text-center">
          <div className="text-8xl mb-8">🧩</div>

          <h1 className="text-5xl font-bold text-indigo-800 mb-6">
            Puzzle Time! 🧠
          </h1>
          
          <p className="text-xl text-indigo-600 mb-12 max-w-2xl mx-auto">
            Challenge your brain with fun puzzles and brain teasers that will make you super smart!
          </p>

          <button
            onClick={onNext}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors flex items-center gap-2 mx-auto shadow-lg"
          >
            Solve Puzzles! 🔍
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChildPage6
