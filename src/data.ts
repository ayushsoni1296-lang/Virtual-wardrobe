import { ClothingItem } from "./types";

export const INITIAL_WARDROBE: ClothingItem[] = [
  {
    id: "item_1",
    label: "Sand Linen Button-down Shirt",
    category: "Top",
    subCategory: "Resort Shirt",
    primaryColor: "Soft Beige",
    pattern: "Solid Matte",
    style: "Resort Casual",
    seasons: ["Summer", "Spring"],
    occasions: ["Beach", "Brunch", "Sightseeing"],
    imageUrl: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    addedAt: new Date().toISOString()
  },
  {
    id: "item_2",
    label: "Fitted Charcoal Blazer",
    category: "Outerwear",
    subCategory: "Classic Blazer",
    primaryColor: "Tailored Gray",
    pattern: "Solid",
    style: "Business Casual",
    seasons: ["Spring", "Autumn", "Winter"],
    occasions: ["Business", "Dinner", "Party"],
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    addedAt: new Date().toISOString()
  },
  {
    id: "item_3",
    label: "White Organic Cotton Tee",
    category: "Top",
    subCategory: "Crewneck T-Shirt",
    primaryColor: "Pure White",
    pattern: "Solid",
    style: "Minimalist Casual",
    seasons: ["Summer", "Spring", "Autumn"],
    occasions: ["Beach", "Sightseeing", "Casual"],
    imageUrl: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    addedAt: new Date().toISOString()
  },
  {
    id: "item_4",
    label: "Classic Indigo Denim Jeans",
    category: "Bottom",
    subCategory: "Straight-leg Jeans",
    primaryColor: "Classic Indigo",
    pattern: "Solid Denim",
    style: "Streetwear",
    seasons: ["Autumn", "Winter", "Spring"],
    occasions: ["Sightseeing", "Casual", "Party"],
    imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    addedAt: new Date().toISOString()
  },
  {
    id: "item_5",
    label: "Cream Cable-Knit Sweater",
    category: "Outerwear",
    subCategory: "Knit Sweater",
    primaryColor: "Cream White",
    pattern: "Cable-Knit",
    style: "Bohemian Cozy",
    seasons: ["Autumn", "Winter"],
    occasions: ["Dinner", "Sightseeing", "Casual"],
    imageUrl: "https://images.unsplash.com/photo-1574164904299-3a102b110380?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    addedAt: new Date().toISOString()
  },
  {
    id: "item_6",
    label: "Linen Drawstring Trousers",
    category: "Bottom",
    subCategory: "Linen Pants",
    primaryColor: "Off-White",
    pattern: "Solid",
    style: "Resort Minimal",
    seasons: ["Summer", "Spring"],
    occasions: ["Beach", "Brunch", "Sightseeing"],
    imageUrl: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    addedAt: new Date().toISOString()
  },
  {
    id: "item_7",
    label: "Minimalist Leather White Sneakers",
    category: "Footwear",
    subCategory: "Low-top Sneakers",
    primaryColor: "Pure White",
    pattern: "Solid Leather",
    style: "Clean Minimal",
    seasons: ["Summer", "Spring", "Autumn"],
    occasions: ["Sightseeing", "Casual", "Brunch"],
    imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    addedAt: new Date().toISOString()
  },
  {
    id: "item_8",
    label: "Italian Leather Chelsea Boots",
    category: "Footwear",
    subCategory: "Chelsea Boots",
    primaryColor: "Rich Umber",
    pattern: "Burnished",
    style: "Classic Dandy",
    seasons: ["Autumn", "Winter"],
    occasions: ["Dinner", "Party", "Business"],
    imageUrl: "https://images.unsplash.com/photo-1638247025967-b4e38f6893b4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    addedAt: new Date().toISOString()
  }
];

export const STRATEGY_ROADMAP = `
# 1. Product Roadmap: MVP to Scaling v3

A multi-phase launch structure designed to validate product-market fit, streamline user onboarding, and construct a defense barrier through proprietary styling algorithms and deep travel partner integrations.

\`\`\`
  [Phase 1: MVP - Q1]       -->      [Phase 2: Growth - Q2/Q3]   -->      [Phase 3: Scale & Monetize - Q4+]
  - Basic Vision Tagging             - Auto Bagging Reductions            - Wardrobe Gap Affiliate Checkout
  - Manual Trip Entry                - Live Weather API Feeds             - B2B API integrations with Airlines
  - Basic Outfit Combos              - Open community styling boards      - Virtual Try-ons & AI Fit Checks
\`\`\`

### Phase 1: MVP (Months 1–3)
*   **Focus**: Essential utility validation.
*   **Deliverables**: 
    *   Mobile-responsive core web application with Vision-based garment tagging (Gemini Visual analysis).
    *   Manual Closet Cataloging: Drag-and-drop imagery or camera snapshots.
    *   Trip Planner Core: Basic packing list based on Destination, Days, and Activities.
    *   Day-by-day capsule outline.

### Phase 2: Growth & Optimization (Months 4–8)
*   **Focus**: UX Polish, Social Loop, Real-World Data.
*   **Deliverables**:
    *   Android Native launch (Jetpack Compose).
    *   Integration with Live Weather APIs (OpenWeatherMap / Tomorrow.io) for automatic rain, cold front, and humidity warnings.
    *   Luggage Volumetric Reductions meter showing actual checked bag fee savings.
    *   User-driven capsule sharing, enabling curation exchanges for popular holiday spots (e.g., "7 Days in Amalfi: Community Pack").

### Phase 3: Monopolizing Wardrobes & B2B (Months 9+)
*   **Focus**: monetizing through e-commerce and logistics hookups.
*   **Deliverables**:
    *   "Wardrobe Gap Filler": One-click buying recommendation directly connected to affiliate sustainable fashion labels.
    *   Airlines B2B ticketing checkout widget: "Zero baggage traveler" discount codes by certifying optimized capsule lists.
    *   AI Virtual Try-On integrations.
`;

