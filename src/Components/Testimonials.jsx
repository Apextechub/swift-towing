import { TESTIMONIALS } from "../config";

/**
 * Testimonials section — same card pattern / tokens as the rest of the site.
 * Shared by the homepage and every /services/<slug> page.
 */
export default function Testimonials({ bg = "bg-gray-50" }) {
  return (
    <section className={`${bg} py-20 px-4`}>
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="bg-yellow-400 text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
            What Drivers Say
          </span>
          <h2 className="text-black text-3xl sm:text-4xl font-extrabold mt-4 tracking-tight">
            Trusted by Drivers Across Tampa
          </h2>
          <p className="text-gray-500 mt-3 text-base max-w-xl mx-auto">
            Real people, real roadside saves — fast pickup and honest pricing,
            every time.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed">
                “{t.quote}”
              </p>

              {/* Author */}
              <div className="mt-auto">
                <div className="text-black text-sm font-bold">{t.name}</div>
                <div className="text-gray-500 text-xs">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
