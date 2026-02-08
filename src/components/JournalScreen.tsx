import { Search } from 'lucide-react';
import { BottomTabBar } from './BottomTabBar';
import { useDarkMode } from './Layout';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SlidersHorizontal } from 'lucide-react';

export function JournalScreen() {
  const { darkMode } = useDarkMode();

  const entries = [
    {
      id: 1,
      date: 'Today, 10:18 AM',
      duration: '2h 36m',
      scent: 'LIBRE',
      scentColor: '#D4AF37',
      mood: 'Energized',
      moodBg: '#FFFEF0',
      cardBg: '#FFFEF0', // Light warm gold
      note: 'Big presentation went amazing, felt so powerful and ready',
      contexts: ['Work', 'High-stakes'],
      bottleImage: 'https://images.unsplash.com/photo-1729101807924-3446ca9aa480?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlJTIwd2hpdGUlMjBiYWNrZ3JvdW5kJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzA0MzgzNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      date: 'Yesterday, 7:45 AM',
      duration: 'All day',
      scent: 'MYSLF',
      scentColor: '#6B7C8F',
      mood: 'Calm',
      moodBg: '#F0F5FF',
      cardBg: '#F8FAFE', // Light blue
      note: 'Regular Tuesday, steady focus throughout the day',
      contexts: ['Work', 'Routine'],
      bottleImage: 'https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxZU0wlMjBNWVNMRiUyMHBlcmZ1bWUlMjBib3R0bGUlMjBsdXh1cnklMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzcwNDM4MzYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      date: 'Monday, 6:20 PM',
      duration: '3h 15m',
      scent: 'Paradoxe',
      scentColor: '#B76E79',
      mood: 'Creative',
      moodBg: '#FFF5F7',
      cardBg: '#FFF9FA', // Light rose
      note: 'Working on presentation deck, ideas flowing naturally',
      contexts: ['Work', 'Creative'],
      bottleImage: 'https://images.unsplash.com/photo-1729101807924-3446ca9aa480?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHBlcmZ1bWUlMjBib3R0bGUlMjBwcm9kdWN0JTIwcGhvdG9ncmFwaHklMjB3aGl0ZXxlbnwxfHx8fDE3NzA0MzgzNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="min-h-screen bg-white flex justify-center items-start">
      {/* iPhone 14 Pro Container */}
      <div className={`w-[393px] h-[852px] relative overflow-hidden flex flex-col transition-colors ${darkMode ? 'bg-[#000000]' : 'bg-white'}`}>
        
        {/* Header */}
        <div className="px-8 pt-16 pb-6">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <p className={`text-[32px] font-light mb-1 transition-colors ${darkMode ? 'text-white' : 'text-[#000000]'}`} style={{ fontFamily: 'Cormorant Garamond, serif', letterSpacing: '0.5px' }}>
                Scent Journal
              </p>
              <p className={`text-[14px] font-normal transition-colors ${darkMode ? 'text-[#888888]' : 'text-[#999999]'}`} style={{ fontFamily: 'Avenir Next, -apple-system, sans-serif' }}>
                Your scent story
              </p>
            </div>
            <button className="mt-1">
              <Search 
                size={24} 
                strokeWidth={1.5} 
                className={`transition-colors ${darkMode ? 'text-white' : 'text-[#000000]'}`}
              />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-8 pb-32" style={{ fontFamily: 'Avenir Next, -apple-system, sans-serif' }}>
          
          {/* Stats Summary Card */}
          <div className={`rounded-[24px] p-6 mb-5 relative border-l-[3px] border-[#D4AF37] transition-colors ${darkMode ? 'bg-[#0F0F0F]' : 'bg-[#FFFBF5]'}`} style={{ boxShadow: '0px 2px 16px rgba(0,0,0,0.04)' }}>
            <div className="grid grid-cols-3 gap-4">
              {/* Column 1 */}
              <div className="text-center">
                <p className={`text-[36px] font-light mb-1 transition-colors ${darkMode ? 'text-white' : 'text-[#000000]'}`} style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  47
                </p>
                <p className="text-[11px] font-normal text-[#999999]">Total entries</p>
              </div>

              {/* Column 2 */}
              <div className="text-center">
                <p className={`text-[36px] font-light mb-1 transition-colors ${darkMode ? 'text-white' : 'text-[#000000]'}`} style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  3
                </p>
                <p className="text-[11px] font-normal text-[#999999]">Fragrances</p>
              </div>

              {/* Column 3 */}
              <div className="text-center">
                <p className={`text-[36px] font-light mb-1 transition-colors ${darkMode ? 'text-white' : 'text-[#D4AF37]'}`} style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  18
                </p>
                <p className="text-[11px] font-normal text-[#999999]">Days active</p>
              </div>
            </div>
          </div>

          {/* Timeline Section Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className={`text-[20px] font-normal transition-colors ${darkMode ? 'text-white' : 'text-[#000000]'}`} style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Recent entries
            </h3>
            <button className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-colors hover:border-[#D4AF37] ${darkMode ? 'bg-transparent border-[#333333] text-[#999999] hover:text-[#D4AF37]' : 'bg-white border-[#E8E8E8] text-[#666666] hover:text-[#D4AF37]'}`}>
              <SlidersHorizontal size={16} strokeWidth={1.5} />
              <span className="text-[12px] font-medium">Filter</span>
            </button>
          </div>

          {/* Entry Cards */}
          {entries.map((entry) => (
            <div
              key={entry.id}
              className={`rounded-[20px] p-5 mb-4 relative border-l-[3px] transition-all duration-300 ease-out cursor-pointer hover:-translate-y-1 ${darkMode ? 'bg-[#0F0F0F]' : ''}`}
              style={{ 
                borderLeftColor: entry.scentColor,
                backgroundColor: darkMode ? undefined : entry.cardBg,
                boxShadow: '0px 2px 12px rgba(0,0,0,0.04)' 
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = darkMode 
                  ? '0px 8px 24px rgba(0,0,0,0.3)' 
                  : '0px 8px 24px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0px 2px 12px rgba(0,0,0,0.04)';
              }}
            >
              {/* Header Row */}
              <div className="flex items-center justify-between mb-4">
                <p className="text-[12px] font-normal text-[#999999]">{entry.date}</p>
                <div className={`px-3 py-1 rounded-xl border transition-colors ${darkMode ? 'bg-[#1A1A1A] border-[#333333]' : 'bg-white border-[#E8E8E8]'}`}>
                  <p className={`text-[11px] font-medium transition-colors ${darkMode ? 'text-white' : 'text-[#000000]'}`}>{entry.duration}</p>
                </div>
              </div>

              {/* Scent Info with Bottle */}
              <div className="flex items-center gap-3 mb-3">
                <div className={`rounded-lg border overflow-hidden transition-colors ${darkMode ? 'border-[#333333] bg-[#1A1A1A]' : 'border-[#E8E8E8] bg-white'}`} style={{ width: '40px', height: '50px' }}>
                  <ImageWithFallback
                    src={entry.bottleImage}
                    alt={entry.scent}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className={`text-[18px] font-normal transition-colors ${darkMode ? 'text-white' : 'text-[#000000]'}`} style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {entry.scent}
                </p>
              </div>

              {/* Mood Tag */}
              <div className="mb-4">
                <span 
                  className={`inline-block px-4 py-1.5 rounded-full text-[12px] font-medium transition-colors ${darkMode ? 'bg-[#1A1A1A] text-white' : 'text-[#000000]'}`}
                  style={{ backgroundColor: darkMode ? undefined : entry.moodBg }}
                >
                  {entry.mood}
                </span>
              </div>

              {/* User Note */}
              <p className={`text-[14px] font-normal mb-3 transition-colors ${darkMode ? 'text-[#CCCCCC]' : 'text-[#333333]'}`} style={{ lineHeight: '1.6' }}>
                {entry.note}
              </p>

              {/* Context Tags */}
              <div className="flex gap-2 flex-wrap">
                {entry.contexts.map((context) => (
                  <span 
                    key={context}
                    className={`px-3 py-1 rounded-xl border text-[11px] font-normal transition-colors ${darkMode ? 'bg-transparent border-[#333333] text-[#999999]' : 'bg-white border-[#E8E8E8] text-[#666666]'}`}
                  >
                    {context}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Load More */}
          <div className="text-center py-8">
            <button className="text-[13px] font-normal text-[#999999] hover:text-[#D4AF37] transition-colors">
              Load earlier entries
            </button>
          </div>
        </div>

        {/* Bottom Tab Bar */}
        <BottomTabBar darkMode={darkMode} />
      </div>
    </div>
  );
}