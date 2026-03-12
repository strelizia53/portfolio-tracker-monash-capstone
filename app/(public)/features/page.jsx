export const metadata = {
  title: "Features",
};

const sections = [
  {
    title: "Portfolio dashboard",
    copy:
      "The home dashboard combines KPI summary cards, portfolio area charts, benchmark overlays, and transaction workflows in a single page.",
  },
  {
    title: "Holdings analytics",
    copy:
      "View your portfolio mix by security, currency, market, and type using activity-derived aggregation instead of separate spreadsheets.",
  },
  {
    title: "Admin controls",
    copy:
      "Admin users can manage user plans, grant admin access, delete accounts, and update system-wide defaults through protected routes.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
          Features
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-950 dark:text-white">
          Built for portfolio operations, not just charts.
        </h1>
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
          The application covers trade capture, benchmark comparison, broker management, reporting, and admin workflows inside one App Router codebase.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {sections.map((section) => (
          <article key={section.title} className="surface-card p-6">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">{section.title}</h2>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{section.copy}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
