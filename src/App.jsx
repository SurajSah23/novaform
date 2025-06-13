import React, { useState } from 'react'
import ParentChildSelection from './components/ParentChildSelection'
import ParentPage1 from './components/parent/ParentPage1'
import ParentPage2 from './components/parent/ParentPage2'
import ParentPage3 from './components/parent/ParentPage3'
import ParentPage4 from './components/parent/ParentPage4'
import ParentPage5 from './components/parent/ParentPage5'
import ParentPage6 from './components/parent/ParentPage6'
import ParentPage7 from './components/parent/ParentPage7'
import ParentPage8 from './components/parent/ParentPage8'
import ChildPage1 from './components/child/ChildPage1'
import ChildPage2 from './components/child/ChildPage2'
import ChildPage3 from './components/child/ChildPage3'
import ChildPage4 from './components/child/ChildPage4'
import ChildPage5 from './components/child/ChildPage5'
import ChildPage6 from './components/child/ChildPage6'
import ChildPage7 from './components/child/ChildPage7'
import ChildPage8 from './components/child/ChildPage8'

function App() {
  const [currentPage, setCurrentPage] = useState('selection')

  const handleSelection = (type) => {
    if (type === 'parent') {
      setCurrentPage('parent1')
    } else {
      setCurrentPage('child1')
    }
  }

  const goToNextPage = () => {
    const pageOrder = [
      'selection',
      'parent1', 'parent2', 'parent3', 'parent4', 'parent5', 'parent6', 'parent7', 'parent8',
      'child1', 'child2', 'child3', 'child4', 'child5', 'child6', 'child7', 'child8'
    ]
    
    const currentIndex = pageOrder.indexOf(currentPage)
    
    if (currentPage.startsWith('parent') && currentIndex < 9) {
      const nextParentPage = pageOrder[currentIndex + 1]
      setCurrentPage(nextParentPage)
    } else if (currentPage.startsWith('child') && currentIndex < pageOrder.length - 1) {
      const nextChildPage = pageOrder[currentIndex + 1]
      setCurrentPage(nextChildPage)
    }
  }

  const goToPreviousPage = () => {
    const pageOrder = [
      'selection',
      'parent1', 'parent2', 'parent3', 'parent4', 'parent5', 'parent6', 'parent7', 'parent8',
      'child1', 'child2', 'child3', 'child4', 'child5', 'child6', 'child7', 'child8'
    ]
    
    const currentIndex = pageOrder.indexOf(currentPage)
    
    if (currentPage.startsWith('parent') && currentIndex > 1) {
      const prevParentPage = pageOrder[currentIndex - 1]
      setCurrentPage(prevParentPage)
    } else if (currentPage.startsWith('child') && currentIndex > 10) {
      const prevChildPage = pageOrder[currentIndex - 1]
      setCurrentPage(prevChildPage)
    } else if (currentPage === 'parent1' || currentPage === 'child1') {
      setCurrentPage('selection')
    }
  }

  const getProgress = () => {
    if (currentPage === 'selection') return 10
    
    if (currentPage.startsWith('parent')) {
      const pageNum = parseInt(currentPage.replace('parent', ''))
      return 10 + (pageNum * 12)
    }
    
    if (currentPage.startsWith('child')) {
      const pageNum = parseInt(currentPage.replace('child', ''))
      return 10 + (pageNum * 10)
    }
    
    return 10
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage === 'selection' && (
        <ParentChildSelection onSelect={handleSelection} progress={getProgress()} />
      )}
      
      {/* Parent Pages */}
      {currentPage === 'parent1' && (
        <ParentPage1 onNext={goToNextPage} onBack={goToPreviousPage} progress={getProgress()} />
      )}
      {currentPage === 'parent2' && (
        <ParentPage2 onNext={goToNextPage} onBack={goToPreviousPage} progress={getProgress()} />
      )}
      {currentPage === 'parent3' && (
        <ParentPage3 onNext={goToNextPage} onBack={goToPreviousPage} progress={getProgress()} />
      )}
      {currentPage === 'parent4' && (
        <ParentPage4 onNext={goToNextPage} onBack={goToPreviousPage} progress={getProgress()} />
      )}
      {currentPage === 'parent5' && (
        <ParentPage5 onNext={goToNextPage} onBack={goToPreviousPage} progress={getProgress()} />
      )}
      {currentPage === 'parent6' && (
        <ParentPage6 onNext={goToNextPage} onBack={goToPreviousPage} progress={getProgress()} />
      )}
      {currentPage === 'parent7' && (
        <ParentPage7 onNext={goToNextPage} onBack={goToPreviousPage} progress={getProgress()} />
      )}
      {currentPage === 'parent8' && (
        <ParentPage8 onBack={goToPreviousPage} progress={getProgress()} />
      )}
      
      {/* Child Pages */}
      {currentPage === 'child1' && (
        <ChildPage1 onNext={goToNextPage} onBack={goToPreviousPage} progress={getProgress()} />
      )}
      {currentPage === 'child2' && (
        <ChildPage2 onNext={goToNextPage} onBack={goToPreviousPage} progress={getProgress()} />
      )}
      {currentPage === 'child3' && (
        <ChildPage3 onNext={goToNextPage} onBack={goToPreviousPage} progress={getProgress()} />
      )}
      {currentPage === 'child4' && (
        <ChildPage4 onNext={goToNextPage} onBack={goToPreviousPage} progress={getProgress()} />
      )}
      {currentPage === 'child5' && (
        <ChildPage5 onNext={goToNextPage} onBack={goToPreviousPage} progress={getProgress()} />
      )}
      {currentPage === 'child6' && (
        <ChildPage6 onNext={goToNextPage} onBack={goToPreviousPage} progress={getProgress()} />
      )}
      {currentPage === 'child7' && (
        <ChildPage7 onNext={goToNextPage} onBack={goToPreviousPage} progress={getProgress()} />
      )}
      {currentPage === 'child8' && (
        <ChildPage8 onBack={goToPreviousPage} progress={getProgress()} />
      )}
    </div>
  )
}

export default App
