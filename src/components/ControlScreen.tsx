import { useState } from 'react';
import { ArrowLeft, Activity, Clock, RefreshCw } from 'lucide-react';
import { BottomTabBar } from './BottomTabBar';
import { useDarkMode } from './Layout';

export function ControlScreen() {
  const [intensity, setIntensity] = useState(80);
  const [selectedMode, setSelectedMode] = useState<'WHISPER' | 'PRESENCE' | 'STATEMENT'>('PRESENCE');
  const { darkMode } = useDarkMode();

  return (
    <div className={`w-[393px] h-[852px] relative overflow-hidden flex flex-col transition-colors ${darkMode ? 'bg-[#000000]' : 'bg-white'}`}>
      
      {/* Header */}
      <div className="px-8 pt-16 pb-6">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <p className={`text-[32px] font-light mb-1 transition-colors ${darkMode ? 'text-white' : 'text-[#000000]'}`} style={{ fontFamily: 'Cormorant Garamond, serif', letterSpacing: '0.3px' }}>
              Intensity Control
            </p>
            <p className={`text-[14px] font-normal transition-colors ${darkMode ? 'text-[#888888]' : 'text-[#999999]'}`} style={{ fontFamily: 'Avenir Next, -apple-system, sans-serif' }}>
              Adjust your scent presence
            </p>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-8 pb-32" style={{ fontFamily: 'Avenir Next, -apple-system, sans-serif' }}>
        
        {/* Main Card - Current Mode */}
        <div className={`rounded-lg p-6 mb-5 relative border-l-[3px] border-[#D4AF37] transition-colors ${darkMode ? 'bg-[#0F0F0F]' : 'bg-[#FFFEF8]'}`} style={{ boxShadow: '0px 2px 16px rgba(0,0,0,0.04)' }}>
          <div className="flex gap-6">
            {/* Left Column - 60% */}
            <div className="flex-1">
              <p className={`text-[10px] font-medium tracking-[0.08em] mb-3 uppercase transition-colors ${darkMode ? 'text-[#888888]' : 'text-[#999999]'}`}>Current mode</p>
              <h2 className={`text-[36px] font-normal mb-4 transition-colors ${darkMode ? 'text-white' : 'text-[#000000]'}`} style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                {selectedMode === 'WHISPER' ? 'Whisper' : selectedMode === 'PRESENCE' ? 'Presence' : 'Statement'}
              </h2>
              <p className={`text-[14px] font-medium mb-1 transition-colors ${darkMode ? 'text-white' : 'text-[#000000]'}`}>Active: 2h 18m</p>
              <p className="text-[13px] font-normal text-[#666666]">Since 7:42 AM</p>
            </div>

            {/* Right Column - 40% - Circular Progress */}
            <div className="flex flex-col items-center justify-center">
              <svg width="100" height="100" viewBox="0 0 100 100">
                {/* Background ring */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke={darkMode ? '#1A1A1A' : '#F0F0F0'}
                  strokeWidth="4"
                />
                {/* Progress ring */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="4"
                  strokeDasharray={`${2 * Math.PI * 40 * (intensity / 100)} ${2 * Math.PI * 40}`}
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                />
                {/* Center text */}
                <text
                  x="50"
                  y="50"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-[40px] font-light"
                  fill={darkMode ? '#FFFFFF' : '#000000'}
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {intensity}
                </text>
              </svg>
              <p className="text-[11px] font-normal text-[#666666] mt-2">intensity level</p>
            </div>
          </div>
        </div>

        {/* Intensity Adjustment Section */}
        <div className="mb-8">
          <h3 
            className={`text-[20px] font-normal mb-6 transition-colors ${darkMode ? 'text-white' : 'text-[#000000]'}`}
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Adjust intensity
          </h3>
          
          {/* Custom Slider */}
          <div className="relative mb-4">
            <div className="h-1 bg-[#E8E8E8] rounded-full">
              <div 
                className="h-full rounded-full transition-all"
                style={{ 
                  width: `${intensity}%`,
                  background: 'linear-gradient(90deg, #D4AF37 0%, #C9A961 100%)'
                }}
              />
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={intensity}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                setIntensity(val);
                if (val <= 35) setSelectedMode('WHISPER');
                else if (val <= 70) setSelectedMode('PRESENCE');
                else setSelectedMode('STATEMENT');
              }}
              className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 opacity-0 cursor-pointer"
            />
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full border-2 border-[#D4AF37] transition-all pointer-events-none"
              style={{ 
                left: `calc(${intensity}% - 12px)`,
                boxShadow: '0px 2px 8px rgba(0,0,0,0.12)'
              }}
            />
          </div>
          
          {/* Three Preset Buttons */}
          <div className="grid grid-cols-3 gap-2 mt-4">
            <button
              onClick={() => {
                setIntensity(25);
                setSelectedMode('WHISPER');
              }}
              className={`h-11 rounded-xl text-[13px] font-normal transition-all ${
                selectedMode === 'WHISPER'
                  ? darkMode
                    ? 'bg-[#1A1A1A] border border-[#D4AF37] text-[#D4AF37]'
                    : 'bg-white border border-[#D4AF37] text-[#D4AF37]'
                  : darkMode
                    ? 'bg-[#0F0F0F] border border-[#333333] text-[#999999]'
                    : 'bg-white border border-[#E8E8E8] text-[#666666]'
              }`}
            >
              Whisper
            </button>
            <button
              onClick={() => {
                setIntensity(55);
                setSelectedMode('PRESENCE');
              }}
              className={`h-11 rounded-xl text-[13px] font-normal transition-all ${
                selectedMode === 'PRESENCE'
                  ? darkMode
                    ? 'bg-[#1A1A1A] border border-[#D4AF37] text-[#D4AF37]'
                    : 'bg-white border border-[#D4AF37] text-[#D4AF37]'
                  : darkMode
                    ? 'bg-[#0F0F0F] border border-[#333333] text-[#999999]'
                    : 'bg-white border border-[#E8E8E8] text-[#666666]'
              }`}
            >
              Presence
            </button>
            <button
              onClick={() => {
                setIntensity(90);
                setSelectedMode('STATEMENT');
              }}
              className={`h-11 rounded-xl text-[13px] font-normal transition-all ${
                selectedMode === 'STATEMENT'
                  ? darkMode
                    ? 'bg-[#1A1A1A] border border-[#D4AF37] text-[#D4AF37]'
                    : 'bg-white border border-[#D4AF37] text-[#D4AF37]'
                  : darkMode
                    ? 'bg-[#0F0F0F] border border-[#333333] text-[#999999]'
                    : 'bg-white border border-[#E8E8E8] text-[#666666]'
              }`}
            >
              Statement
            </button>
          </div>
        </div>

        {/* Quick Actions Card */}
        <div className={`rounded-lg p-6 mb-5 transition-colors ${darkMode ? 'bg-[#0F0F0F]' : 'bg-[#FFFEF8]'}`} style={{ boxShadow: '0px 2px 8px rgba(0,0,0,0.04)' }}>
          <h3 
            className={`text-[18px] font-normal mb-5 transition-colors ${darkMode ? 'text-white' : 'text-[#000000]'}`}
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Quick actions
          </h3>
          
          <div className="space-y-4">
            {/* Burst Now */}
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-4">
                <Activity className={`w-6 h-6 transition-colors ${darkMode ? 'text-white' : 'text-[#000000]'}`} strokeWidth={1.5} />
                <div>
                  <p className={`text-[15px] font-medium transition-colors ${darkMode ? 'text-white' : 'text-[#000000]'}`}>
                    Burst now
                  </p>
                  <p className="text-[13px] text-[#666666]">
                    Instant release
                  </p>
                </div>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>

            {/* Schedule Boost */}
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-4">
                <Clock className={`w-6 h-6 transition-colors ${darkMode ? 'text-white' : 'text-[#000000]'}`} strokeWidth={1.5} />
                <div>
                  <p className={`text-[15px] font-medium transition-colors ${darkMode ? 'text-white' : 'text-[#000000]'}`}>
                    Schedule boost
                  </p>
                  <p className="text-[13px] text-[#666666]">
                    Pre-set timing
                  </p>
                </div>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>

            {/* Switch Mode */}
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-4">
                <RefreshCw className={`w-6 h-6 transition-colors ${darkMode ? 'text-white' : 'text-[#000000]'}`} strokeWidth={1.5} />
                <div>
                  <p className={`text-[15px] font-medium transition-colors ${darkMode ? 'text-white' : 'text-[#000000]'}`}>
                    Switch mode
                  </p>
                  <p className="text-[13px] text-[#666666]">
                    Change preset
                  </p>
                </div>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <BottomTabBar darkMode={darkMode} />
    </div>
  );
}