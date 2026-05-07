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
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="space-y-3 mb-12">
            {subheading && (
              <div className="font-semibold tracking-widest text-primary-600 uppercase text-center mb-2">{subheading}</div>
            )}
            {heading && (
              <h2 className="text-2xl text-gray-900 md:text-4xl font-bold text-center">{heading}</h2>
            )}

            {description && (
              <p>{description}</p>
            )}
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl shadow-sm space-y-3 p-6 bg-white text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative flex justify-center">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-r from-red-600 to-orange-400 text-white grid place-content-center font-bold">
                  <span dangerouslySetInnerHTML={{ __html: item.icon }} />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p>{item.content.split(" ").slice(0, 20).join(" ")}…</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHireSection;