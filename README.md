# EQT Academy Website

A premium trading education website built with Next.js 16, featuring a dark theme with teal and gold accents.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3055)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## ✨ Features

- **Responsive Design**: Mobile-first responsive layout
- **Modern UI**: Dark theme (#050610) with teal (#00e5d0) and gold (#FFD700) accents
- **Interactive Elements**: 
  - Animated grid background
  - Smooth scroll navigation
  - Interactive FAQ accordion
  - Multi-step mentorship quiz with animations
  - Fade-in animations on scroll
  - Pulsing glow effects

## 📋 Site Sections

1. **Hero Section**: Headline, video embed, dual CTAs
2. **Live Win Rate Tracker**: Animated stats with real-time feel
3. **What You Get**: Feature showcase with glowing cards
4. **Story Section**: Personal background narrative
5. **EQT Precision Model**: Three-pillar framework explanation
6. **Testimonials**: Social proof with avatar cards
7. **Pricing**: Two-tier comparison with badges
8. **Mentorship Quiz**: Interactive 7-step application
9. **FAQ**: Collapsible accordion interface
10. **Final CTA**: Repeat conversion section
11. **Footer**: Links and legal disclaimers

## 🎨 Design System

- **Colors**: 
  - Background: #050610
  - Primary: #00e5d0 (teal)
  - Secondary: #FFD700 (gold)
  - Text: #ffffff, rgba(199,214,255,0.4)
- **Typography**: Inter font family
- **Animations**: CSS transitions with Intersection Observer
- **Layout**: CSS Grid and Flexbox responsive design

## 🔗 External Integrations

- **Community**: https://whop.com/eqt-academy/
- **Video**: YouTube embed (VNOpLg0otLo)
- **Telegram**: https://t.me/+hNiKvJohY101MzBh
- **Social**: @ENVOTRADES across platforms

## 🛠 Tech Stack

- **Framework**: Next.js 16.2.2 (App Router)
- **Styling**: Tailwind CSS 3.4.1
- **Language**: TypeScript 5
- **Runtime**: Node.js 22+
- **Port**: 3055

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
└── components/
    ├── HeroSection.tsx     # Hero with video and CTAs
    ├── WinRateTracker.tsx  # Animated stats display
    ├── WhatYouGet.tsx      # Feature cards
    ├── StorySection.tsx    # Personal story
    ├── PrecisionModel.tsx  # EQT model explanation
    ├── Testimonials.tsx    # Social proof cards
    ├── PricingSection.tsx  # Pricing comparison
    ├── MentorshipQuiz.tsx  # Interactive application
    ├── FAQ.tsx            # Collapsible FAQ
    ├── FinalCTA.tsx       # Final call-to-action
    └── Footer.tsx         # Footer with links
```

## 📱 Responsive Features

- Single-column mobile layout
- Touch-friendly interactive elements
- Optimized video embedding
- Mobile-first CSS approach
- Smooth scroll behavior

## ⚡ Performance

- Static site generation
- Optimized images
- Minimal JavaScript bundle
- CSS animations over JS
- Font preloading