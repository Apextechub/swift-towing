/**
 * Reusable benefits / value-prop grid.
 *
 * Uses the exact card pattern from the services grid (white rounded-2xl,
 * shadow-sm → shadow-md on hover) so it stays inside the existing design
 * system. Shared by the homepage and every /services/<slug> page.
 *
 * @param {string}  eyebrow  - pill/badge text
 * @param {string}  title    - section heading
 * @param {string} [subtitle]
 * @param {{title:string,desc:string}[]} items
 * @param {string} [bg]      - section background class (default white)
 */
export default function ValueGrid({ eyebrow, title, subtitle, items, bg = "bg-white" }) {
  // Keep rows balanced: 4 items fit on one desktop row, 6 stay 3×2.
  const lgCols = items.length % 4 === 0 ? "lg:grid-cols-4" : "lg:grid-cols-3";

  return (
    <section className={`${bg} py-20 px-4`}>
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="bg-yellow-400 text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
            {eyebrow}
          </span>
          <h2 className="text-black text-3xl sm:text-4xl font-extrabold mt-4 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-500 mt-3 text-base max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Cards Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${lgCols} gap-8`}>
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex flex-col gap-3 group"
            >
              {/* Icon */}
              <div className="bg-yellow-400 rounded-xl w-12 h-12 flex items-center justify-center">
                <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-black text-xl font-bold group-hover:text-yellow-500 transition-colors duration-200">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
