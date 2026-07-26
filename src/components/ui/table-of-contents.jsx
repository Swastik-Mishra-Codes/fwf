import React, { useEffect, useState } from 'react';
import { cn } from '../../lib/utils.js';
import { FaListUl } from 'react-icons/fa';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'faculty', label: 'Faculty' },
  { id: 'members', label: 'Members' },
];

const ITEM_HEIGHT = 48; // px per item (gap-4 = 16px + h-8 = 32px)

export function TableOfContents() {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeIndex = sections.findIndex((s) => s.id === activeSection);

  return (
    <div className="fixed right-8 top-[35%] z-[100] hidden xl:flex flex-col items-start gap-4 select-none pointer-events-auto">
      {/* Title */}
      <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase tracking-wider">
        <FaListUl className="w-3 h-3 text-zinc-400" />
        <span>On this page</span>
      </div>

      {/* Navigation List — two-column: indicator | label */}
      <div className="flex flex-row items-start gap-3">

        {/* Left column: track line + animated dot */}
        <div className="relative flex flex-col items-center py-2" style={{ width: '10px', minHeight: `${sections.length * ITEM_HEIGHT}px` }}>
          {/* Track line */}
          <div className="absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-[1.5px] bg-[#1e3457]/50 rounded" />

          {/* Active highlight line */}
          <div
            className="absolute left-1/2 -translate-x-1/2 w-[1.5px] bg-white transition-all duration-300 ease-out"
            style={{
              top: '16px',
              height: `${activeIndex * ITEM_HEIGHT}px`,
            }}
          />

          {/* Moving dot */}
          <div
            className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-white border border-[#0d1b2e] shadow-[0_0_8px_#ffffff] transition-all duration-300 ease-out"
            style={{ top: `${activeIndex * ITEM_HEIGHT + 10}px` }}
          />
        </div>

        {/* Right column: text labels */}
        <div className="flex flex-col gap-4 py-2">
          {sections.map((sec) => {
            const isActive = sec.id === activeSection;
            return (
              <button
                key={sec.id}
                onClick={() => handleClick(sec.id)}
                className={cn(
                  'h-8 flex items-center text-left text-sm font-medium transition-all duration-300 outline-none hover:text-white whitespace-nowrap',
                  isActive ? 'text-white font-semibold' : 'text-zinc-500'
                )}
              >
                {sec.label}
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default TableOfContents;
