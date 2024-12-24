import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { repositories } from './../../data/repositories';
import refresh from "./../../assets/refresh.png"

const RepositoryList = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRepositories = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 min-h-screen bg-surface-secondary">
      <div className="p-4 md:p-6 max-w-7xl mx-auto h-screen flex flex-col">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
          <div className="w-full md:w-auto">
            <h1 className="text-2xl font-semibold font-inter text-text mb-2">Repositories</h1>
            <p className="font-inter font-semibold text-[14] text-[#414651]">30 total repositories</p>
          </div>
          
          <div className="flex flex-row items-center md:flex-row  md:w-auto space-y-4 md:space-y-0 md:space-x-4">
            <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-[#FFFFFF] text-[#414651] p-2 rounded-md">
              <img src={refresh} className="w-5 h-5" alt="refresh" />
              <span>Refresh All</span>
            </button>
            
            <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-primary text-white rounded-md">
              <Plus className="w-5 h-5" />
              <span>Add Repository</span>
            </button>
          </div>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 font-inter font-semibold text-[16] text-[#414651] w-5 h-5" />
          <input
            type="text"
            placeholder="Search Repositories"
            className="w-full md:w-64 pl-10 pr-4 py-2 border border-border rounded-md bg-surface"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="bg-surface rounded-lg border border-border shadow-sm animate-fadeIn flex-1 overflow-auto">
          {filteredRepositories.map((repo, index) => (
            <div
              key={repo.id}
              className={`flex flex-col md:flex-row md:items-center justify-between p-4 ${
                index !== repositories.length - 1 ? 'border-b border-border' : ''
              }`}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-3">
                  <h3 className="text-[20] font-inter font-medium text-[#181D27]">
                    {repo.name}
                  </h3>
                  <span className={`pt-2 pb-2 pl-8 pr-10 text-xs rounded-full ${
                    repo.visibility === 'Public'
                      ? 'bg-accent-light text-primary'
                      : 'bg-surface-tertiary text-text-secondary'
                  }`}>
                    {repo.visibility}
                  </span>
                </div>
                
                <div className="flex items-center space-x-4 mt-2 font-inter font-regular text-[16] text-[#181D27]">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-primary"></span>
                    <span>{repo.language}</span>
                  </div>
                  <span>{repo.size}</span>
                  <span>Updated {repo.updatedAt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RepositoryList;