import Link from "next/link";

export const metadata = {
  title: "NexaFlow Portfolio Tracker",
};

const featureList = [
  "Multi-broker portfolio tracking with Firebase-backed activity history",
  "Benchmark overlays for S&P 500, ASX 200, and NASDAQ 100",
  "CSV imports for major Australian broker export formats",
];

export default function LandingPage() {
  return (
    <div className="pb-16">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 py-16 md:px-6 lg:flex-row lg:items-center lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Portfolio intelligence
          </p>
          <h1 className="mt-5 text-5xl font-semibold leading-tight tracking-tight text-slate-950 dark:text-white">
            Replace fragmented spreadsheets with one deliberate portfolio workspace.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-500 dark:text-slate-400">
            NexaFlow Portfolio Tracker brings holdings, trades, benchmarks, and broker imports into a single Next.js and Firebase application designed for retail investors.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/signup" className="rounded-full bg-primary px-5 py-3 text-sm font-medium text-white">
              Create account
            </Link>
            <Link href="/features" className="rounded-full border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 dark:border-slate-700 dark:text-slate-200">
              Explore features
            </Link>
          </div>
        </div>

        <div className="surface-card w-full max-w-xl p-6 md:p-8">
          <div className="grid gap-4">
            {featureList.map((feature) => (
              <div key={feature} className="rounded-2xl bg-slate-100/80 p-4 text-sm text-slate-700 dark:bg-slate-800/80 dark:text-slate-200">
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-4 px-4 md:grid-cols-3 md:px-6">
        {[
          { title: "KPI summaries", copy: "Surface portfolio value, gains, dividends, and return percentage without manual formulas." },
          { title: "Benchmark comparison", copy: "Overlay your portfolio against major indices with demo fallbacks when live API quota is unavailable." },
          { title: "Import workflows", copy: "Map broker CSVs into a consistent activity schema and keep snapshots current automatically." },
        ].map((item) => (
          <article key={item.title} className="surface-card p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-primary">Included</p>
            <h2 className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">{item.title}</h2>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{item.copy}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
