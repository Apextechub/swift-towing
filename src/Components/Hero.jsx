export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black flex flex-col items-center justify-center px-4 py-20 overflow-hidden"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black z-0" />

      {/* Background image placeholder — replace src with your actual hero image */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-20 z-0"
        style={{ backgroundImage: "url('/assets/car-towed.webp')" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-6">

        {/* Badge */}
        <span className="bg-yellow-400 text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
          Tampa, FL — Available 24/7
        </span>

        {/* Headline */}
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Fast & Reliable{" "}
          <span className="text-yellow-400">Towing Services</span>{" "}
          in Tampa, FL
        </h1>

        {/* Subheadline */}
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed">
           Towing near me • Jumpstart near me • Locked out of car • Tire
          change service near me • Flat tire • Need a tow ASAP •
          Emergency towing Tampa
        </p>

     
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <a
            href="#contact"
            className="bg-yellow-400 hover:bg-yellow-300 active:scale-95 text-black font-bold text-base px-8 py-3.5 rounded-xl transition-all duration-200 flex items-center gap-2 shadow-lg shadow-yellow-400/20"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            Get a Quote
          </a>
          <a
            href="tel:+19045218220"
            className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold text-base px-8 py-3.5 rounded-xl transition-all duration-200 flex items-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
            Call Now — +1 (904) 521-8220
          </a>
        </div>

        {/* Trust badges */}
       
      </div>
    </section>
  );
}