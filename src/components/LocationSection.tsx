"use client";
import React from "react";
interface LocationSectionProps {
  mapUrl: string;
}

const LocationSection: React.FC<LocationSectionProps> = ({ mapUrl }) => {
  return (
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          <div>
            <div className="relative overflow-hidden rounded-lg shadow-md">
              <iframe src={mapUrl} style={{ border: 0 }} allowFullScreen loading="lazy" className="w-full h-96 rounded-md" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
  );
};

export default LocationSection;