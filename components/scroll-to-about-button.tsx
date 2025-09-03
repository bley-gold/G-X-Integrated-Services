"use client"

export function ScrollToAboutButton() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div
      className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform duration-300 group"
      onClick={scrollToAbout}
    >
      <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center hover:border-gx-teal transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(0,212,170,0.8)]">
        <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse group-hover:bg-gx-teal group-hover:animate-glow"></div>
      </div>
    </div>
  )
}