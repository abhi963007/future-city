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

const teamPhotos: TeamMemberPhoto[] = [
  {
    name: 'Edward Ashworth',
    src: '/images/69f0d23c613ebaa58b5e5abd_portrait-3.avif',
    srcset:
      '/images/69f0d23c613ebaa58b5e5abd_portrait-3-p-500.avif 500w, /images/69f0d23c613ebaa58b5e5abd_portrait-3-p-800.avif 800w, /images/69f0d23c613ebaa58b5e5abd_portrait-3.avif 1623w',
  },
  {
    name: 'Charlotte Reid',
    src: '/images/69f0d24d657f94035313b9f6_portrait-2.avif',
    srcset:
      '/images/69f0d24d657f94035313b9f6_portrait-2-p-500.avif 500w, /images/69f0d24d657f94035313b9f6_portrait-2-p-800.avif 800w, /images/69f0d24d657f94035313b9f6_portrait-2.avif 1641w',
  },
  {
    name: 'Jessica Sutton',
    src: '/images/69f0d271ada7f395ba809b6f_portrait-5.avif',
    srcset:
      '/images/69f0d271ada7f395ba809b6f_portrait-5-p-500.avif 500w, /images/69f0d271ada7f395ba809b6f_portrait-5-p-800.avif 800w, /images/69f0d271ada7f395ba809b6f_portrait-5-p-1080.avif 1080w, /images/69f0d271ada7f395ba809b6f_portrait-5.avif 2048w',
  },
  {
    name: 'Priya Mehta',
    src: '/images/69f0d2571158f60b904d2833_portrait-6.avif',
    srcset:
      '/images/69f0d2571158f60b904d2833_portrait-6-p-500.avif 500w, /images/69f0d2571158f60b904d2833_portrait-6-p-800.avif 800w, /images/69f0d2571158f60b904d2833_portrait-6.avif 2048w',
  },
];

const statsData: StatItem[] = [
  {
    about: "Founded in 2006, Harroway has built a specialist presence in London's prime residential markets over 18 years.",
    number: '18+',
    label: 'Years in London',
    iconSrc: '/images/69f257acedf62dbe012620cd_blueprint.svg',
    alt: 'Years in London',
  },
  {
    about: 'Measured across developer, buyer, landlord, and block manag clients through post-instruction surveys.',
    number: '98%',
    label: 'Client satisfaction',
    iconSrc: '/images/69f257b3e12e045e07cd5a12_house-key.svg',
    alt: 'Client satisfaction',
  },
  {
    about: 'Cumulative gross development value across new residential schemes instructed to Harroway since 2006.',
    number: '£4.2bn',
    label: 'Development value advised',
    iconSrc: '/images/69f257c0fc6d025147a1d1a0_mortgage.svg',
    alt: 'Development value advised',
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
            <Label parts={['Our', 'Team']} variant="dark" />
            <h2 className="heading is-xlarge">Meet the experts behind our work</h2>
          </div>
        </div>
        <div className="stats-action">
          <Button href={ROUTES.ABOUT} variant="primary">
            <div className="button-text is-1st">Company</div>
            <div className="button-text is-2nd">Company</div>
          </Button>
        </div>
      </div>
      <div className="stats-col">
        <div className="stats-cms-image-wrapper w-dyn-list">
          <div role="list" className="stats-cms-image-list w-dyn-items">
            {teamPhotos.map((photo, i) => (
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
