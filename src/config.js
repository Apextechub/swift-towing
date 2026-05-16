// ---------------------------------------------------------------------------
// Centralized site config — single source of truth.
// Change the phone number, business details, or services here ONCE and every
// component (Navbar, Hero, cards, footer, service pages, quote form) updates.
// ---------------------------------------------------------------------------

export const PHONE = {
  // Raw, dial-able number — used ONLY in tel: hrefs. Do not reformat.
  dial: "+18634745318",
  // Display string — country code bracketed: (+1) 863 474 5318
  display: "(+1) 863 474 5318",
};

// Convenience: tel: href value
export const TEL_HREF = `tel:${PHONE.dial}`;

// Fire the Google Ads conversion (defined in index.html) on call clicks.
export const reportCallConversion = () =>
  typeof window !== "undefined" &&
  window.gtag_report_conversion &&
  window.gtag_report_conversion();

export const BUSINESS = {
  name: "24/7 Swift Towing",
  region: "FL (Tampa)",
  city: "Tampa, FL",
  tagline: "Tampa, FL — Available 24/7",
};

// General trust/value props — reused by the homepage ValueGrid.
export const VALUE_PROPS = [
  {
    title: "Available 24/7",
    desc: "Day or night, weekends and holidays — someone is always ready to roll out to you across Tampa, FL.",
  },
  {
    title: "Fast Pickup & Live ETA",
    desc: "We dispatch the nearest truck and keep you updated with real-time ETA so you're never left guessing.",
  },
  {
    title: "Light & Heavy Duty",
    desc: "From sedans and motorcycles to trucks and commercial vehicles — the right equipment for every job.",
  },
  {
    title: "Upfront Pricing",
    desc: "Clear quotes before we start. No surprise add-ons once we're on the road or at your location.",
  },
  {
    title: "Friendly Local Crew",
    desc: "A professional, courteous Tampa-based team that treats you and your vehicle with care.",
  },
  {
    title: "Every Roadside Need",
    desc: "Towing, jump-starts, tire changes, lockouts, fuel delivery and winch-outs — one call covers it.",
  },
];

// Testimonials — reused on the homepage and every service page.
export const TESTIMONIALS = [
  {
    name: "Marcus T.",
    location: "Tampa, FL",
    quote:
      "Battery died in a parking lot at 11pm. They had me running again in under 25 minutes. Total lifesavers.",
  },
  {
    name: "Priya S.",
    location: "Brandon, FL",
    quote:
      "Flat tire on the interstate with my kids in the car. Friendly, fast, and the price was exactly what they quoted.",
  },
  {
    name: "Dwayne R.",
    location: "Riverview, FL",
    quote:
      "Got my truck winched out of a muddy ditch without a scratch. Professional crew — I'd call them again in a heartbeat.",
  },
];

