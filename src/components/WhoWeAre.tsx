"use client";

import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="bg-white pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Images */}
        <div className="relative flex flex-col gap-6">
          {/* Image */}
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/who-we-are.webp"
              alt="Team discussion"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="relative space-y-3">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">Our Success Story & Growth</h2>
          <p>We launched our port drayage operations at the Port of Texas, building strong relationships with owner-operators, carriers, brokers, and shippers. As demand for reliable dispatch solutions has grown, we have expanded our services across major U.S. lanes. Today, our team manages  75+ active trucking units — including Dry Vans, Reefers, Hotshots, Box Trucks, Lowboys, Flatbeds, and Step Decks.</p>
          <p>Our success is driven by our commitment to helping owner-operators and fleet companies operate more profitably and efficiently.</p>
          
          <hr className="my-6 border-gray-300" />
          
          {/* Bullet Points */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.5 1.2l-2.3 1.1a11 11 0 005.5 5.5l1.1-2.3a1 1 0 011.2-.5l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.7 21 3 14.3 3 6V5z"/>
                </svg>
              <p>Get in Touch today. We are a dedicated partner to discuss your dispatch needs and how we can support your business growth.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
