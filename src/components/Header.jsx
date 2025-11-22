import React from 'react'

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg"></div>
          <span className="text-xl font-bold text-gray-900">Brillance</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-600 hover:text-gray-900 transition">Products</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition">Docs</a>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="text-gray-600 hover:text-gray-900 transition">Log in</button>
          <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition">
            Start for free
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header