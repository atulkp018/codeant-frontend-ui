import React, { useState } from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import * as Icons from 'lucide-react';
import { navigationItems } from './../../data/repositories';
import logo from '../../assets/logo.png';

const Sidebar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const mainNavigationItems = navigationItems.slice(0, -2);
  const footerNavigationItems = navigationItems.slice(-2);

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full md:w-64 bg-surface border-r border-border">
      {/* Header - Now using responsive flex direction */}
      <div className="flex flex-row md:flex-col items-center justify-between p-4 border-b border-border">
        <div className="flex items-center mb-0 md:mb-4 mt-0 md:mt-4">
          <img src={logo} alt="CodeAnt AI" className="h-8" />
          <span className="font-['Satoshi'] text-[30px] leading-[110%] tracking-[0%] text-[#171717]">CodeAnt AI</span>
        </div>
        <br></br>
        
        <div className="flex items-center mt-0 md:mt-1 space-x-4">
          {/* Desktop User Dropdown */}
          <div className="relative hidden md:block">
            <button
              onClick={toggleUserDropdown}
              className="flex items-center space-x-2 text-text hover:text-primary transition-colors"
            >
              <span className="font-inter font-regular text-[#181D27]">UtkarshDhairyaPanwar</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            
            {isUserDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-surface border border-border rounded-md shadow-lg animate-fadeIn z-50">
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-text hover:bg-accent-light">Profile</a>
                  <a href="#" className="block px-4 py-2 text-sm text-text hover:bg-accent-light">Settings</a>
                  <a href="#" className="block px-4 py-2 text-sm text-text hover:bg-accent-light">Sign out</a>
                </div>
              </div>
            )}
          </div>
          
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-text hover:text-primary transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation + User Options + Footer */}
      <div className={`${
        isMobileMenuOpen ? 'block' : 'hidden'
      } md:hidden bg-surface animate-fadeIn`}>
        {/* Mobile User Section */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between mb-2">
            <span className="font-inter font-regular text-[#181D27]">UtkarshDhairyaPanwar</span>
            <button onClick={toggleUserDropdown} className="text-text hover:text-primary">
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          {isUserDropdownOpen && (
            <div className="space-y-2 mt-2">
              <a href="#" className="block px-3 py-2 text-sm text-text hover:bg-accent-light rounded-md">Profile</a>
              <a href="#" className="block px-3 py-2 text-sm text-text hover:bg-accent-light rounded-md">Settings</a>
              <a href="#" className="block px-3 py-2 text-sm text-text hover:bg-accent-light rounded-md">Sign out</a>
            </div>
          )}
        </div>

        {/* Mobile Navigation Items */}
        <div className="p-4 space-y-4">
          {mainNavigationItems.map((item) => {
            const Icon = Icons[item.icon];
            return (
              <a
                key={item.id}
                href="#"
                className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                  item.active
                    ? 'bg-primary text-white'
                    : 'text-text hover:bg-accent-light'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-semibold text-[16] text-[#414651]">
                  {item.name}
                </span>
              </a>
            );
          })}
          
          {/* Mobile Footer Items */}
          {footerNavigationItems.map((item) => {
            const Icon = Icons[item.icon];
            return (
              <a
                key={item.id}
                href="#"
                className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                  item.active
                    ? 'bg-primary text-white'
                    : 'text-text hover:bg-accent-light'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-semibold text-[16] text-[#414651]">
                  {item.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <div className="p-4 space-y-4">
          {mainNavigationItems.map((item) => {
            const Icon = Icons[item.icon];
            return (
              <a
                key={item.id}
                href="#"
                className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                  item.active
                    ? 'bg-primary text-white'
                    : 'text-text hover:bg-accent-light'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-semibold text-[16] text-[#414651]">
                  {item.name}
                </span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* Footer Section - Hidden on mobile */}
      <footer className="absolute bottom-0 p-4 border-t border-gray-200 bg-white hidden md:block">
        {footerNavigationItems.map((item) => {
          const Icon = Icons[item.icon];
          return (
            <a
              key={item.id}
              href="#"
              className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                item.active
                  ? 'bg-primary text-white'
                  : 'text-text hover:bg-accent-light'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-semibold text-[16] text-[#414651]">
                {item.name}
              </span>
            </a>
          );
        })}
      </footer>
    </div>
  );
};

export default Sidebar;