export const UNIQUE_SELLING_PROP = `
# 2. Unique Selling Proposition (USP)

Existing apps (like Stylebook or Whering) are purely passive databases that require manual categorization and function as visual closets. **Moda** redefines the category by transforming closet data into **logistics solutions**.

| Feature / Dimension | Traditional Wardrobe Apps | Moda AI Assistant |
| :--- | :--- | :--- |
| **Onboarding Cost** | ❌ High. Manual tagging of color, fabric, brand takes hours. | ⚡ **Zero.** Instant Vision model categorization and color extraction in 2.5s. |
| **Trip Actionability** | ❌ Passive lists. Just static excel-like packing trackers. | 🔮 **Generative Capsule.** Creates dynamic day-wise loops with maximal reuse. |
| ** luggage Volume Impact**| ❌ No measurement. | 📉 **Guaranteed Luggage Reduction.** Dynamic combination optimization cuts bags by 40-60%. |
| **Intelligence Loop** | ❌ Zero context. | 🧠 **Context-Aware.** Matches actual destination weather, cultural norms, and scheduled activities. |

### The Core Secret: The "Capsule Math" Compression
Moda's core IP lies in its **outfit packing compression graph**. While users pack individually for separate days, Moda builds a graph representing clothes as nodes and styling compatibility as edges, finding the **Minimal Dominating Set** of garments that satisfies the destination's aesthetic and weather specifications. This directly cuts overpacking by displaying tangible cargo reductions (e.g., 14 items replaced by 6 items, solving travel anxiety with mathematics).
`;

export const USER_JOURNEY_FLOW = `
# 3. User Journey Flow

An overview of how a customer interacts with Moda, depicting our strategic onboarding design aiming for rapid activation.

\`\`\`
   [1. ONBOARDING (Rapid Activation)]
              │
              ▼
   [2. CLOSET DIGITIZATION] ◄─── (Vision AI tags items instantly)
              │
              ▼
   [3. TRIP CREATION] ◄──── (Destination, Activities, Live weather)
              │
              ▼
   [4. CAPSULE GENERATION] ◄─── (Optimized day-by-day packing table)
              │
              ▲
              │ (Feedback: "packed 3 less shirts!")
              ▼
   [5. SOCIAL LOOP & VALUE CLAIM]
\`\`\`

1.  **Onboarding**: User lands, authenticates easily via native Google SSO, and is instantly prompted: *"Where are you flying next?"* This captures imediate high-intent travel data.
2.  **Closet Setup**: Instead of demanding they capture 100 clothes immediately, we ask them to upload 5 baseline clothes or try a curated preset. AI auto-tags them in the background (category, wash-index, color temperature, style archetype).
3.  **The Trip Cue**: User schedules a 5-day getaway to Rome. Moda retrieves live weather, layers cultural outfit parameters (e.g., modest attire guidelines for chapel visits), and prompts activity styling (business conference by day, Michelin dinner by night).
4.  **Generative Optimization**: With 1 click, the screen renders an interactive Packing Board: Day-wise outfit combinations, items to place in the luggage, and a slider demonstrating how custom outerwear layers cross-coordinate.
5.  **Journey Feedback & Retrospective**: Upon return, the user tags which items they actually wore. The RAG system updates their wardrobe profile—learning styling preferences and comfort zones for the next flight.
`;

export const FEATURE_PRIORITIZATION = `
# 4. Feature Prioritization (MoSCoW Matrix)

To establish an agile MVP, we prioritize functional items that prove immediate baggage weight reductions.

### 🔴 Must Have (MVP Core)
*   User account setup and persistent digital wardrobes.
*   Mobile camera capture with AI visual analysis (clothes classification, predominant hex colors, stylistic categorization).
*   Packing list compiler matching: Days of trip, destination climate, and activity buckets (Casual, Business, Dinner).
*   Visual Day-to-Night outfit pair cards.

### 🟡 Should Have (Q2 Launch Elements)
*   Live local weather forecast integration (rain alert adaptations).
*   Luggage Volumetric estimator (compares bag load to airline carry-on size regulations).
*   Interactive Chat Console with the AI Stylist.

### 🔵 Could Have (Expansion Layer)
*   Virtual AR Try-on to test layouts.
*   Wardrobe Gap buying: direct checkout linkage for sustainable brands.
*   Baggage tag QR code integration (attaches digital capsule checklist to real luggage tags).

### ⚪ Won't Have (Future Phases)
*   Internal physical closet organization sensors (RFID tagging).
*   Peer-to-peer wardrobe rental service.
`;

