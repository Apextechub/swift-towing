import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SERVICES, PHONE, TEL_HREF, BUSINESS, reportCallConversion } from "../config";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenus = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
    setDesktopServicesOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-yellow-400 text-black text-xs sm:text-sm py-2 px-4 flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-0">
        <span className="font-semibold tracking-wide">
          ⚡ Fast Pickup • Real-Time ETA Updates • Light & Heavy Duty Towing
        </span>
        <a
          href={TEL_HREF}
          onClick={reportCallConversion}
          className="font-bold hover:underline flex items-center gap-1 min-h-[48px] sm:min-h-0"
        >
          📞 {PHONE.display}
        </a>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 bg-black transition-all duration-300 ${
          scrolled ? "shadow-lg shadow-yellow-400/10" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link to="/" onClick={closeMenus} className="flex items-center gap-3 group">
              <div className="bg-yellow-400 rounded-lg p-2 group-hover:bg-yellow-300 transition-colors duration-200">
                <svg
                  className="w-6 h-6 text-black"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-.5 1.5l1.96 2.5H17V9.5h2.5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm13.5-1c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1z" />
                </svg>
              </div>
              <div className="leading-tight">
                <div className="text-white font-bold text-base md:text-lg tracking-tight">
                  {BUSINESS.name}
                </div>
                <div className="text-yellow-400 text-xs font-semibold tracking-widest uppercase">
                  {BUSINESS.region}
                </div>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to={{ pathname: "/", hash: "#home" }}
                className="text-gray-300 hover:text-yellow-400 text-sm font-medium transition-colors duration-200 relative group inline-flex items-center min-h-[48px]"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-200" />
              </Link>

              <Link
                to={{ pathname: "/", hash: "#about" }}
                className="text-gray-300 hover:text-yellow-400 text-sm font-medium transition-colors duration-200 relative group inline-flex items-center min-h-[48px]"
              >
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-200" />
              </Link>

              {/* Services dropdown — opens on hover AND keyboard focus,
                  and closes on selection / when focus leaves. The pt-3
                  wrapper is a transparent hover bridge so moving the
                  cursor from the trigger to the panel never flickers. */}
              <div
                className="relative"
                onMouseEnter={() => setDesktopServicesOpen(true)}
                onMouseLeave={() => setDesktopServicesOpen(false)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    setDesktopServicesOpen(false);
                  }
                }}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={desktopServicesOpen}
                  onFocus={() => setDesktopServicesOpen(true)}
                  className="text-gray-300 hover:text-yellow-400 text-sm font-medium transition-colors duration-200 inline-flex items-center gap-1 min-h-[48px] cursor-pointer"
                >
                  Services
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${desktopServicesOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 w-64 z-50 transition-all duration-200 ${
                    desktopServicesOpen
                      ? "visible opacity-100 translate-y-0"
                      : "invisible opacity-0 translate-y-1"
                  }`}
                >
                  <div className="bg-black border border-zinc-800 rounded-xl shadow-lg shadow-yellow-400/10 p-2 flex flex-col">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        onClick={closeMenus}
                        className="text-gray-300 hover:text-yellow-400 hover:bg-zinc-900 rounded-lg px-4 py-3 min-h-[48px] flex items-center text-sm font-medium transition-colors duration-200"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                to={{ pathname: "/", hash: "#contact" }}
                className="text-gray-300 hover:text-yellow-400 text-sm font-medium transition-colors duration-200 relative group inline-flex items-center min-h-[48px]"
              >
                Contact Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-200" />
              </Link>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={TEL_HREF}
                onClick={reportCallConversion}
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-sm px-5 py-2.5 min-h-[48px] rounded-lg transition-all duration-200 flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
                Call Now
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-yellow-400 transition-colors p-2 min-h-[48px] min-w-[48px] flex items-center justify-center"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-zinc-900 border-t border-zinc-800 overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-4 flex flex-col gap-1">
            {/* Home */}
            <Link
              to={{ pathname: "/", hash: "#home" }}
              onClick={closeMenus}
              className="text-gray-300 hover:text-yellow-400 hover:bg-zinc-800 px-4 py-3 min-h-[48px] flex items-center rounded-lg text-sm font-medium transition-all duration-200"
            >
              Home
            </Link>

            {/* About */}
            <Link
              to={{ pathname: "/", hash: "#about" }}
              onClick={closeMenus}
              className="text-gray-300 hover:text-yellow-400 hover:bg-zinc-800 px-4 py-3 min-h-[48px] flex items-center rounded-lg text-sm font-medium transition-all duration-200"
            >
              About Us
            </Link>

            {/* Services accordion */}
            <button
              type="button"
              onClick={() => setMobileServicesOpen((v) => !v)}
              aria-expanded={mobileServicesOpen}
              className="text-gray-300 hover:text-yellow-400 hover:bg-zinc-800 px-4 py-3 min-h-[48px] flex items-center justify-between rounded-lg text-sm font-medium transition-all duration-200 w-full"
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                mobileServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-col gap-1 pl-3 border-l border-zinc-800 ml-4">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    onClick={closeMenus}
                    className="text-gray-400 hover:text-yellow-400 hover:bg-zinc-800 px-4 py-3 min-h-[48px] flex items-center rounded-lg text-sm font-medium transition-all duration-200"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <Link
              to={{ pathname: "/", hash: "#contact" }}
              onClick={closeMenus}
              className="text-gray-300 hover:text-yellow-400 hover:bg-zinc-800 px-4 py-3 min-h-[48px] flex items-center rounded-lg text-sm font-medium transition-all duration-200"
            >
              Contact Us
            </Link>

            <a
              href={TEL_HREF}
              onClick={reportCallConversion}
              className="mt-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-sm px-4 py-3 min-h-[48px] rounded-lg text-center transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              Call Now — {PHONE.display}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
