import Link from "next/link";

export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur dark:border-slate-700/70 dark:bg-slate-950/80">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-white">
              NF
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">NexaFlow</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Portfolio Tracker</p>
            </div>
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="/features" className="text-slate-600 dark:text-slate-300">
              Features
            </Link>
            <Link href="/pricing" className="text-slate-600 dark:text-slate-300">
              Pricing
            </Link>
            <Link href="/login" className="rounded-full bg-slate-950 px-4 py-2 font-medium text-white dark:bg-white dark:text-slate-950">
              Sign in
            </Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
