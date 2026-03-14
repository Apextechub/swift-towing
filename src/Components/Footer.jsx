export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">

      {/* Top CTA Strip */}
      <div className="bg-yellow-400 py-5 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-black font-extrabold text-lg">
            Stuck on the road? Call us — we're ready 24/7.
          </p>
          <a
            href="tel:+19045218220"
            className="bg-black hover:bg-zinc-800 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all duration-200 flex items-center gap-2 whitespace-nowrap"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
            +1 (904) 521-8220
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-row flex-wrap items-start justify-between gap-8">

        {/* Brand */}
        <div className="flex flex-col gap-3">
          <a href="#home" className="flex items-center gap-3">
            <div className="bg-yellow-400 rounded-lg p-2">
              <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-.5 1.5l1.96 2.5H17V9.5h2.5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm13.5-1c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1z" />
              </svg>
            </div>
            <div className="leading-tight">
              <div className="text-black font-bold text-sm">24/7 Swift Towing</div>
              <div className="text-yellow-500 text-xs font-semibold tracking-widest uppercase">FL (Tampa)</div>
            </div>
          </a>
          <p className="text-gray-400 text-xs max-w-xs leading-relaxed">
            Tampa's trusted 24/7 towing & roadside assistance. Fast pickup, real-time ETA updates, light & heavy duty towing.
          </p>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col gap-2">
          <h4 className="text-black font-bold text-xs uppercase tracking-widest mb-1">Navigation</h4>
          {["Home", "About Us", "Services", "Get a Quote"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              className="text-gray-500 hover:text-yellow-500 text-sm transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Services */}
        <div className="flex flex-col gap-2">
          <h4 className="text-black font-bold text-xs uppercase tracking-widest mb-1">Services</h4>
          {["Towing", "Jumpstart", "Tire Change", "Lockout Service", "Fuel & Gas Delivery", "Winch-Out Service"].map((s) => (
            <a
              key={s}
              href="#services"
              className="text-gray-500 hover:text-yellow-500 text-sm transition-colors duration-200"
            >
              {s}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-2">
          <h4 className="text-black font-bold text-xs uppercase tracking-widest mb-1">Contact</h4>
          <a href="tel:+19045218220" className="text-gray-500 hover:text-yellow-500 text-sm transition-colors">
            +1 (904) 521-8220
          </a>
          <span className="text-gray-500 text-sm">Tampa, FL</span>
          <span className="text-gray-500 text-sm">Available 24/7</span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100 py-4 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-xs text-gray-400">
          <p>© {currentYear} 24/7 Swift Towing FL (Tampa). All rights reserved.</p>
          <p>Towing near me • Jumpstart near me • Flat tire • Locked out of car</p>
        </div>
      </div>

    </footer>
  );
}