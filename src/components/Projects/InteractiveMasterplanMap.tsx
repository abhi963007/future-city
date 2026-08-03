import React, { useState } from 'react';
import { useBookVisit } from '../../context/BookVisitContext';

export interface LocationHotspot {
  id: string;
  name: string;
  badge: string;
  subtitle: string;
  distance: string;
  description: string;
  keyFeatures: string[];
  x: number; // percentage X center position on image
  y: number; // percentage Y center position on image
  width: number; // percentage width of exact target region
  height: number; // percentage height of exact target region
  popoverPos: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
}

const locationHotspots: LocationHotspot[] = [
  {
    id: 'golden-gate',
    name: 'PROJECT SITE: SAMOOHA GOLDEN GATE',
    badge: 'FEATURED VILLA LAYOUT',
    subtitle: '150 FT Radial Road S7 Frontage',
    distance: 'Direct Entrance',
    description: 'Premium DTCP & RERA approved villa plotting development situated directly on the 150 FT Radial Road S7.',
    keyFeatures: ['150 FT Main Road Frontage', '100% DTCP & RERA Approved', 'Spot Registration Available'],
    x: 47.5,
    y: 50.0,
    width: 9.5,
    height: 13.5,
    popoverPos: { top: '35%', right: '54%' },
  },
  {
    id: 'future-city',
    name: 'Future City 30,000 Acres Megacity',
    badge: 'CORE INNOVATION HUB',
    subtitle: 'Government Planned Fourth City',
    distance: '5 Mins Away',
    description: 'Telangana government’s flagship 30,000-acre Fourth City hub for AI, Health & Next-Gen Industries.',
    keyFeatures: ['30,000 Acres AI Hub', 'Young India Skill University', 'Massive Appreciation Zone'],
    x: 53.5,
    y: 18.0,
    width: 21.0,
    height: 13.0,
    popoverPos: { top: '22%', right: '48%' },
  },
  {
    id: 'rrr',
    name: 'Proposed Regional Ring Road (RRR)',
    badge: 'EXPRESSWAY CORRIDOR',
    subtitle: '330 FT Wide Regional Belt Highway',
    distance: '15 Mins Away',
    description: '330 FT wide expressway offering high-speed regional connectivity between Sagar & Srisailam highways.',
    keyFeatures: ['330 FT Expressway Width', 'Sagar & Srisailam Link', 'Seamless Goods Transit'],
    x: 55.0,
    y: 6.5,
    width: 42.0,
    height: 6.5,
    popoverPos: { top: '11%', left: '35%' },
  },
  {
    id: 'radial-road',
    name: '150 FT Radial Road S7',
    badge: 'PRIMARY ARTERIAL CORRIDOR',
    subtitle: 'Direct Link from ORR to Future City',
    distance: 'Adjacent to Site',
    description: 'Central 150 FT wide masterplan road connecting Outer Ring Road directly to Samooha Golden Gate.',
    keyFeatures: ['150 FT Arterial Width', 'Direct ORR Connection', 'Rapid Access Hub'],
    x: 59.5,
    y: 50.0,
    width: 4.5,
    height: 32.0,
    popoverPos: { top: '34%', left: '63%' },
  },
  {
    id: 'amazon',
    name: 'Amazon Cloud Data Center & Skill University',
    badge: 'GLOBAL TECH ANCHOR',
    subtitle: 'Kongara Kalan Tech Corridor',
    distance: '8 Mins Away',
    description: 'Multi-billion dollar AWS Cloud Hyper-scale Data Center campus and Young India Skill University.',
    keyFeatures: ['AWS Data Center Campus', 'Young India Skill University', 'Ranga Reddy Collectorate'],
    x: 73.5,
    y: 51.5,
    width: 11.5,
    height: 22.0,
    popoverPos: { top: '36%', right: '29%' },
  },
  {
    id: 'greenfield',
    name: '300 FT Wide Green Corridor',
    badge: 'EXPRESSWAY LINK',
    subtitle: 'Greenfield Highway Corridor',
    distance: '10 Mins Away',
    description: '300 FT wide green avenue express highway linking ORR directly into the core Future City hub.',
    keyFeatures: ['300 FT Green Corridor', 'ORR Express Interchange', 'Eco Avenue Infrastructure'],
    x: 68.2,
    y: 45.0,
    width: 4.2,
    height: 32.0,
    popoverPos: { top: '28%', right: '35%' },
  },
  {
    id: 'orr',
    name: 'Outer Ring Road (ORR) Interchange',
    badge: 'HYDERABAD RING ROAD',
    subtitle: 'Key Express Mobility Interchange',
    distance: '10 Mins Away',
    description: 'Hyderabad Outer Ring Road providing fast 20-minute access to Gachibowli, Financial District & Airport.',
    keyFeatures: ['8-Lane Expressway', '20-Min Financial District', 'Fast Airport Access'],
    x: 56.0,
    y: 70.5,
    width: 46.0,
    height: 7.5,
    popoverPos: { bottom: '31%', left: '38%' },
  },
  {
    id: 'tata-wonderla',
    name: 'TATA Aerospace, TCS Adibatla & Wonderla',
    badge: 'INDUSTRY & ENTERTAINMENT',
    subtitle: 'Adibatla IT & Aerospace Zone',
    distance: '15 Mins Away',
    description: 'TCS Adibatla mega IT campus, TATA Boeing Aerospace facility, and Wonderla Amusement Park.',
    keyFeatures: ['TCS Adibatla IT Hub', 'TATA Aerospace Manufacturing', 'Wonderla Park'],
    x: 48.5,
    y: 84.0,
    width: 28.0,
    height: 10.0,
    popoverPos: { bottom: '17%', left: '36%' },
  },
  {
    id: 'rgia',
    name: 'RGIA Airport & Proposed Metro Hub',
    badge: 'AIRPORT & METRO LINK',
    subtitle: 'Shamshabad International Airport',
    distance: '20 Mins Away',
    description: 'Rajiv Gandhi International Airport paired with the upcoming Airport Express Metro Railway line.',
    keyFeatures: ['Rajiv Gandhi Int. Airport', 'Airport Metro Line Link', 'Hardware & E-City Hub'],
    x: 88.0,
    y: 76.5,
    width: 11.5,
    height: 16.0,
    popoverPos: { bottom: '26%', right: '14%' },
  },
  {
    id: 'forest',
    name: 'Nandi Wanaparthy Reserved Forest',
    badge: 'PRISTINE GREEN ZONE',
    subtitle: 'Protected Natural Forest Reserve',
    distance: '2 Mins Away',
    description: 'Expansions of lush green natural reserved forest assuring unpolluted air and micro-climate balance.',
    keyFeatures: ['Lush Forest Cover', 'Unsaturated Pure Air', 'Protected Eco-Zone'],
    x: 51.5,
    y: 62.5,
    width: 9.5,
    height: 10.0,
    popoverPos: { bottom: '37%', right: '51%' },
  },
];

