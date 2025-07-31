import { useState } from "react";
import { Menu, X } from "lucide-react";
import LogoPizza from "@/assets/logo-pizza.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("/");
  const [cartCount] = useState(0); // Peut être utilisé plus tard

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Notre Carte", href: "/carte" },
    { name: "Nos Adresses", href: "/adresses" },
    { name: "Commander", href: "/commander" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path) => activeItem === path;

  const handleNavClick = (href) => {
    setActiveItem(href);
    setIsOpen(false);
  };

  return (
    <>
      <header className="bg-[#F9F8F6] sticky top-0 z-50 px-4 py-4 shadow-md">
        <nav className="container mx-auto relative">
          {/* Logo centré */}
          <div className="absolute z-50 left-1/2 transform -translate-x-1/2 -bottom-22 md:-bottom-32">
            <button onClick={() => handleNavClick("/")} className="group">
              <img
  src={LogoPizza}
  alt="Logo Au Goût du Temps"
  className="h-32 w-32 md:h-44 md:w-44 object-contain rounded-full border-[#F9F8F6] border-2 shadow-lg bg-white group-hover:scale-105 transition-transform duration-300"
/>
            </button>
          </div>

          {/* Mobile header */}
          <div className="flex items-center justify-between md:hidden">
            <div className="w-10 h-10"></div> {/* Espace pour équilibrer */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-red-500 hover:text-red-600 hover:bg-red-100 rounded-full transition-all duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop header */}
          <div className="hidden md:flex justify-between items-center">
            {/* Gauche */}
            <div>
              <button
                onClick={() => handleNavClick("/franchise")}
                className="bg-red-500 hover:bg-red-400 text-white font-semibold px-4 py-2 rounded-full text-sm"
              >
                Commandez en ligne
              </button>
            </div>

            {/* Droite */}
            <div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-red-500 hover:text-red-600 hover:bg-red-100 rounded-full transition-all duration-200"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Menu mobile (hors du header pour ne pas l'étirer) */}
      {isOpen && (
        <div className="fixed top-[90px] left-8 right-8 z-40 bg-[#f9f8f6] rounded-b-2xl rounded-t-2xl shadow-xl border-t border-black p-6 md:hidden">
          <div className="flex flex-col space-y-3">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`w-full text-left font-medium px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive(item.href)
                    ? "bg-gray-200 text-black"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("/franchise")}
              className="bg-red-500 hover:bg-red-400 text-white font-medium px-6 py-3 rounded-full transition-all duration-200 hover:scale-105 shadow-sm text-center"
            >
              Commandez en ligne
            </button>
          </div>
        </div>
      )}

      {/* Menu desktop déroulant */}
      {isOpen && (
        <div className="hidden md:block absolute right-4 top-[100px] bg-white rounded-xl shadow-lg border border-pink-200 p-4 w-56 z-50">
          <div className="flex flex-col space-y-2">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`w-full text-left font-medium px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive(item.href)
                    ? "bg-pink-100 text-red-600"
                    : "text-gray-700 hover:bg-pink-50"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;