export const DATABASE_SCHEMA = `
# 5. Database Schema: High-Performance PostgreSQL

A production-grade, highly indexed PostgreSQL schema designed to optimize relational routing, support spatial vectors (via pgvector), and scale to millions of concurrent wardrobes.

\`\`\`sql
-- Enable Vector extension for fashion search
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "vector";

-- 1. USERS
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    preferred_style VARCHAR(50) DEFAULT 'minimalist',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_users_email ON users(email);

-- 2. CLOTHING ITEMS (VIRTUAL WARDROBE)
CREATE TABLE clothing_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    label VARCHAR(150) NOT NULL,
    category VARCHAR(50) NOT NULL, -- Top, Bottom, Footwear, etc.
    sub_category VARCHAR(100),     -- Blazer, Linen Tee, Chelsea Boot
    primary_color VARCHAR(50),     -- Cream, Forest Green
    hex_color VARCHAR(7),          -- #F5F5DC
    pattern VARCHAR(50),           -- Solid, Striped, Floral
    style_aesthetic VARCHAR(50),   -- Business Casual, Resortwear
    seasons TEXT[] NOT NULL,       -- ['Summer', 'Spring']
    occasions TEXT[] NOT NULL,     -- ['Beach', 'Dinner']
    image_url TEXT,
    visual_embeddings VECTOR(1536), -- Deep feature vectors from Vision model for fashion matching
    added_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_clothing_user ON clothing_items(user_id);
CREATE INDEX idx_clothing_meta ON clothing_items(category, style_aesthetic);

-- 3. TRIPS
CREATE TABLE trips (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    destination VARCHAR(150) NOT NULL,
    days INTEGER DEFAULT 3,
    weather_condition VARCHAR(100),
    activities TEXT[] NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_trips_user ON trips(user_id);

-- 4. OUTFITS (DAY-BY-DAY GENERATED SUGGESTIONS)
CREATE TABLE outfits (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    trip_id UUID REFERENCES trips(id) ON DELETE CASCADE NOT NULL,
    day_number INTEGER NOT NULL,
    activity VARCHAR(100),
    -- Outfits mapped to physical item UUIDs
    morning_top_id UUID REFERENCES clothing_items(id) ON DELETE SET NULL,
    morning_bottom_id UUID REFERENCES clothing_items(id) ON DELETE SET NULL,
    morning_footwear_id UUID REFERENCES clothing_items(id) ON DELETE SET NULL,
    evening_top_id UUID REFERENCES clothing_items(id) ON DELETE SET NULL,
    evening_bottom_id UUID REFERENCES clothing_items(id) ON DELETE SET NULL,
    evening_outerwear_id UUID REFERENCES clothing_items(id) ON DELETE SET NULL,
    evening_footwear_id UUID REFERENCES clothing_items(id) ON DELETE SET NULL,
    styling_notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_outfits_trip ON outfits(trip_id, day_number);

-- 5. WEATHER CACHE
CREATE TABLE weather_cache (
    destination_key VARCHAR(150) PRIMARY KEY,
    temperature NUMERIC,
    humidity NUMERIC,
    conditions VARCHAR(100),
    fetched_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
\`\`\`
`;

