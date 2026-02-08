import { Battery } from 'lucide-react';
import { useState } from 'react';
import libreBottle from 'figma:asset/d03a1510b700769a8059a8c3090d9fd2e3f2ac2d.png';
import myslfBottle from 'figma:asset/0430801aa0824644a9ba25cdecf29421b285993e.png';
import { BottomTabBar } from './BottomTabBar';
import { useDarkMode } from './Layout';

export function HomeScreen() {
  const [libreCapped, setLibreCapped] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [selectedIntensity, setSelectedIntensity] = useState<'WHISPER' | 'PRESENCE' | 'STATEMENT'>('PRESENCE');

  return (
    <div className="min-h-screen bg-white flex justify-center items-start">
      {/* iPhone 14 Pro Container */}
      <div className={`w-[393px] h-[852px] relative overflow-hidden flex flex-col transition-colors ${darkMode ? 'bg-[#000000]' : 'bg-white'}`}>
        
        {/* Currently Capping Banner - Top */}
        <div className="px-8 pt-16 pb-4">
          <div className={`rounded-sm p-5 border transition-colors ${ 
            darkMode 
              ? 'bg-[#0F0F0F] border-[#1A1A1A]'
              : 'bg-white border-[#F0F0F0]'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B76E79" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                </svg>
                <div>
                  <p className={`text-[13px] font-normal transition-colors ${darkMode ? 'text-white' : 'text-[#000000]'}`}>Currently capping: {libreCapped ? 'LIBRE' : 'MYSLF'}</p>
                  <p className="text-[11px] font-light text-[#666666]">Scent ready in 6 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Battery className={`w-4 h-4 transition-colors ${darkMode ? 'text-white' : 'text-[#000000]'}`} strokeWidth={1.5} />
                <span className={`text-[12px] font-normal transition-colors ${darkMode ? 'text-white' : 'text-[#000000]'}`}>76%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Good Morning + Dark Mode Toggle - Fixed */}
        <div className="px-8 pb-6 flex items-center justify-between">
          <p className={`text-[24px] font-light transition-colors ${darkMode ? 'text-white' : 'text-[#000000]'}`} style={{ fontFamily: 'Cormorant Garamond, serif' }}>Good Morning, Zoey</p>
          <button
            onClick={toggleDarkMode}
            className={`relative w-14 h-7 rounded-full transition-colors flex-shrink-0 ${darkMode ? 'bg-[#D4AF37]' : 'bg-[#E8E8E8]'}`}
            aria-label="Toggle dark mode"
          >
            <div
              className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${darkMode ? 'translate-x-8' : 'translate-x-1'} flex items-center justify-center`}
            >
              {darkMode ? (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </div>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-8 pb-32" style={{ fontFamily: 'Avenir Next, -apple-system, sans-serif' }}>
          
          {/* Which scent today - Now Scrollable */}
          <div className="mb-8">
            <h1 className={`text-[36px] font-light transition-colors ${darkMode ? 'text-white' : 'text-[#000000]'}`} style={{ fontFamily: 'Cormorant Garamond, serif', letterSpacing: '0.05em' }}>Which scent today?</h1>
          </div>

          {/* Main Recommended Card */}
          <div className={`rounded-sm p-6 mb-5 relative border-l-2 border-[#D4AF37] transition-colors ${darkMode ? 'bg-[#0F0F0F]' : 'bg-white'}`} style={{ boxShadow: '0px 2px 16px rgba(0,0,0,0.06)' }}>
            {/* Gold Badge */}
            <div className="mb-5">
              <span className="text-[11px] font-medium text-[#B8860B] tracking-[0.1em]">RECOMMENDED</span>
            </div>

            {/* Content Container */}
            <div className="flex gap-5 mb-5">
              {/* Perfume Image */}
              <div 
                className={`w-[120px] h-[160px] flex items-center justify-center flex-shrink-0 transition-all ${
                  darkMode ? '' : 'bg-white'
                }`}
                style={darkMode ? {} : {
                  border: '0.5px solid #D4AF37',
                  boxShadow: 'inset 0px 1px 3px rgba(0,0,0,0.1)',
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.03\'/%3E%3C/svg%3E")',
                  backgroundSize: '200px 200px'
                }}
              >
                <img 
                  src={libreBottle} 
                  alt="YSL Libre"
                  className="w-full h-full object-contain"
                  style={darkMode ? { 
                    filter: 'drop-shadow(0px 8px 24px rgba(0,0,0,0.4))',
                    mixBlendMode: 'lighten'
                  } : {}}
                />
              </div>

              {/* Right Side Text */}
              <div className="flex-1 flex flex-col justify-center">
                <h2 className={`text-[24px] font-normal mb-2 tracking-[0.08em] transition-colors ${darkMode ? 'text-white' : 'text-[#000000]'}`} style={{ fontFamily: 'Cormorant Garamond, serif' }}>LIBRE</h2>
                <p className="text-[14px] font-light text-[#666666] mb-3">Board meeting at 10 AM</p>
                <p className="text-[20px] font-medium text-[#D4AF37]">92%</p>
              </div>
            </div>

            {/* Text Tags */}
            <div className="mb-5">
              <p className={`text-[12px] font-light transition-colors ${darkMode ? 'text-[#888888]' : 'text-[#999999]'}`}>Confidence · High-stakes · Professional</p>
            </div>

            {/* Button */}
            {!libreCapped ? (
              <button 
                onClick={() => setLibreCapped(true)}
                className={`w-full border py-3 rounded-sm font-medium text-[14px] transition-all ${
                  darkMode 
                    ? 'border-white bg-transparent text-white hover:bg-white hover:text-black' 
                    : 'border-[#000000] bg-white text-[#000000] hover:bg-[#000000] hover:text-white'
                }`}
                style={{ height: '48px' }}
              >
                Cap Libre tonight
              </button>
            ) : (
              <div>
                <button 
                  className={`w-full border border-[#D4AF37] py-3 rounded-sm font-medium text-[14px] transition-colors ${darkMode ? 'bg-transparent text-white' : 'bg-white text-[#000000]'}`}
                  style={{ height: '48px' }}
                >
                  ✓ Libre set for tomorrow
                </button>
                <p className="text-[12px] font-light text-[#666666] mt-3 text-center">Reminder at 9:00 PM</p>
                <button 
                  onClick={() => setLibreCapped(false)}
                  className={`text-[11px] font-light mt-2 text-center w-full transition-colors ${darkMode ? 'text-[#888888] hover:text-[#AAAAAA]' : 'text-[#999999] hover:text-[#666666]'}`}
                >
                  Change selection
                </button>
              </div>
            )}
          </div>

          {/* Secondary Alternative Card */}
          <div className={`rounded-sm p-5 mb-6 relative transition-colors ${darkMode ? 'bg-[#0F0F0F]' : 'bg-white'}`} style={{ boxShadow: '0px 2px 12px rgba(0,0,0,0.04)' }}>
            {/* Badge */}
            <div className="mb-3">
              <span className={`text-[11px] font-light tracking-[0.08em] transition-colors ${darkMode ? 'text-[#888888]' : 'text-[#999999]'}`}>ALTERNATIVE</span>
            </div>

            {/* Content Container */}
            <div className="flex gap-4 items-center">
              {/* Perfume Image */}
              <div 
                className={`w-[60px] h-[80px] flex items-center justify-center flex-shrink-0 transition-all ${
                  darkMode ? '' : 'bg-white'
                }`}
                style={darkMode ? {} : {
                  border: '0.5px solid #D4AF37',
                  boxShadow: 'inset 0px 1px 3px rgba(0,0,0,0.1)',
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise2\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise2)\' opacity=\'0.03\'/%3E%3C/svg%3E")',
                  backgroundSize: '200px 200px'
                }}
              >
                <img 
                  src={myslfBottle} 
                  alt="MYSLF"
                  className="w-full h-full object-contain"
                  style={darkMode ? { 
                    filter: 'drop-shadow(0px 8px 24px rgba(0,0,0,0.4))',
                    mixBlendMode: 'lighten'
                  } : {}}
                />
              </div>

              {/* Right Side Text */}
              <div className="flex-1">
                <h3 className={`text-[18px] font-normal mb-1 tracking-[0.06em] transition-colors ${darkMode ? 'text-white' : 'text-[#000000]'}`} style={{ fontFamily: 'Cormorant Garamond, serif' }}>MYSLF</h3>
                <p className="text-[13px] font-light text-[#666666] mb-2">Typical Tuesday choice</p>
                <p className="text-[14px] font-medium text-[#666666]">78%</p>
              </div>
            </div>
          </div>

          {/* Intensity Selector */}
          <div className="mb-6">
            <p className={`text-[16px] font-light mb-4 transition-colors ${darkMode ? 'text-white' : 'text-[#000000]'}`} style={{ fontFamily: 'Cormorant Garamond, serif' }}>Select intensity</p>
            <div className="flex gap-3 mb-0">
              <button 
                onClick={() => setSelectedIntensity('WHISPER')}
                className={`flex-1 border rounded-full text-[12px] font-normal transition-all ${
                  selectedIntensity === 'WHISPER'
                    ? darkMode 
                      ? 'bg-white text-[#000000] border-white'
                      : 'bg-[#000000] text-white border-[#000000]'
                    : darkMode 
                      ? 'bg-transparent border-[#333333] text-[#999999] hover:border-[#D4AF37]'
                      : 'bg-white border-[#E8E8E8] text-[#666666] hover:border-[#D4AF37]'
                }`} 
                style={{ height: '40px', padding: '0 20px' }}
              >
                WHISPER
              </button>
              <button 
                onClick={() => setSelectedIntensity('PRESENCE')}
                className={`flex-1 rounded-full text-[12px] font-normal transition-all ${
                  selectedIntensity === 'PRESENCE'
                    ? darkMode 
                      ? 'bg-white text-[#000000]'
                      : 'bg-[#000000] text-white'
                    : darkMode 
                      ? 'bg-transparent border border-[#333333] text-[#999999] hover:border-[#D4AF37]'
                      : 'bg-white border border-[#E8E8E8] text-[#666666] hover:border-[#D4AF37]'
                }`} 
                style={{ height: '40px', padding: '0 20px' }}
              >
                PRESENCE
              </button>
              <button 
                onClick={() => setSelectedIntensity('STATEMENT')}
                className={`flex-1 border rounded-full text-[12px] font-normal transition-all ${
                  selectedIntensity === 'STATEMENT'
                    ? darkMode 
                      ? 'bg-white text-[#000000] border-white'
                      : 'bg-[#000000] text-white border-[#000000]'
                    : darkMode 
                      ? 'bg-transparent border-[#333333] text-[#999999] hover:border-[#D4AF37]'
                      : 'bg-white border-[#E8E8E8] text-[#666666] hover:border-[#D4AF37]'
                }`} 
                style={{ height: '40px', padding: '0 20px' }}
              >
                STATEMENT
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Tab Bar */}
        <BottomTabBar darkMode={darkMode} />
      </div>
    </div>
  );
}