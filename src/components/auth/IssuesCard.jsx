import React from 'react';
import Ellipse from "./../../assets/Ellipse 1.png"
import Vector from "./../../assets/Vector.png"

const IssuesCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-[0_4px_25px_rgba(0,0,0,0.05)] pr-6 mt-0">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between" >
        <div className="relative w-8 h-8">
      
      <img 
        src={Ellipse}  
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
    
      <img 
        src={Vector}  
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
    <div className="text-right">
        <div className="text-[#0049C6] font-bold font-inter text-[14px]">↑ 14%</div>
        <div className="text-[12px] font-inter font-regular text-[#171717]">This week</div>
      </div>

        </div>

        
        
        <div >
          <div>
            <div className="text-[14px] text-[#171717]  font-inter font-bold mb-1">Issues Fixed</div>
            <div className="text-[32px] font-inter  font-bold text-[#081735]">500K+</div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default IssuesCard;