'use client';

import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'サービス', href: '#services' },
    { name: '選ばれる理由', href: '#reasons' },
    { name: '料金', href: '#pricing' },
    { name: 'よくある質問', href: '#faq' },
    { name: '無料相談', href: '#cta' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
              <span className="text-white text-2xl">☀️</span>
            </div>
            <div>
              <h1 className={`text-xl font-bold ${isScrolled ? 'text-primary-navy' : 'text-white'}`}>
                Sunny Partners
              </h1>
              <p className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>
                サニーパートナーズ
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors duration-300 hover:text-primary-orange ${
                  isScrolled ? 'text-primary-navy' : 'text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <FiX className={isScrolled ? 'text-primary-navy' : 'text-white'} />
            ) : (
              <FiMenu className={isScrolled ? 'text-primary-navy' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 px-4 rounded-lg bg-white/10 backdrop-blur-sm text-primary-navy font-medium hover:bg-white/20 transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
