// components/DynamicCounters.tsx
import React from "react";
import Image from "next/image";

interface CounterItem {
  icon: string;
  counter_value: number | string;
  caption: string;
}

interface DynamicCountersProps {
  counters: CounterItem[];
}

const DynamicCounters: React.FC<DynamicCountersProps> = ({ counters }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {counters.map((item, index) => (
            <div key={index} className="col-span-1 flex flex-col items-center p-6 bg-white rounded-lg shadow-sm h-full">
              <div className="h-12 w-12 flex items-center justify-center mb-3">
                <Image src={item.icon} alt="" width={80} height={80} className="object-contain" />
              </div>
              <div className="text-3xl font-extrabold text-gray-900">
                {item.counter_value}
              </div>
              <div className="text-sm mt-2">
                {item.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicCounters;
