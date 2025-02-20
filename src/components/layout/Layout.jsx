import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from './Footer';
import SEO from './SEO';
import useTheme from '../../hooks/useTheme';

/**
 * Main layout component that wraps all pages
 * Provides consistent structure with navbar and footer
 */
const Layout = () => {
  const { darkMode } = useTheme();
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
    }`}>
      <SEO 
        title="Kimutai Joel - Software Engineer"
        description="Professional portfolio of Kimutai Joel, a Software Engineer specializing in web and app development."
      />
      <Navbar />
      <div className="pt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;