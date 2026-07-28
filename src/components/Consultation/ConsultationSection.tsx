import React, { useState } from 'react';
import ConsultationForm from './ConsultationForm';
import FAQAccordion from './FAQAccordion';
import TeamGrid from '../Team/TeamGrid';

type TabType = 'Form' | 'FAQ' | 'Managements';

const ConsultationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('Form');

  return (
    <section
      id="tab-forms"
      data-wf-component-id="b66885b5-79f1-69d3-d647-10280aee85ab"
      data-wf-variant-state="base"
      className="section"
    >
      <div data-current={activeTab} className="tabs-cta w-tabs">
        <div className="tabs-menu w-tab-menu">
          {[
            { id: 'Form', label: 'Form' },
            { id: 'FAQ', label: 'FAQ' },
            { id: 'Managements', label: 'Management' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`tab-link-cta w-inline-block w-tab-link${
                activeTab === tab.id ? ' w--current' : ''
              }`}
              onClick={() => setActiveTab(tab.id as TabType)}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <div className="tab-text-cta">{tab.label}</div>
              <div className="tab-link-bg"></div>
            </button>
          ))}
        </div>
        <div className="tabs-content-cta w-tab-content">
          <div
            className={`tab-pane-cta w-tab-pane${activeTab === 'Form' ? ' w--tab-active' : ''}`}
            style={{ display: activeTab === 'Form' ? 'block' : 'none' }}
          >
            <ConsultationForm />
          </div>
          <div
            className={`tab-pane-cta is-fullwidth w-tab-pane${activeTab === 'FAQ' ? ' w--tab-active' : ''}`}
            style={{ display: activeTab === 'FAQ' ? 'block' : 'none' }}
          >
            <FAQAccordion />
          </div>
          <div
            className={`tab-pane-cta is-fullwidth w-tab-pane${activeTab === 'Managements' ? ' w--tab-active' : ''}`}
            style={{ display: activeTab === 'Managements' ? 'block' : 'none' }}
          >
            <TeamGrid />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
