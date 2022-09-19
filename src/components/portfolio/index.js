import React, { useState } from 'react';
import Sidebar from '../sidebar';
import './index.scss';
import Home from '../pages/about'
import Contact from '../pages/Contact';
import Work from '../pages/work'

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
  
    // TODO: Add a comment describing the functionality of this method
    const renderPage = () => {
      if (currentPage === 'Home') {
        return <Home />;
      } if (currentPage === 'Work') {
        return <Work />;
      }
      return <Contact />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <Sidebar currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
    );
  }