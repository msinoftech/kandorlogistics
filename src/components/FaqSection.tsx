"use client";
import React, { createContext, useContext, useState, useId } from "react";

interface FaqContextValue {
  openId: string | null;
  setOpenId: (id: string | null) => void;
}

const FaqContext = createContext<FaqContextValue | null>(null);

function useFaqContext() {
  const ctx = useContext(FaqContext);
  if (!ctx) {
    throw new Error("FaqSection must be used within FaqProvider");
  }
  return ctx;
}

export function FaqProvider({ children }: { children: React.ReactNode }) {
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <FaqContext.Provider value={{ openId, setOpenId }}>
      {children}
    </FaqContext.Provider>
  );
}

interface FaqSectionProps {
  title: string;
  content?: string;
}

const FaqSection: React.FC<FaqSectionProps> = ({ title, content }) => {
  const id = useId();
  const { openId, setOpenId } = useFaqContext();
  const isOpen = openId === id;

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpenId(isOpen ? null : id);
  };

  return (
    <section className="mb-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col gap-3">
          <details
            open={isOpen}
            className={`
              group relative overflow-hidden rounded-xl border border-gray-200/80 bg-white
              shadow-sm transition-all duration-300 ease-out
              hover:border-gray-300 hover:shadow-md
              ${isOpen ? "border-l-4 border-l-red-600 shadow-md ring-1 ring-gray-200/50" : ""}
            `}
          >
            <summary
              onClick={handleToggle}
              className="list-none cursor-pointer select-none py-5 px-6 pr-14 flex items-center gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50 focus-visible:ring-offset-2 rounded-xl"
            >
              <span
                className={`
                  flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold transition-all duration-300
                  ${isOpen ? "bg-gradient-to-r from-red-600 to-orange-400 text-white" : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"}
                `}
              >
                {isOpen ? "−" : "+"}
              </span>
              <span className="flex-1 text-gray-900 font-semibold text-base leading-snug pr-2">
                {title}
              </span>
            </summary>
            <div
              className={`
                overflow-hidden transition-all duration-300 ease-out
                ${isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}
              `}
            >
              <div className="px-6 pb-6 pt-0">
                {content && (
                  <div
                    className="pl-2 border-t border-gray-100 pt-5 text-gray-600 prose prose-sm prose-li:my-1 prose-ul:my-2 max-w-none"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                )}
              </div>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
