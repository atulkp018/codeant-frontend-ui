import React from 'react';
import Sidebar from './Sidebar';
import RepositoryList from './RepositoryList';
import { useState } from 'react';

const RepositoryPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-surface-[#FAFAFA]">
      <Sidebar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <RepositoryList />
    </div>
  );
};

export default RepositoryPage;