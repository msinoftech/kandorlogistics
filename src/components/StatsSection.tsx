import React from "react";

const StatsSection = () => {
  const stats = [
    { value: "120+", label: "Carriers Managed" },
    { value: "38%", label: "Deadhead Reduced" },
    { value: "+18%", label: "Owner-Op Profit Lift" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((item, index) => (
          <div key={index} className="space-y-3 rounded-2xl bg-white p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
            <p className="text-3xl font-extrabold text-gray-900">{item.value}</p>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;