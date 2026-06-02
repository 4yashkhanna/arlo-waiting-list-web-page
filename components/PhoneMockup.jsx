"use client";

const tabs = [
  { label: "All 34", active: true },
  { label: "Notes 8" },
  { label: "Articles 6" },
  { label: "Images 6" },
  { label: "Videos 3" },
];

const pinned = [
  { title: "Weekend in Tulum", meta: "Notes · 2d ago", bg: "linear-gradient(145deg,#7ecde5,#4daac8)" },
  { title: "Brand inspiration", meta: "16 Items", bg: "linear-gradient(145deg,#e8e0d5,#d4c8b4)" },
  { title: "The Science of Focus", meta: "Article · 3d ago", bg: "linear-gradient(145deg,#dce5f0,#c5d2e5)" },
];

export default function PhoneMockup() {
  return (
    <div className="w-[196px] h-[416px] bg-[#111] rounded-[34px] p-[11px] shrink-0 relative shadow-[0_18px_60px_rgba(0,0,0,0.36),0_4px_14px_rgba(0,0,0,0.14)]">
      {/* notch */}
      <div className="absolute top-[11px] left-1/2 -translate-x-1/2 w-[68px] h-5 bg-[#111] rounded-b-[14px] z-20" />
      <div className="w-full h-full bg-[#f5f5f5] rounded-[26px] overflow-hidden flex flex-col">
        {/* status bar */}
        <div className="h-6 flex items-center justify-between px-3.5 bg-[#f5f5f5] shrink-0">
          <span className="text-[8px] font-bold">9:41</span>
          <div className="flex items-center gap-[3px]">
            <svg width="10" height="8" viewBox="0 0 14 10" fill="#1a1a1a">
              <rect x="0" y="4" width="2.5" height="6" rx="0.5" />
              <rect x="3.5" y="2.5" width="2.5" height="7.5" rx="0.5" />
              <rect x="7" y="1" width="2.5" height="9" rx="0.5" />
              <rect x="10.5" y="0" width="2.5" height="10" rx="0.5" />
            </svg>
            <svg width="18" height="8" viewBox="0 0 22 10" fill="none">
              <rect x="0.5" y="0.5" width="18" height="9" rx="2.5" stroke="#1a1a1a" strokeOpacity="0.35" />
              <rect x="19.5" y="3" width="2" height="4" rx="1" fill="#1a1a1a" fillOpacity="0.4" />
              <rect x="1.5" y="1.5" width="14" height="7" rx="1.5" fill="#1a1a1a" />
            </svg>
          </div>
        </div>

        {/* body */}
        <div className="flex-1 px-2.5 pb-2.5 pt-1 overflow-hidden relative">
          <div className="flex justify-between items-start mb-1">
            <div>
              <div className="text-[9px] font-extrabold">Good morning, Alex</div>
              <div className="text-[6.5px] text-neutral-500 mb-[7px]">Here&apos;s what you&apos;ve saved recently</div>
            </div>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7.5" stroke="#444" strokeWidth="2.3" />
              <path d="M21 21l-3.8-3.8" stroke="#444" strokeWidth="2.3" strokeLinecap="round" />
            </svg>
          </div>

          <div className="flex gap-[3px] mb-[9px] overflow-hidden">
            {tabs.map((t) => (
              <div
                key={t.label}
                className={`rounded-full px-1.5 py-0.5 text-[6px] whitespace-nowrap ${
                  t.active ? "bg-[#1a1a1a] text-white" : "bg-[#e5e5e5] text-neutral-600"
                }`}
              >
                {t.label}
              </div>
            ))}
          </div>

          <div className="text-[7.5px] font-bold mb-[5px]">Pinned</div>
          <div className="grid grid-cols-3 gap-[3px] mb-[9px]">
            {pinned.map((p) => (
              <div key={p.title} className="rounded-[7px] h-[54px] relative overflow-hidden" style={{ background: p.bg }}>
                <div className="absolute bottom-[3px] left-[3px] right-[3px] text-[4.5px] font-semibold leading-[1.35]">
                  {p.title}
                  <br />
                  <span className="font-normal text-neutral-600">{p.meta}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-[7.5px] font-bold mb-[5px]">Recent</div>
          <div className="flex items-center gap-1.5 py-1 border-b border-black/5">
            <div className="w-[22px] h-[22px] rounded-[5px] bg-[#dce5f5] shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-[6.5px] font-semibold leading-[1.35]">Design inspiration for new landing page</div>
              <div className="text-[5.5px] text-neutral-400">Images · 1h ago</div>
            </div>
            <svg width="6" height="10" viewBox="0 0 8 14" fill="none">
              <path d="M1 1l6 6-6 6" stroke="#bbb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex items-center gap-1.5 py-1">
            <div className="w-[22px] h-[22px] rounded-[5px] bg-[#fde8e8] shrink-0" />
            <div>
              <div className="text-[6.5px] font-semibold leading-[1.35]">Q2 Strategy Deck</div>
              <div className="text-[5.5px] text-neutral-400">PDF · 4.3 MB</div>
            </div>
          </div>

          <div className="absolute bottom-3.5 right-3 w-[22px] h-[22px] bg-arlo rounded-full flex items-center justify-center z-30">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
