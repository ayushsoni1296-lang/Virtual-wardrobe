import React, { useState } from "react";
import IphoneSimulator from "./components/IphoneSimulator";
import ArchitectDashboard from "./components/ArchitectDashboard";
import { Sparkles, Database, Laptop, Smartphone, HelpCircle, ArrowRight } from "lucide-react";

export default function App() {
  // Screen views toggle for smaller screens
  const [activeWorkspace, setActiveWorkspace] = useState<"both" | "consulting" | "simulator">("both");
  
  // Real-time statistical metrics coming from simulator
  const [appStats, setAppStats] = useState({
    wardrobeSize: 8,
    tripsPlanned: 0
  });

  const handleMetricsChange = (metrics: { wardrobeSize: number; tripsPlanned: number }) => {
    setAppStats(metrics);
  };

  return (
    <div className="w-screen h-screen bg-[#11100D] overflow-hidden flex flex-col font-sans">
      
      {/* 1. Global Head Navigation bar */}
      <header className="bg-[#1C1A14] border-b border-[#2C2922] py-3.5 px-6 shrink-0 flex justify-between items-center z-20">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#C05E35] to-[#E39665] flex items-center justify-center text-white shadow font-serif text-lg font-bold">
            M
          </div>
          <div>
            <h1 className="text-sm font-serif font-semibold text-[#FAF9F5] tracking-wide">
              Moda AI • Startup Launcher Room
            </h1>
            <p className="text-[10px] text-[#9E8F7A] font-mono">ROLE: SENIOR ARCHITECT & ADVISOR</p>
          </div>
        </div>

        {/* Workspace Layout Controllers */}
        <div className="hidden md:flex bg-[#161511] p-1.5 rounded-lg border border-[#2E2922] gap-1 shrink-0">
          <button
            onClick={() => setActiveWorkspace("both")}
            className={`px-3 py-1.5 rounded text-[10px] font-sans font-semibold uppercase tracking-wider inline-flex items-center gap-1.5 transition-all ${
              activeWorkspace === "both"
                ? "bg-[#C05E35] text-white"
                : "text-[#9E8F7A] hover:bg-[#201E18] hover:text-[#FAF9F5]"
            }`}
          >
            <Laptop size={11} /> Split Screen
          </button>
          
          <button
            onClick={() => setActiveWorkspace("consulting")}
            className={`px-3 py-1.5 rounded text-[10px] font-sans font-semibold uppercase tracking-wider inline-flex items-center gap-1.5 transition-all ${
              activeWorkspace === "consulting"
                ? "bg-[#C05E35] text-white"
                : "text-[#9E8F7A] hover:bg-[#201E18] hover:text-[#FAF9F5]"
            }`}
          >
            <Database size={11} /> Strategy Board
          </button>

          <button
            onClick={() => setActiveWorkspace("simulator")}
            className={`px-3 py-1.5 rounded text-[10px] font-sans font-semibold uppercase tracking-wider inline-flex items-center gap-1.5 transition-all ${
              activeWorkspace === "simulator"
                ? "bg-[#C05E35] text-white"
                : "text-[#9E8F7A] hover:bg-[#201E18] hover:text-[#FAF9F5]"
            }`}
          >
            <Smartphone size={11} /> Simulator
          </button>
        </div>

        {/* Small Screen controllers */}
        <div className="flex md:hidden bg-[#161511] p-1 rounded-md border border-[#2E2922] text-xs font-semibold">
          <button
            onClick={() => setActiveWorkspace("consulting")}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeWorkspace === "consulting" || activeWorkspace === "both" ? "bg-[#C05E35] text-white" : "text-[#9E8F7A]"
            }`}
          >
            Strategy
          </button>
          <button
            onClick={() => setActiveWorkspace("simulator")}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeWorkspace === "simulator" ? "bg-[#C05E35] text-white" : "text-[#9E8F7A]"
            }`}
          >
            App Mockup
          </button>
        </div>
      </header>

      {/* 2. Main Work Panel Grid layout */}
      <div className="flex-1 flex overflow-hidden relative">
        
        {/* VIEWPORT A: FOUNDER'S ARCHITECTURE CONSOLE (Strategy Deck & Schemes) */}
        <div
          className={`h-full flex-1 transition-all duration-300 ${
            activeWorkspace === "simulator" ? "hidden" : "block"
          } ${
            activeWorkspace === "both" ? "md:max-w-[62%] md:border-r border-[#24211B]" : "w-full"
          }`}
        >
          <ArchitectDashboard />
        </div>

        {/* VIEWPORT B: LIVE SMARTPHONE APLET PREVIEW FRAME */}
        <div
          className={`h-full transition-all duration-300 flex items-center justify-center bg-[#1A1813] relative overflow-y-auto ${
            activeWorkspace === "consulting" ? "hidden" : "block"
          } ${
            activeWorkspace === "both" ? "flex-1 md:bg-[#1A1813]" : "w-full"
          }`}
        >
          {/* Ambient lighting effect behind iPhone */}
          <div className="absolute w-[450px] h-[450px] rounded-full bg-[#C05E35] opacity-5 filter blur-[120px] pointer-events-none"></div>

          {/* Detailed Phone Frame Housing Mockup */}
          <div className="w-full max-w-[375px] h-[780px] md:h-[750px] rounded-[50px] border-[12px] border-[#2D2A24] bg-black overflow-hidden relative shadow-2xl iphone-bezel flex flex-col shrink-0 my-4 select-none">
            
            {/* Dynamic Island block notch */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-6.5 bg-black rounded-full z-40 flex items-center justify-between px-3 text-white">
              <span className="text-[10px] font-medium font-sans">9:41</span>
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse bg-opacity-75"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
              </div>
            </div>

            {/* iPhone Speaker Grid Slot line */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-14 h-1 bg-zinc-900 rounded-full z-40"></div>

            {/* Interactive Simulator Screen Frame */}
            <div className="w-full h-full pt-4 relative overflow-hidden">
              <IphoneSimulator onSelectedMetricsChange={handleMetricsChange} />
            </div>

            {/* iOS Bottom Swipe Navigation Bar slot line */}
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 bg-zinc-700 rounded-full z-30 pointer-events-none"></div>

          </div>

          {/* Float Guide Sidebar on Wide screens to remind user about the interface */}
          {activeWorkspace === "both" && (
            <div className="hidden lg:block absolute bottom-8 right-8 max-w-xs bg-[#1C1A14] border border-[#2B2821] p-4.5 rounded-xl text-xs text-[#9E8F7A] space-y-2.5 shadow-lg">
              <div className="flex items-center gap-1.5 text-white font-medium">
                <Sparkles size={13} className="text-[#C05E35]" />
                <span>Sandbox Sandbox Guide</span>
              </div>
              <p className="font-light leading-relaxed">
                Interact with the mobile live mockup on the right. You can do **real vision scans** (files or presets), generate capsule schedules (Goa trip), and chat with the haute-couture stylist.
              </p>
              <div className="flex justify-between items-center bg-[#24221A] p-2 rounded border border-[#302B21] text-[10px]">
                <span>Closet Size: <strong>{appStats.wardrobeSize}</strong> garments</span>
                <span>Trips: <strong>{appStats.tripsPlanned}</strong> planned</span>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