export const BACKEND_ARCHITECTURE = `
# 6. Backend Architecture: Spring Boot Microservices

To handle high computational load (AI processing, spatial search, image uploads, and real-time flight weather data), we deploy a **Cloud-Native Java Spring Boot Microservices Architecture** configured for extreme scaling.

\`\`\`
                       [ Client Applications (Web / Android) ]
                                         │
                                         ▼ (HTTPS)
                      [ Spring Cloud Gateway (Port: 443 / 80) ]
                      (JWT Authentication, Rate Limiting & routing)
                                         │
       ┌───────────────────┬─────────────┴─────────────┬──────────────────┐
       ▼                   ▼                           ▼                  ▼
[ Auth Service ]  [ Wardrobe Service ]        [ Trip Optimizer ]  [ AI Stylist ]
(Spring Security)  (PostgreSQL, S3 API)        (RAG orchestrator)  (Vector Search)
       │                   │                           │                  │
       └───────────────┬───┴───────────────────────────┴──────────────────┘
                       ▼ (Sync via Spring Cloud Discovery eureka)
           [ Shared PostgreSQL DB (or separate DB per microservice schema) ]
                       ▲ (Event Sourcing / Async tasks)
                       ▼
               [ Apache Kafka Broker ] <── (Garment analyzed, Weather updated topics)
\`\`\`

### Architectural Components:
1.  **Spring Cloud Gateway**: Serves as the single ingress, handling JWT validation, SSL termination, and token bucket rate-limiting (preventing visual file endpoint spamming).
2.  **Service Discovery (Eureka) & Configuration (Spring Cloud Config)**: Facilitates dynamic scaling of microservice instances (e.g., spinning up more \`Trip Optimizer\` workers during peak summer seasons).
3.  **Wardrobe microservice**:
    *   Exposes gRPC endpoints for rapid state checking.
    *   Integrates with Amazon S3 for secure garment image streaming via CloudFront CDN.
    *   Leverages Redis Cache for immediate user wardrobe retrieval, bypassing PG databases on repeated clicks.
4.  **Trip Optimizer Orchestration Module**:
    *   Asynchronously fetches real-time local weather forecasts.
    *   Pulls wardrobe data and formats context packages.
    *   Interfaces with LLMs to compress styling options.
5.  **Event Bus (Apache Kafka)**:
    *   Topic \`garment-upload-topic\`: Triggers asynchronous image analytics, generating embeddings without blocking client UI.
    *   Topic \`trip-scheduled-topic\`: Pre-caches destinations weather patterns.
`;

export const AI_ARCHITECTURE = `
# 7. AI Architecture & Fashion RAG Engine

A deep-dive review of the AI core responsible for vision-based closet cataloging, stylistic analysis, and RAG-based travel capsule packing compiler.

\`\`\`
  [ Clothes Photo ] ──► (Gemini Flash Vision) ──► [ Schema Tags ] ──► [ Save in DB ]
                                                                             │
                                                                             ▼
  [ Packing Query ] ──► (Extract Trip context) ─┐                         (Embed query)
                                                 ├─► [ LLM Prompt RAG ] ◄────┴ [ Similar Items ]
  [ Pack Outcome  ] ◄── (Optimized Capsule Plan) ┘
\`\`\`

### Module A: Vision Tagging Pipeline (The Gatekeeper)
*   Uses **Gemini 3.5-Flash** as an advanced Multi-modal Vision model.
*   Upon image upload, the service converts the image to a standardized Base64 stream inside the Spring Boot container.
*   A system prompt instructs Gemini to output structured JSON enforcing fields like color temperature matching index, primary garment category, and style aesthetics.
*   This achieves fully automated wardrobe filing in **under 3 seconds**, neutralizing manual onboarding drag.

### Module B: The Capsule Match Optimizer (RAG + Optimization Loop)
*   **Vector Search Conversion (Fashion Embeddings)**: Each wardrobe clothing item's text description and styling metadata are vectorized using an embedding model (e.g., text-embedding-004) and stored as high-dimensional coordinates in PostgreSQL's \`pgvector\` module.
*   **Aesthetic Retrieval**: When planning a trip, we query the PostgreSQL vector space using a target embedding representing the destination's mood (e.g., *"Amalfi Beach Sunset chic style with neutral warm tones"*).
*   **The Capsule Constraint Prompt**: The fetched candidate garments are piped into **Gemini-3.5-Flash** with a structured packing contract:
    *   Constraint 1: Target checked bag size (e.g., max 7 wardrobe items total).
    *   Constraint 2: Day-by-day weather temperature shifts.
    *   Constraint 3: Direct item reuse (i.e., No item should be worn only once; trousers must be matched with at least 3 distinct tops).
    *   Output: Complete day-to-night styling array in JSON, saving hours of decision-making.
`;

export const TECH_STACK = `
# 8. Optimized Tech Stack Choice

For high-speed execution, strict schema integrity, structural modularity, and rapid engineering execution, we select a robust stack combining enterprise Java and highly accurate LLM foundations.

*   **Mobile Frontend**: **Android Native App (Kotlin, Jetpack Compose)**
    *   *Why*: Deep hardware camera integrations, rapid image compression, edge file previews, and fluid bottom-sheet sheets.
*   **Web Portal**: **React, Tailwind CSS, Vite, TypeScript, Motion**
    *   *Why*: Fast viewport renders, modular components, crisp CSS styling, and unified state routing.
*   **Backend Engine**: **Java Spring Boot 3.3.x, Spring Cloud, Hibernate ORM**
    *   *Why*: Superior database connection pooling, type safety, modular microservice architecture, and robust production-ready ecosystems for millions of items.
*   **Primary Database**: **PostgreSQL 16 (with pgvector module)**
    *   *Why*: Unmatched relational querying, transactional safety, and native spatial/vector search capabilities inside the same database engine.
*   **Performance Cache & Chat sessions**: **Redis Stack**
    *   *Why*: Sub-millisecond wardrobe state queries, token bucket rate-limiting storage, and chat-history cache.
*   **Messaging Pipeline**: **Apache Kafka (Confluent managed or self-hosted)**
    *   *Why*: Resilient asynchronous worker distribution for long-running image tagging and weather retrieval pipelines.
*   **AI Integration Orchestrator**: **LangChain4j (Java RAG Framework)**
    *   *Why*: Simplifies embedding computations, implements robust guardrails, and simplifies calls to Google Gemini model pools.
`;

