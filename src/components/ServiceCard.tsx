import Link from "next/link";

export default function ServicesSection() {
  return (
    <>
        {/* Service 1 */}
        <div className="group relative bg-white/80 rounded-3xl border border-white/30 shadow-lg hover:shadow-2xl scale-103 hover:scale-100 transition-transform duration-500 p-6 overflow-hidden">
            <div className="absolute -top-10 -right-10 h-22 w-22 rounded-full bg-gradient-to-br from-red-400 to-orange-300 opacity-30 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-red-100 via-transparent to-orange-100 opacity-60 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>

            <div className="relative z-10 space-y-4">
                <div className="text-xl text-gray-900 font-semibold"><Link href={`/services/hotshot-dispatch`}>Hotshot Dispatch</Link></div>
                <p>Kandor Logistics streamlines your business with expert hotshot dispatch services, managing bookings and back-office tasks to boost efficiency and growth.</p>
                <Link href={`/services/hotshot-dispatch`} aria-label="Discover more about Hotshot Dispatch" className="group-hover:text-red-600 inline-block font-medium">Discover more →</Link>
            </div>
        </div>
        {/* Service 2 */}
        <div className="group relative bg-white/80 rounded-3xl border border-white/30 shadow-lg hover:shadow-2xl scale-103 hover:scale-100 transition-transform duration-500 p-6 overflow-hidden">
            <div className="absolute -top-10 -right-10 h-22 w-22 rounded-full bg-gradient-to-br from-red-400 to-orange-300 opacity-30 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-red-100 via-transparent to-orange-100 opacity-60 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>

            <div className="relative z-10 space-y-4">
                <div className="text-xl text-gray-900 font-semibold"><Link href={`/services/flatbeds-step-deck-dispatch`}>Flatbeds/Step Deck Dispatch</Link></div>
                <p>Kandor Logistics connects flatbed carriers with profitable long and short-haul loads, ensuring steady work, fair earnings, and efficient logistics management.</p>
                <Link href={`/services/flatbeds-step-deck-dispatch`} aria-label="Discover more about Flatbeds and Step Deck Dispatch" className="group-hover:text-red-600 inline-block font-medium">Discover more →</Link>
            </div>
        </div>
        {/* Service 3 */}
        <div className="group relative bg-white/80 rounded-3xl border border-white/30 shadow-lg hover:shadow-2xl scale-103 hover:scale-100 transition-transform duration-500 p-6 overflow-hidden">
            <div className="absolute -top-10 -right-10 h-22 w-22 rounded-full bg-gradient-to-br from-red-400 to-orange-300 opacity-30 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-red-100 via-transparent to-orange-100 opacity-60 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>

            <div className="relative z-10 space-y-4">
                <div className="text-xl text-gray-900 font-semibold"><Link href={`/services/power-only-units-dispatching`}>Power Only Units Dispatch</Link></div>
                <p>Kandor Logistics supports power-only truckers with reliable dispatch services, load sourcing, and affordable trailer rentals to keep operations running smoothly.</p>
                <Link href={`/services/power-only-units-dispatching`} aria-label="Discover more about Power Only Units Dispatching" className="group-hover:text-red-600 inline-block font-medium">Discover more →</Link>
            </div>
        </div>
        {/* Service 4 */}
        <div className="group relative bg-white/80 rounded-3xl border border-white/30 shadow-lg hover:shadow-2xl scale-103 hover:scale-100 transition-transform duration-500 p-6 overflow-hidden">
            <div className="absolute -top-10 -right-10 h-22 w-22 rounded-full bg-gradient-to-br from-red-400 to-orange-300 opacity-30 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-red-100 via-transparent to-orange-100 opacity-60 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>

            <div className="relative z-10 space-y-4">
                <div className="text-xl text-gray-900 font-semibold"><Link href={`/services/low-boy-dispatching`}>Low Boy Dispatch</Link></div>
                <p>Kandor Logistics connects lowboy carriers with bulk shipment projects, ensuring steady loads, efficient dispatching, and helping increase carrier revenue by 25%.</p>
                <Link href={`/services/low-boy-dispatching`} aria-label="Discover more about Low Boy Dispatching" className="group-hover:text-red-600 inline-block font-medium">Discover more →</Link>
            </div>
        </div>
        {/* Service 5 */}
        <div className="group relative bg-white/80 rounded-3xl border border-white/30 shadow-lg hover:shadow-2xl scale-103 hover:scale-100 transition-transform duration-500 p-6 overflow-hidden">
            <div className="absolute -top-10 -right-10 h-22 w-22 rounded-full bg-gradient-to-br from-red-400 to-orange-300 opacity-30 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-red-100 via-transparent to-orange-100 opacity-60 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>

            <div className="relative z-10 space-y-4">
                <div className="text-xl text-gray-900 font-semibold"><Link href={`/services/box-truck-dispatching`}>Box Truck Dispatch</Link></div>
                <p>Kandor Logistics provides steady box truck loads daily, ensuring your truck stays profitable and productive while we handle all dispatching needs.</p>
                <Link href={`/services/box-truck-dispatching`} aria-label="Discover more about Box Truck Dispatching" className="group-hover:text-red-600 inline-block font-medium">Discover more →</Link>
            </div>
        </div>
        {/* Service 6 */}
        <div className="group relative bg-white/80 rounded-3xl border border-white/30 shadow-lg hover:shadow-2xl scale-103 hover:scale-100 transition-transform duration-500 p-6 overflow-hidden">
            <div className="absolute -top-10 -right-10 h-22 w-22 rounded-full bg-gradient-to-br from-red-400 to-orange-300 opacity-30 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-red-100 via-transparent to-orange-100 opacity-60 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>

            <div className="relative z-10 space-y-4">
                <div className="text-xl text-gray-900 font-semibold"><Link href={`/services/dry-van-dispatching`}>Dry Van Dispatch</Link></div>
                <p>Kandor Logistics specializes in dry van dispatch, optimizing routes, reducing fuel costs, and ensuring smooth, hassle-free pickups and deliveries for drivers.</p>
                <Link href={`/services/dry-van-dispatching`} aria-label="Discover more about Dry Van Dispatching" className="group-hover:text-red-600 inline-block font-medium">Discover more →</Link>
            </div>
        </div>
  </>
  );
}
