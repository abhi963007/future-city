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
    question: 'What services does Harroway offer?',
    answer:
      'Harroway provides new development sales, block and estate management, residential sales and lettings, buyer representation, investment advisory, development consultancy, and relocation services across Greater London and the Home Counties. Our primary focus is new residential development and prime London residential property.',
  },
  {
    id: 2,
    question: 'How long does the process take?',
    answer:
      "Timelines vary by service. A new development sales programme typically runs 12 to 24 months from launch through to final legal completion. A residential sale in the prime London market typically takes 8 to 16 weeks from instruction to completion. Block management instructions are ongoing. We provide a clear timeline estimate at the initial consultation for every engagement.",
  },
  {
    id: 3,
    question: 'How does the onboarding process work?',
    answer:
      "Every engagement begins with an initial consultation to understand the client's objectives, timeline, and constraints. For developers, this typically involves a scheme appraisal meeting. For buyers and landlords, it begins with a brief and requirements review. From there, we prepare a tailored proposal covering our recommended approach, fees, and timeline for approval before we proceed.",
  },
  {
    id: 4,
    question: 'Do you work with international buyers?',
    answer:
      'Yes. Harroway works with international buyers across the full purchase process, from initial market orientation and property search through to legal completion and post-purchase management. We can introduce clients to specialist UK property solicitors, mortgage advisers, currency transfer services, and block management providers as required. We have particular experience working with buyers from the UAE, Singapore, Hong Kong, and across mainland Europe.',
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
