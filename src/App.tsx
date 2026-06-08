const phoneNumber: string = '9095443430'
const whatsappHref = phoneNumber
  ? `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(
      'Hello Jaya Enterprises, I would like to book an appliance service.',
    )}`
  : '#contact'
const callHref = phoneNumber ? `tel:${phoneNumber}` : '#contact'

const services = [
  {
    title: 'AC Service',
    text: 'Complete air conditioner care for homes and small businesses.',
    items: ['Installation', 'Gas Refilling', 'Maintenance', 'Repair'],
    image:
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Fridge Service',
    text: 'Reliable refrigerator diagnosis, cooling restoration and upkeep.',
    items: ['Cooling Issues', 'Compressor Repair', 'Gas Charging', 'General Maintenance'],
    image:
      'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Washing Machine Service',
    text: 'Doorstep washing machine repair for automatic and semi-automatic models.',
    items: ['Fully Automatic Repair', 'Semi-Automatic Repair', 'Drum Cleaning', 'Spare Parts Replacement'],
    image:
      'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=900&q=80',
  },
]

const benefits = [
  'Experienced Technicians',
  'Affordable Pricing',
  'Quick Response',
  'Genuine Spare Parts',
  'Customer Satisfaction',
  'Service at Your Doorstep',
]

const locations = ['Villupuram', 'Pondicherry (Puducherry)', 'Ulundurpettai', 'Kallakkurichi']

const testimonials = [
  {
    name: 'R. Kumar',
    place: 'Villupuram',
    quote: 'Quick AC service, clear pricing and neat work. The technician explained the issue before repairing.',
  },
  {
    name: 'Priya S.',
    place: 'Pondicherry',
    quote: 'Our fridge cooling problem was fixed the same day. Professional and dependable service.',
  },
  {
    name: 'Arun M.',
    place: 'Ulundurpettai',
    quote: 'Booked washing machine repair at home. The response was fast and the replacement part was genuine.',
  },
]

function CheckIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-jaya-orange" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.55 7.62a1 1 0 0 1-1.42.002L3.29 9.826a1 1 0 1 1 1.42-1.406l3.74 3.782 6.84-6.906a1 1 0 0 1 1.414-.006Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16.01 3.2c-7.02 0-12.74 5.64-12.74 12.58 0 2.22.6 4.39 1.73 6.3L3.18 28.8l6.94-1.78a12.88 12.88 0 0 0 5.89 1.45c7.02 0 12.73-5.64 12.73-12.58S23.03 3.2 16.01 3.2Zm0 22.98c-1.86 0-3.69-.5-5.28-1.44l-.38-.22-4.12 1.06 1.1-3.96-.25-.41a10.12 10.12 0 0 1-1.55-5.43c0-5.68 4.7-10.3 10.48-10.3s10.47 4.62 10.47 10.3-4.7 10.4-10.47 10.4Zm5.74-7.7c-.31-.16-1.86-.91-2.15-1.01-.29-.11-.5-.16-.71.15-.21.31-.82 1.01-1 1.22-.18.21-.37.23-.68.08-.31-.16-1.32-.48-2.52-1.53-.93-.82-1.56-1.84-1.74-2.15-.18-.31-.02-.48.14-.63.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.69-.97-2.32-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.06-1.1 2.6s1.13 3.02 1.29 3.23c.16.21 2.22 3.35 5.39 4.7.75.32 1.34.51 1.8.65.76.24 1.45.21 1.99.13.61-.09 1.86-.75 2.12-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  )
}

