import ContactForm from "./ContactForm";
import { BASE_URL } from "@/lib/config";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-orange-50 sm:pt-40 md:pt-40 lg:pt-40 pt-40 pb-20">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-red-200 via-white to-orange-200 opacity-60"></div>

      {/* Floating Gradient Blobs */}
      <div className="absolute -top-32 -left-32 h-96 w-96 bg-red-400/30 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 bg-orange-400/30 rounded-full blur-3xl animate-float-reverse"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center gap-12">

          {/* Left Column */}
          <div className="w-full space-y-3">
            <p className="text-sm font-semibold text-red-600 uppercase tracking-widest">24/7 Support, Top-Paying Loads</p>

            <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-gray-900">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-400">Trucking Dispatcher</span>{" "}for Seamless Delivery
            </h1>

            <p>As your dedicated outsourced truck dispatch company, our expert team provides 24/7 support-from rate negotiation to back-office paperwork-ensuring reliable delivery to the destination.</p>

            <div className="flex flex-wrap gap-4">
              <a href={`${BASE_URL}/contact`} role="button" id="hero-button" className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-400 text-white px-6 py-3 rounded-md font-medium shadow-lg hover:bg-red-700 transition-transform transform hover:-translate-y-1">Contact Us</a>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-2">
              {["Trusted Partner", "Nationwide Delivery", "No Hidden Charges"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 bg-red-500 rounded-full"></span>
                    {item}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right Column */}
          <div id="contact" className="w-full order-1 md:order-2">
            <div className="relative w-full">
              <div className="relative bg-white rounded-3xl shadow-2xl ring-1 ring-black/5 overflow-hidden transform transition-all duration-500 hover:-translate-y-2">
                <div className="p-8">
                  <div className="text-xl font-semibold text-gray-900">Need A Dedicated Dispatcher?</div>
                  <p>Request a Quote for Nationwide Services</p>
                  <div className="mt-6"><ContactForm /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}