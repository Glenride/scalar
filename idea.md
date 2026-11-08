 SCALAR | Product Requirements & Brand Blueprint

## I. The Brand Soul
**SCALAR** is a fitness utility for high-output individuals who view their bodies as the ultimate hardware. We move away from "inspiration" and toward **integration**.

### 1. The Narrative
In physics, a scalar is pure magnitude—mass, time, energy. It is potential waiting for a vector. **SCALAR** provides the tools to measure that magnitude and the lessons to give it direction. We don't sell a "journey"; we provide a **dashboard for the human machine.**

### 2. Tone of Voice & Identity
* **Voice:** Analytical, unsentimental, and highly functional. We use "Changelogs" instead of "Updates."
* **Visuals:** Brutalist/Minimalist. High-contrast (Deep Carbon / Electric Cyan), monospaced data fonts (for metrics), and clean Swiss sans-serifs (for instruction).
* **The Law:** $$|A| = \sqrt{x^2 + y^2 + z^2}$$ (Magnitude is the sum of all dimensions).

---

## II. Core UVP Pillars (The Functional Six)

| Pillar | Strategic Value | Technical Implementation |
| :--- | :--- | :--- |
| **Developer API** | Data Sovereignty. Users own their raw workout logs. | RESTful endpoints; Bearer Token auth; Webhook support for self-hosted dashboards. |
| **Fractional Badges** | Continuous Gamification. Badges evolve visually as work is done. | `react-native-svg` + `reanimated` to "fill" dynamic SVG paths based on $\%$ completion. |
| **Micro-Progression** | Tracking "Invisible" Wins. Visualizing 1% gains in recovery or velocity. | High-resolution time-series data logging; interactive charts via `victory-native`. |
| **Audio Branching** | "Choose Your Own Adventure" coaching via voice intent. | `expo-av` for gapless playback; **GPT-5-mini** for real-time voice command processing. |
| **Metabolic Groceries** | Automated fuel logistics. Converts calories burned into a shopping list. | **GPT-5.4** analyzes weekly metabolic output and outputs structured JSON ingredient lists. |
| **Carbon Matching** | Global Impact. Converting kinetic energy into verified offsets. | Third-party API integration (e.g., Patch) to trigger offsets per 1,000 reps or 10 miles. |

---

## III. Technical Specifications (React Expo)

### 1. The Stack
* **Frontend:** React Native (Expo) using **Expo Router** for file-based navigation.
* **State Management:** **TanStack Query** for caching biometric data and API responses.
* **Styling:** **Tailwind (NativeWind)** for a rapid, utility-first UI consistent with the brand's "modular" feel.
* **AI Layer:** Edge-functions for voice intent (GPT-5-mini) and backend-heavy lifting for grocery logic (GPT-5.4).

### 2. Database Schema (Conceptual)
The architecture must support **Time-Series** data to track micro-progressions accurately:
* **User_Metrics:** `id`, `user_id`, `metric_type` (HR, Velocity, Rest), `value`, `timestamp`.
* **Workout_Branches:** `session_id`, `audio_node_id`, `trigger_event` (Voice/UI), `next_node`.
* **Carbon_Ledger:** `id`, `user_id`, `total_joules`, `kg_co2_offset`, `verified_status`.

---

## IV. User Experience (UX) Principles

### 1. The "Zero-Friction" Flow
Users should be able to "deploy" a workout in under three taps.
* **Tap 1:** Select Magnitude (Duration/Intensity).
* **Tap 2:** Confirm Environment (Equipment/Space).
* **Tap 3:** Execute.

### 2. The Changelog Notification
Instead of "Great job today!", the app sends a system notification:
> **SCALAR Update:** Body Version 1.2.4 Deployed. 
> * +2% Thoracic Mobility detected.
> * 0.4kg CO2 offset added to ledger.
> * Grocery list updated with +200g complex carbs for recovery.

---

## V. Strategic Roadmap

* **Phase 1 (MVP):** Traditional lesson/pose library + Basic Micro-progression tracking + Fractional Badges.
* **Phase 2 (Integration):** Developer API portal launch + Carbon Offset matching.
* **Phase 3 (Intelligence):** Voice-Path audio implementation + Automated Grocery Engine.

---