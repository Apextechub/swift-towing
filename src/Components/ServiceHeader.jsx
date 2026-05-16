import { Link } from "react-router-dom";
import { PHONE, TEL_HREF, reportCallConversion } from "../config";

/**
 * Light, centered page header for /services/<slug> pages.
 *
 * Deliberately NOT the homepage hero: no full-screen section, no background
 * image — just a subtle light gradient from the existing palette so the page
 * works cleanly as a Google Ads destination.
 *
 * "Back to Home" is pinned to the far left of a full-width container; the
 * rest of the header content is centered within a max-w-5xl block.
 */
export default function ServiceHeader({ eyebrow, headline, intro }) {
  return (
    <header className="bg-gradient-to-b from-gray-50 via-white to-white border-b border-gray-100">

      {/* Full-width row — Back link pinned far left */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-yellow-600 transition-colors duration-200 min-h-[48px]"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </div>

      {/* Centered content */}
      <div className="max-w-5xl mx-auto px-4 pt-6 pb-16 text-center flex flex-col items-center gap-5">
        <span className="bg-yellow-400 text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
          {eyebrow}
        </span>

        <h1 className="text-black text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
          {headline}
        </h1>

        <p className="text-gray-500 text-base sm:text-lg max-w-2xl leading-relaxed">
          {intro}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <a
            href="#contact"
            className="bg-yellow-400 hover:bg-yellow-300 active:scale-95 text-black font-bold text-base px-8 py-3.5 min-h-[48px] rounded-xl transition-all duration-200 flex items-center gap-2 shadow-lg shadow-yellow-400/20"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            Get a Free Quote
          </a>
          <a
            href={TEL_HREF}
            onClick={reportCallConversion}
            className="border border-yellow-500 text-yellow-600 hover:bg-yellow-400 hover:text-black font-bold text-base px-8 py-3.5 min-h-[48px] rounded-xl transition-all duration-200 flex items-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
            Call Now — {PHONE.display}
          </a>
        </div>
      </div>
    </header>
  );
}
