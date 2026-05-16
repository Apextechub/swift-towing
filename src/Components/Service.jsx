import { Link } from "react-router-dom";
import { SERVICES, TEL_HREF, PHONE, reportCallConversion } from "../config";

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="bg-yellow-400 text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="text-black text-3xl sm:text-4xl font-extrabold mt-4 tracking-tight">
            Our Towing & Roadside Services
          </h2>
          <p className="text-gray-500 mt-3 text-base max-w-xl mx-auto">
            Available 24/7 across Tampa, FL — fast pickup, real-time ETA
            updates, and both light & heavy duty towing.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              {/* Image — links to the dedicated service page */}
              <Link
                to={`/services/${service.slug}`}
                className="block w-full h-52 overflow-hidden bg-gray-200 flex items-center justify-center"
              >
                <img
                  src={service.img}
                  alt={service.label}
                  width={service.imgW}
                  height={service.imgH}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                {/* Fallback */}
                <div className="hidden w-full h-full items-center justify-center bg-zinc-100">
                  <svg className="w-12 h-12 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z" />
                  </svg>
                </div>
              </Link>

              {/* Card Body */}
              <div className="p-6 flex flex-col gap-3">
                {/* Keywords badge */}
                <span className="text-xs text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full font-semibold w-fit">
                  {service.keywords}
                </span>

                {/* Title */}
                <Link to={`/services/${service.slug}`}>
                  <h3 className="text-black text-xl font-bold group-hover:text-yellow-500 transition-colors duration-200">
                    {service.label}
                  </h3>
                </Link>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* CTAs */}
                <div className="mt-2 flex flex-wrap items-center gap-4">
                  <a
                    href={TEL_HREF}
                    onClick={reportCallConversion}
                    className="inline-flex items-center gap-2 text-sm font-bold text-yellow-500 hover:text-yellow-600 transition-colors duration-200 min-h-[48px]"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                    </svg>
                    Call {PHONE.display}
                  </a>
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-bold text-black hover:text-yellow-600 transition-colors duration-200 min-h-[48px]"
                  >
                    Learn more
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-500 text-sm mb-4">
            Not sure what you need? Contact us and we'll help right away.
          </p>
          <a
            href="#contact"
            className="bg-yellow-400 hover:bg-yellow-300 active:scale-95 text-black font-bold text-base px-8 py-3.5 min-h-[48px] rounded-xl transition-all duration-200 inline-flex items-center gap-2 shadow-md shadow-yellow-400/20"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
