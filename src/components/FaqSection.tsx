"use client";
import React, { useState } from "react";

export interface FaqItem {
  title: string;
  content?: string;
}

interface FaqSectionProps {
  items?: FaqItem[];
}

export const FaqSection = ({ items = [] }: FaqSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const safeItems = Array.isArray(items) ? items : [];

  if (safeItems.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      {safeItems.map((item: FaqItem, index: number) => {
        const isOpen = openIndex === index;

        return (
          <div key={`${item.title}-${index}`} className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 ${ isOpen ? "border-red-200 border-l-4 border-l-red-600" : "border-gray-200"}`}>
            <button type="button" onClick={() => setOpenIndex((prev) => (prev === index ? null : index))} className="flex w-full items-center gap-4 px-6 py-5 text-left">
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-xl font-bold leading-none transition-all ${ isOpen ? "bg-gradient-to-r from-red-600 to-orange-500 text-white shadow" : "bg-gray-100 text-gray-700"}`}>
                {isOpen ? "−" : "+"}
              </span>
              <span className="flex-1 text-gray-900 font-semibold text-base leading-snug pr-2">{item.title}</span>
            </button>

            {isOpen && (
              <div className="border-t border-gray-200 px-6 pb-6 pt-5">
                {item.content && (
                  <div className="pl-2 text-gray-600 prose prose-sm prose-li:my-1 prose-ul:my-2 max-w-none" dangerouslySetInnerHTML={{ __html: item.content }}/>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FaqSection;