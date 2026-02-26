"use client";

import Image from "next/image";
import { useState } from "react";

interface WorkProcessItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const workProcess: WorkProcessItem[] = [
  {
    id: 1,
    title: "Receive packages",
    description:
      "Sed ut perspiciatis unde omnis iste natus ut perspiciatis unde omnis iste natus sed do eiusmod tempor...",
    image: "/images/receive.jpg",
  },
  {
    id: 2,
    title: "Deliver packages",
    description:
      "We ensure secure and timely delivery with optimized routing and reliable tracking.",
    image: "/images/deliver.jpg",
  },
  {
    id: 3,
    title: "Transport packages",
    description:
      "Your shipments are handled by trained professionals with real-time logistics support.",
    image: "/images/transport.jpg",
  },
  {
    id: 4,
    title: "Warehousing Operations",
    description:
      "Comprehensive storage, sorting, and inventory management for all your needs.",
    image: "/images/warehouse.jpg",
  },
];

export default function WorkProcess() {
  const [active, setActive] = useState(1);

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
            How It Works
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
            Logistics Solutions to Help Businesses
          </h2>
        </div>

        {/* Process Cards */}
        <div className="flex flex-col lg:flex-row gap-4 transition-all duration-500">
          {workProcess.map((item) => {
            const isActive = active === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActive(item.id)}
                className={`group relative bg-white rounded-3xl shadow-md overflow-hidden cursor-pointer flex flex-col transition-all duration-500 ease-in-out
                  ${isActive ? "flex-[2]" : "flex-1 hover:flex-[1.2]"}
                `}
              >
                {/* Large Active Card */}
                <div
                  className={`flex flex-col md:flex-row h-full transition-all duration-500 ${
                    isActive ? "opacity-100" : "opacity-70"
                  }`}
                >
                  {isActive ? (
                    <>
                      <div className="md:w-1/2 relative h-64 md:h-auto">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-8 md:w-1/2 flex flex-col justify-center">
                        <div className="text-gray-400 text-lg font-semibold mb-2">
                          {String(item.id).padStart(2, "0")}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mb-6">{item.description}</p>
                        <button className="inline-flex items-center px-6 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition">
                          View Detail
                          <span className="ml-2">↗</span>
                        </button>
                      </div>
                    </>
                  ) : (
                    // Compact (Inactive) Card
                    <div className="flex flex-col justify-center items-center text-center h-64 px-4">
                      <div className="text-gray-400 text-lg font-semibold mb-2">
                        {String(item.id).padStart(2, "0")}
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">
                        {item.title}
                      </h3>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
