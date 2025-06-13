import React from 'react'
import { ArrowLeft } from 'lucide-react'

function ChildPage8({ onBack, progress }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 flex flex-col">
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
          <div className="text-8xl mb-8">🎉</div>

          <h1 className="text-5xl font-bold text-purple-800 mb-6">
            You're All Set! 🌟
          </h1>
          
          <p className="text-xl text-purple-600 mb-12 max-w-2xl mx-auto">
            Hooray! Your magical playground is ready! Now you can have fun, learn new things, and go on amazing adventures!
          </p>

          {/* Fun Box */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border-4 border-purple-200 max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-purple-800 mb-4">Ready to Play! 🚀</h3>
            <div className="grid grid-cols-2 gap-4 text-4xl">
              <div>🎮</div>
              <div>📚</div>
              <div>🎨</div>
              <div>🎵</div>
            </div>
            <p className="text-purple-600 mt-4 font-semibold">Have fun exploring!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChildPage8
