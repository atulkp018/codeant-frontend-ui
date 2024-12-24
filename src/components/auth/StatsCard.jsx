import React from 'react';

const StatsCard = ({ number, label }) => {
  return (
    <div className="text-center px-4 ">
      <div className="text-[18px] font-inter font-bold text-[#081735] mb-1">{number}</div>
      <div className="text-[14px] font-inter font-regular text-[#171717] whitespace-nowrap">{label}</div>
    </div>
  );
}

export default StatsCard;