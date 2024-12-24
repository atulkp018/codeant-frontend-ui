import React from 'react';

const SignInOption = ({ icon, provider, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-center gap-3 px-auto py-3.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
    >
      <span className="flex-shrink-0 w-5 h-5">{<img src={icon}></img>}</span>
      <span className="text-[16px] text-[#171717] font-semibold ">Sign in with {provider}</span>
    </button>
  );
}

export default SignInOption;