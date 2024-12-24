import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthToggle from './AuthToggle';
import SignInOption from './SignInOption';
import StatsCard from './StatsCard';
import IssuesCard from './IssuesCard';
import subtract from './../../assets/subtract.png'
import logo from './../../assets/logo.png';
import azure from './../../assets/azure.svg'
import bitbucket from './../../assets/bitbucket.svg'
import github from './../../assets/github.svg'
import gitlab from './../../assets/gitlab.svg'
import sso from './../../assets/sso.svg'

const SignInPage = () => {
  const [authType, setAuthType] = useState('saas');
  const navigate = useNavigate();

  const handleSignIn = (provider) => {
    console.log(`Signing in with ${provider}`);
    navigate('/repositories');
  };

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
    {/* Left Section - Hidden on mobile */}
    <div className="hidden  lg:block relative flex-1 border-x-black border-[1px] bg-white p-6 lg:p-16 overflow-hidden">
      <div  className=" relative ml-[123px] mt-[100px] " style={{ width: '474px', height: '322px',transform:"scale(0.78) translate(0px,68px)" }}>
        <div className="absolute" style={{ width: '447px', height: '170px' }}>
          <h2 className="text-[18px] font-bold font-inter text-[#081735] mb-8">
            AI to Detect & Autofix Bad Code
          </h2>
          <div className="flex justify-between mb-8">
            <StatsCard number="30+" label="Language Support" />
            <StatsCard number="10K+" label="Developers" />
            <StatsCard number="100K+" label="Hours Saved" />
          </div>
        </div>
        
        {/* IssuesCard */}
        <div 
          className="absolute"
          style={{ 
            left: '327px',
            top: '177px',
            width: '270px',
            height: '164px',
          transform:"translate(-90px,0px)",
          }}
        >
          <IssuesCard />
        </div>
      </div>
      
      <div style={{ transform: "scale(0.89) translate(-50px, -70px)" }} className="w-[284px] h-[300px]">

      <img
        src={subtract} 
        alt=""
        className="object-cover shadow-md"
      />

      </div>
     
    </div>

      {/* Right Section */}
      <div  className=" flex-1 bg-[#FAFAFA] p-6 mt-[1px] lg:p-16">
        <div style={{transform:"scale(0.91) translate(0px,25px)"}} className="max-w-[420px] mx-auto">
        <div className='flex flex-col items-center justify-center'>
        <div className="flex items-center  mb-12">
            <img src={logo} alt="CodeAnt AI" className="h-8" />
            <span className="font-['Satoshi'] text-[30px] leading-[110%] tracking-[0%] text-[#171717]">CodeAnt AI</span>
          </div>

          <h1 className="text-[32px] font-semibold  font-inter text-[#181D27] mb-8">
            Welcome to CodeAnt AI
          </h1>
          
          <div className="mb-8 w-full">
            <AuthToggle activeOption={authType} onToggle={setAuthType} />
          </div>
        </div>

          <div className="space-y-4">
            {authType === 'saas' ? (
              <>
                <SignInOption
                  icon={github}
                  provider="Github"
                  onClick={() => handleSignIn('Github')}
                />
                <SignInOption
                  icon={bitbucket}
                  provider="Bitbucket"
                  onClick={() => handleSignIn('Bitbucket')}
                />
                <SignInOption
                  icon={azure}
                  provider="Azure Devops"
                  onClick={() => handleSignIn('Azure Devops')}
                />
                <SignInOption
                  icon={gitlab}
                  provider="GitLab"
                  onClick={() => handleSignIn('GitLab')}
                />
              </>
            ) : (
              <>
                <SignInOption
                  icon={gitlab}
                  provider="Self Hosted GitLab"
                  onClick={() => handleSignIn('Self Hosted GitLab')}
                />
                <SignInOption
                  icon={sso}
                  provider="SSO"
                  onClick={() => handleSignIn('SSO')}
                />
              </>
            )}
          </div>

          <p className="text-[16px] text-[#181D27] text-center mt-8">
            By signing up you agree to the <span className="font-bold font-regular text-black">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;