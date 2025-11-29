import { Link } from "react-router-dom"

function Home () {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-600 to-slate-800 flex flex-col items-center justify-center text-orange-100 px-4">
      {/* Main Content Container */}
      <div className="text-center max-w-4xl mx-auto">
        {/* Hero Title */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-wide">
          <span className="bg-linear-to-r from-orange-100 to-white bg-clip-text text-transparent">
            Todo
          </span>
          <span className="text-white ml-4">
            Master
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-12 text-orange-100/80 max-w-2xl mx-auto leading-relaxed">
          Organize your life, boost your productivity, and achieve your goals with our elegant todo management system.
        </p>
        
        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-100/30 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-3xl mb-4">✨</div>
            <h3 className="text-lg font-semibold mb-2">Beautiful Themes</h3>
            <p className="text-orange-100/70 text-sm">Switch between stunning color themes to match your mood and environment.</p>
          </div>
          
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-100/30 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
            <p className="text-orange-100/70 text-sm">Add, edit, and complete tasks with smooth animations and instant responses.</p>
          </div>
          
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-100/30 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold mb-2">Stay Focused</h3>
            <p className="text-orange-100/70 text-sm">Clean, distraction-free interface helps you focus on what matters most.</p>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="space-y-4">
          <Link 
            to="/login" 
            className="inline-block bg-linear-to-r from-orange-100 to-white text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:from-white hover:to-orange-100 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
          >
            Get Started →
          </Link>
          
          <p className="text-orange-100/60 text-sm mt-4">
            Ready to transform your productivity? Let's begin your journey.
          </p>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-linear-to-br from-orange-100/20 to-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-linear-to-br from-white/10 to-orange-100/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-4 w-16 h-16 bg-linear-to-br from-orange-100/10 to-white/5 rounded-full blur-lg"></div>
    </div>
  )
}

export default Home
