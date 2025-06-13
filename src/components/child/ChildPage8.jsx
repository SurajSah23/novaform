import React from 'react'
import { ArrowLeft, CheckCircle } from 'lucide-react'

function ChildPage8({ onBack, progress }) {
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

      {/* Completion Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        <div className="max-w-4xl w-full text-center">
          <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center mb-8 mx-auto">
            <CheckCircle size={48} className="text-white" />
          </div>

          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Setup Complete!
          </h1>
        </div>
      </div>
    </div>
  )
}

export default ChildPage8
