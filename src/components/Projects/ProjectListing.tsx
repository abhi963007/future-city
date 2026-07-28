import React, { useRef } from 'react';
import Button from '../common/Button/Button';
import ParallaxImage from '../common/ParallaxImage/ParallaxImage';
import Label from '../common/Label/Label';
import { useProjectsAnimation } from '../../hooks/useProjectsAnimation';

interface ProjectDetail {
  label: string;
  value: string;
}

interface ProjectItem {
  href: string;
  title: string;
  desc: string;
  year: string;
  category: string;
  imageSrc: string;
  details: ProjectDetail[];
}

const projectsData: ProjectItem[] = [
  {
    href: '/project/boundary-works-shoreditch',
    title: 'Boundary Works, Shoreditch',
    desc: '306-unit off-plan sales programme and block management instruction, Shoreditch, London EC2',
    year: '2023',
    category: 'New Development',
    imageSrc: '/images/69f7267845fb02b60a644c64_propera-12.avif',
    details: [
      { label: 'Location', value: 'Shoreditch, London EC2' },
      { label: 'Duration', value: '26 months' },
      { label: 'Delivered', value: '306 units' },
      { label: 'Year', value: '2023' },
    ],
  },
  {
    href: '/project/the-meridian-canary-wharf',
    title: 'The Meridian, Canary Wharf',
    desc: 'Private off-market sales programme for a 48-unit UHNW residential tower, Canary Wharf, London E14',
    year: '2024',
    category: 'Buying & Selling',
    imageSrc: '/images/69ea1826148e95c2e327330a_propera-7.avif',
    details: [
      { label: 'Location', value: 'Canary Wharf, London E14' },
      { label: 'Duration', value: '22 months' },
      { label: 'Delivered', value: '48 units' },
      { label: 'Year', value: '2024' },
    ],
  },
  {
    href: '/project/sloane-place-chelsea',
    title: 'Sloane Place, Chelsea',
    desc: 'Block management takeover and operational restructuring for a 124-unit mixed-tenure development, Chelsea SW3',
    year: '2022',
    category: 'New Development',
    imageSrc: '/images/69f726a334302475a11a6e24_propera-24.avif',
    details: [
      { label: 'Location', value: 'Chelsea, London SW3' },
      { label: 'Duration', value: 'Ongoing since 2022' },
      { label: 'Delivered', value: '124 units' },
      { label: 'Year', value: '2022' },
    ],
  },
];

const ProjectListing: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useProjectsAnimation(containerRef);

  return (
    <div ref={containerRef} className="section-project-listing">
      <div className="projects-wrap w-dyn-list">
        <div role="list" className="projects-list w-dyn-items">
          {projectsData.map((project, index) => (
            <div key={index} role="listitem" className="project-item w-dyn-item">
              <div className="project-listing-image">
                <div className="project-image-size">
                  <ParallaxImage alt={project.title} src={project.imageSrc} variant="small" />
                </div>
              </div>
              <div className="col-2">
                <div className="project-listing-about">
                  <Label parts={[project.year, project.category]} variant="light" />
                  <h2 className="heading is-medium">{project.title}</h2>
                  <p className="paragraph">{project.desc}</p>
                  <div className="project-details">
                    {project.details.map((detail, dIdx) => (
                      <div key={dIdx} className="project-detail-block">
                        <div className="label-text with-opacity">{detail.label}</div>
                        <div className="label-text">{detail.value}</div>
                      </div>
                    ))}
                  </div>
                  <div className="project-listing-action">
                    <Button href={project.href} variant="secondary">
                      <div className="button-text is-1st">Project details</div>
                      <div className="button-text is-2nd">Project details</div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectListing;