export const API_DESIGN = `
# 9. API Design (OpenAPI / Swagger Style)

Two primary API contracts designed for high performance, utilizing JSON responses with clean, expressive schemas:

### API 1: Tag Garment (Asynchronous Upload & Tagging Router)
*   **Endpoint**: \`POST /api/v1/wardrobe/garment\`
*   **Content-Type**: \`multipart/form-data\`
*   **Auth**: Required (Bearer JWT)

#### Request Payload:
\`\`\`json
{
  "image": "Binary file (JPEG/PNG)",
  "customLabel": "My Favorite Silk Shirt (Optional)"
}
\`\`\`

#### Response Payload (202 Accepted):
\`\`\`json
{
  "taskId": "task_abc1237890def",
  "status": "PROCESSING",
  "message": "Garment vision tagging scheduled successfully.",
  "checkStatusUrl": "/api/v1/wardrobe/tasks/task_abc1237890def"
}
\`\`\`

#### Check Status Endpoint Response (200 OK - After processing completion):
\`\`\`json
{
  "taskId": "task_abc1237890def",
  "status": "COMPLETED",
  "data": {
    "id": "item_888fed23-99ab-44cc-88da-bcde87654321",
    "label": "Sand Linen Button-down Shirt",
    "category": "Top",
    "subCategory": "Resort Shirt",
    "primaryColor": "Soft Beige",
    "pattern": "Solid",
    "style": "Resort Casual",
    "seasons": ["Summer", "Spring"],
    "occasions": ["Beach", "Casual", "Brunch"],
    "hexColor": "#EEDC82"
  }
}
\`\`\`

---

### API 2: Compile Optimized Travel Packing List
*   **Endpoint**: \`POST /api/v1/trips/optimize-packing\`
*   **Content-Type**: \`application/json\`
*   **Auth**: Required (Bearer JWT)

#### Request Payload:
\`\`\`json
{
  "destination": "Goa, India",
  "days": 3,
  "activities": ["beach", "party", "sightseeing"],
  "weatherCondition": "Hot and Humid (approx 32°C)",
  "excludeCategories": ["Footwear"]
}
\`\`\`

#### Response Payload (200 OK):
\`\`\`json
{
  "tripId": "trip_990e-bc21-aa01",
  "destination": "Goa, India",
  "metrics": {
    "traditionalLuggageCount": 12,
    "optimizedLuggageCount": 5,
    "reductionPercentage": 58,
    "capsuleSummary": "An optimized tropical travel capsule focusing on ultra-light organic fibers and multiple wear-cycles."
  },
  "packingChecklist": [
    { "itemId": "item_1", "label": "Sand Linen Button-down Shirt", "category": "Top" },
    { "itemId": "item_3", "label": "White T-Shirt", "category": "Top" },
    { "itemId": "item_6", "label": "Linen Drawstring Trousers", "category": "Bottom" }
  ],
  "dayWiseOutfits": [
    {
      "day": 1,
      "activity": "beach",
      "morning": {
        "top": "White T-Shirt",
        "bottom": "Linen Trousers",
        "footwear": "Minimalist Sneakers",
        "stylingNotes": "Breathable linen keeps heat reflection low while protecting against coastal direct sun."
      },
      "evening": {
        "top": "Sand Linen Buttondown",
        "bottom": "Linen Trousers",
        "outerwear": "Light Cardigan",
        "footwear": "Minimalist Sneakers",
        "stylingNotes": "Unbuttoned linen over white tee creates a relaxed coastal silhouette perfect for evening beach dinner."
      }
    }
  ]
}
\`\`\`
`;

