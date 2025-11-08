import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[420px] sm:h-[520px] md:h-[580px] overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white dark:via-black/30 dark:to-black" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-black/50 backdrop-blur px-3 py-1 text-xs text-zinc-700 dark:text-zinc-300 mb-3">
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />
          Modern event management platform
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Discover, create and manage events with elegance
        </h1>
        <p className="mt-3 max-w-2xl text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
          Role-based controls for organisers and participants, streamlined registrations, attendance, and exports.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button className="rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white px-5 py-2.5 text-sm shadow hover:brightness-110">
            Create Event
          </button>
          <button className="rounded-full border border-zinc-300 dark:border-zinc-700 px-5 py-2.5 text-sm text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800">
            Browse Events
          </button>
        </div>
      </motion.div>
    </section>
  );
}
