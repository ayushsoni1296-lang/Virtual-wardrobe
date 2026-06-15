export interface ClothingItem {
  id: string;
  label: string;
  category: "Top" | "Bottom" | "Dress" | "Outerwear" | "Footwear" | "Accessory";
  subCategory: string;
  primaryColor: string;
  pattern: string;
  style: string;
  seasons: string[];
  occasions: string[];
  imageUrl?: string;
  addedAt: string;
}

export interface DayOutfit {
  day: number;
  activity: string;
  morning: {
    top: string;
    bottom: string;
    footwear: string;
    stylingNotes: string;
  };
  evening: {
    top: string;
    bottom: string;
    outerwear: string;
    footwear: string;
    stylingNotes: string;
  };
}

export interface OptimizationMetrics {
  traditionalLuggageCount: number;
  optimizedLuggageCount: number;
  reductionPercentage: number;
  totalCombinationsCreated: number;
  capsuleSummary: string;
}

export interface Trip {
  id: string;
  destination: string;
  days: number;
  activities: string[];
  weather: string;
  outfits?: DayOutfit[];
  checklist?: string[];
  metrics?: OptimizationMetrics;
  createdAt: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: string;
}

export interface StylistAdvice {
  response: string;
  colorScore: number;
  matchingTip: string;
  missingItemSuggestion: string;
}
