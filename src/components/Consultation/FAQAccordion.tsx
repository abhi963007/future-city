import React, { useRef, useState } from 'react';
import { gsap } from '../../utils/gsap';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'Where is Codename Future City located?',
    answer:
      'Codename Future City is located at Yacharam along the 6-lane Srisailam Highway, Hyderabad, directly adjacent to the upcoming Future City corridor, 200-acre AI Hub, and 14,000-acre Pharma City.',
  },
  {
    id: 2,
    question: 'Are the villa plots DTCP and RERA approved?',
    answer:
      'Yes, 100% DTCP and RERA approved layout with clear title, spot registration readiness, and bank loan approvals from major nationalized banks.',
  },
  {
    id: 3,
    question: 'What is the current launch price per square yard?',
    answer:
      'Initial launch pricing starts at ₹12,999 per sq yard with plot sizes ranging from 150 Sq Yds to 300+ Sq Yds.',
  },
  {
    id: 4,
    question: 'Is complimentary site visit transport available?',
    answer:
      'Yes! We provide complimentary luxury car pick-up and drop-off from anywhere in Hyderabad for your scheduled site visit.',
  },
];

const FAQAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const dropdownRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const toggleFAQ = (id: number) => {
    const isOpening = openId !== id;
    const targetDropdown = dropdownRefs.current[id];

    if (openId !== null && dropdownRefs.current[openId]) {
      const prevDropdown = dropdownRefs.current[openId];
      if (prevDropdown) {
        gsap.to(prevDropdown, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.inOut',
        });
      }
    }

    if (isOpening && targetDropdown) {
      setOpenId(id);
      gsap.set(targetDropdown, { display: 'block', height: 'auto', visibility: 'visible' });
      const fullHeight = targetDropdown.scrollHeight;
      gsap.fromTo(
        targetDropdown,
        { height: 0, opacity: 0 },
        { height: fullHeight, opacity: 1, duration: 0.35, ease: 'power2.out' },
      );
    } else {
      setOpenId(null);
    }
  };

  return (
    <div className="container is-narrow">
      <div className="faq-accordions w-dyn-list">
        <div role="list" className="faq-accordions-list w-dyn-items">
          {faqData.map((faq) => (
            <div key={faq.id} role="listitem" className="faq-accordion-item w-dyn-item" style={{ visibility: 'visible' }}>
              <div className="faq-accordion-number">
                <div className="label-text">{faq.id}</div>
              </div>
              <div className="faq-accordion-block">
                <div className="accordion">
                  <button
                    type="button"
                    className="accordion-toggle"
                    onClick={() => toggleFAQ(faq.id)}
                    style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', cursor: 'pointer' }}
                  >
                    <p className="paragraph-bold">{faq.question}</p>
                    <img
                      loading="lazy"
                      src="/images/69e7c7b0c8b5b85fe79565ef_accordion-icon.svg"
                      alt="Accordion icon"
                      className="accordion-icon"
                      style={{
                        transform: openId === faq.id ? 'rotate(45deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                      }}
                    />
                  </button>
                  <div
                    ref={(el) => { dropdownRefs.current[faq.id] = el; }}
                    className="accordion-dropdown"
                    style={{
                      height: 0,
                      opacity: 0,
                      overflow: 'hidden',
                      display: openId === faq.id ? 'block' : 'none',
                    }}
                  >
                    <div className="accordion-spacing">
                      <div className="w-richtext">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
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

export default FAQAccordion;