const InteractiveMasterplanMap: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<LocationHotspot | null>(null);
  const { openBookVisit } = useBookVisit();

  return (
    <div className="masterplan-interactive_container">
      {/* Map Graphic Canvas with Precision Hover Bulge Hotspots */}
      <div className="masterplan-image-wrapper" onMouseLeave={() => setActiveHotspot(null)}>
        <img
          src="/images/masterplan-location-map-black.jpg"
          alt="Future City Masterplan Location Map"
          className="masterplan-image-display"
        />

        {/* Mapped Hotspots with Precision Percentage Outlines & Bulge Animation */}
        {locationHotspots.map((spot) => {
          const isHovered = activeHotspot?.id === spot.id;

          return (
            <div
              key={spot.id}
              className={`masterplan-bulge-hotspot ${isHovered ? 'is-hovered' : ''}`}
              style={{
                left: `${spot.x}%`,
                top: `${spot.y}%`,
                width: `${spot.width}%`,
                height: `${spot.height}%`,
              }}
              onMouseEnter={() => setActiveHotspot(spot)}
              onClick={() => setActiveHotspot(spot)}
            >
              {/* Target Corner Brackets & Beacon */}
              <div className="hotspot-corner corner-tl" />
              <div className="hotspot-corner corner-tr" />
              <div className="hotspot-corner corner-bl" />
              <div className="hotspot-corner corner-br" />
              <div className="target-beacon-dot" />

              {/* Hover Tag Label */}
              <span className="bulge-tag-label">
                {spot.name.split(' ')[0]} {spot.name.split(' ')[1]}
              </span>
            </div>
          );
        })}

        {/* Floating Detail Card with Custom Responsive Positioning */}
        {activeHotspot && (
          <div
            className="masterplan-hover-card"
            style={activeHotspot.popoverPos}
            onMouseEnter={() => setActiveHotspot(activeHotspot)}
          >
            <div className="hover-card_header">
              <span className="hover-card_badge">{activeHotspot.badge}</span>
              <span className="hover-card_distance">{activeHotspot.distance}</span>
            </div>

            <h4 className="hover-card_title">{activeHotspot.name}</h4>
            <div className="hover-card_subtitle">{activeHotspot.subtitle}</div>
            <p className="hover-card_desc">{activeHotspot.description}</p>

            <div className="hover-card_pills">
              {activeHotspot.keyFeatures.map((feat, idx) => (
                <span key={idx} className="hover-card_pill">
                  ✓ {feat}
                </span>
              ))}
            </div>

            <button
              type="button"
              className="hover-card_cta"
              onClick={openBookVisit}
            >
              <span>Book Site Visit</span>
              <span className="cta-arrow">→</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveMasterplanMap;