export const MONETIZATION_STRATEGY = `
# 10. Monetization Strategy: Sustained Startup Scale

To build a high-yielding, capital-efficient, and venture-scalable consumer business model, we integrate three distinct monetization funnels:

\`\`\`
   ┌───────────────────────────────────────────────────────────────┐
   │                  M O D A   R E V E N U E                      │
   └───────────────────────────────┬───────────────────────────────┘
                                   │
         ┌─────────────────────────┼─────────────────────────┐
         ▼                         ▼                         ▼
  [ 1. MODA PREMIUM SUBS ]   [ 2. AFFILIATE COMMERCE ]   [ 3. B2B PARTNERSHIPS ]
  - Unlimited Closets        - Smart Gap-Filling Buy     - Airlines APIs
  - Volumetric Estimations   - High-end Capsule deals    - Checked Bag offsets
  - $4.99/mo | $39/yr        - 8-15% commission fees     - Baggage claim checkouts
\`\`\`

### 1. The Capsule Premium Flat Rate (SaaS Subscription)
*   **Free Tier**: Up to 15 wardrobe clothes, storage for 1 active trip, basic weather warnings. Very functional, driving retention.
*   **Moda Premium ($4.99/month or $39.99/year)**:
    *   Unlimited wardrobe cataloging.
    *   Volumetric Checked Luggage estimation algorithms.
    *   Multiple traveler accounts (family pack).
    *   High-fidelity AI Stylist chats with real-time shopping guidance.

### 2. Wardrobe Gap affiliate Commerce (E-Commerce Loops)
*   Our packing lists identify matching capsule garments the user **is missing** to unlock optimal packing combinations (e.g., *"You need a Tan Chore Jacket to enable 5 more day-to-night combinations"*).
*   We offer direct contextual checkouts utilizing affiliate fashion integrations (Everlane, Lululemon, Patagonia, Cuyana). This triggers highly motivated buying states with **8% to 15% affiliate revenue shares per purchase**.

### 3. B2B Baggage Reduction Offsets (Direct Logistics Hooks)
*   Airlines lose money of fuel burn and handling costs from overweight suitcases.
*   Moda registers travel capsules and provides certificates (*"Capsule Verified: Carry-On Only Weight verified"*).
*   Airlines incentivize Moda users with priority boarding and credit offsets, rewarding us via a **carbon brokerage transaction allowance**.
`;

export const BRAND_NAME_IDEAS = `
# 11. Custom Brand Name Ideas

To appeal to elite travelers, minimalism advocates, and smart logistics circles, our brand must convey quiet luxury, efficiency, and intelligence:

1.  **M O D A** (Quiet Luxury, High Heritage): Clean, international, elegant, instantly sounding like a curated high-fashion magazine (selected for this simulation!).
2.  **Capsulely** (Playful Utility): Focuses on the "capsule wardrobe" core philosophy of maximal utility and minimal clutter.
3.  **PackSmart AI** (Direct Category): High conversion rating, extremely clear value offering for global search engine marketing optimization.
4.  **CladWay** (Contemporary Trend): Urban, minimalist, representing a new seamless way of wearing clothes while traversing the world.
5.  **VeraWardrobe** (Latin Truth): Sounds refined and scientific. Reflective of the "True Closet" data accuracy.
`;

export const LAUNCH_STRATEGY = `
# 12. Strategic Startup Launch Campaign

A targeted 3-Phase strategy designed to acquire targeted high-retention users with zero raw ad spend:

### Phase Alpha: The Travel-Influencer Capsule Loop (Months 1-3)
*   Sponsor niche "Carry-On Only" and luxury backpacking travel creators on YouTube and TikTok.
*   Launch customized, interactive Landing Pages showing their real clothes optimized by Moda on actual trips (e.g., *"How I traveled through Japan for 14 Days with ONLY 4 items using Moda AI"*). This drives viral visual interest.

### Phase Beta: Airport Travel-Geofenced Drops (Months 4-6)
*   Deploy highly geofenced geo-targeted mobile advertisements directly inside Terminal departures of major global hubs (JFK, Heathrow, Changi, IGIA Delhi).
*   Tagline: *"Unpacking boarding anxiety? Let Moda catalog your bag right at the gate. Pack lighter, save $50 baggage fees instantly."*

### Phase Change Gamma: Integration with Booking engines (Months 7+)
*   Hook up with travel booking interfaces, travel insurance platforms, and flight comparison engines (Skyscanner, Airbnb).
*   When a ticket to Bali is booked, user gets a prompt in their confirmation email: *"Bali is humider than normal this weekend. Let Moda AI curate your exact 3-piece baggage list to fly lighter."*
`;

