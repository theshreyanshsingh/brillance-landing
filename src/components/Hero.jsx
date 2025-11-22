import React from 'react'

function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-purple-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Effortless custom contract<br />billing by Brillance
          </h1>
          <p className="text-xl text-gray-600 mb-8">
      Streamline your billing process with seamless automation for every custom contract. No more manual invoicing, no more errors—just pure efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition text-lg font-medium">
              Get started now
            </button>
            <button className="px-8 py-4 border-2 border-gray-900 bg-white text-gray-900 rounded-xl hover:bg-gray-50 transition text-lg font-medium">
              Book a demo
            </button>
          </div>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 text-center">
              <h2 className="text-2xl font-bold mb-2">Custom Contract Dashboard</h2>
              <p className="opacity-90">Real-time billing insights at your fingertips</p>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-purple-50 p-6 rounded-xl">
                  <div className="text-purple-600 text-sm font-medium mb-2">Active Contracts</div>
                  <div className="text-3xl font-bold text-gray-900">247</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="text-blue-600 text-sm font-medium mb-2">Monthly Revenue</div>
                  <div className="text-3xl font-bold text-gray-900">$128K</div>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <div className="text-green-600 text-sm font-medium mb-2">Processing Time</div>
                  <div className="text-3xl font-bold text-gray-900">-83%</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-gray-600 text-sm mb-2">Next Invoice Cycle</div>
                  <div className="text-gray-900 font-medium">3 days</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-gray-600 text-sm mb-2">Pending Approvals</div>
                  <div className="text-gray-900 font-medium">12</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero