import { Lightbulb, Check } from 'lucide-react';
import { useLocation } from 'react-router';
import { BottomTabBar } from './BottomTabBar';
import { useDarkMode } from './Layout';

export function MoodResultScreen() {
  const { darkMode } = useDarkMode();
  const location = useLocation();
  const mood = location.state?.mood || 'Energized';

  return (
    <div className={`w-[393px] h-[852px] relative overflow-hidden flex flex-col transition-colors ${darkMode ? 'bg-[#000000]' : 'bg-[#FFFBF5]'}`}>
      
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-32">
        
        {/* Context (faded) */}
        <div className="px-8 pt-16 opacity-50">
          <p className={`text-[32px] font-light mb-6 transition-colors ${darkMode ? 'text-white' : 'text-[#000000]'}`} style={{ fontFamily: 'Cormorant Garamond, serif', letterSpacing: '0.3px' }}>
            How are you feeling?
          </p>
          
          {/* Mood Pills (grayed out) */}
          <div className="flex flex-wrap gap-2 opacity-60">
            {['Energized', 'Calm', 'Stressed', 'Confident', 'Tired'].map((moodOption) => (
              <div
                key={moodOption}
                className={`px-4 py-2 rounded-full text-[14px] transition-all ${
                  moodOption === mood
                    ? darkMode
                      ? 'bg-[#1A1A1A] border border-[#D4AF37] text-[#D4AF37]'
                      : 'bg-white border border-[#D4AF37] text-[#D4AF37]'
                    : darkMode
                      ? 'bg-[#0F0F0F] border border-[#333333] text-[#999999]'
                      : 'bg-white border border-[#E8E8E8] text-[#666666]'
                }`}
                style={{ fontFamily: 'Avenir Next, -apple-system, sans-serif' }}
              >
                {moodOption}
              </div>
            ))}
          </div>
        </div>

        {/* Success Confirmation */}
        <div className="px-8 mt-8">
          <div 
            className={`rounded-xl p-4 border-l-[3px] border-[#D4AF37] transition-colors ${darkMode ? 'bg-[#1A1A1A]' : 'bg-[#FFFEF0]'}`}
          >
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" strokeWidth={2} />
              <div>
                <p className={`text-[14px] font-medium mb-1 transition-colors ${darkMode ? 'text-white' : 'text-[#000000]'}`} style={{ fontFamily: 'Avenir Next, -apple-system, sans-serif' }}>
                  Mood logged
                </p>
                <p className="text-[12px] text-[#666666]" style={{ fontFamily: 'Avenir Next, -apple-system, sans-serif' }}>
                  Added to your pattern data
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="flex justify-center mt-8">
          <div className="w-[90%] h-[1px] bg-[#E8DCC8]" />
        </div>

        {/* Insight Section */}
        <div className="px-8 mt-10">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className={`w-6 h-6 transition-colors ${darkMode ? 'text-[#D4AF37]' : 'text-[#D4AF37]'}`} strokeWidth={1.5} />
            <h2 className={`text-[24px] font-normal transition-colors ${darkMode ? 'text-white' : 'text-[#000000]'}`} style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Your Pattern
            </h2>
          </div>

          {/* Insight Card */}
          <div 
            className={`rounded-[20px] p-6 border-l-[3px] border-[#D4AF37] transition-colors ${darkMode ? 'bg-[#0F0F0F]' : 'bg-white'}`}
            style={{ boxShadow: '0px 2px 12px rgba(0,0,0,0.04)' }}
          >
            {/* Badge */}
            <div 
              className={`inline-block px-3 py-1.5 rounded-xl text-[13px] font-medium mb-4 transition-colors ${darkMode ? 'bg-[#1A1A1A] text-white' : 'bg-[#FFFEF0] text-[#000000]'}`}
              style={{ fontFamily: 'Avenir Next, -apple-system, sans-serif' }}
            >
              {mood} + Libre
            </div>

            {/* Main Text */}
            <p className={`text-[15px] mb-6 transition-colors ${darkMode ? 'text-[#CCCCCC]' : 'text-[#333333]'}`} style={{ fontFamily: 'Avenir Next, -apple-system, sans-serif', lineHeight: '1.5' }}>
              You've logged this combination 8 times before.
            </p>

            {/* Outcome List */}
            <p className="text-[13px] font-medium text-[#999999] mb-4" style={{ fontFamily: 'Avenir Next, -apple-system, sans-serif' }}>
              Typical outcome:
            </p>
            <div className="space-y-2 mb-6">
              {[
                'Energy sustained 4+ hours',
                'Productivity peak 10 AM - 12 PM',
                'HRV stays elevated'
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-[#D4AF37] text-[16px] leading-none mt-1">•</span>
                  <p className={`text-[14px] transition-colors ${darkMode ? 'text-[#CCCCCC]' : 'text-[#333333]'}`} style={{ fontFamily: 'Avenir Next, -apple-system, sans-serif', lineHeight: '1.8' }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Mini Chart */}
            <div className="mb-6">
              <svg width="100%" height="80" viewBox="0 0 280 80" className="w-full">
                {/* Very minimal grid */}
                <line x1="0" y1="60" x2="280" y2="60" stroke="#F0F0F0" strokeWidth="0.5" />
                <line x1="0" y1="40" x2="280" y2="40" stroke="#F0F0F0" strokeWidth="0.5" />
                <line x1="0" y1="20" x2="280" y2="20" stroke="#F0F0F0" strokeWidth="0.5" />
                
                {/* Gold line - energy curve */}
                <path
                  d="M 0 60 L 40 58 L 80 45 L 120 30 L 160 25 L 200 28 L 240 32 L 280 35"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                
                {/* Vertical dashed line at 7:42 AM */}
                <line x1="40" y1="0" x2="40" y2="70" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3,3" opacity="0.5" />
                
                {/* Annotation */}
                <text x="45" y="12" fill={darkMode ? '#999999' : '#666666'} fontSize="9" fontFamily="Avenir Next, -apple-system, sans-serif">
                  Wore Libre
                </text>
                
                {/* X-axis labels */}
                <text x="0" y="78" fill="#999999" fontSize="10" fontFamily="Avenir Next, -apple-system, sans-serif">
                  7 AM
                </text>
                <text x="240" y="78" fill="#999999" fontSize="10" fontFamily="Avenir Next, -apple-system, sans-serif">
                  12 PM
                </text>
              </svg>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-[#F0F0F0] mb-5" />

            {/* Suggestion Box */}
            <div 
              className={`rounded-xl p-4 flex items-start gap-3 transition-colors ${darkMode ? 'bg-[#1A1A1A]' : 'bg-[#FFFEF0]'}`}
            >
              <Check className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" strokeWidth={2} />
              <p className={`text-[13px] transition-colors ${darkMode ? 'text-[#CCCCCC]' : 'text-[#333333]'}`} style={{ fontFamily: 'Avenir Next, -apple-system, sans-serif', lineHeight: '1.5' }}>
                Current PRESENCE mode is optimal for sustained energy
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="px-8 mt-8 pb-8">
          <button 
            className={`w-full h-12 rounded-xl text-[15px] font-medium transition-all ${
              darkMode
                ? 'bg-transparent border border-white text-white hover:bg-white hover:text-black'
                : 'bg-white border border-black text-black hover:bg-black hover:text-white'
            }`}
            style={{ fontFamily: 'Avenir Next, -apple-system, sans-serif' }}
          >
            View full patterns
          </button>
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <BottomTabBar darkMode={darkMode} />
    </div>
  );
}