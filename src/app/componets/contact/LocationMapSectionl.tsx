export default function LocationMapSection() {
  return (
    <section className="w-full bg-white py-20 mt-[800px] lg:mt-52">
      <div className="max-w-360 mx-auto px-6">

        {/* OPTIONAL HEADER */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
            Visit Our Showroom
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Find us easily and stop by to explore our furniture collections in person.
          </p>
        </div>

        {/* MAP CONTAINER */}
        <div className="relative w-full h-[300px] sm:h-[380px] md:h-[450px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps?q=60%20Fremont%20Ave,%20Hamden,%20CT%2006514&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
            aria-label="Map showing our location"
          ></iframe>

          {/* OPTIONAL SOFT OVERLAY FOR STYLE */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 to-transparent"></div>
        </div>

      </div>
    </section>
  );
}
