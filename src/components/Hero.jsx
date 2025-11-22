import React from 'react'

function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-purple-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Effortless custom contract<br />billing by Brillance
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Streamline your billing process with seamless automation for every custom contract. No more manual work, just effortless billing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
          
          {/* Right side - Dashboard mockup */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://d2b6ced09th966.cloudfront.net/images/6919a260e1141c23271a6fe3/692164227e675cdd06d79f00/generated-mockup-1763796729880-1763796730378.png"
                alt="Brillance dashboard mockup showing custom contract billing interface"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
            {/* Background decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-tr from-blue-300 to-purple-300 rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 text-sm mb-8">Trusted by 1000+ companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">TechCorp</div>
            <div className="text-2xl font-bold text-gray-400">InnovateX</div>
            <div className="text-2xl font-bold text-gray-400">DataFlow</div>
            <div className="text-2xl font-bold text-gray-400">CloudSync</div>
            <div className="text-2xl font-bold text-gray-400">NextGen</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero