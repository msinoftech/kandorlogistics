import React from "react";
import Image from "next/image";
import { whyhire } from "@/lib/types";

interface WhyHireSectionProps {
  subheading?: string;
  heading?: string;
  description?: string;
  items: whyhire[];
}

const WhyHireSection: React.FC<WhyHireSectionProps> = ({ subheading, heading, description, items }) => {
  return (
    <section id="whyhireus" className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Subheading */}
        {subheading && (
          <div className="text-xs font-semibold tracking-widest text-primary-600 uppercase text-center mb-2">{subheading}</div>
        )}

        {/* Heading */}
        {heading && (
          <h2 className="text-2xl text-gray-900 md:text-4xl font-bold text-center">{heading}</h2>
        )}

        {/* Description */}
        {description && (
          <p className="text-center mt-3 max-w-2xl mx-auto">{description}</p>
        )}

        {/* Cards */}
        <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl shadow-md hover:shadow-lg transition p-6 bg-white text-center">
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="h-20 w-20 rounded-full bg-gradient-to-r from-red-600 to-orange-400 text-white grid place-content-center font-bold mb-3">
                  <Image src={item.image} alt={item.title} width={45} height={45} className="filter brightness-0 invert object-contain"/>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
              <p className="text-md">{item.content.split(" ").slice(0, 20).join(" ")}…</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHireSection;