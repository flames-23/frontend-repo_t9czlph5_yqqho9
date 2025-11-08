import { Home, CalendarPlus, ClipboardList, User } from 'lucide-react';

export default function BottomNav() {
  return (
    <div className="fixed bottom-3 left-0 right-0 z-20 px-4 sm:hidden">
      <nav className="mx-auto max-w-md rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-950/90 backdrop-blur shadow-lg">
        <ul className="grid grid-cols-4">
          <li>
            <button className="w-full py-3 flex flex-col items-center text-[11px] text-zinc-600 dark:text-zinc-300">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </button>
          </li>
          <li>
            <button className="w-full py-3 flex flex-col items-center text-[11px] text-zinc-600 dark:text-zinc-300">
              <CalendarPlus className="h-5 w-5" />
              <span>Create</span>
            </button>
          </li>
          <li>
            <button className="w-full py-3 flex flex-col items-center text-[11px] text-zinc-600 dark:text-zinc-300">
              <ClipboardList className="h-5 w-5" />
              <span>My Events</span>
            </button>
          </li>
          <li>
            <button className="w-full py-3 flex flex-col items-center text-[11px] text-zinc-600 dark:text-zinc-300">
              <User className="h-5 w-5" />
              <span>Profile</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