function App() {
  return (
    <main className="bg-white">
      <header className="sticky top-0 z-40 border-b border-blue-100 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="Jaya Enterprises home">
            <span className="grid h-11 w-11 place-items-center rounded-md bg-jaya-blue text-lg font-black text-white">
              JE
            </span>
            <span>
              <span className="block text-lg font-extrabold leading-tight text-jaya-navy">Jaya Enterprises</span>
              <span className="block text-xs font-semibold uppercase tracking-wide text-jaya-orange">
                Trusted Appliance Service Experts
              </span>
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-semibold text-slate-700 md:flex">
            <a className="hover:text-jaya-blue" href="#services">Services</a>
            <a className="hover:text-jaya-blue" href="#areas">Service Areas</a>
            <a className="hover:text-jaya-blue" href="#contact">Contact</a>
            <a
              href="#booking"
              className="rounded-md bg-jaya-orange px-4 py-2.5 text-white shadow-sm transition hover:bg-orange-600"
            >
              Book Service
            </a>
          </div>
        </nav>
      </header>

      <section id="home" className="relative overflow-hidden bg-jaya-navy">
        <img
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1800&q=80"
          alt="Technician servicing a home appliance"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-jaya-navy via-jaya-navy/85 to-jaya-blue/45" />
        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="max-w-3xl pt-10 text-white">
            <p className="mb-4 inline-flex rounded-md bg-white/12 px-3 py-1 text-sm font-bold text-orange-100 ring-1 ring-white/20">
              Trusted Appliance Service Experts for Your Home.
            </p>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Expert AC, Fridge & Washing Machine Service in Villupuram & Pondicherry
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-50 sm:text-xl">
              Fast, Reliable & Affordable Home Appliance Repair Services
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#booking"
                className="rounded-md bg-jaya-orange px-6 py-3.5 text-center font-bold text-white shadow-lg shadow-orange-950/20 transition hover:bg-orange-600"
              >
                Book Service
              </a>
              <a
                href={callHref}
                className="rounded-md bg-white px-6 py-3.5 text-center font-bold text-jaya-blue transition hover:bg-blue-50"
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="rounded-md bg-white/95 p-5 shadow-2xl ring-1 ring-white/30">
            <div className="grid grid-cols-3 gap-3 text-center">
              {['AC', 'Fridge', 'Washer'].map((item) => (
                <div key={item} className="rounded-md bg-jaya-sky px-3 py-5">
                  <p className="text-2xl font-black text-jaya-blue">{item}</p>
                  <p className="mt-1 text-xs font-semibold text-slate-600">Service & Repair</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-md border border-blue-100 p-5">
              <p className="text-sm font-bold uppercase tracking-wide text-jaya-orange">Doorstep support</p>
              <p className="mt-2 text-2xl font-black text-jaya-navy">Villupuram, Pondicherry and nearby areas</p>
              <p className="mt-3 text-slate-600">
                Booking, inspection, maintenance and repair support handled by trained technicians.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-jaya-orange">About Us</p>
            <h2 className="mt-3 text-3xl font-black text-jaya-navy sm:text-4xl">Professional appliance care, close to home.</h2>
          </div>
          <div className="text-lg leading-8 text-slate-650">
            <p>
              Led by M. Manikandan, Jaya Enterprises provides professional appliance repair and maintenance services
              with a commitment to customer satisfaction.
            </p>
            <p className="mt-5">
              From AC maintenance and gas refilling to fridge cooling repairs and washing machine spare replacement,
              our team focuses on practical diagnosis, clear communication and dependable doorstep service.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-wide text-jaya-orange">Services</p>
            <h2 className="mt-3 text-3xl font-black text-jaya-navy sm:text-4xl">Repair and maintenance for essential home appliances.</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="overflow-hidden rounded-md border border-blue-100 bg-white shadow-sm">
                <img src={service.image} alt={`${service.title} by Jaya Enterprises`} className="h-48 w-full object-cover" loading="lazy" />
                <div className="p-6">
                  <h3 className="text-2xl font-black text-jaya-navy">{service.title}</h3>
                  <p className="mt-2 text-slate-600">{service.text}</p>
                  <ul className="mt-5 space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                        <CheckIcon />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-jaya-orange">Why Choose Us</p>
              <h2 className="mt-3 text-3xl font-black text-jaya-navy sm:text-4xl">Service that is quick, honest and built around your schedule.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 rounded-md border border-blue-100 bg-jaya-sky/60 p-4">
                  <CheckIcon />
                  <span className="font-bold text-jaya-navy">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="areas" className="bg-jaya-navy px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-orange-200">Service Locations</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Coverage across Villupuram and Pondicherry.</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {locations.map((location) => (
                <div key={location} className="rounded-md bg-white/10 p-4 font-bold ring-1 ring-white/15">
                  {location}
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-md bg-white shadow-xl">
            <iframe
              title="Jaya Enterprises service coverage map"
              src="https://www.google.com/maps?q=Villupuram%20Pondicherry%20Ulundurpettai%20Kallakkurichi&output=embed"
              className="h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-jaya-orange">Testimonials</p>
              <h2 className="mt-3 text-3xl font-black text-jaya-navy sm:text-4xl">Customers trust our doorstep service.</h2>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((review) => (
              <article key={review.name} className="rounded-md border border-blue-100 bg-white p-6 shadow-sm">
                <div className="flex gap-1 text-jaya-orange" aria-label="5 star rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="m10 1.7 2.38 4.82 5.32.77-3.85 3.75.91 5.3L10 13.84l-4.76 2.5.91-5.3L2.3 7.29l5.32-.77L10 1.7Z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 text-slate-650">"{review.quote}"</p>
                <p className="mt-5 font-black text-jaya-navy">{review.name}</p>
                <p className="text-sm font-semibold text-slate-500">{review.place}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-jaya-orange">Contact</p>
            <h2 className="mt-3 text-3xl font-black text-jaya-navy sm:text-4xl">Book appliance service with Jaya Enterprises.</h2>
            <div className="mt-8 space-y-4 text-slate-650">
              <p><strong className="text-jaya-navy">Owner:</strong> M. Manikandan</p>
              <p><strong className="text-jaya-navy">Address:</strong> Deviyanandal, Ulundurpettai Taluk, Kallakkurichi District, Tamil Nadu 607204</p>
              <p><strong className="text-jaya-navy">Branch:</strong> Pondicherry</p>
              <p><strong className="text-jaya-navy">Service Areas:</strong> Villupuram & Pondicherry</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappHref} className="rounded-md bg-green-600 px-5 py-3 text-center font-bold text-white transition hover:bg-green-700">
                WhatsApp Contact
              </a>
              <a href={callHref} className="rounded-md bg-jaya-blue px-5 py-3 text-center font-bold text-white transition hover:bg-blue-700">
                Click-to-Call
              </a>
            </div>
          </div>

          <form id="booking" className="rounded-md border border-blue-100 bg-slate-50 p-5 shadow-sm sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-jaya-navy">Name</span>
                <input className="mt-2 w-full rounded-md border border-blue-100 bg-white px-4 py-3 outline-none ring-jaya-blue/20 focus:ring-4" type="text" name="name" autoComplete="name" />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-jaya-navy">Phone Number</span>
                <input className="mt-2 w-full rounded-md border border-blue-100 bg-white px-4 py-3 outline-none ring-jaya-blue/20 focus:ring-4" type="tel" name="phone" autoComplete="tel" />
              </label>
            </div>
            <label className="mt-5 block">
              <span className="text-sm font-bold text-jaya-navy">Service Required</span>
              <select className="mt-2 w-full rounded-md border border-blue-100 bg-white px-4 py-3 outline-none ring-jaya-blue/20 focus:ring-4" name="service" defaultValue="">
                <option value="" disabled>Select a service</option>
                <option>AC Service & Repair</option>
                <option>Fridge Service & Repair</option>
                <option>Washing Machine Service & Repair</option>
              </select>
            </label>
            <label className="mt-5 block">
              <span className="text-sm font-bold text-jaya-navy">Message</span>
              <textarea className="mt-2 min-h-32 w-full resize-y rounded-md border border-blue-100 bg-white px-4 py-3 outline-none ring-jaya-blue/20 focus:ring-4" name="message" />
            </label>
            <button type="submit" className="mt-6 w-full rounded-md bg-jaya-orange px-6 py-3.5 font-black text-white transition hover:bg-orange-600">
              Send Booking Request
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-jaya-navy px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-md bg-white text-lg font-black text-jaya-blue">JE</span>
              <div>
                <p className="font-black">Jaya Enterprises</p>
                <p className="text-sm text-blue-100">Home Appliance Repair</p>
              </div>
            </div>
          </div>
          <div>
            <p className="font-black">Quick Links</p>
            <div className="mt-3 space-y-2 text-sm text-blue-100">
              <a className="block hover:text-white" href="#about">About Us</a>
              <a className="block hover:text-white" href="#services">Services</a>
              <a className="block hover:text-white" href="#areas">Service Areas</a>
            </div>
          </div>
          <div>
            <p className="font-black">Services</p>
            <div className="mt-3 space-y-2 text-sm text-blue-100">
              <p>AC Service & Repair</p>
              <p>Fridge Service & Repair</p>
              <p>Washing Machine Service</p>
            </div>
          </div>
          <div>
            <p className="font-black">Contact Information</p>
            <p className="mt-3 text-sm text-blue-100">Deviyanandal, Ulundurpettai Taluk, Kallakkurichi District, Tamil Nadu 607204</p>
            <p className="mt-2 text-sm text-blue-100">Branch: Pondicherry</p>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-7xl border-t border-white/15 pt-6 text-sm text-blue-100">
          © 2026 Jaya Enterprises. All Rights Reserved.
        </p>
      </footer>

      <a
        href={whatsappHref}
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-green-600 text-white shadow-2xl transition hover:bg-green-700"
        aria-label="Contact Jaya Enterprises on WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </main>
  )
}

export default App
