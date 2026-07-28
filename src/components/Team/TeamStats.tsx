import React, { useRef } from 'react';
import Button from '../common/Button/Button';
import Label from '../common/Label/Label';
import { useTeamStatsAnimation } from '../../hooks/useTeamStatsAnimation';
import { ROUTES } from '../../utils/constants';

interface TeamMemberPhoto {
  name: string;
  src: string;
  srcset: string;
}

interface StatItem {
  about: string;
  number: string;
  label: string;
  iconSrc: string;
  alt: string;
}

const masterplanPhotos: TeamMemberPhoto[] = [
  {
    name: 'Future City Masterplan 1',
    src: '/images/69f0d23c613ebaa58b5e5abd_portrait-3.avif',
    srcset:
      '/images/69f0d23c613ebaa58b5e5abd_portrait-3-p-500.avif 500w, /images/69f0d23c613ebaa58b5e5abd_portrait-3-p-800.avif 800w, /images/69f0d23c613ebaa58b5e5abd_portrait-3.avif 1623w',
  },
  {
    name: 'Future City Masterplan 2',
    src: '/images/69f0d24d657f94035313b9f6_portrait-2.avif',
    srcset:
      '/images/69f0d24d657f94035313b9f6_portrait-2-p-500.avif 500w, /images/69f0d24d657f94035313b9f6_portrait-2-p-800.avif 800w, /images/69f0d24d657f94035313b9f6_portrait-2.avif 1641w',
  },
  {
    name: 'Future City Masterplan 3',
    src: '/images/69f0d271ada7f395ba809b6f_portrait-5.avif',
    srcset:
      '/images/69f0d271ada7f395ba809b6f_portrait-5-p-500.avif 500w, /images/69f0d271ada7f395ba809b6f_portrait-5-p-800.avif 800w, /images/69f0d271ada7f395ba809b6f_portrait-5-p-1080.avif 1080w, /images/69f0d271ada7f395ba809b6f_portrait-5.avif 2048w',
  },
  {
    name: 'Future City Masterplan 4',
    src: '/images/69f0d2571158f60b904d2833_portrait-6.avif',
    srcset:
      '/images/69f0d2571158f60b904d2833_portrait-6-p-500.avif 500w, /images/69f0d2571158f60b904d2833_portrait-6-p-800.avif 800w, /images/69f0d2571158f60b904d2833_portrait-6.avif 2048w',
  },
];

const statsData: StatItem[] = [
  {
    about: 'Positioned in Yacharam along Srisailam highway with maximum early-stage appreciation potential.',
    number: '₹12,999',
    label: 'Launch Price Per Sq Yd',
    iconSrc: '/images/69f257acedf62dbe012620cd_blueprint.svg',
    alt: 'Price Per Sq Yard',
  },
  {
    about: 'Exclusively designed 16-acre masterplanned gated community layout with wide internal roads.',
    number: '197',
    label: 'Premium Villa Plots',
    iconSrc: '/images/69f257b3e12e045e07cd5a12_house-key.svg',
    alt: 'Villa Plots Count',
  },
  {
    about: 'Located next to the 200-acre AI Hub, Skills University, and 14,000-acre Pharma City corridor.',
    number: '10X',
    label: 'Growth Potential',
    iconSrc: '/images/69f257c0fc6d025147a1d1a0_mortgage.svg',
    alt: 'Growth Potential',
  },
];

const TeamStats: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useTeamStatsAnimation(containerRef);

  return (
    <div
      ref={containerRef}
      data-wf-component-id="a1ed18a7-178d-eae8-5558-20dcdfdac7f5"
      data-wf-variant-state="base"
      className="section-team-stats"
    >
      <div className="stats-col is-title-col">
        <div className="stats-layout-2">
          <div className="sticky-team-title">
            <Label parts={['Project', 'Metrics']} variant="dark" />
            <h2 className="heading is-xlarge">Growth parameters & investment overview</h2>
          </div>
        </div>
        <div className="stats-action">
          <Button href={ROUTES.LOCATION} variant="primary">
            <div className="button-text is-1st">Explore Location</div>
            <div className="button-text is-2nd">Explore Location</div>
          </Button>
        </div>
      </div>
      <div className="stats-col">
        <div className="stats-cms-image-wrapper w-dyn-list">
          <div role="list" className="stats-cms-image-list w-dyn-items">
            {masterplanPhotos.map((photo, i) => (
              <div key={i} role="listitem" className="stats-cms-image-item w-dyn-item">
                <img
                  alt={photo.name}
                  loading="lazy"
                  src={photo.src}
                  sizes="100vw"
                  srcSet={photo.srcset}
                  className="cover-image fit-to-top"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="stats-col">
        <div className="stats-layout">
          <div className="stats-cms-wrapper w-dyn-list">
            <div role="list" className="stats-cms-list w-dyn-items">
              {statsData.map((stat, i) => (
                <div key={i} role="listitem" className="stats-cms-item w-dyn-item">
                  <div className="stats-cms-about">
                    <p className="paragraph">{stat.about}</p>
                  </div>
                  <div className="stats-cms-details">
                    <div className="stats-cms-number">
                      <div className="stats-cms-number-text">{stat.number}</div>
                      <div className="label-text">{stat.label}</div>
                    </div>
                    <img alt={stat.alt} loading="lazy" src={stat.iconSrc} className="stat-icon" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamStats;
