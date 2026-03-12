export const metadata = {
  title: "Pricing",
};

const plans = [
  {
    name: "Free",
    price: "$0",
    points: [
      "Single user workspace",
      "Portfolio dashboard and benchmark comparison",
      "Manual activity logging and CSV imports",
    ],
  },
  {
    name: "Premium",
    price: "$19",
    points: [
      "Expanded limits for accounts and reports",
      "Priority admin controls and premium plan tagging",
      "Ready for future tax and AI insight modules",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
          Pricing
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-950 dark:text-white">
          Start on the free tier and scale when the workflow does.
        </h1>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {plans.map((plan) => (
          <article key={plan.name} className="surface-card p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">{plan.name}</p>
            <p className="mt-4 text-4xl font-semibold text-slate-950 dark:text-white">
              {plan.price}
              <span className="text-base font-medium text-slate-500 dark:text-slate-400"> / month</span>
            </p>
            <div className="mt-6 grid gap-3 text-sm text-slate-600 dark:text-slate-300">
              {plan.points.map((point) => (
                <div key={point} className="rounded-2xl bg-slate-100/80 p-4 dark:bg-slate-800/80">
                  {point}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
