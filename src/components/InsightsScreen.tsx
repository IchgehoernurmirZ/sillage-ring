import { useState } from 'react';
import { useNavigate } from 'react-router';
import { BottomTabBar } from './BottomTabBar';
import { useDarkMode } from './Layout';

export function InsightsScreen() {
  const [selectedMood, setSelectedMood] = useState('Calm');
  const [moodNote, setMoodNote] = useState('');
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex justify-center items-start">
      {/* iPhone 14 Pro Container */}
      <div className={`w-[393px] h-[852px] relative overflow-hidden flex flex-col transition-colors ${darkMode ? 'bg-[#000000]' : 'bg-white'}`}>
        
        {/* Header */}
        <div className="px-8 pt-16 pb-6">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <p className={`text-[32px] font-light mb-1 transition-colors ${darkMode ? 'text-white' : 'text-[#000000]'}`} style={{ fontFamily: 'Cormorant Garamond, serif' }}>Today's Wellbeing</p>
              <p className={`text-[14px] font-normal transition-colors ${darkMode ? 'text-[#888888]' : 'text-[#666666]'}`} style={{ fontFamily: 'Avenir Next, -apple-system, sans-serif' }}>Tuesday, February 6</p>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-8 pb-32" style={{ fontFamily: 'Avenir Next, -apple-system, sans-serif' }}>
          
          {/* Hero Section - Current State Card */}
          <div className={`rounded-lg p-6 mb-5 relative border-l-[3px] border-[#D4AF37] transition-colors ${darkMode ? 'bg-[#0F0F0F]' : 'bg-[#FFFBF5]'}`}>
            <div className="flex gap-6">
              {/* Left Column - 60% */}
              <div className="flex-1">
                <p className={`text-[10px] font-medium tracking-[0.08em] mb-3 uppercase transition-colors ${darkMode ? 'text-[#888888]' : 'text-[#666666]'}`}>Current state</p>
                <h2 className={`text-[24px] font-normal mb-4 transition-colors ${darkMode ? 'text-white' : 'text-[#000000]'}`} style={{ fontFamily: 'Cormorant Garamond, serif' }}>Calm & Focused</h2>
                <p className={`text-[14px] font-medium mb-1 transition-colors ${darkMode ? 'text-white' : 'text-[#000000]'}`}>Wearing: LIBRE</p>
                <p className="text-[12px] font-light text-[#666666]">Since 7:42 AM (2h 18m)</p>
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
                    strokeDasharray={`${2 * Math.PI * 40 * 0.82} ${2 * Math.PI * 40}`}
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                  />
                  {/* Center text */}
                  <text
                    x="50"
                    y="50"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-[36px] font-light"
                    fill={darkMode ? '#FFFFFF' : '#000000'}
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    82
                  </text>
                </svg>
                <p className="text-[11px] font-normal text-[#666666] mt-2">Wellbeing score</p>
              </div>
            </div>
          </div>

          {/* Biometric Data Row */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            {/* Heart Rate Card */}
            <div className={`rounded-lg p-4 flex flex-col items-center transition-colors ${darkMode ? 'bg-[#0F0F0F]' : 'bg-white'}`} style={{ boxShadow: '0px 2px 8px rgba(0,0,0,0.04)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={darkMode ? '#FFFFFF' : '#000000'} strokeWidth="1" className="mb-2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <p className={`text-[28px] font-light mb-0 transition-colors ${darkMode ? 'text-white' : 'text-[#000000]'}`} style={{ fontFamily: 'Cormorant Garamond, serif' }}>68</p>
              <p className="text-[11px] font-normal text-[#666666]">bpm</p>
              <p className="text-[10px] font-normal text-[#666666] mt-1">Resting</p>
            </div>

            {/* HRV Card */}
            <div className={`rounded-lg p-4 flex flex-col items-center transition-colors ${darkMode ? 'bg-[#0F0F0F]' : 'bg-white'}`} style={{ boxShadow: '0px 2px 8px rgba(0,0,0,0.04)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={darkMode ? '#FFFFFF' : '#000000'} strokeWidth="1" className="mb-2">
                <path d="M2 12 Q 6 8, 10 12 T 18 12 T 22 12" />
              </svg>
              <p className={`text-[28px] font-light mb-0 transition-colors ${darkMode ? 'text-white' : 'text-[#000000]'}`} style={{ fontFamily: 'Cormorant Garamond, serif' }}>58</p>
              <p className="text-[11px] font-normal text-[#666666]">ms</p>
              <p className="text-[10px] font-normal text-[#B8860B] mt-1">Above avg</p>
            </div>

            {/* Stress Card */}
            <div className={`rounded-lg p-4 flex flex-col items-center transition-colors ${darkMode ? 'bg-[#0F0F0F]' : 'bg-white'}`} style={{ boxShadow: '0px 2px 8px rgba(0,0,0,0.04)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={darkMode ? '#FFFFFF' : '#000000'} strokeWidth="1" className="mb-2">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              </svg>
              <p className={`text-[20px] font-light mb-0 transition-colors ${darkMode ? 'text-white' : 'text-[#000000]'}`} style={{ fontFamily: 'Cormorant Garamond, serif' }}>Low</p>
              <p className="text-[10px] font-normal text-[#666666] mt-2">↓ 18% vs yesterday</p>
            </div>
          </div>

          {/* Insight Card with Graph */}
          <div className={`rounded-lg p-6 mb-5 relative border-t border-[#D4AF37] transition-colors ${darkMode ? 'bg-[#0F0F0F]' : 'bg-white'}`} style={{ boxShadow: '0px 2px 8px rgba(0,0,0,0.04)' }}>
            {/* Lightbulb icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" className="mb-3">
              <path d="M9 18h6" />
              <path d="M10 22h4" />
              <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8a6 6 0 0 0-12 0c0 1.33.47 2.48 1.5 3.5.76.76 1.23 1.52 1.41 2.5" />
            </svg>
            
            <h3 className={`text-[18px] font-medium mb-3 transition-colors ${darkMode ? 'text-white' : 'text-[#000000]'}`} style={{ fontFamily: 'Cormorant Garamond, serif' }}>Scent insight</h3>
            <p className={`text-[14px] font-normal mb-5 transition-colors ${darkMode ? 'text-[#CCCCCC]' : 'text-[#333333]'}`} style={{ lineHeight: '1.6' }}>
              Your HRV improved 12% within 20 minutes of wearing Libre. This scent consistently correlates with reduced stress in your data.
            </p>

            {/* Simple Line Graph */}
            <div className="relative" style={{ height: '120px' }}>
              <svg width="100%" height="120" viewBox="0 0 300 120" preserveAspectRatio="none">
                {/* Grid lines */}
                <line x1="0" y1="30" x2="300" y2="30" stroke={darkMode ? '#1A1A1A' : '#F5F5F5'} strokeWidth="1" />
                <line x1="0" y1="60" x2="300" y2="60" stroke={darkMode ? '#1A1A1A' : '#F5F5F5'} strokeWidth="1" />
                <line x1="0" y1="90" x2="300" y2="90" stroke={darkMode ? '#1A1A1A' : '#F5F5F5'} strokeWidth="1" />
                
                {/* Y-axis values */}
                <text x="5" y="25" fontSize="9" fill="#999999">70</text>
                <text x="5" y="55" fontSize="9" fill="#999999">60</text>
                <text x="5" y="85" fontSize="9" fill="#999999">50</text>
                <text x="5" y="115" fontSize="9" fill="#999999">40</text>
                
                {/* HRV line - starts low, increases after marker */}
                <path
                  d="M 0 90 L 50 85 L 100 80 L 120 75 L 140 60 L 180 50 L 220 45 L 260 42 L 300 40"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                />
                
                {/* Vertical marker at 7:42 AM */}
                <line x1="120" y1="0" x2="120" y2="120" stroke="#B8860B" strokeWidth="1" strokeDasharray="3,3" vectorEffect="non-scaling-stroke" />
              </svg>
              
              {/* X-axis labels */}
              <div className="flex justify-between mt-2 px-1">
                <span className="text-[9px] text-[#999999]">7:00</span>
                <span className="text-[9px] text-[#B8860B]">7:42 AM</span>
                <span className="text-[9px] text-[#999999]">10:00</span>
              </div>
              <p className="text-[10px] text-[#666666] text-center mt-2">Applied Libre at 7:42 AM</p>
            </div>
          </div>

          {/* Manual Mood Check-in */}
          <div className="mb-6 mt-8">
            <h3 className={`text-[20px] font-light mb-4 transition-colors ${darkMode ? 'text-white' : 'text-[#000000]'}`} style={{ fontFamily: 'Cormorant Garamond, serif' }}>How are you feeling?</h3>
            
            {/* Mood Pills */}
            <div className="flex gap-2 mb-4 flex-wrap">
              {['Energized', 'Calm', 'Stressed', 'Confident', 'Tired'].map((mood) => (
                <button
                  key={mood}
                  onClick={() => setSelectedMood(mood)}
                  className={`px-5 rounded-full text-[13px] font-normal transition-all ${
                    selectedMood === mood
                      ? darkMode 
                        ? 'bg-white text-[#000000]'
                        : 'bg-[#000000] text-white'
                      : darkMode 
                        ? 'bg-transparent border border-[#333333] text-[#999999] hover:border-[#D4AF37]'
                        : 'bg-white border border-[#E8E8E8] text-[#666666] hover:border-[#D4AF37]'
                  }`}
                  style={{ height: '40px' }}
                >
                  {mood}
                </button>
              ))}
            </div>

            {/* Optional Text Field */}
            <div className={`border-b pb-2 transition-colors ${darkMode ? 'border-[#333333]' : 'border-[#E8E8E8]'}`}>
              <input
                type="text"
                value={moodNote}
                onChange={(e) => setMoodNote(e.target.value)}
                placeholder="What influenced your mood?"
                className={`w-full text-[14px] font-normal outline-none transition-colors ${
                  darkMode 
                    ? 'bg-transparent text-white placeholder-[#666666]'
                    : 'bg-transparent text-[#000000] placeholder-[#CCCCCC]'
                }`}
              />
            </div>
          </div>

          {/* Action Button */}
          <button 
            onClick={() => navigate('/mood-result', { state: { mood: selectedMood } })}
            className={`w-full py-4 rounded-lg text-[15px] font-medium transition-all ${
              darkMode 
                ? 'bg-white text-[#000000] hover:opacity-90'
                : 'bg-[#000000] text-white hover:opacity-90'
            }`} 
            style={{ height: '52px' }}
          >
            Log mood & continue
          </button>
        </div>

        {/* Ring Status Footer */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#F0F0F0] px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B76E79" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
            </svg>
            <p className="text-[12px] font-normal text-[#666666]">Libre • 76% battery • Moderate intensity</p>
          </div>
          <p className="text-[12px] font-normal text-[#666666]">10:00 AM</p>
        </div>

        {/* Bottom Tab Bar */}
        <BottomTabBar darkMode={darkMode} />
      </div>
    </div>
  );
}