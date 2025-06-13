import React from 'react'
import { ArrowLeft, CheckCircle } from 'lucide-react'

function ParentPage8({ onBack, progress }) {
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
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Congratulations! Your family's digital environment is now set up and ready to use. Enjoy a safe and educational experience!
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">What's Next?</h3>
            <ul className="text-left text-gray-600 space-y-2">
              <li>• Access your family dashboard</li>
              <li>• Start exploring educational content</li>
              <li>• Monitor activity reports</li>
              <li>• Adjust settings as needed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ParentPage8
