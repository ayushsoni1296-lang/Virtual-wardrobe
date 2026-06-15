import React, { useState } from "react";
import {
  FileText,
  Database,
  Cpu,
  Bookmark,
  ChevronDown,
  Activity,
  CheckCircle,
  Clock,
  Code,
  DollarSign,
  TrendingUp,
  Tag,
  Sparkles
} from "lucide-react";
import {
  STRATEGY_ROADMAP,
  UNIQUE_SELLING_PROP,
  USER_JOURNEY_FLOW,
  FEATURE_PRIORITIZATION,
  DATABASE_SCHEMA,
  BACKEND_ARCHITECTURE,
  AI_ARCHITECTURE,
  TECH_STACK,
  CLEAN_IMAGE_ENGINE_BLUEPRINT,
  API_DESIGN,
  MONETIZATION_STRATEGY,
  BRAND_NAME_IDEAS,
  LAUNCH_STRATEGY
} from "../data";

interface SectionCardProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string;
}

function SectionCard({ title, icon, content }: SectionCardProps) {
  const [isOpen, setIsOpen] = useState(true);

  // Simple clean formatting to split text into high-end structural blocks
  const formatText = (text: string) => {
    return text.split("\n\n").map((para, i) => {
      // Headers
      if (para.startsWith("# ")) {
        return (
          <h2 key={i} className="text-2xl font-serif font-bold text-[#E6E4D9] mt-6 mb-3 border-b border-[#2D2A22] pb-2">
            {para.replace("# ", "")}
          </h2>
        );
      }
      if (para.startsWith("## ") || para.startsWith("### ")) {
        return (
          <h3 key={i} className="text-lg font-serif font-semibold text-[#C4AC97] mt-5 mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#C05E35] rounded-full"></span>
            {para.replace("## ", "").replace("### ", "")}
          </h3>
        );
      }
      // Code blocks
      if (para.includes("```")) {
        const lang = para.split("\n")[0].replace("```", "").trim();
        const code = para.substring(para.indexOf("\n") + 1, para.lastIndexOf("```")).trim();
        return (
          <div key={i} className="my-4 font-mono text-xs overflow-x-auto bg-[#161511] text-[#EBECE1] p-4 rounded-xl border border-[#2B2923] relative group">
            <div className="absolute top-2 right-2 text-[9px] uppercase tracking-wider text-[#93846D] font-bold select-none px-2 py-0.5 bg-[#211F18] border border-[#2B2923] rounded">
              {lang || "CODE"}
            </div>
            <pre className="whitespace-pre">{code}</pre>
          </div>
        );
      }
      // Table formatting
      if (para.startsWith("|") && para.trim().endsWith("|")) {
        const lines = para.split("\n").filter(l => l.trim());
        const rows = lines.map(line => line.split("|").map(cell => cell.trim()).filter((_, idx) => idx > 0 && idx < line.split("|").length - 1));
        return (
          <div key={i} className="overflow-x-auto my-4 border border-[#2E2C24] rounded-xl font-sans">
            <table className="min-w-full divide-y divide-[#2E2C24]">
              <thead className="bg-[#1E1D18]">
                <tr>
                  {rows[0].map((cell, idx) => (
                    <th key={idx} className="px-4 py-3 text-left text-[10px] uppercase font-bold tracking-wider text-[#A1917C]">
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-[#161511] divide-y divide-[#2E2C24] text-xs text-[#BCB9AB]">
                {rows.slice(2).map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-[#1E1D18]">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-4 py-3 whitespace-pre-wrap font-light">
                        {cell.replace("❌", "🔴 ").replace("⚡", "🟢 ").replace("📉", "🟢 ").replace("🧠", "🌟 ")}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      // Lists
      if (para.startsWith("* ") || para.startsWith("- ")) {
        return (
          <ul key={i} className="list-disc pl-5 my-3 text-sm text-[#BCB9AB] font-sans font-light space-y-1.5">
            {para.split("\n").map((li, liIdx) => (
              <li key={liIdx}>{li.replace("* ", "").replace("- ", "")}</li>
            ))}
          </ul>
        );
      }
      // Regular text
      return (
        <p key={i} className="text-sm font-sans font-light leading-relaxed text-[#BCB9AB] my-2">
          {para}
        </p>
      );
    });
  };

  return (
    <div className="bg-[#1C1A14] border border-[#2C2922] rounded-2xl overflow-hidden transition-all duration-300 shadow-sm md:shadow hover:shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 px-6 bg-[#211F18] border-b border-[#2C2922] cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#28261F] flex items-center justify-center text-[#C05E35] border border-[#3C382F]">
            {icon}
          </div>
          <h3 className="font-serif font-medium text-base text-[#FAF9F5]">{title}</h3>
        </div>
        <ChevronDown size={18} className={`text-[#81725E] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="p-6 overflow-y-auto max-h-[800px] divide-y divide-[#2D2A22]/45">
          {formatText(content)}
        </div>
      )}
    </div>
  );
}

export default function ArchitectDashboard() {
  const [activeTab, setActiveTab] = useState<"strategy" | "system" | "ai" | "distribution">("strategy");

  return (
    <div className="h-full bg-[#11100D] text-[#E6E4D9] flex flex-col overflow-hidden">
      
      {/* 1. Technical dashboard top banner */}
      <div className="bg-[#1C1A14] border-b border-[#2A2720] py-4 px-6 shrink-0 flex justify-between items-center">
        <div>
          <span className="text-[10px] tracking-[0.25em] font-sans uppercase font-bold text-[#C6AB90]">FOUNDER CONSULTING UNIT</span>
          <h1 className="text-xl font-serif text-[#FAF9F5] mt-1 font-light tracking-wide flex items-center gap-2">
            <Activity size={18} className="text-[#C05E35] animate-pulse" />
            <span>Smart Wardrobe Strategy Console</span>
          </h1>
        </div>
        <div className="bg-[#24211A] text-[#BCB9AB] py-1 px-3 rounded-lg text-[10px] font-mono border border-[#3A352B]">
          ARCH: VER 3.1 • STATUS: OPTIMIZED
        </div>
      </div>

      {/* 2. Top-level horizontal routing controllers */}
      <div className="bg-[#161511] px-6 py-3 border-b border-[#2A2720]/80 flex gap-2 overflow-x-auto shrink-0 scrollbar-none">
        <button
          onClick={() => setActiveTab("strategy")}
          className={`px-4 py-2 rounded-xl text-xs font-medium font-sans tracking-wide shrink-0 inline-flex items-center gap-2 border transition-all ${
            activeTab === "strategy"
              ? "bg-[#C05E35] border-[#C05E35] text-white"
              : "bg-[#211F18] border-[#2C2922] text-[#A1917C] hover:bg-[#2C2922]"
          }`}
        >
          <TrendingUp size={13} />
          <span>Product & Strategy</span>
        </button>

        <button
          onClick={() => setActiveTab("system")}
          className={`px-4 py-2 rounded-xl text-xs font-medium font-sans tracking-wide shrink-0 inline-flex items-center gap-2 border transition-all ${
            activeTab === "system"
              ? "bg-[#C05E35] border-[#C05E35] text-white"
              : "bg-[#211F18] border-[#2C2922] text-[#A1917C] hover:bg-[#2C2922]"
          }`}
        >
          <Database size={13} />
          <span>Databases & Backend</span>
        </button>

        <button
          onClick={() => setActiveTab("ai")}
          className={`px-4 py-2 rounded-xl text-xs font-medium font-sans tracking-wide shrink-0 inline-flex items-center gap-2 border transition-all ${
            activeTab === "ai"
              ? "bg-[#C05E35] border-[#C05E35] text-white"
              : "bg-[#211F18] border-[#2C2922] text-[#A1917C] hover:bg-[#2C2922]"
          }`}
        >
          <Cpu size={13} />
          <span>AI & RAG Engine</span>
        </button>

        <button
          onClick={() => setActiveTab("distribution")}
          className={`px-4 py-2 rounded-xl text-xs font-medium font-sans tracking-wide shrink-0 inline-flex items-center gap-2 border transition-all ${
            activeTab === "distribution"
              ? "bg-[#C05E35] border-[#C05E35] text-white"
              : "bg-[#211F18] border-[#2C2922] text-[#A1917C] hover:bg-[#2C2922]"
          }`}
        >
          <Code size={13} />
          <span>API & Distribution</span>
        </button>
      </div>

      {/* 3. Tab content list scrolling window */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        
        {/* CATEGORY 1: STRATEGY & ROADMAPS */}
        {activeTab === "strategy" && (
          <div className="space-y-6 max-w-4xl mx-auto">
            <h2 className="text-xs uppercase tracking-widest text-[#9A8A73] font-semibold flex items-center gap-2">
              <Clock size={12} className="text-[#C05E35]" /> Core Growth & Proposition Matrix
            </h2>
            <SectionCard
              id="roadmap"
              title="1. Product Roadmap (MVP to v3)"
              icon={<Clock size={20} />}
              content={STRATEGY_ROADMAP}
            />
            <SectionCard
              id="usp"
              title="2. Unique Selling Proposition (USP)"
              icon={<Bookmark size={20} />}
              content={UNIQUE_SELLING_PROP}
            />
            <SectionCard
              id="journey"
              title="3. User Journey & Activation Flows"
              icon={<TrendingUp size={20} />}
              content={USER_JOURNEY_FLOW}
            />
            <SectionCard
              id="prioritization"
              title="4. MoSCoW Feature Prioritization"
              icon={<CheckCircle size={20} />}
              content={FEATURE_PRIORITIZATION}
            />
          </div>
        )}

        {/* CATEGORY 2: DATABASES & MICROSERVICES */}
        {activeTab === "system" && (
          <div className="space-y-6 max-w-4xl mx-auto">
            <h2 className="text-xs uppercase tracking-widest text-[#9A8A73] font-semibold flex items-center gap-2">
              <Database size={12} className="text-[#C05E35]" /> Full SQL Schemas & Enterprise Java Ecosystems
            </h2>
            <SectionCard
              id="schema"
              title="5. PostgreSQL 16 DDL Schemas & Spatial Indexing"
              icon={<Database size={20} />}
              content={DATABASE_SCHEMA}
            />
            <SectionCard
              id="backend"
              title="6. Spring Boot Microservices Orchestration"
              icon={<FileText size={20} />}
              content={BACKEND_ARCHITECTURE}
            />
          </div>
        )}

        {/* CATEGORY 3: AI & RAG COMPILERS */}
        {activeTab === "ai" && (
          <div className="space-y-6 max-w-4xl mx-auto">
            <h2 className="text-xs uppercase tracking-widest text-[#9A8A73] font-semibold flex items-center gap-2">
              <Cpu size={12} className="text-[#C05E35]" /> Clothing Vision Analysis & pgvector similarity search
            </h2>
            <SectionCard
              id="ai_core"
              title="7. AI Architecture & Fashion RAG Engine"
              icon={<Cpu size={20} />}
              content={AI_ARCHITECTURE}
            />
            <SectionCard
              id="clean_image_engine"
              title="8. Visual Isolation & Clean Image Engine (SAM-2 + Spring Boot)"
              icon={<Sparkles size={20} />}
              content={CLEAN_IMAGE_ENGINE_BLUEPRINT}
            />
            <SectionCard
              id="tech_stack"
              title="9. Tech Stack Specifications"
              icon={<Code size={20} />}
              content={TECH_STACK}
            />
          </div>
        )}

        {/* CATEGORY 4: APIS & GTM */}
        {activeTab === "distribution" && (
          <div className="space-y-6 max-w-4xl mx-auto">
            <h2 className="text-xs uppercase tracking-widest text-[#9A8A73] font-semibold flex items-center gap-2">
              <DollarSign size={12} className="text-[#C05E35]" /> Production Payloads & Airport launch loops
            </h2>
            <SectionCard
              id="api_design"
              title="9. API Specification & Payloads"
              icon={<Code size={20} />}
              content={API_DESIGN}
            />
            <SectionCard
              id="monetization"
              title="10. Monetization Strategy & Checkedbag offsets"
              icon={<DollarSign size={20} />}
              content={MONETIZATION_STRATEGY}
            />
            <SectionCard
              id="brand_names"
              title="11. Brand Names & Quiet Luxury nomenclature"
              icon={<Tag size={20} />}
              content={BRAND_NAME_IDEAS}
            />
            <SectionCard
              id="launch"
              title="12. Launch & Travel-Geofenced Drops"
              icon={<TrendingUp size={20} />}
              content={LAUNCH_STRATEGY}
            />
          </div>
        )}

      </div>

      {/* 4. Console Bottom Bar */}
      <div className="bg-[#1C1A14] border-t border-[#2A2720] py-3.5 px-6 shrink-0 flex justify-between items-center text-xs text-[#9B8F80]">
        <p>&copy; {new Date().getFullYear()} Moda Startups Inc. All architectures are ready for cloud execution.</p>
        <p className="font-mono text-[10px]">Coded forayushsoni1296@gmail.com</p>
      </div>

    </div>
  );
}
