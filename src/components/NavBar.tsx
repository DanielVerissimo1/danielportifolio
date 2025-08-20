"use client"
import { useState, useEffect, useMemo } from "react"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentSection, setCurrentSection] = useState("hero")

  const navigationItems = useMemo(
    () => [
      { id: "hero", label: "Inicio" },
      { id: "about", label: "Sobre" },
      { id: "portfolio", label: "Portfolio" },
      { id: "contato", label: "Contato" },
    ],
    [],
  )

  useEffect(() => {
    const handleScroll = () => {
      // Detecta se rolou mais de 50px
      setIsScrolled(window.scrollY > 50)

      // Detecta seção ativa de forma mais simples
      const sections = navigationItems
        .map((item) => {
          const element = document.getElementById(item.id)
          if (element) {
            const rect = element.getBoundingClientRect()
            return {
              id: item.id,
              top: rect.top,
              bottom: rect.bottom,
            }
          }
          return null
        })
        .filter(Boolean)

      // Encontra a seção que está mais visível na tela
      const activeSection = sections.find((section) => section && section.top <= 100 && section.bottom > 100)

      if (activeSection) {
        setCurrentSection(activeSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Chama uma vez para definir estado inicial

    return () => window.removeEventListener("scroll", handleScroll)
  }, [navigationItems]) // Adicionado navigationItems às dependências do useEffect

  const navigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80 // Altura do navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false) // Fecha o menu mobile
  }

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled || isMenuOpen ? "bg-gray-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={() => navigateToSection("hero")}
              className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent hover:from-blue-500 hover:to-purple-500 transition-all duration-300 flex-shrink-0"
            >
              DanielVerissimo
            </button>

            <div className="hidden md:flex items-center space-x-10">
              {navigationItems.map((item) => (
                <button key={item.id} onClick={() => navigateToSection(item.id)} className="group relative py-2">
                  <span
                    className={`text-base font-medium transition-all duration-300 ${
                      currentSection === item.id ? "text-white" : "text-gray-300 group-hover:text-white"
                    }`}
                  >
                    {item.label}
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 ${
                      currentSection === item.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-base transition-all duration-200 ${
                    currentSection === item.id
                      ? "bg-gray-800 text-white font-medium"
                      : "text-gray-300 hover:bg-gray-800/50 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
