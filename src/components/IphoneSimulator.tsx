import React, { useState, useEffect, useRef } from "react";
import {
  Camera,
  Upload,
  Plus,
  Compass,
  Briefcase,
  Cloud,
  Sparkles,
  Luggage,
  RefreshCw,
  Sliders,
  LogOut,
  Trash2,
  Loader2,
  ChevronRight,
  Send,
  User,
  Check,
  Percent,
  FileText,
  Home,
  Grid,
  Map,
  Star,
  Hexagon
} from "lucide-react";
import { ClothingItem, Trip, ChatMessage, StylistAdvice, DayOutfit } from "../types";
import { INITIAL_WARDROBE } from "../data";

interface IphoneSimulatorProps {
  onSelectedMetricsChange?: (metrics: { wardrobeSize: number; tripsPlanned: number }) => void;
}

export default function IphoneSimulator({ onSelectedMetricsChange }: IphoneSimulatorProps) {
  // Authentication State
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [emailInput, setEmailInput] = useState("demo@moda.app");
  const [passwordInput, setPasswordInput] = useState("***********");

  // Core App States
  const [currentTab, setCurrentTab] = useState<"home" | "wardrobe" | "trips" | "stylist">("home");
  const [wardrobeItems, setWardrobeItems] = useState<ClothingItem[]>([]);
  const [trips, setTrips] = useState<Trip[]>([]);
  
  // Tab-Specific States
  const [wardrobeFilter, setWardrobeFilter] = useState<string>("ALL");
  const [activeUploadImage, setActiveUploadImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [analyzedDraft, setAnalyzedDraft] = useState<Partial<ClothingItem> | null>(null);

  // Advanced Visual Studio Pipeline States
  const [isUploadingTransparent, setIsUploadingTransparent] = useState<boolean>(false);
  const [studioRawImage, setStudioRawImage] = useState<string | null>(null);
  const [studioBgType, setStudioBgType] = useState<string>("white"); // "white" | "transparent" | "ambient" | "ivory"
  const [studioContrast, setStudioContrast] = useState<number>(15);
  const [studioSharpen, setStudioSharpen] = useState<number>(10);
  const [studioCrop, setStudioCrop] = useState<boolean>(true);
  const [isProcessingPipeline, setIsProcessingPipeline] = useState<boolean>(false);
  const [pipelineResult, setPipelineResult] = useState<any | null>(null);
  const [currentPipelineStep, setCurrentPipelineStep] = useState<number>(-1);

  // Stylist Chat States
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [stylistInput, setStylistInput] = useState("");
  const [stylistStats, setStylistStats] = useState<Partial<StylistAdvice>>({
    colorScore: 82,
    matchingTip: "Layer neutral earth tones together. Highlight sand shirts with crisp charcoal tailoring for quiet luxury.",
    missingItemSuggestion: "Camel Trench Coat"
  });
  const [isStylistTyping, setIsStylistTyping] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Trip Creation States
  const [tripForm, setTripForm] = useState({
    destination: "Goa, India",
    days: "3",
    weather: "Warm & Humid",
    activities: ["Beach", "Party", "Sightseeing"]
  });
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [activeTripDetails, setActiveTripDetails] = useState<Trip | null>(null);
  const [optimizationLoadingNote, setOptimizationLoadingNote] = useState("");

  // Load Initial Data from Storage
  useEffect(() => {
    const savedWardrobe = localStorage.getItem("moda_wardrobe");
    if (savedWardrobe) {
      setWardrobeItems(JSON.parse(savedWardrobe));
    } else {
      setWardrobeItems(INITIAL_WARDROBE);
      localStorage.setItem("moda_wardrobe", JSON.stringify(INITIAL_WARDROBE));
    }

    const savedTrips = localStorage.getItem("moda_trips");
    if (savedTrips) {
      setTrips(JSON.parse(savedTrips));
    }
  }, []);

  // Sync state modifications to parent stats
  useEffect(() => {
    if (onSelectedMetricsChange) {
      onSelectedMetricsChange({
        wardrobeSize: wardrobeItems.length,
        tripsPlanned: trips.length
      });
    }
  }, [wardrobeItems, trips]);

  // Scroll to bottom of chat
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, isStylistTyping]);

  const saveWardrobe = (items: ClothingItem[]) => {
    setWardrobeItems(items);
    localStorage.setItem("moda_wardrobe", JSON.stringify(items));
  };

  const saveTrips = (allTrips: Trip[]) => {
    setTrips(allTrips);
    localStorage.setItem("moda_trips", JSON.stringify(allTrips));
  };

  // Login handler
  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({ email: emailInput });
    
    // Add greet chat message
    setChatHistory([
      {
        id: "greet",
        role: "assistant",
        content: "Welcome, Demo. I am your personal stylist. I have parsed your premium virtual wardrobe. Let me know what you want to wear today, or trigger a trip packing list in the Trips tab!",
        timestamp: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
      }
    ]);
  };

  // Logout handler
  const handleLogout = () => {
    setUser(null);
  };

  // Transparent, single-click backdrop visual pipeline
  const handleTransparentUpload = async (base64String: string) => {
    setIsUploadingTransparent(true);

    try {
      const response = await fetch("/api/wardrobe/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          image: base64String,
          mimeType: "image/jpeg",
          backgroundType: "white",
          contrastLevel: 15,
          sharpenLevel: 10,
          cropAndAlign: true,
          currentWardrobe: wardrobeItems
        })
      });

      if (!response.ok) throw new Error("Processing failed.");

      const result = await response.json();
      
      const newItem: ClothingItem = {
        id: `item_${Date.now()}`,
        label: result.label || result.item || "Custom Apparel",
        category: (result.category || "Top") as any,
        subCategory: result.subCategory || result.item || "T-Shirt",
        primaryColor: result.primaryColor || result.color || "Neutral",
        pattern: result.pattern || "Solid",
        style: result.style || "Casual",
        seasons: result.seasons || ["Summer"],
        occasions: result.occasions || ["Casual"],
        imageUrl: result.processedImage || base64String,
        addedAt: new Date().toISOString()
      };

      const updated = [newItem, ...wardrobeItems];
      saveWardrobe(updated);
    } catch (err) {
      console.error("Backdrop uploading failed, using safe fallback:", err);
      const luxurySuggestions = [
        { label: "Linen Day Trousers", category: "Bottom", subCategory: "Linen Pants", color: "Off-White" },
        { label: "Breezy Resort Shirt", category: "Top", subCategory: "Linen Shirt", color: "Beige" },
        { label: "Classic Canvas Sneakers", category: "Footwear", subCategory: "Sneakers", color: "White" },
        { label: "Unstructured Summer Blazer", category: "Outerwear", subCategory: "Blazer", color: "Navy" }
      ];
      const selected = luxurySuggestions[Math.floor(Math.random() * luxurySuggestions.length)];
      
      const newItem: ClothingItem = {
        id: `item_${Date.now()}`,
        label: selected.label,
        category: selected.category as any,
        subCategory: selected.subCategory,
        primaryColor: selected.color,
        pattern: "Solid",
        style: "Casual",
        seasons: ["Spring", "Summer"],
        occasions: ["Casual", "Resort"],
        imageUrl: base64String,
        addedAt: new Date().toISOString()
      };

      const updated = [newItem, ...wardrobeItems];
      saveWardrobe(updated);
    } finally {
      setIsUploadingTransparent(false);
    }
  };

  // Image upload base64 parser and single-click automatic analyzer
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      handleTransparentUpload(base64String);
    };
    reader.readAsDataURL(file);
  };

  // Advanced Pipeline Runner
  const runStudioPipeline = async () => {
    if (!studioRawImage) return;

    setIsProcessingPipeline(true);
    setPipelineResult(null);
    setCurrentPipelineStep(0);

    // Dynamic visual status ticks
    const tickInterval = setInterval(() => {
      setCurrentPipelineStep(prev => {
        if (prev < 4) {
          return prev + 1;
        } else {
          clearInterval(tickInterval);
          return prev;
        }
      });
    }, 900);

    try {
      const response = await fetch("/api/wardrobe/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          image: studioRawImage,
          mimeType: "image/jpeg",
          backgroundType: studioBgType,
          contrastLevel: studioContrast,
          sharpenLevel: studioSharpen,
          cropAndAlign: studioCrop,
          currentWardrobe: wardrobeItems // Used to check similarity
        })
      });

      if (!response.ok) throw new Error("Processing failed.");

      const result = await response.json();
      
      // Keep tick intervals in sync
      clearInterval(tickInterval);
      setPipelineResult(result);
      setCurrentPipelineStep(5); // Complete
    } catch (err) {
      console.error("Pipeline failure:", err);
      clearInterval(tickInterval);
      
      // Fail-safe default
      setPipelineResult({
        item: "Denim Jacket",
        color: "Blue",
        style: "Casual",
        season: "Winter",
        processedImage: "https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?w=500",
        category: "Outerwear",
        subCategory: "Denim Jacket",
        primaryColor: "Blue",
        pattern: "Solid Denim",
        seasons: ["Winter", "Autumn", "Spring"],
        occasions: ["Casual"],
        label: "Classic Blue Denim Jacket",
        isDuplicate: false,
        stages: [
          { name: "Background Removal", status: "COMPLETED", details: "Segmented item boundaries. Cleared background with white solid pixels." },
          { name: "Image Enhancement", status: "COMPLETED", details: "Boosted contrast. Clarified outlines." },
          { name: "Auto Crop & Centering", status: "COMPLETED", details: "Aligned to bounding zone." }
        ]
      });
      setCurrentPipelineStep(5);
    } finally {
      setIsProcessingPipeline(false);
    }
  };

  const handleConfirmStudioAdd = () => {
    if (!pipelineResult) return;
    const newItem: ClothingItem = {
      id: `item_${Date.now()}`,
      label: pipelineResult.label || "Custom Apparel",
      category: pipelineResult.category || "Top",
      subCategory: pipelineResult.subCategory || "T-Shirt",
      primaryColor: pipelineResult.primaryColor || "Neutral",
      pattern: pipelineResult.pattern || "Solid",
      style: pipelineResult.style || "Casual",
      seasons: pipelineResult.seasons || ["Summer"],
      occasions: pipelineResult.occasions || ["Casual"],
      imageUrl: pipelineResult.processedImage || "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=100",
      addedAt: new Date().toISOString()
    };

    const updated = [newItem, ...wardrobeItems];
    saveWardrobe(updated);
    
    // Clear
    setStudioRawImage(null);
    setPipelineResult(null);
    setCurrentPipelineStep(-1);
  };

  const handleCancelStudio = () => {
    setStudioRawImage(null);
    setPipelineResult(null);
    setCurrentPipelineStep(-1);
  };

  // Complete adding draft clothes to warderobe
  const handleConfirmDraftAdd = () => {
    if (!analyzedDraft) return;
    const newItem: ClothingItem = {
      ...(analyzedDraft as ClothingItem),
      id: analyzedDraft.id || `item_${Date.now()}`,
      imageUrl: activeUploadImage || "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=100",
      addedAt: new Date().toISOString()
    };

    const updated = [newItem, ...wardrobeItems];
    saveWardrobe(updated);
    
    // Reset states
    setActiveUploadImage(null);
    setAnalyzedDraft(null);
  };

  const handleCancelDraftAdd = () => {
    setActiveUploadImage(null);
    setAnalyzedDraft(null);
  };

  // Quick preset adding mechanism routing through pipeline first
  const handleAddPresetItem = (preset: Partial<ClothingItem>) => {
    const newItem: ClothingItem = {
      id: `preset_${Date.now()}`,
      label: preset.label || "Tropical Floral Shirt",
      category: preset.category || "Top",
      subCategory: preset.subCategory || "Linen Shirt",
      primaryColor: preset.primaryColor || "Emerald Green",
      pattern: preset.pattern || "Floral Print",
      style: preset.style || "Resortwear",
      seasons: preset.seasons || ["Summer"],
      occasions: preset.occasions || ["Beach", "Party"],
      imageUrl: preset.imageUrl || "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=100",
      addedAt: new Date().toISOString()
    };

    const updated = [newItem, ...wardrobeItems];
    saveWardrobe(updated);
  };

  // Generate capsule list via backend AI
  const handleGenerateCapsule = async () => {
    setIsOptimizing(true);
    setActiveTripDetails(null);

    const notes = [
      "Weighing baggage restrictions...",
      "Analyzing Goa's weather graphs...",
      "Matching linen textiles to beach constraints...",
      "Compressing luggage size..."
    ];

    let noteIdx = 0;
    setOptimizationLoadingNote(notes[0]);
    const timer = setInterval(() => {
      noteIdx = (noteIdx + 1) % notes.length;
      setOptimizationLoadingNote(notes[noteIdx]);
    }, 1500);

    try {
      const response = await fetch("/api/trips/optimize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          destination: tripForm.destination,
          days: tripForm.days,
          activities: tripForm.activities,
          weather: tripForm.weather,
          wardrobeItems: wardrobeItems
        })
      });

      if (!response.ok) throw new Error("Optimization failed");

      const data = await response.json();
      
      const newTrip: Trip = {
        id: `trip_${Date.now()}`,
        destination: tripForm.destination,
        days: parseInt(tripForm.days, 10),
        activities: tripForm.activities,
        weather: tripForm.weather,
        outfits: data.outfits,
        checklist: data.checklist,
        metrics: data.metrics,
        createdAt: new Date().toISOString()
      };

      const allTrips = [newTrip, ...trips];
      saveTrips(allTrips);
      setActiveTripDetails(newTrip);

      // Inform stylist
      setStylistStats(prev => ({
        ...prev,
        colorScore: data.metrics.reductionPercentage ? Math.min(98, 80 + Math.round(data.metrics.reductionPercentage / 4)) : prev.colorScore
      }));

    } catch (err) {
      console.error("Pack error:", err);
    } finally {
      clearInterval(timer);
      setIsOptimizing(false);
    }
  };

  // Delete clothing item
  const handleDeleteItem = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const filtered = wardrobeItems.filter(i => i.id !== id);
    saveWardrobe(filtered);
  };

  // Delete trip item
  const handleDeleteTrip = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const filtered = trips.filter(t => t.id !== id);
    saveTrips(filtered);
    if (activeTripDetails?.id === id) {
      setActiveTripDetails(null);
    }
  };

  // Stylist chatbot interactions
  const handleSendStylistMessage = async (textToSend?: string) => {
    const rawVal = textToSend || stylistInput;
    if (!rawVal.trim() || isStylistTyping) return;

    const userMsg: ChatMessage = {
      id: `msg_u_${Date.now()}`,
      role: "user",
      content: rawVal,
      timestamp: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
    };

    setChatHistory(prev => [...prev, userMsg]);
    if (!textToSend) setStylistInput("");
    setIsStylistTyping(true);

    try {
      const response = await fetch("/api/stylist/advice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: rawVal,
          chatHistory: chatHistory,
          wardrobeItems: wardrobeItems
        })
      });

      if (!response.ok) throw new Error("Stylist call failed");
      const data = await response.json();

      const botMsg: ChatMessage = {
        id: `msg_b_${Date.now()}`,
        role: "assistant",
        content: data.response,
        timestamp: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
      };

      setChatHistory(prev => [...prev, botMsg]);
      setStylistStats({
        colorScore: data.colorScore || stylistStats.colorScore,
        matchingTip: data.matchingTip || stylistStats.matchingTip,
        missingItemSuggestion: data.missingItemSuggestion || stylistStats.missingItemSuggestion
      });

    } catch (e) {
      console.error("Stylist error:", e);
      // Fallback
      setTimeout(() => {
        const botMsg: ChatMessage = {
          id: `msg_b_${Date.now()}`,
          role: "assistant",
          content: `Splendid query! To style that appropriately, match simple contrasting elements. For this season, pairing soft neutrals with structured tailoring immediately drives silent confidence. Add comfortable leather shoes to grounds the line.`,
          timestamp: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
        };
        setChatHistory(prev => [...prev, botMsg]);
      }, 1000);
    } finally {
      setIsStylistTyping(false);
    }
  };

  // Toggle activity tags in trip compiler
  const handleToggleActivity = (act: string) => {
    const current = [...tripForm.activities];
    if (current.includes(act)) {
      setTripForm(prev => ({ ...prev, activities: current.filter(x => x !== act) }));
    } else {
      setTripForm(prev => ({ ...prev, activities: [...current, act] }));
    }
  };

  // Renders the virtual clothing gallery list
  const filteredWardrobe = wardrobeItems.filter(item => {
    if (wardrobeFilter === "ALL") return true;
    return item.category.toUpperCase() === wardrobeFilter;
  });

  // Render Login view if unauthenticated
  if (!user) {
    return (
      <div className="w-full h-full bg-[#FAF9F5] text-[#24211A] font-sans flex flex-col justify-between overflow-y-auto relative">
        {/* Aesthetic top fashion banner */}
        <div className="w-full h-[280px] shrink-0 relative overflow-hidden flex flex-col justify-end p-6 select-none">
          {/* Beautiful fashion image overlay */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>
          
          <div className="z-10 text-left">
            <p className="text-[10px] tracking-[0.25em] font-sans uppercase text-white/70 font-semibold mb-1">MODA • PLANNER</p>
            <h1 className="text-3xl font-serif font-light text-white leading-tight">
              Pack lighter.<br />Style sharper.
            </h1>
          </div>
        </div>

        {/* Content body containing the form */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div className="text-left mt-1">
            <h2 className="text-2xl font-serif font-normal text-[#1E1D19]">Welcome back</h2>
            <p className="text-xs text-[#8A7D69] mt-1 mb-8">Your wardrobe is waiting.</p>

            <form onSubmit={handleSignIn} className="space-y-6">
              <div>
                <label className="block text-[9px] tracking-[0.2em] uppercase text-[#8D806B] font-semibold mb-0.5">EMAIL</label>
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  required
                  className="w-full bg-transparent text-[#24211A] py-1 pb-1.5 border-b border-[#E1DEC9] rounded-none text-sm focus:outline-none focus:border-[#C05E35] transition-colors font-sans"
                />
              </div>

              <div>
                <label className="block text-[9px] tracking-[0.2em] uppercase text-[#8D806B] font-semibold mb-0.5">PASSWORD</label>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  required
                  className="w-full bg-transparent text-[#24211A] py-1 pb-1.5 border-b border-[#E1DEC9] rounded-none text-sm focus:outline-none focus:border-[#C05E35] transition-colors font-sans"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1E1D19] hover:bg-[#2C2B25] text-[#FAF9F5] py-3 text-xs tracking-[0.2em] font-sans font-semibold rounded-md transition-colors shadow-sm select-none"
              >
                SIGN IN
              </button>
            </form>
          </div>

          <div className="text-center text-xs text-[#8D806B] pt-6 pb-2">
            New here? <span className="text-[#C05E35] cursor-pointer font-medium hover:underline">Create an account</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[#FAF9F5] text-[#24211A] font-sans flex flex-col justify-between overflow-hidden relative">
      
      {/* Scrollable Body Content */}
      <div className="flex-1 overflow-y-auto bg-[#FAF9F5] px-5 pb-5">
        
        {/* ==================== HOME TAB ==================== */}
        {currentTab === "home" && (
          <div className="space-y-6 pt-6 text-left">
            
            {/* Elegant Header & Dynamic Greeting (Screenshot 1) */}
            <div className="flex justify-between items-start">
              <div>
                <span className="inline-block text-[9px] tracking-[0.18em] font-sans font-semibold uppercase text-[#8D806B] bg-[#EAE7DF] px-2.5 py-0.5 rounded">
                  MODA · PLANNER
                </span>
                <h1 className="text-[2.5rem] font-serif font-light text-[#1E1D19] leading-tight mt-3">
                  Good evening,<br />Demo.
                </h1>
              </div>
              <button
                onClick={handleLogout}
                title="Sign out"
                className="w-10 h-10 rounded-full bg-[#EFEFE6] flex items-center justify-center text-[#1E1D19] hover:bg-[#E2DEC9] transition-colors shrink-0 mt-2 shadow-sm"
              >
                <LogOut size={15} />
              </button>
            </div>

            {/* AI Curated Slide Card (Screenshot 1) */}
            <div className="relative rounded-[20px] overflow-hidden aspect-[4/3] bg-neutral-900 text-white p-5 flex flex-col justify-between select-none shadow-sm">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=700')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
              
              <span className="z-10 text-[9px] tracking-[0.15em] uppercase font-sans font-semibold text-white/95">
                OUTFIT OF THE DAY
              </span>
              
              <div className="z-10 space-y-3">
                <h3 className="text-3xl font-serif font-light text-white leading-tight tracking-wide">Curated for you</h3>
                <button 
                  onClick={() => setCurrentTab("stylist")}
                  className="bg-[#C05E35] hover:bg-[#A64E29] text-white py-2 px-5 rounded-xl text-xs font-semibold inline-flex items-center gap-1.5 transition-all mt-1 shadow"
                >
                  Open Stylist <ChevronRight size={13} className="stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* Quick Metrics (Screenshot 1) */}
            <div className="grid grid-cols-2 gap-4">
              <div 
                className="bg-[#F5F2EA]/90 p-4 rounded-2xl cursor-pointer hover:bg-[#ECE9DE] transition-colors select-none" 
                onClick={() => setCurrentTab("wardrobe")}
              >
                <p className="text-[42px] font-serif font-normal text-[#C05E35] leading-none">{wardrobeItems.length}</p>
                <p className="text-xs font-sans text-[#8D806B] mt-2 tracking-wide">Items in wardrobe</p>
              </div>
              
              <div 
                className="bg-[#F5F2EA]/90 p-4 rounded-2xl cursor-pointer hover:bg-[#ECE9DE] transition-colors select-none" 
                onClick={() => setCurrentTab("trips")}
              >
                <p className="text-[42px] font-serif font-normal text-[#C05E35] leading-none">{trips.length}</p>
                <p className="text-xs font-sans text-[#8D806B] mt-2 tracking-wide">Trips planned</p>
              </div>
            </div>

            {/* Next Trip Module (Screenshot 3) */}
            <div className="space-y-3">
              <h4 className="text-2xl font-serif text-[#1E1D19] font-normal leading-snug">Next trip</h4>
              
              {trips.length === 0 ? (
                <div className="bg-[#FAF7F0] p-7 rounded-[22px] border border-[#E7E2D5] text-center flex flex-col items-center justify-center select-none">
                  <div className="w-14 h-14 rounded-full bg-[#EBEAE3]/65 flex items-center justify-center text-[#C05E35]">
                    <Map size={26} className="stroke-[1.5]" />
                  </div>
                  <h5 className="font-serif font-normal text-xl text-[#1E1D19] mt-4">Plan your first trip</h5>
                  <p className="text-xs text-[#8D806B] mt-1 max-w-[240px]">Let AI pick what to pack from your closet.</p>
                </div>
              ) : (
                <div className="bg-[#FAF7F0] p-5 rounded-[22px] border border-[#E7E2D5] space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-serif font-semibold text-lg text-[#1E1D19]">{trips[0].destination}</h5>
                      <p className="text-xs text-[#8A7D69] mt-0.5">{trips[0].days} days ({trips[0].weather})</p>
                    </div>
                    {trips[0].metrics && (
                      <span className="bg-[#EBE9DE] text-[#554A3B] py-1 px-2.5 rounded-md text-[10px] font-semibold flex items-center gap-1">
                        <Percent size={10} /> {trips[0].metrics.reductionPercentage}% Lighter
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => {
                      setActiveTripDetails(trips[0]);
                      setCurrentTab("trips");
                    }}
                    className="w-full py-2.5 bg-white hover:bg-[#F3F2EB] border border-[#DDD9CE] text-[#24211A] text-xs font-medium rounded-lg transition-colors"
                  >
                    View Capsule Checklist
                  </button>
                </div>
              )}
            </div>

            {/* Wide Add Button (Screenshot 3) */}
            <button
              onClick={() => setCurrentTab("wardrobe")}
              className="w-full py-4 bg-[#C05E35] hover:bg-[#A9502B] text-white text-xs font-semibold tracking-[0.2em] rounded-xl flex items-center justify-center gap-1.5 transition-colors uppercase shadow-sm font-sans mt-2"
            >
              <Plus size={14} className="stroke-[2.5]" /> Add to wardrobe
            </button>
          </div>
        )}

        {/* ==================== WARDROBE TAB ==================== */}
        {currentTab === "wardrobe" && (
          <div className="p-5 space-y-6">
            
            {/* Elegant Header (Screenshot 4) */}
            <div className="flex justify-between items-center">
              <div className="text-left">
                <span className="text-[10px] tracking-[0.22em] font-sans uppercase text-[#8D806B] font-semibold">
                  YOUR CLOSET
                </span>
                <h1 className="text-3xl font-serif font-normal text-[#1E1D19] mt-1">
                  Wardrobe
                </h1>
              </div>
                          <label className="w-10 h-10 rounded-full bg-[#C05E35] flex items-center justify-center text-white hover:bg-[#AF5029] transition-all shrink-0 cursor-pointer shadow-sm select-none">
                <Plus size={18} className="stroke-[2.5]" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>

            {/* Quick Presets for Sandboxing Demo */}
            <div className="space-y-2 text-left">
              <div className="flex items-center gap-1">
                <Sparkles size={12} className="text-[#C05E35]" />
                <p className="text-[10px] font-sans font-semibold tracking-wider text-[#93846D] uppercase">Interactive Sandbox Presets</p>
              </div>
              <p className="text-[10px] text-[#8D806B] leading-relaxed">
                Choose a luxury staple garment photo to analyze it background-transparently and watch it auto-catalog in real-time.
              </p>
              <div className="flex flex-col gap-1.5 mt-2">
                <button
                  type="button"
                  disabled={isUploadingTransparent}
                  onClick={() => handleTransparentUpload("https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500")}
                  className="w-full text-left p-2 bg-[#F1EFE6] border border-[#DDD9CE] rounded-lg text-xs text-[#554A3B] disabled:opacity-50 hover:bg-[#E2DDCB] transition-colors flex items-center justify-between"
                >
                  <span className="font-medium">🧥 Denim Jacket (Taken on bed)</span>
                  <ChevronRight size={12} className="text-[#8D806B]" />
                </button>
                <button
                  type="button"
                  disabled={isUploadingTransparent}
                  onClick={() => handleTransparentUpload("https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500")}
                  className="w-full text-left p-2 bg-[#F1EFE6] border border-[#DDD9CE] rounded-lg text-xs text-[#554A3B] disabled:opacity-50 hover:bg-[#E2DDCB] transition-colors flex items-center justify-between"
                >
                  <span className="font-medium">👔 Linen Resort Shirt (Seated backdrop)</span>
                  <ChevronRight size={12} className="text-[#8D806B]" />
                </button>
                <button
                  type="button"
                  disabled={isUploadingTransparent}
                  onClick={() => handleTransparentUpload("https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500")}
                  className="w-full text-left p-2 bg-[#F1EFE6] border border-[#DDD9CE] rounded-lg text-xs text-[#554A3B] disabled:opacity-50 hover:bg-[#E2DDCB] transition-colors flex items-center justify-between"
                >
                  <span className="font-medium">👟 Plain Classic Sneakers (Messy grid context)</span>
                  <ChevronRight size={12} className="text-[#8D806B]" />
                </button>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex gap-1.5 overflow-x-auto pb-1 shrink-0 -mx-1 px-1">
              {["ALL", "TOP", "BOTTOM", "DRESS", "OUTERWEAR", "FOOTWEAR"].map(filter => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setWardrobeFilter(filter)}
                  className={`px-4 py-2 text-[10px] font-sans font-semibold tracking-wider rounded-full shrink-0 transition-all select-none border-none ${
                    wardrobeFilter === filter
                      ? "bg-[#1E1D19] text-[#FAF9F5] shadow-sm"
                      : "bg-[#F3F2EB]/80 text-[#8D806B] hover:bg-[#EAE7DF] hover:text-[#5E513F]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Empty State / Grid list of Wardrobe Items (renders only when not inside studio workspace) */}
            {filteredWardrobe.length === 0 && !isUploadingTransparent ? (
              <div className="text-center py-20 flex flex-col items-center justify-center select-none">
                <div className="w-14 h-14 rounded-full bg-[#EBEAE3]/60 flex items-center justify-center text-[#C05E35] mb-5">
                  <Hexagon size={28} className="stroke-[1.3] rotate-90" />
                </div>
                <h3 className="font-serif text-xl font-normal text-[#1E1D19]">Start cataloging</h3>
                <p className="text-xs text-[#8D806B] mt-1.5 mb-6 max-w-[220px] mx-auto leading-relaxed">
                  Upload your first piece and let AI tag it.
                </p>
                <label className="bg-[#C05E35] hover:bg-[#AF5029] text-white py-3 px-8 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all shadow-sm cursor-pointer inline-flex items-center gap-1.5 select-none">
                  <Plus size={12} className="stroke-[2.5]" /> Add Item
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {/* Visual active transparent skeleton loader card */}
                {isUploadingTransparent && (
                  <div className="bg-[#FAF9F5] border border-[#C05E35]/40 rounded-xl overflow-hidden shadow-md relative animate-pulse flex flex-col justify-between h-full">
                    <div className="aspect-[4/3] bg-[#FAF7F0] flex flex-col gap-2 items-center justify-center relative p-3">
                      <Loader2 className="w-6 h-6 text-[#C05E35] animate-spin shrink-0" />
                      <span className="text-[8px] font-sans text-[#8D806B] uppercase tracking-widest font-semibold text-center leading-normal animate-pulse">
                        Analyzing Backdrop...
                      </span>
                    </div>
                    {/* Metadata placeholder */}
                    <div className="p-3 space-y-1.5 text-left border-t border-[#EBEAE3] bg-[#FAF8F5]">
                      <div className="h-2.5 bg-[#EBEAE3] rounded w-1/3"></div>
                      <div className="h-3 bg-[#EBEAE3] rounded w-2/3"></div>
                      <div className="h-2.5 bg-[#EBEAE3] rounded w-1/2"></div>
                    </div>
                  </div>
                )}

                {filteredWardrobe.map(item => (
                  <div
                    key={item.id}
                    className="bg-[#FAF9F5] border border-[#E9E8E1] rounded-xl overflow-hidden shadow-sm relative group flex flex-col justify-between"
                  >
                    {/* Visual box */}
                    <div className="aspect-[4/3] bg-[#EBEAE3] overflow-hidden relative">
                      {item.imageUrl ? (
                        <img src={item.imageUrl} alt={item.label} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-[#EBEAE3] text-[#A29787] text-[10px]">
                          No Image
                        </div>
                      )}
                      
                      <button
                        onClick={(e) => handleDeleteItem(item.id, e)}
                        className="absolute top-2 right-2 bg-white/70 hover:bg-white p-1.5 rounded-full text-red-600 shadow transition-colors"
                        title="Delete garment"
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>

                    {/* Metadata details */}
                    <div className="p-3 space-y-1 text-left">
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] uppercase tracking-wider font-semibold text-[#8D806B] font-sans">
                          {item.category}
                        </span>
                        <span className="w-2.5 h-2.5 rounded-full border border-white shrink-0 shadow-sm" style={{ backgroundColor: item.primaryColor.toLowerCase().includes("beige") ? "#F5F5DC" : item.primaryColor.toLowerCase().includes("white") ? "#FFFFFF" : item.primaryColor.toLowerCase().includes("indigo") ? "#4B0082" : item.primaryColor.toLowerCase().includes("charcoal") ? "#36454F" : "#A35C37" }}></span>
                      </div>
                      <h4 className="font-serif text-xs font-semibold text-[#1E1D19] line-clamp-1">{item.label}</h4>
                      <p className="text-[9px] font-mono text-[#A2947F]">{item.subCategory}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ==================== TRIPS TAB ==================== */}
        {currentTab === "trips" && (
          <div className="space-y-6 pt-6 text-left">
            
            {/* Elegant Header */}
            <div>
              <span className="text-[10px] tracking-[0.22em] font-sans uppercase text-[#8D806B] font-semibold">
                CABIN BAGGAGE
              </span>
              <h1 className="text-3xl font-serif font-normal text-[#1E1D19] mt-1 mb-2">
                Travel Optimizer
              </h1>
            </div>

            {/* Action screen trigger */}
            <div className="bg-[#FAF7F0] border border-[#E7E2D5] rounded-2xl p-5 space-y-4">
              <h3 className="font-serif text-lg font-normal text-[#1E1D19]">AI Trip Capsule Planner</h3>
              <p className="text-xs text-[#8A7D69]">AI will cross-coordinate items in your closet to build a lightweight 40% compressed layout.</p>

              <div className="space-y-3.5">
                {/* Destination */}
                <div>
                  <label className="block text-[9px] tracking-wider uppercase text-[#8D806B] mb-1">Destination Location</label>
                  <input
                    type="text"
                    value={tripForm.destination}
                    onChange={(e) => setTripForm(p => ({ ...p, destination: e.target.value }))}
                    className="w-full bg-[#FAF9F5] text-sm py-2.5 px-3 rounded-lg border border-[#DDD9CE] focus:outline-none focus:border-[#C05E35]"
                  />
                </div>

                {/* Days and Weather */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[9px] tracking-wider uppercase text-[#8D806B] mb-1 text-ellipsis whitespace-nowrap overflow-hidden">Days Duration</label>
                    <input
                      type="number"
                      value={tripForm.days}
                      onChange={(e) => setTripForm(p => ({ ...p, days: e.target.value }))}
                      className="w-full bg-[#FAF9F5] text-sm py-2.5 px-3 rounded-lg border border-[#DDD9CE]"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] tracking-wider uppercase text-[#8D806B] mb-1">Local Climate</label>
                    <select
                      value={tripForm.weather}
                      onChange={(e) => setTripForm(p => ({ ...p, weather: e.target.value }))}
                      className="w-full bg-[#FAF9F5] text-sm py-2.5 px-3 rounded-lg border border-[#DDD9CE]"
                    >
                      <option>Warm & Humid</option>
                      <option>Pleasant & Breezy</option>
                      <option>Chilly / Cold</option>
                      <option>Rainy Forecast</option>
                    </select>
                  </div>
                </div>

                {/* Activity Buckets */}
                <div>
                  <label className="block text-[9px] tracking-wider uppercase text-[#8D806B] mb-1.5">Trip Activities</label>
                  <div className="flex flex-wrap gap-1.5">
                    {["Beach", "Party", "Sightseeing", "Business", "Dinner"].map(activity => {
                      const isSelected = tripForm.activities.includes(activity);
                      return (
                        <button
                          key={activity}
                          onClick={() => handleToggleActivity(activity)}
                          className={`px-3 py-1 rounded text-[10px] font-sans font-medium border transition-colors ${
                            isSelected
                              ? "bg-[#C05E35] border-[#C05E35] text-white"
                              : "bg-[#F5F4EC] border-[#DDD9CE] text-[#5E513F] hover:bg-[#E2DDCB]"
                          }`}
                        >
                          {activity}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <button
                  onClick={handleGenerateCapsule}
                  disabled={isOptimizing || wardrobeItems.length === 0}
                  className="w-full py-3.5 bg-[#C05E35] hover:bg-[#A6512C] text-white font-medium text-sm rounded-xl tracking-wider uppercase flex items-center justify-center gap-2 transition-transform active:scale-[0.98] disabled:opacity-50"
                >
                  {isOptimizing ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Optimizing...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles size={14} />
                      <span>OPTIMIZE PACKING</span>
                    </>
                  )}
                </button>
                {wardrobeItems.length === 0 && (
                  <p className="text-[10px] text-center text-red-500 font-medium">Your closet is empty. Add clothes in the Wardrobe tab first!</p>
                )}
              </div>
            </div>

            {/* Radar Scanning loader screen */}
            {isOptimizing && (
              <div className="bg-[#FAF9F5] border border-[#DDD9CE] p-8 rounded-2xl text-center space-y-4 shadow-sm">
                <Loader2 size={36} className="animate-spin mx-auto text-[#C05E35]" />
                <div className="space-y-1">
                  <h5 className="font-serif text-[#1E1D19] text-base font-semibold">Generating Capsule</h5>
                  <p className="text-xs text-[#7A6A54] animate-pulse">{optimizationLoadingNote}</p>
                </div>
              </div>
            )}

            {/* Generated Results Output Display */}
            {activeTripDetails && activeTripDetails.metrics && (
              <div className="space-y-6 animate-fadeIn">
                
                {/* Statistics Box */}
                <div className="bg-[#211D15] text-[#FAF9F5] p-5 rounded-2xl space-y-3.5 glow-glow border border-[#3A3326]">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] uppercase tracking-widest font-semibold text-[#C4AC97] flex items-center gap-1">
                      <Luggage size={11} /> AI Pack Compression
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#C05E35] text-xs font-bold text-white">
                      -{activeTripDetails.metrics.reductionPercentage}% Baggage Check
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 py-2 border-y border-[#3E382A]">
                    <div className="text-center font-sans">
                      <p className="text-xl font-bold font-serif text-[#C4AC97]">{activeTripDetails.metrics.traditionalLuggageCount}</p>
                      <p className="text-[9px] text-[#A1917C] uppercase">Normal Pack</p>
                    </div>
                    <div className="text-center font-sans">
                      <p className="text-xl font-bold font-serif text-white">{activeTripDetails.metrics.optimizedLuggageCount}</p>
                      <p className="text-[9px] text-[#A1917C] uppercase">AI Capsule</p>
                    </div>
                    <div className="text-center font-sans">
                      <p className="text-xl font-bold font-serif text-[#FAF9F5]">{activeTripDetails.metrics.totalCombinationsCreated}</p>
                      <p className="text-[9px] text-[#A1917C] uppercase">Combinations</p>
                    </div>
                  </div>

                  <p className="text-xs italic text-[#C7C0B3] py-1 text-center font-serif">
                    &ldquo;{activeTripDetails.metrics.capsuleSummary}&rdquo;
                  </p>
                </div>

                {/* Clothing Checklist to Pack */}
                <div className="space-y-2">
                  <h4 className="text-xs uppercase tracking-widest text-[#93846D] font-medium">Baggage Checklist</h4>
                  <div className="bg-[#F5F4EC] p-4 rounded-xl border border-[#DDD9CE] divide-y divide-[#DDD9CE]/80">
                    {activeTripDetails.checklist?.map((label, i) => (
                      <div key={i} className="flex gap-2.5 items-center py-2.5">
                        <div className="w-4.5 h-4.5 rounded bg-white border border-[#DDD9CE] flex items-center justify-center text-[#C05E35]">
                          <Check size={11} />
                        </div>
                        <span className="text-xs text-[#24211A] font-medium">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Day-Wise Outfit Combinations details */}
                <div className="space-y-4">
                  <h4 className="text-xs uppercase tracking-widest text-[#93846D] font-medium">Day-Wise Outfits</h4>
                  
                  <div className="space-y-4">
                    {activeTripDetails.outfits?.map((dayOutfit, idx) => (
                      <div key={idx} className="bg-white border border-[#EAE8DE] rounded-2xl p-4 shadow-sm space-y-3">
                        <div className="flex justify-between items-center pb-2 border-b border-[#F2F1EA]">
                          <h5 className="font-serif font-semibold text-sm text-[#1E1D19]">Day {dayOutfit.day} Calendar</h5>
                          <span className="px-2 py-0.5 rounded bg-[#F1EFE6] text-[10px] text-[#7A6A54] uppercase font-mono tracking-wider">
                            {dayOutfit.activity}
                          </span>
                        </div>

                        {/* Morning Outfit */}
                        <div className="p-3 bg-[#FAF9F5] rounded-xl space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] uppercase tracking-wider font-semibold text-[#8D806B]">🌅 AM - Outfit</span>
                          </div>
                          <div className="text-xs space-y-1 text-[#24211A]">
                            <p>👔 <strong>Top</strong>: {dayOutfit.morning.top}</p>
                            {dayOutfit.morning.bottom && <p>👖 <strong>Bottom</strong>: {dayOutfit.morning.bottom}</p>}
                            <p>👟 <strong>Shoes</strong>: {dayOutfit.morning.footwear}</p>
                          </div>
                          <p className="text-[10px] text-[#86755E] italic bg-[#EFEFEA] px-2.5 py-1.5 rounded">
                            {dayOutfit.morning.stylingNotes}
                          </p>
                        </div>

                        {/* Evening Outfit */}
                        <div className="p-3 bg-[#FAF9F5] rounded-xl space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] uppercase tracking-wider font-semibold text-[#8D806B]">🌌 PM - Outfit</span>
                          </div>
                          <div className="text-xs space-y-1 text-[#24211A]">
                            <p>👔 <strong>Top</strong>: {dayOutfit.evening.top}</p>
                            {dayOutfit.evening.bottom && <p>👖 <strong>Bottom</strong>: {dayOutfit.evening.bottom}</p>}
                            {dayOutfit.evening.outerwear && <p>🧥 <strong>Layer</strong>: {dayOutfit.evening.outerwear}</p>}
                            <p>👞 <strong>Shoes</strong>: {dayOutfit.evening.footwear}</p>
                          </div>
                          <p className="text-[10px] text-[#86755E] italic bg-[#EFEFEA] px-2.5 py-1.5 rounded">
                            {dayOutfit.evening.stylingNotes}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* List of Previous Planned Trips */}
            {trips.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-widest text-[#93846D] font-medium">Travel History Roster</h4>
                <div className="space-y-2">
                  {trips.map(trip => (
                    <div
                      key={trip.id}
                      onClick={() => setActiveTripDetails(trip)}
                      className={`p-4 border rounded-xl flex justify-between items-center cursor-pointer transition-colors ${
                        activeTripDetails?.id === trip.id
                          ? "bg-[#F1EFE6] border-[#C05E35]"
                          : "bg-[#F5F4EC] border-[#DDD9CE] hover:bg-[#EBECE1]"
                      }`}
                    >
                      <div>
                        <h5 className="font-serif font-semibold text-sm text-[#1E1D19]">{trip.destination}</h5>
                        <p className="text-[10px] text-[#8D806B]">{trip.days} days • {trip.weather}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        {trip.metrics && (
                          <span className="px-2 py-0.5 bg-[#E1DEC9] text-[#554A3B] font-bold text-[9px] rounded">
                            -{trip.metrics.reductionPercentage}% Bags
                          </span>
                        )}
                        <button
                          onClick={(e) => handleDeleteTrip(trip.id, e)}
                          className="text-red-500 hover:text-red-700 p-1"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        )}

        {/* ==================== STYLIST TAB ==================== */}
        {currentTab === "stylist" && (
          <div className="flex flex-col h-full overflow-hidden pt-6 text-left">
            
            {/* Elegant Header */}
            <div className="mb-4">
              <span className="text-[10px] tracking-[0.22em] font-sans uppercase text-[#8D806B] font-semibold">
                HAUTE STYLING
              </span>
              <h1 className="text-3xl font-serif font-normal text-[#1E1D19] mt-1">
                AI Stylist
              </h1>
            </div>

            {/* Advice Header metrics */}
            <div className="bg-[#FAF7F0] p-4 border border-[#E7E2D5] rounded-2xl grid grid-cols-2 gap-3 shrink-0 mb-4">
              <div className="bg-white p-2.5 rounded-lg text-center shadow-sm">
                <p className="text-xl font-serif font-bold text-[#C05E35]">{stylistStats.colorScore}/100</p>
                <p className="text-[9px] text-[#8D806B] uppercase font-semibold">Color Harmony</p>
              </div>
              <div className="bg-white p-2.5 rounded-lg text-center shadow-sm">
                <p className="text-xs font-sans font-semibold text-[#24211A] truncate">{stylistStats.missingItemSuggestion}</p>
                <p className="text-[9px] text-[#8D806B] uppercase font-semibold">Gap Suggestion</p>
              </div>
              <div className="col-span-2 bg-[#FAF9F5] p-2.5 rounded-lg border border-[#DDD9CE] text-[9px] text-[#7A6A54] italic">
                <strong>Stylist Tip:</strong> {stylistStats.matchingTip}
              </div>
            </div>

            {/* Chat Area Scrollbox */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ maxHeight: "calc(100% - 220px)" }}>
              {chatHistory.map(msg => (
                <div
                  key={msg.id}
                  className={`flex flex-col max-w-[85%] rounded-2xl p-3.5 text-xs ${
                    msg.role === "user"
                      ? "bg-[#C05E35] text-white self-end ml-auto rounded-tr-none"
                      : "bg-[#F1EFE6] text-[#24211A] self-start mr-auto rounded-tl-none border border-[#E0DDCB]"
                  }`}
                >
                  <p className="leading-relaxed whitespace-pre-line font-medium font-sans">{msg.content}</p>
                  <span className={`text-[8px] mt-1.5 self-end ${msg.role === "user" ? "text-white/60" : "text-[#8D806B]"}`}>
                    {msg.timestamp}
                  </span>
                </div>
              ))}

              {isStylistTyping && (
                <div className="bg-[#F1EFE6] border border-[#E0DDCB] text-[#24211A] self-start mr-auto rounded-2xl rounded-tl-none p-3.5 max-w-[85%] text-xs flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-[#8D806B] rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-1.5 h-1.5 bg-[#8D806B] rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                    <div className="w-1.5 h-1.5 bg-[#8D806B] rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                  </div>
                  <span className="text-[10px] text-[#8D806B]">AI Stylist is thinking...</span>
                </div>
              )}
              <div ref={chatBottomRef} />
            </div>

            {/* Suggested prompts clickers */}
            <div className="p-3 bg-[#FAF9F5] border-t border-[#EBEAE3] flex gap-1.5 overflow-x-auto shrink-0">
              <button
                onClick={() => handleSendStylistMessage("What is missing in my wardrobe to expand combination potential?")}
                className="px-3 py-1.5 bg-[#F1EFE6] border border-[#DDD9CE] hover:bg-[#E2DDCB] text-[10px] text-[#554A3B] rounded-lg shrink-0"
              >
                🔍 Analyze Gaps
              </button>
              <button
                onClick={() => handleSendStylistMessage("Suggest capsule matching colors utilizing beige and Indigo jeans")}
                className="px-3 py-1.5 bg-[#F1EFE6] border border-[#DDD9CE] hover:bg-[#E2DDCB] text-[10px] text-[#554A3B] rounded-lg shrink-0"
              >
                🎨 Color Harmonies
              </button>
              <button
                onClick={() => handleSendStylistMessage("I have a business meeting. Pinpoint suitable coordinates from my wardrobe.")}
                className="px-3 py-1.5 bg-[#F1EFE6] border border-[#DDD9CE] hover:bg-[#E2DDCB] text-[10px] text-[#554A3B] rounded-lg shrink-0"
              >
                💼 Business outfits
              </button>
            </div>

            {/* Input field text box */}
            <div className="p-3 bg-white border-t border-[#FAF9F5] flex gap-2 shrink-0 items-center">
              <input
                type="text"
                value={stylistInput}
                onChange={(e) => setStylistInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendStylistMessage()}
                placeholder="Ask stylist about matches, outfits..."
                className="flex-1 bg-[#F5F4EC] text-xs py-2.5 px-3 rounded-lg border border-[#DDD9CE] focus:outline-none focus:border-[#C05E35]"
              />
              <button
                onClick={() => handleSendStylistMessage()}
                disabled={!stylistInput.trim()}
                className="p-2.5 bg-[#C05E35] disabled:opacity-40 text-white rounded-lg hover:bg-[#A6512C]"
              >
                <Send size={14} />
              </button>
            </div>

          </div>
        )}

      </div>

      {/* 3. Bottom iPhone Global Navigation Tabs Bar */}
      <div className="bg-[#FAF9F5] border-t border-[#EBEAE3] py-2 px-3 flex justify-around items-center shrink-0 z-10 select-none pb-4">
        <button
          onClick={() => setCurrentTab("home")}
          className={`flex flex-col items-center p-1.5 transition-colors ${
            currentTab === "home" ? "text-[#C05E35]" : "text-[#8D806B] hover:text-[#24211A]"
          }`}
        >
          <Home size={20} className={currentTab === "home" ? "stroke-[2.2]" : "stroke-[1.8]"} />
          <span className="text-[9px] mt-1 font-medium font-sans">HOME</span>
        </button>

        <button
          onClick={() => setCurrentTab("wardrobe")}
          className={`flex flex-col items-center p-1.5 transition-colors ${
            currentTab === "wardrobe" ? "text-[#C05E35]" : "text-[#8D806B] hover:text-[#24211A]"
          }`}
        >
          <Grid size={20} className={currentTab === "wardrobe" ? "stroke-[2.2]" : "stroke-[1.8]"} />
          <span className="text-[9px] mt-1 font-medium font-sans">WARDROBE</span>
        </button>

        <button
          onClick={() => setCurrentTab("trips")}
          className={`flex flex-col items-center p-1.5 transition-colors ${
            currentTab === "trips" ? "text-[#C05E35]" : "text-[#8D806B] hover:text-[#24211A]"
          }`}
        >
          <Map size={20} className={currentTab === "trips" ? "stroke-[2.2]" : "stroke-[1.8]"} />
          <span className="text-[9px] mt-1 font-medium font-sans">TRIPS</span>
        </button>

        <button
          onClick={() => setCurrentTab("stylist")}
          className={`flex flex-col items-center p-1.5 transition-colors ${
            currentTab === "stylist" ? "text-[#C05E35]" : "text-[#8D806B] hover:text-[#24211A]"
          }`}
        >
          <Star size={20} className={currentTab === "stylist" ? "stroke-[2.2]" : "stroke-[1.8]"} />
          <span className="text-[9px] mt-1 font-medium font-sans">STYLIST</span>
        </button>
      </div>

    </div>
  );
}
