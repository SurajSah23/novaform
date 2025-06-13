import React from 'react'
import { ArrowLeft, ArrowRight, Settings } from 'lucide-react'

function ParentPage7({ onNext, onBack, progress }) {
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
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        <div className="max-w-4xl w-full text-center">
          <div className="w-32 h-32 bg-gray-600 rounded-full flex items-center justify-center mb-8 mx-auto">
            <Settings size={48} className="text-white" />
          </div>

          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Advanced Settings
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Fine-tune your family's digital experience with advanced parental controls and customization options.
          </p>

          <button
            onClick={onNext}
            className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors flex items-center gap-2 mx-auto"
          >
            Configure Settings
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ParentPage7
