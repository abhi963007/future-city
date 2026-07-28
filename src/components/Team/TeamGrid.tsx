import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  photoSrc: string;
  srcset: string;
  bio: string;
  socialLink: string;
  email: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Edward Ashworth',
    role: 'Founder & Managing Director',
    photoSrc: '/images/69f0d23c613ebaa58b5e5abd_portrait-3.avif',
    srcset:
      '/images/69f0d23c613ebaa58b5e5abd_portrait-3-p-500.avif 500w, /images/69f0d23c613ebaa58b5e5abd_portrait-3-p-800.avif 800w, /images/69f0d23c613ebaa58b5e5abd_portrait-3.avif 1623w',
    bio: 'Founder of Harroway with 22 years of experience across London new development sales, prime residential advisory, and investment transactions.',
    socialLink: 'https://www.linkedin.com/in/edward-ashworth',
    email: 'mailto:edward@example.co.uk',
  },
  {
    name: 'Charlotte Reid',
    role: 'Head of Block & Estate Management',
    photoSrc: '/images/69f0d24d657f94035313b9f6_portrait-2.avif',
    srcset:
      '/images/69f0d24d657f94035313b9f6_portrait-2-p-500.avif 500w, /images/69f0d24d657f94035313b9f6_portrait-2-p-800.avif 800w, /images/69f0d24d657f94035313b9f6_portrait-2.avif 1641w',
    bio: 'Block and estate management specialist with 16 years of experience overseeing residential developments across Greater London and the Home Counties.',
    socialLink: 'https://www.linkedin.com/in/charlotte-reid',
    email: 'mailto:charlotte@example.co.uk',
  },
  {
    name: 'Priya Mehta',
    role: 'Head of Investment Advisory',
    photoSrc: '/images/69f0d2571158f60b904d2833_portrait-6.avif',
    srcset:
      '/images/69f0d2571158f60b904d2833_portrait-6-p-500.avif 500w, /images/69f0d2571158f60b904d2833_portrait-6-p-800.avif 800w, /images/69f0d2571158f60b904d2833_portrait-6.avif 2048w',
    bio: 'London residential investment specialist with 14 years of experience advising private investors, family offices, and international buyers across Greater London.',
    socialLink: 'https://www.linkedin.com/in/priya-mehta',
    email: 'mailto:priya@example.co.uk',
  },
];

const TeamGrid: React.FC = () => {
  return (
    <div className="team-grid-wrap w-dyn-list">
      <div role="list" className="team-list w-dyn-items">
        {teamMembers.map((member, index) => (
          <div key={index} id="w-node-a117a19b-8e79-f009-5be3-bbe9957277be-0aee85ab" role="listitem" className="team-grid-item w-dyn-item">
            <div
              data-wf--team-card--variant="dark"
              data-wf-component-id="e78374e9-5904-ed40-4f7f-dd0b6929f5ff"
              data-wf-variant-state="base"
              className="team-card"
            >
              <div className="team-card-name">
                <div className="paragraph is-large">{member.name}</div>
                <div className="label-text">{member.role}</div>
              </div>
              <div className="team-card-photo">
                <img
                  alt={member.name}
                  loading="lazy"
                  src={member.photoSrc}
                  sizes="100vw"
                  srcSet={member.srcset}
                  className="team-photography"
                />
              </div>
              <div className="team-card-about">
                <p className="paragraph-bold is-xsmall">{member.bio}</p>
                <div className="team-card-contact">
                  <a href={member.email} className="team-contact-link">About</a>
                  <a href={member.socialLink} target="_blank" rel="noopener noreferrer" className="team-contact-link">Social</a>
                  <a href={member.email} className="team-contact-link">Email</a>
                </div>
              </div>
              <img
                src="/images/69e7c7b0c8b5b85fe79565ef_accordion-icon.svg"
                loading="lazy"
                alt="plus icon"
                className="team-card-icon"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamGrid;
