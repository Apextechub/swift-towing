import { PHONE, TEL_HREF, reportCallConversion } from "../config";

/**
 * Prominent call-to-action band. Plain palette background (no image),
 * consistent with the dark sections used elsewhere on the site.
 */
export default function CallCTA() {
  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
        <h2 className="text-white text-3xl sm:text-4xl font-extrabold tracking-tight">
          Need help right now?
        </h2>
        <p className="text-gray-400 text-base max-w-md">
          We're available 24/7 across Tampa, FL with fast pickup and real-time
          ETA updates. One call and we're on the way.
        </p>
        <a
          href={TEL_HREF}
          onClick={reportCallConversion}
          className="bg-yellow-400 hover:bg-yellow-300 active:scale-95 text-black font-bold text-base px-8 py-4 min-h-[48px] rounded-xl transition-all duration-200 flex items-center gap-2 shadow-lg shadow-yellow-400/20"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
          </svg>
          Call {PHONE.display}
        </a>
      </div>
    </section>
  );
}
