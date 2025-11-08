import { useEffect, useState } from 'react';
import { Home, Calendar, User, Settings, Sun, Moon, MoreVertical, LogOut, ChevronDown, Search } from 'lucide-react';

function useTheme() {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined'
      ? localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : 'light'
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, setTheme };
}

export default function TopNav() {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40 border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-3">
        <div className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-100">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 shadow-sm" />
          <span className="hidden sm:block">Event Hub</span>
        </div>

        <div className="flex-1" />

        {/* Search (desktop) */}
        <div className="hidden md:flex items-center rounded-full bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 px-3 py-1.5 w-full max-w-md">
          <Search className="h-4 w-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Search events, categories, organisers..."
            className="bg-transparent outline-none px-2 text-sm w-full text-zinc-800 dark:text-zinc-100 placeholder:text-zinc-400"
          />
        </div>

        <div className="flex-1" />

        {/* Quick icons */}
        <nav className="hidden sm:flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
          <button className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <Home className="h-4 w-4" />
            <span className="hidden lg:block">Dashboard</span>
          </button>
          <button className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <Calendar className="h-4 w-4" />
            <span className="hidden lg:block">My Events</span>
          </button>
        </nav>

        {/* Theme toggle */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="ml-2 h-9 w-9 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="ml-2 inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 px-2 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            <img
              src="https://i.pravatar.cc/40?img=68"
              alt="avatar"
              className="h-7 w-7 rounded-full object-cover"
            />
            <span className="hidden sm:inline text-sm text-zinc-800 dark:text-zinc-100">You</span>
            <ChevronDown className="h-4 w-4 text-zinc-500" />
          </button>

          {menuOpen && (
            <div
              onMouseLeave={() => setMenuOpen(false)}
              className="absolute right-0 mt-2 w-56 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-lg overflow-hidden"
            >
              <div className="px-4 py-3 flex items-center gap-3">
                <img src="https://i.pravatar.cc/64?img=68" alt="avatar" className="h-10 w-10 rounded-full" />
                <div>
                  <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Alex Carter</p>
                  <p className="text-xs text-zinc-500">alex@example.com</p>
                </div>
              </div>
              <div className="h-px bg-zinc-200 dark:bg-zinc-800" />
              <button className="w-full px-4 py-2.5 text-left text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900 flex items-center gap-2 text-zinc-700 dark:text-zinc-200">
                <User className="h-4 w-4" /> Profile & Settings
              </button>
              <button className="w-full px-4 py-2.5 text-left text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900 flex items-center gap-2 text-zinc-700 dark:text-zinc-200">
                <Settings className="h-4 w-4" /> Preferences
              </button>
              <button className="w-full px-4 py-2.5 text-left text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900 flex items-center gap-2 text-rose-600">
                <LogOut className="h-4 w-4" /> Sign out
              </button>
            </div>
          )}
        </div>

        <button className="ml-1 sm:hidden h-9 w-9 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200">
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
