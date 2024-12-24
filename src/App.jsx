import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignInPage from './components/auth/SignInPage';
import RepositoryPage from './components/repositories/RepositoryPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/repositories" element={<RepositoryPage />} />
    </Routes>
  );
}

export default App;