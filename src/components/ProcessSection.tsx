import React from "react";

interface ProcessStep {
  n: string;
  t: string;
  d: string;
}

const processSteps: ProcessStep[] = [
  { n: "1", t: "Freight Matching", d: "Arranging a qualified truck for loads and ensuring the ideal loads for the truck" },
  { n: "2", t: "Rate Negotiation & Contract", d: "Negotiating for a fair rate with shippers and handling professional contract paperwork with delivery terms" },
  { n: "3", t: "Real-Time Load Management and Tracking", d: "Planning route, tracking, and sharing the real-time update with shippers as well as fleet owners" },
  { n: "4", t: "Finalizing Logistics & Billing", d: "Handling of all post-delivery paperwork includes Proof of Delivery (POD, billing, and invoicing" },
];

const ProcessSection: React.FC = () => {
  return (
    <section className="bg-gray-900 px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-left md:text-center text-white">How Does Our Truck Dispatch Company Power Your Business?</h2>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((step) => (
            <div key={step.n} className="rounded-2xl space-y-3 p-6 border border-gray-400 bg-gray-800 hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-red-600 to-orange-400 text-white grid place-content-center font-bold">{step.n}</div>
              <div className="text-xl text-white font-semibold">{step.t}</div>
              <p className="text-white">{step.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;