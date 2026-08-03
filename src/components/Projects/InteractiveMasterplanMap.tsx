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
  x: number; // percentage X position on image
  y: number; // percentage Y position on image
  width: number; // width of bulge area in px
  height: number; // height of bulge area in px
}

const locationHotspots: LocationHotspot[] = [
  {
    id: 'golden-gate',
    name: 'PROJECT SITE: SAMOOHA GOLDEN GATE',
    badge: 'FEATURED VILLA LAYOUT',
    subtitle: '150 FT Radial Road-S7 Frontage',
    distance: 'Direct Entrance',
    description: 'Premium DTCP & RERA approved villa plotting development situated directly on the 150 FT Radial Road S7.',
    keyFeatures: ['150 FT Main Road Frontage', '100% DTCP & RERA Approved', 'Spot Registration Available'],
    x: 43.5,
    y: 53.5,
    width: 140,
    height: 70,
  },
  {
    id: 'future-city',
    name: 'Future City 30,000 Acres Megacity',
    badge: 'CORE INNOVATION HUB',
    subtitle: 'Government Planned Fourth City',
    distance: '5 Mins Away',
    description: 'Telangana government’s flagship 30,000-acre Fourth City hub for AI, Health & Next-Gen Industries.',
    keyFeatures: ['30,000 Acres AI Hub', 'Young India Skill University', 'Massive Appreciation Zone'],
    x: 55,
    y: 19.5,
    width: 150,
    height: 80,
  },
  {
    id: 'rrr',
    name: 'Proposed Regional Ring Road (RRR)',
    badge: 'EXPRESSWAY CORRIDOR',
    subtitle: '330 FT Wide Regional Belt Highway',
    distance: '15 Mins Away',
    description: '330 FT wide expressway offering high-speed regional connectivity between Sagar & Srisailam highways.',
    keyFeatures: ['330 FT Expressway Width', 'Sagar & Srisailam Link', 'Seamless Goods Transit'],
    x: 52,
    y: 6,
    width: 220,
    height: 45,
  },
  {
    id: 'radial-road',
    name: '150 FT Radial Road S7',
    badge: 'PRIMARY ARTERIAL CORRIDOR',
    subtitle: 'Direct Link from ORR to Future City',
    distance: 'Adjacent to Site',
    description: 'Central 150 FT wide masterplan road connecting Outer Ring Road directly to Samooha Golden Gate.',
    keyFeatures: ['150 FT Arterial Width', 'Direct ORR Connection', 'Rapid Access Hub'],
    x: 54.5,
    y: 55,
    width: 40,
    height: 180,
  },
  {
    id: 'amazon',
    name: 'Amazon Cloud Data Center & Skill University',
    badge: 'GLOBAL TECH ANCHOR',
    subtitle: 'Kongara Kalan Tech Corridor',
    distance: '8 Mins Away',
    description: 'Multi-billion dollar AWS Cloud Hyper-scale Data Center campus and Young India Skill University.',
    keyFeatures: ['AWS Data Center Campus', 'Young India Skill University', 'Ranga Reddy Collectorate'],
    x: 73,
    y: 48,
    width: 140,
    height: 75,
  },
  {
    id: 'greenfield',
    name: '330 FT Wide Green Corridor',
    badge: 'EXPRESSWAY LINK',
    subtitle: 'Greenfield Highway Corridor',
    distance: '10 Mins Away',
    description: '330 FT wide green avenue express highway linking ORR directly into the core Future City hub.',
    keyFeatures: ['330 FT Green Corridor', 'ORR Express Interchange', 'Eco Avenue Infrastructure'],
    x: 67,
    y: 38,
    width: 35,
    height: 160,
  },
  {
    id: 'orr',
    name: 'Outer Ring Road (ORR) Interchange',
    badge: 'HYDERABAD RING ROAD',
    subtitle: 'Key Express Mobility Interchange',
    distance: '10 Mins Away',
    description: 'Hyderabad Outer Ring Road providing fast 20-minute access to Gachibowli, Financial District & Airport.',
    keyFeatures: ['8-Lane Expressway', '20-Min Financial District', 'Fast Airport Access'],
    x: 52,
    y: 71,
    width: 260,
    height: 35,
  },
  {
    id: 'tata-wonderla',
    name: 'TATA Aerospace, TCS Adibatla & Wonderla',
    badge: 'INDUSTRY & ENTERTAINMENT',
    subtitle: 'Adibatla IT & Aerospace Zone',
    distance: '15 Mins Away',
    description: 'TCS Adibatla mega IT campus, TATA Boeing Aerospace facility, and Wonderla Amusement Park.',
    keyFeatures: ['TCS Adibatla IT Hub', 'TATA Aerospace Manufacturing', 'Wonderla Park'],
    x: 47,
    y: 85,
    width: 160,
    height: 60,
  },
  {
    id: 'rgia',
    name: 'RGIA Airport & Proposed Metro Hub',
    badge: 'AIRPORT & METRO LINK',
    subtitle: 'Shamshabad International Airport',
    distance: '20 Mins Away',
    description: 'Rajiv Gandhi International Airport paired with the upcoming Airport Express Metro Railway line.',
    keyFeatures: ['Rajiv Gandhi Int. Airport', 'Airport Metro Line Link', 'Hardware & E-City Hub'],
    x: 86,
    y: 82,
    width: 120,
    height: 65,
  },
];

const InteractiveMasterplanMap: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<LocationHotspot | null>(null);
  const { openBookVisit } = useBookVisit();

  return (
    <div className="masterplan-interactive_container">
      {/* Map Graphic Canvas with Hover Bulge Hotspots */}
      <div className="masterplan-image-wrapper">
        <img
          src="/images/masterplan-location-map-black.jpg"
          alt="Future City Masterplan Location Map"
          className="masterplan-image-display"
        />

        {/* Mapped Hotspots with Bulge & Glow Animation */}
        {locationHotspots.map((spot) => {
          const isHovered = activeHotspot?.id === spot.id;

          return (
            <div
              key={spot.id}
              className={`masterplan-bulge-hotspot ${isHovered ? 'is-hovered' : ''}`}
              style={{
                left: `${spot.x}%`,
                top: `${spot.y}%`,
                width: `${spot.width}px`,
                height: `${spot.height}px`,
              }}
              onMouseEnter={() => setActiveHotspot(spot)}
              onMouseLeave={() => setActiveHotspot(null)}
              onClick={() => setActiveHotspot(spot)}
            >
              {/* Radar Pulsing Core */}
              <div className="bulge-radar-ring" />
              <div className="bulge-marker-pin">
                <span className="pin-dot" />
              </div>

              {/* Location Label Tag */}
              <span className="bulge-tag-label">
                {spot.name.split(' ')[0]} {spot.name.split(' ')[1]}
              </span>
            </div>
          );
        })}

        {/* Floating Detail Card on Hover */}
        {activeHotspot && (
          <div
            className="masterplan-hover-card"
            style={{
              left: activeHotspot.x > 60 ? `${activeHotspot.x - 30}%` : `${activeHotspot.x + 4}%`,
              top: activeHotspot.y > 60 ? `${activeHotspot.y - 25}%` : `${activeHotspot.y - 10}%`,
            }}
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
