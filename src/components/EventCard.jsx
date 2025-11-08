import { Users, Calendar, MapPin, Crown } from 'lucide-react';

export default function EventCard({ title, date, location, organiser, spots }) {
  return (
    <div className="group relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4 hover:shadow-md transition-shadow">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/0 to-blue-500/0 group-hover:from-violet-500/10 group-hover:to-blue-500/10" />
      <div className="relative">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{title}</h3>
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 px-2 py-0.5 text-xs">
            <Crown className="h-3.5 w-3.5" /> Pro
          </span>
        </div>
        <div className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
          <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {date}</div>
          <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {location}</div>
          <div className="flex items-center gap-2"><Users className="h-4 w-4" /> {spots === Infinity ? 'Unlimited seats' : `${spots} spots`}</div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 text-xs text-zinc-500">
            <img src={`https://i.pravatar.cc/100?u=${encodeURIComponent(organiser)}`} alt="org" className="h-6 w-6 rounded-full" />
            <span>by {organiser}</span>
          </div>
          <button className="rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-4 py-1.5 text-xs font-medium hover:opacity-90">Register</button>
        </div>
      </div>
    </div>
  );
}
