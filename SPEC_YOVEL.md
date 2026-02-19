# SPEC: Yovel Concierge - Private Edition (Premium Web 4.0)

## 🎯 Vision
Elevate Yovel from a financial landing page to a **Concierge Experience**. The goal is to provide elite users with a sense of "Time Arbitrage": the site does the complex DeFi work so they don't have to.

## 🎨 Visual Identity (The "Elite" Look)
**Concept:** Stealth Wealth / Quiet Luxury.
- **Palette:** 
  - Base: Deep Navy or Charcoal (`#0A0A0B`).
  - Text: Off-white (`#F5F5F7`).
  - Accents: Platinum or Champagne Gold (Very subtle).
- **Typography:** 
  - Serif for Headers (e.g., **Playfair Display**) to evoke tradition and trust.
  - Sans-serif for data (e.g., **SF Pro**) for modernity.
- **Motion:** Parallax scrolling and smooth, slow fades.

## 🧠 Intelligence Layer

### 1. The "Concierge" AI Agent
- **Function:** A localized chat interface that uses Chrome's `window.ai.prompt` to answer questions about the Yovel services.
- **Privacy:** All interactions happen locally. Rico values privacy above all.

### 2. Live Market Intelligence (SafeSentinel Integration)
- Component that displays "Safe Sentinel Pulse": Real-time security status of DeFi protocols (Aave, Uniswap, etc.) using the connectors we built.

### 3. Smart Translation (Global Elite)
- Automatic detection and translation using Chrome Built-in AI, ensuring the user feels at home anywhere in the world.

## 🏗️ Architecture Implementation

### Phase 1: Core Modularization
- Move current components to `/src/components/ui`.
- Create `/src/agents` for the Concierge logic.

### Phase 2: Premium Visuals
- Replace the Gamma-style elements with high-impact custom CSS/Tailwind.
- Implement "Glassmorphism" for data cards.

### Phase 3: Web 4.0 Tools
- Register WebMCP tools for financial reporting discovery.

---
*Status: Ready for Code Injection.*
*Author: Alfred Nakamoto 🎩*
