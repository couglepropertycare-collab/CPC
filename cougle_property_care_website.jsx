export default function CouglePropertyCareWebsite() {
  const services = [
    "Weekly Lawn Mowing",
    "Overseeding",
    "Compost Top Dressing",
    "Spring & Fall Cleanup",
    "Small Landscaping Jobs",
    "Gutter & Window Cleaning",
  ];

  const photos = [
    {
      title: "Before & After Cleanup",
      desc: "Clear, visible transformations that show the quality of work.",
    },
    {
      title: "Healthy Lawn Services",
      desc: "Overseeding, mowing, and soil-improving services for stronger lawns.",
    },
    {
      title: "Reliable Local Service",
      desc: "Serving homeowners in Fredericton with fast quotes and dependable work.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="border-b bg-gradient-to-b from-green-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-3 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                Fredericton Lawn Care
              </p>
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                Cougle Property Care
              </h1>
              <p className="mt-5 max-w-xl text-lg text-slate-600">
                Professional lawn care and property maintenance for homeowners in
                Fredericton. Fast quotes, reliable service, and visible results.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="tel:5062629990"
                  className="rounded-2xl bg-green-700 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-green-800"
                >
                  Call (506) 262-9990
                </a>
                <a
                  href="mailto:Jakecougle99@gmail.com"
                  className="rounded-2xl border border-slate-300 px-5 py-3 font-semibold text-slate-800 transition hover:bg-slate-50"
                >
                  Request a Quote
                </a>
              </div>
              <div className="mt-6 text-sm text-slate-500">
                Lawn mowing • Overseeding • Compost top dressing • Property cleanups
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border bg-white p-6 shadow-sm md:col-span-2">
                <div className="aspect-[16/9] rounded-2xl bg-slate-100" />
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Before & After Results</h3>
                    <p className="text-sm text-slate-500">
                      Swap this placeholder with your real cleanup and lawn photos.
                    </p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    Photo Area
                  </span>
                </div>
              </div>
              <div className="rounded-3xl border bg-white p-6 shadow-sm">
                <p className="text-3xl font-bold">Local</p>
                <p className="mt-2 text-slate-600">Serving Fredericton homeowners</p>
              </div>
              <div className="rounded-3xl border bg-white p-6 shadow-sm">
                <p className="text-3xl font-bold">Fast</p>
                <p className="mt-2 text-slate-600">Quick quotes and responsive service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">Services</h2>
          <p className="mt-3 text-slate-600">
            Focused on clean properties, healthier lawns, and dependable service.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-3xl border bg-white p-6 shadow-sm"
            >
              <div className="text-lg font-semibold">{service}</div>
              <p className="mt-2 text-sm text-slate-500">
                Contact for pricing and availability.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">Why Homeowners Choose Us</h2>
            <p className="mt-3 text-slate-600">
              Professional service, clear communication, and work that visibly improves the property.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {photos.map((item) => (
              <div key={item.title} className="rounded-3xl border bg-white p-6 shadow-sm">
                <div className="aspect-[4/3] rounded-2xl bg-slate-100" />
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 rounded-3xl border bg-white p-8 shadow-sm md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Get a Quote</h2>
            <p className="mt-3 text-slate-600">
              Call or email with your address and the service you need. You can also send photos for a faster estimate.
            </p>
            <div className="mt-6 space-y-2 text-slate-700">
              <p><span className="font-semibold">Phone:</span> (506) 262-9990</p>
              <p><span className="font-semibold">Email:</span> Jakecougle99@gmail.com</p>
              <p><span className="font-semibold">Service Area:</span> Fredericton, New Brunswick</p>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-50 p-6">
            <div className="space-y-4">
              <input className="w-full rounded-2xl border px-4 py-3" placeholder="Name" />
              <input className="w-full rounded-2xl border px-4 py-3" placeholder="Address" />
              <input className="w-full rounded-2xl border px-4 py-3" placeholder="Phone or Email" />
              <textarea className="min-h-[120px] w-full rounded-2xl border px-4 py-3" placeholder="What service are you looking for?" />
              <button className="w-full rounded-2xl bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800">
                Send Request
              </button>
              <p className="text-xs text-slate-500">
                This is a design preview. Hook the form up to email or a form service before publishing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