// ---------------------------------------------------------------------------
// Services — single source of truth for cards, navbar dropdown, footer links,
// the quote form select, and the dedicated /services/<slug> landing pages.
// ---------------------------------------------------------------------------
export const SERVICES = [
  {
    slug: "towing-service",
    label: "Towing",
    // WebP in markup; original .jpg/.png kept in /public/assets as backup.
    img: "/assets/car-towed.webp",
    imgW: 800,
    imgH: 534,
    keywords: "Towing near me • Need a tow ASAP",
    description:
      "Light & heavy duty towing available 24/7. Fast pickup guaranteed with real-time ETA updates. Need a tow ASAP? We've got you covered anywhere in Tampa, FL.",
    headline: "24/7 Towing Service in Tampa, FL",
    intro:
      "Broken down, in an accident, or just need your vehicle moved? Our licensed operators handle light and heavy duty towing around the clock with fast pickup and real-time ETA updates — so you're never stranded for long.",
    benefits: [
      { title: "Light & Heavy Duty", desc: "Flatbed and wheel-lift trucks for everything from sedans to commercial vehicles." },
      { title: "Damage-Free Transport", desc: "Proper securing and equipment so your vehicle arrives exactly as it left." },
      { title: "Fast Dispatch", desc: "The nearest available truck is sent immediately with live ETA tracking." },
      { title: "Anywhere in Tampa", desc: "Roadside, driveway, parking garage or interstate — we come to you 24/7." },
    ],
  },
  {
    slug: "jump-start-service",
    label: "Jumpstart",
    img: "/assets/Jump-start.webp",
    imgW: 600,
    imgH: 400,
    keywords: "Jumpstart near me • Dead battery",
    description:
      "Dead battery? Our team will be at your location fast to get you back on the road with a professional jumpstart service.",
    headline: "Jump-Start Service in Tampa, FL",
    intro:
      "A dead battery shouldn't wreck your day. We arrive quickly with professional equipment to safely jump-start your vehicle and get you moving again — and we'll let you know if your battery needs more attention.",
    benefits: [
      { title: "Safe & Professional", desc: "Proper gear and procedure that protects your vehicle's electronics." },
      { title: "Fast Arrival", desc: "We prioritize jump-starts so you're not stuck waiting on the roadside." },
      { title: "Battery Health Check", desc: "Quick advice on whether your battery or alternator needs a closer look." },
      { title: "Available 24/7", desc: "Cold mornings or late nights — we're ready whenever it happens." },
    ],
  },
  {
    slug: "tire-change-service",
    label: "Tire Change",
    img: "/assets/tires-changing.webp",
    imgW: 800,
    imgH: 450,
    keywords: "Tire change service near me • Flat tire",
    description:
      "Flat tire on the road? We provide fast, professional tire change service so you don't have to wait long on the roadside.",
    headline: "Flat Tire Change Service in Tampa, FL",
    intro:
      "Flat tire on the road or in a lot? Skip the jack and the guesswork. Our team swaps your flat for your spare quickly and safely so you can get back on your way with confidence.",
    benefits: [
      { title: "Spare Installed Safely", desc: "Correct torque and placement so your spare is road-ready." },
      { title: "Roadside or Driveway", desc: "We come to wherever you and your vehicle are, day or night." },
      { title: "No Equipment Needed", desc: "We bring the tools — no need to dig out your jack in traffic." },
      { title: "Tow Backup Available", desc: "No usable spare? We can tow you to a shop in the same visit." },
    ],
  },
  {
    slug: "lockout-service",
    label: "Lockout Service",
    img: "/assets/Lock-out-Service.webp",
    imgW: 750,
    imgH: 400,
    keywords: "Locked out of car • Car lockout near me",
    description:
      "Locked out of your car? Our lockout specialists will reach you quickly and get you back inside your vehicle safely.",
    headline: "Car Lockout Service in Tampa, FL",
    intro:
      "Keys locked inside? Don't risk damaging your vehicle. Our lockout specialists use professional tools to get you back inside quickly and safely — no broken windows, no drama.",
    benefits: [
      { title: "Damage-Free Entry", desc: "Specialized tools that open your door without harming the vehicle." },
      { title: "Fast Response", desc: "We treat lockouts as urgent — especially with kids or pets inside." },
      { title: "Most Vehicles Covered", desc: "Cars, trucks, and vans of nearly every make and model." },
      { title: "Around the Clock", desc: "Locked out at 2am? We answer and roll out 24/7." },
    ],
  },
  {
    slug: "fuel-delivery",
    label: "Fuel & Gas Delivery",
    img: "/assets/fuel-delivery.webp",
    imgW: 800,
    imgH: 533,
    keywords: "Fuel delivery near me • Out of gas",
    description:
      "Ran out of gas? We'll deliver fuel directly to your location so you can get moving again without the hassle.",
    headline: "Emergency Fuel Delivery in Tampa, FL",
    intro:
      "Ran out of gas? No need to walk to a station with a can in hand. We bring fuel directly to your location so you can get back on the road without the hassle.",
    benefits: [
      { title: "Brought To You", desc: "We deliver enough fuel to get you safely to the nearest station." },
      { title: "Gas or Diesel", desc: "The correct fuel for your vehicle, handled safely on arrival." },
      { title: "Quick Turnaround", desc: "Fast dispatch so you're not waiting on the shoulder for long." },
      { title: "24/7 Coverage", desc: "Anytime, anywhere in Tampa, FL — just call." },
    ],
  },
  {
    slug: "winch-out-service",
    label: "Winch-Out Service",
    img: "/assets/winching.webp",
    imgW: 800,
    imgH: 419,
    keywords: "Winch-out service • Stuck vehicle recovery",
    description:
      "Stuck in mud, a ditch, or off-road? Our winch-out service will extract your vehicle safely and efficiently.",
    headline: "Winch-Out & Recovery Service in Tampa, FL",
    intro:
      "Stuck in mud, sand, a ditch, or off the road? Our recovery equipment and experienced operators safely winch your vehicle out without causing further damage.",
    benefits: [
      { title: "Safe Extraction", desc: "Proper rigging and technique to recover your vehicle damage-free." },
      { title: "Any Terrain", desc: "Mud, sand, ditches, and soft shoulders — we have the gear for it." },
      { title: "Experienced Operators", desc: "Recovery done right the first time, without guesswork." },
      { title: "Tow-Ready", desc: "We can tow on the spot if your vehicle isn't drivable after recovery." },
    ],
  },
];

// Quick lookup by slug for the service pages.
export const getServiceBySlug = (slug) =>
  SERVICES.find((s) => s.slug === slug);

// Vehicle types for the quote form select.
export const VEHICLE_TYPES = [
  "Sedan",
  "SUV / Crossover",
  "Truck",
  "Van / Minivan",
  "Motorcycle",
  "Heavy Duty / Commercial",
  "Other",
];
