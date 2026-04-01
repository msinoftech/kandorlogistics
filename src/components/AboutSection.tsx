import React from "react";
import Image from "next/image";
import Link from "next/link";

interface AboutSectionProps {
  image?: string;
  title: string;
  content: string;
  showImage?: boolean;
  showLink?: boolean;
  linkText?: string;
  linkUrl?: string;
  imageClassName?: string;
  titleClassName?: string;
  contentStyle?: React.CSSProperties;
  listTitle?: string;
  listItems?: string[];
}

const AboutSection: React.FC<AboutSectionProps> = ({
  image,
  title,
  content,
  showImage = true,
  showLink = true,
  linkText = "About us",
  linkUrl = `/about`,
  imageClassName = "w-full rounded-lg overflow-hidden",
  titleClassName = "text-2xl md:text-3xl lg:text-4xl xl:text-4xl text-gray-900 font-bold mb-4",
  contentStyle,
  listTitle = "Your Truck dispatchers do all of the back-office work, including:",
  listItems = [
    "Finding ideal loads",
    "Negotiate To Brokers for the Best Rates",
    "Booking and Assigning Loads",
    "Managing motor carrier compliance",
    "Billing and Collections",
    "Share of PODs and BOLs, etc.",
  ],
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">

        {/* Left column: Image */}
        {showImage && image && (
          <div className="order-1 lg:order-1">
            <figure className={imageClassName}>
              <Image src={image} alt="dispatcher for hotshot trucking" width={600} height={400} loading="lazy" className="w-full object-cover"/>
            </figure>
          </div>
        )}

        {/* Right column: Content */}
        <div className={showImage ? "order-2 lg:order-2" : "col-span-1"}>
          <div className="rounded-lg" style={contentStyle}>
            <h2 className={titleClassName}>{title}</h2>
            <div className="space-y-4">
              {content.split("\n").map((paragraph, index) => (
                <p key={index}>{paragraph.trim()}</p>
              ))}
            </div>

            {/* Dynamic List Section */}
            {listItems.length > 0 && (
              <>
                {listTitle && (
                  <h3 className="mt-3 font-bold">{listTitle}</h3>
                )}
                <ul className="mt-4 grid sm:grid-cols-2 gap-2">
                  {listItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 rounded-md p-2 text-sm shadow-md bg-white">
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {/* Dynamic Link */}
            {showLink && (
              <div className="mt-4 flex flex-wrap gap-4">
                <Link href={linkUrl} role="button" className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-400 text-white px-6 py-3 rounded-md font-medium shadow-lg hover:bg-red-700 transition-transform transform hover:-translate-y-1">{linkText}</Link>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutSection;
