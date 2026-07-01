import React from "react";
import { testimonial } from "@/lib/types";

interface TestimonialsSectionProps {
  subheading?: string;
  heading?: string;
  testimonials: testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ subheading, heading, testimonials }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {subheading && (
          <div className="text-sm font-semibold text-red-600 uppercase tracking-widest text-center mb-3">{subheading}</div>
        )}
        {heading && (
          <div className="text-2xl text-gray-900 md:text-4xl font-bold text-center">{heading}</div>
        )}

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {testimonials.map((item) => (
            <div key={item.name} className="group relative rounded-2xl overflow-hidden bg-white p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <svg className="w-10 h-10 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div className="mt-4 italic">&quot;{item.content}&quot;</div>
              <div className="mt-6 flex items-center gap-4">
                <div>
                  <div className="font-semibold text-gray-900">{item.name}</div>
                  {item.designation && (
                    <p>{item.designation}</p>
                  )}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 h-20 w-20 bg-red-600/50 rounded-full blur-2xl group-hover:bg-[var(--custom-red)]/10 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
