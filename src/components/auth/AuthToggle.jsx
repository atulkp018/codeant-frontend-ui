import React from 'react';

const AuthToggle = ({ activeOption, onToggle }) => {
  return (
    <div className="flex bg-gray-100 p-1 rounded-lg">
      <button
        onClick={() => onToggle('saas')}
        className={`flex-1 px-8 py-2.5 rounded-md text-sm font-medium transition-colors ${
          activeOption === 'saas'
            ? 'bg-[#0066FF] text-white'
            : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        SAAS
      </button>
      <button
        onClick={() => onToggle('selfHosted')}
        className={`flex-1 px-8 py-2.5 rounded-md text-sm font-medium transition-colors ${
          activeOption === 'selfHosted'
            ? 'bg-[#0066FF] text-white'
            : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        Self Hosted
      </button>
    </div>
  );
}

export default AuthToggle;