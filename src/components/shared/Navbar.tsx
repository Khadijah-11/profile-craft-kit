
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-blue-600 font-bold text-2xl">ProfileCraft</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/features" className="text-gray-700 hover:text-blue-600 transition-colors">
              Features
            </Link>
            <Link to="/templates" className="text-gray-700 hover:text-blue-600 transition-colors">
              Templates
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
              Pricing
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Log in
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-blue-600 hover:bg-blue-700">Sign Up</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 px-4 py-2 transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/features"
                className="text-gray-700 hover:text-blue-600 px-4 py-2 transition-colors"
                onClick={toggleMenu}
              >
                Features
              </Link>
              <Link
                to="/templates"
                className="text-gray-700 hover:text-blue-600 px-4 py-2 transition-colors"
                onClick={toggleMenu}
              >
                Templates
              </Link>
              <Link
                to="/pricing"
                className="text-gray-700 hover:text-blue-600 px-4 py-2 transition-colors"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
              <div className="flex flex-col space-y-2 px-4 pt-2 border-t">
                <Link to="/login" onClick={toggleMenu}>
                  <Button
                    variant="outline"
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    Log in
                  </Button>
                </Link>
                <Link to="/register" onClick={toggleMenu}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Sign Up</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
