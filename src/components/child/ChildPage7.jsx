import React from 'react'
import { ArrowLeft} from 'lucide-react'

function ChildPage7({ onNext, onBack}) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

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
      <div className="flex-1 flex flex-col items-center justify-center px-8">
          <img src="https://i.ibb.co/hxtMFz4J/quiz-completed.png" alt="" className='w-30 h-30 flex items-center justify-center'/>
        <div className="max-w-4xl w-full text-center">

          <h1 className="text-xl font-bold text-gray-800 mb-6">
            <p>Great! Just one step to go. </p>
            <p>Create an account to see your</p>
            <p>personal plan.</p>
          </h1>
          
          <button
            onClick={onNext}
            className="bg-blue-500 hover:bg-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors flex items-center gap-2 mx-auto cursor-pointer"
          >
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChildPage7
