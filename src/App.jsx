import TopNav from './components/TopNav';
import Hero from './components/Hero';
import EventCard from './components/EventCard';
import BottomNav from './components/BottomNav';

const sampleEvents = [
  {
    title: 'HackSprint 2025',
    date: 'Sat, Jan 18 · 10:00 AM',
    location: 'Innovation Hub, Block C',
    organiser: 'Tech Club',
    spots: 120,
  },
  {
    title: 'Design Systems Workshop',
    date: 'Sun, Jan 26 · 11:30 AM',
    location: 'Studio Lab 2',
    organiser: 'UX Guild',
    spots: 45,
  },
  {
    title: 'AI in Education Summit',
    date: 'Fri, Feb 7 · 9:00 AM',
    location: 'Auditorium',
    organiser: 'Academics Council',
    spots: Infinity,
  },
  {
    title: 'Community Open Mic Night',
    date: 'Sat, Feb 15 · 6:00 PM',
    location: 'Courtyard',
    organiser: 'Cultural Board',
    spots: 200,
  },
];

function SectionHeader({ title, subtitle, action }) {
  return (
    <div className="flex items-end justify-between gap-3">
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{title}</h2>
        {subtitle && (
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{subtitle}</p>
        )}
      </div>
      {action}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <TopNav />

      <main className="mx-auto max-w-6xl px-4 pb-24">
        <div className="py-6">
          <Hero />
        </div>

        <section className="py-8">
          <SectionHeader
            title="Discover Events"
            subtitle="Browse trending happenings across campus and beyond"
            action={
              <button className="rounded-full border border-zinc-200 dark:border-zinc-800 px-4 py-2 text-sm text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900">
                View all
              </button>
            }
          />

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sampleEvents.map((e) => (
              <EventCard key={e.title} {...e} />
            ))}
          </div>
        </section>

        <section className="py-8">
          <SectionHeader
            title="Your Space"
            subtitle="Quick links to manage your events and registrations"
          />
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 bg-white dark:bg-zinc-950">
              <p className="text-sm text-zinc-600 dark:text-zinc-300">Create and manage events you host. Set capacity, collect registrations, mark attendance, and export to Excel.</p>
              <button className="mt-4 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white px-4 py-2 text-sm">Create Event</button>
            </div>
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 bg-white dark:bg-zinc-950">
              <p className="text-sm text-zinc-600 dark:text-zinc-300">See participants, their roll numbers and emails, and manage check-ins during the event.</p>
              <button className="mt-4 rounded-full border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm text-zinc-800 dark:text-zinc-200">My Created Events</button>
            </div>
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 bg-white dark:bg-zinc-950">
              <p className="text-sm text-zinc-600 dark:text-zinc-300">Access all events you registered for, with quick QR and check-in status.</p>
              <button className="mt-4 rounded-full border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm text-zinc-800 dark:text-zinc-200">My Registrations</button>
            </div>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
