import { Link, useLocation } from 'react-router';

interface BottomTabBarProps {
  darkMode: boolean;
}

export function BottomTabBar({ darkMode }: { darkMode: boolean }) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isInsights = location.pathname === '/insights';
  const isControl = location.pathname === '/control';
  const isJournal = location.pathname === '/journal';

  return (
    <div className={`absolute bottom-0 left-0 right-0 flex border-t transition-colors ${darkMode ? 'bg-[#000000] border-[#1A1A1A]' : 'bg-white border-[#E8E8E8]'}`} style={{ paddingBottom: 'env(safe-area-inset-bottom)', height: '80px' }}>
      <div className="flex w-full">
        {/* Home Tab */}
        <Link
          to="/"
          className={`flex-1 flex flex-col items-center py-4 transition-colors ${
            isHome
              ? darkMode
                ? 'text-[#D4AF37]'
                : 'text-[#000000]'
              : darkMode
                ? 'text-[#666666]'
                : 'text-[#999999]'
          }`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2 L6 8 L6 21 L10 21 L10 14 L14 14 L14 21 L18 21 L18 8 Z" />
          </svg>
          <span className="text-[11px] font-medium mt-1.5">Home</span>
        </Link>

        {/* Wellbeing Tab */}
        <Link
          to="/insights"
          className={`flex-1 flex flex-col items-center py-4 transition-colors ${
            isInsights
              ? darkMode
                ? 'text-[#D4AF37]'
                : 'text-[#000000]'
              : darkMode
                ? 'text-[#666666]'
                : 'text-[#999999]'
          }`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <span className="text-[11px] font-medium mt-1.5">Wellbeing</span>
        </Link>

        {/* Intensity Tab */}
        <Link
          to="/control"
          className={`flex-1 flex flex-col items-center py-4 transition-colors ${
            isControl
              ? darkMode
                ? 'text-[#D4AF37]'
                : 'text-[#000000]'
              : darkMode
                ? 'text-[#666666]'
                : 'text-[#999999]'
          }`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Minimalist perfume bottle icon */}
            <rect x="9" y="10" width="6" height="10" rx="1" />
            <rect x="10" y="6" width="4" height="4" rx="0.5" />
            <line x1="10" y1="6" x2="10" y2="4" />
            <line x1="14" y1="6" x2="14" y2="4" />
            <line x1="10" y1="4" x2="14" y2="4" />
          </svg>
          <span className="text-[11px] font-medium mt-1.5">Intensity</span>
        </Link>

        {/* Journal Tab */}
        <Link
          to="/journal"
          className={`flex-1 flex flex-col items-center py-4 transition-colors ${
            isJournal
              ? darkMode
                ? 'text-[#D4AF37]'
                : 'text-[#000000]'
              : darkMode
                ? 'text-[#666666]'
                : 'text-[#999999]'
          }`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Elegant pen/feather icon */}
            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
          </svg>
          <span className="text-[11px] font-medium mt-1.5">Journal</span>
        </Link>
      </div>
    </div>
  );
}