export const CLEAN_IMAGE_ENGINE_BLUEPRINT = `
# 8b. Visual Isolation & Clean Image Engine (SAM-2 + Spring Boot)

This specialized blueprint details the server-side image manipulation, object extraction, and duplicate-reduction logic required to transform raw consumer garment photographs into premium studio catalog images.

## 1. System Topology & Image Processing Flow
\`\`\`
   [Mobile Capture] ---> Base64 Upload ---> [Spring Boot Controller]
                                                      │
         ┌────────────────────────────────────────────┴───────────────────────────┐
         ▼                                            ▼                           ▼
[Meta SAM-2 Segmentor]                      [OpenCV Math Shaper]         [Gemini Vision Model]
- Auto garment contour mask                 - Auto crop bounding box     - Primary/Secondary hue extraction
- Remove bodies, hangers, beds              - Histogram balance          - Style, seasonality categories
- Render solid chroma background            - Contrast equaliser (-40%)  - Similarity vectors
\`\`\`

---

## 2. Java Spring Boot Production Controller Code
Below is the Java implementation of the Wardrobe Processing Controller. It utilizes **Any-to-Any Vision Segmentation APIs** (Segment Anything) and standard Java BufferedImage drawing wrappers to align and equalize contrasts.

\`\`\`java
package com.moda.api.wardrobe;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.awt.*;
import java.awt.image.BufferedImage;
import javax.imageio.ImageIO;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Base64;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/wardrobe")
public class WardrobeProcessorController {

    private final SegmentAnythingClient samClient;
    private final GeminiVisionClient geminiClient;
    private final WardrobeRepository wardrobeRepo;

    public WardrobeProcessorController(SegmentAnythingClient samClient, 
                                        GeminiVisionClient geminiClient, 
                                        WardrobeRepository wardrobeRepo) {
        this.samClient = samClient;
        this.geminiClient = geminiClient;
        this.wardrobeRepo = wardrobeRepo;
    }

    @PostMapping("/process")
    public ResponseEntity<?> processGarmentImage(
            @RequestParam("file") MultipartFile file,
            @RequestParam(value = "backgroundType", defaultValue = "white") String bgType,
            @RequestParam(value = "contrastLevel", defaultValue = "15") int contrast,
            @RequestParam(value = "sharpenLevel", defaultValue = "10") int sharpen,
            @RequestParam(value = "cropAndAlign", defaultValue = "true") boolean cropAndAlign,
            @RequestParam("userId") String userId) {

        try {
            // 1. Read input image bytes
            BufferedImage rawImage = ImageIO.read(file.getInputStream());

            // 2. Call Segment Anything API to isolate key garment mask
            byte[] rawBytes = file.getBytes();
            byte[] maskBytes = samClient.generateGarmentMask(rawBytes);
            BufferedImage maskImage = ImageIO.read(new java.io.ByteArrayInputStream(maskBytes));

            // 3. Extract garment and render chosen solid Background
            BufferedImage isolatedImage = applySegmentationMask(rawImage, maskImage, bgType);

            // 4. Enhance Image: Auto contrast adjustment
            if (contrast != 0) {
                isolatedImage = adjustContrastAndBrightness(isolatedImage, contrast);
            }

            // 5. Auto Crop Bounding Area & Centering
            if (cropAndAlign) {
                isolatedImage = autoCropAndCenterGarment(isolatedImage);
            }

            // 6. Multi-modal Tagging via Gemini model
            Map<String, Object> tags = geminiClient.analyzeGarmentMetadata(isolatedImage);

            // 7. Duplicate Checking Similarity Check
            List<ClothingItem> userWardrobe = wardrobeRepo.findByUserId(userId);
            boolean isDuplicate = verifyDuplicateRedundancy(tags, userWardrobe);
            String duplicateMessage = isDuplicate 
                ? "Duplicate Found: You already have a similar " + tags.get("color") + " " + tags.get("subCategory")
                : "";

            // Convert processed image back to Base64 for the mobile callback response
            String processedBase64 = encodeToByteArray(isolatedImage);

            return ResponseEntity.ok(Map.of(
                "item", tags.get("item"),
                "color", tags.get("color"),
                "style", tags.get("style"),
                "season", tags.get("season"),
                "category", tags.get("category"),
                "subCategory", tags.get("subCategory"),
                "primaryColor", tags.get("primaryColor"),
                "pattern", tags.get("pattern"),
                "label", tags.get("label"),
                "processedImage", "data:image/png;base64," + processedBase64,
                "isDuplicate", isDuplicate,
                "duplicateMessage", duplicateMessage
            ));

        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(Map.of("error", e.getMessage()));
        }
    }

    private BufferedImage applySegmentationMask(BufferedImage raw, BufferedImage mask, String bgType) {
        int w = raw.getWidth();
        int h = raw.getHeight();
        BufferedImage result = new BufferedImage(w, h, BufferedImage.TYPE_INT_ARGB);
        Graphics2D g = result.createGraphics();

        // Fill background color
        if ("white".equalsIgnoreCase(bgType)) {
            g.setColor(Color.WHITE);
            g.fillRect(0, 0, w, h);
        } else if ("ivory".equalsIgnoreCase(bgType)) {
            g.setColor(new Color(245, 242, 234));
            g.fillRect(0, 0, w, h);
        } else {
            // Transparent chess representation (standard Alpha layer trans)
            g.setComposite(AlphaComposite.Clear);
            g.fillRect(0, 0, w, h);
            g.setComposite(AlphaComposite.SrcOver);
        }

        // Apply alpha masking pixels from SAM
        for (int x = 0; x < w; x++) {
            for (int y = 0; y < h; y++) {
                int maskPixel = mask.getRGB(x, y) & 0xFF;
                if (maskPixel > 127) { // Garment pixel threshold
                    result.setRGB(x, y, raw.getRGB(x, y));
                }
            }
        }
        g.dispose();
        return result;
    }

    private BufferedImage adjustContrastAndBrightness(BufferedImage img, int percent) {
        float factor = 1.0f + (percent / 100.0f);
        BufferedImage output = new BufferedImage(img.getWidth(), img.getHeight(), img.getType());
        Graphics2D g = output.createGraphics();
        g.drawImage(img, 0, 0, null);
        g.dispose();

        for (int x = 0; x < output.getWidth(); x++) {
            for (int y = 0; y < output.getHeight(); y++) {
                Color c = new Color(img.getRGB(x, y), true);
                int r = Math.min(255, Math.max(0, (int) (c.getRed() * factor)));
                int gVal = Math.min(255, Math.max(0, (int) (c.getGreen() * factor)));
                int b = Math.min(255, Math.max(0, (int) (c.getBlue() * factor)));
                Color newC = new Color(r, gVal, b, c.getAlpha());
                output.setRGB(x, y, newC.getRGB());
            }
        }
        return output;
    }

    private BufferedImage autoCropAndCenterGarment(BufferedImage img) {
        int minX = img.getWidth(), minY = img.getHeight(), maxX = -1, maxY = -1;
        // Search exact clothing bounds based on non-bg pixels
        for (int x = 0; x < img.getWidth(); x++) {
            for (int y = 0; y < img.getHeight(); y++) {
                int alpha = (img.getRGB(x, y) >> 24) & 0xFF;
                Color c = new Color(img.getRGB(x, y));
                boolean isNotWhite = c.getRed() < 250 || c.getGreen() < 250 || c.getBlue() < 250;
                if (alpha > 50 && isNotWhite) {
                    if (x < minX) minX = x;
                    if (y < minY) minY = y;
                    if (x > maxX) maxX = x;
                    if (y > maxY) maxY = y;
                }
            }
        }

        if (maxX == -1 || maxY == -1) return img; // No garment boundaries detected

        int cropW = maxX - minX;
        int cropH = maxY - minY;
        int size = Math.max(cropW, cropH) + 40; // Add breathable margin space
        
        BufferedImage square = new BufferedImage(size, size, BufferedImage.TYPE_INT_ARGB);
        Graphics2D g = square.createGraphics();
        g.setColor(Color.WHITE);
        g.fillRect(0, 0, size, size);

        // Center draw
        int startX = (size - cropW) / 2;
        int startY = (size - cropH) / 2;
        g.drawImage(img.getSubimage(minX, minY, cropW, cropH), startX, startY, null);
        g.dispose();
        return square;
    }

    private boolean verifyDuplicateRedundancy(Map<String, Object> tags, List<ClothingItem> items) {
        String sub = ((String) tags.get("subCategory")).toLowerCase().split(" ")[0];
        String col = ((String) tags.get("primaryColor")).toLowerCase();
        for (ClothingItem item : items) {
            String existingSub = item.getSubCategory().toLowerCase();
            String existingColor = item.getPrimaryColor().toLowerCase();
            if (existingSub.contains(sub) && (existingColor.contains(col) || col.contains(existingColor))) {
                return true; // Match style collision
            }
        }
        return false;
    }

    private String encodeToByteArray(BufferedImage img) throws IOException {
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        ImageIO.write(img, "png", bos);
        return Base64.getEncoder().encodeToString(bos.toByteArray());
    }
}
\`\`\`

---

## 3. Native Android CameraX Photo Upload Snippet
This **Kotlin** snippet utilizes Android Jetpack Compose and CameraX to trigger photo snapshots and pipe them directly into our microservice endpoint.

\`\`\`kotlin
package com.moda.mobile.wardrobe

import android.content.Context
import android.net.Uri
import androidx.camera.core.*
import androidx.camera.lifecycle.ProcessCameraProvider
import androidx.compose.runtime.*
import androidx.compose.ui.platform.LocalContext
import androidx.core.content.ContextCompat
import okhttp3.*
import okhttp3.MediaType.Companion.toMediaTypeOrNull
import okhttp3.RequestBody.Companion.asRequestBody
import java.io.File

interface WardrobeUploadCallback {
    fun onSuccess(processedJson: String)
    fun onFailure(err: String)
}

fun uploadGarmentPhoto(context: Context, fileUri: Uri, userId: String, callback: WardrobeUploadCallback) {
    val client = OkHttpClient()
    val file = File(fileUri.path ?: return)
    
    val requestBody = MultipartBody.Builder()
        .setType(MultipartBody.FORM)
        .addFormDataPart("file", file.name, file.asRequestBody("image/jpeg".toMediaTypeOrNull()))
        .addFormDataPart("userId", userId)
        .addFormDataPart("backgroundType", "ambient")
        .addFormDataPart("contrastLevel", "15")
        .addFormDataPart("cropAndAlign", "true")
        .build()

    val request = Request.Builder()
        .url("https://api.moda.app/api/wardrobe/process")
        .post(requestBody)
        .build()

    client.newCall(request).enqueue(object : okhttp3.Callback {
        override fun onFailure(call: Call, e: java.io.IOException) {
            callback.onFailure(e.localizedMessage ?: "Network Timeout")
        }

        override fun onResponse(call: Call, response: Response) {
            val body = response.body?.string()
            if (response.isSuccessful && body != null) {
                callback.onSuccess(body)
            } else {
                callback.onFailure("Server Process Collision: Code \${response.code}")
            }
        }
    })
}
\`\`\`
`;
