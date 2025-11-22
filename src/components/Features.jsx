import React from 'react'

function Features() {
  const features = [
    {
      title: "Smart. Simple. Brilliant.",
      description: "Automate your entire billing workflow with intelligent contract management that adapts to your business needs.",
      icon: "✨"
    },
    {
      title: "Your work, in sync",
      description: "Keep your team aligned with real-time updates and seamless collaboration across all billing operations.",
      icon: "🔄"
    },
    {
      title: "Effortless integration",
      description: "Connect with your existing tools and systems without disruption. Our platform works where you work.",
      icon: "🔗"
    },
    {
      title: "Numbers that speak",
      description: "Get instant insights with powerful analytics and reporting that turn data into actionable decisions.",
      icon: "📊"
    }
  ]

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 h-full border border-gray-100 hover:border-purple-200 transition-all hover:shadow-xl">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features