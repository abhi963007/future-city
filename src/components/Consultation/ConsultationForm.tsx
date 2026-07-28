import React, { useRef, useState } from 'react';
import { useFormLabelAnimation } from '../../hooks/useFormLabelAnimation';

const ConsultationForm: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    plotSize: '150 Sq Yds',
    visitDate: '',
    message: '',
    gdpr: false,
  });

  useFormLabelAnimation(formRef);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.gdpr) {
      setStatus('error');
      return;
    }
    setStatus('success');
  };

  return (
    <div
      ref={formRef}
      id="form-section"
      data-wf--section-consultation--variant="fullscreen"
      className="section-consultation"
    >
      <div className="consultation-wrap">
        <div className="consultation-content">
          <div className="consultation-title">
            <h2 className="heading is-2xlarge">Book a Private Site Visit</h2>
          </div>
        </div>
        <div className="consultation-form">
          <div className="the-form w-form">
            {status === 'success' ? (
              <div className="success-message w-form-done" style={{ display: 'block' }}>
                <div className="label-text">
                  Thank you!
                  <br />
                  Your site visit request has been received. Our executive will contact you shortly.
                </div>
              </div>
            ) : (
              <form id="wf-form-Form" name="wf-form-Form" onSubmit={handleSubmit}>
                <div className="form-field-wrap">
                  <label htmlFor="Name" className="field-label">
                    Full Name
                  </label>
                  <input
                    className="field w-input"
                    maxLength={256}
                    name="Name"
                    type="text"
                    id="Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-field-wrap">
                  <label htmlFor="Phone" className="field-label">
                    Phone Number
                  </label>
                  <input
                    className="field w-input"
                    maxLength={256}
                    name="Phone"
                    type="tel"
                    id="Phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="form-field-wrap">
                  <label htmlFor="Email-3" className="field-label">
                    Email Address
                  </label>
                  <input
                    className="field w-input"
                    maxLength={256}
                    name="Email"
                    type="email"
                    id="Email-3"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-field-wrap">
                  <label htmlFor="VisitDate" className="field-label">
                    Preferred Visit Date
                  </label>
                  <input
                    className="field w-input"
                    maxLength={256}
                    name="VisitDate"
                    type="text"
                    placeholder="e.g. Tomorrow / Weekend"
                    id="VisitDate"
                    value={formData.visitDate}
                    onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                  />
                </div>

                <div className="form-field-wrap">
                  <label htmlFor="Message" className="field-label">
                    Additional Requirements or Questions
                  </label>
                  <textarea
                    className="field message w-input"
                    maxLength={5000}
                    name="Message"
                    minLength={5}
                    id="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <div className="form-field-wrap is-radio">
                  <label className="field-label is-2nd">Preferred Plot Size</label>
                  <div className="tab-form-wrap">
                    {[
                      { id: 'Plot-150', label: '150 Sq Yds' },
                      { id: 'Plot-200', label: '200 Sq Yds' },
                      { id: 'Plot-300', label: '300+ Sq Yds' },
                    ].map((srv) => (
                      <label key={srv.id} className="tab-form-field w-radio">
                        <div
                          className={`w-form-formradioinput w-form-formradioinput--inputType-custom tab-form-button w-radio-input${
                            formData.plotSize === srv.label ? ' w--redirected-checked' : ''
                          }`}
                        ></div>
                        <input
                          type="radio"
                          name="PlotSize"
                          id={srv.id}
                          style={{ opacity: 0, position: 'absolute', zIndex: -1 }}
                          value={srv.label}
                          checked={formData.plotSize === srv.label}
                          onChange={(e) => setFormData({ ...formData, plotSize: e.target.value })}
                        />
                        <span className="radio-label w-form-label">
                          {srv.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-field-wrap is-radio">
                  <div className="radio-wrap">
                    <label className="radio-field w-radio">
                      <div
                        className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input${
                          formData.gdpr ? ' w--redirected-checked' : ''
                        }`}
                      ></div>
                      <input
                        type="radio"
                        id="GDPR"
                        name="GDPR"
                        required
                        style={{ opacity: 0, position: 'absolute', zIndex: -1 }}
                        value="GDPR"
                        checked={formData.gdpr}
                        onChange={() => setFormData({ ...formData, gdpr: !formData.gdpr })}
                      />
                      <span className="radio-label w-form-label">
                        I agree to receive project updates and schedule a site visit.
                      </span>
                    </label>
                  </div>
                </div>

                <div className="button-form-wrap">
                  <input
                    type="submit"
                    aria-label="Submit form"
                    className="form-submit-button w-button"
                    value="Schedule Site Visit"
                  />
                </div>
              </form>
            )}

            {status === 'error' && (
              <div className="error-message w-form-fail" style={{ display: 'block' }}>
                <div className="label-text">Please accept terms to schedule your visit.</div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="consultation-bg">
        <div className="consultation-sticky-bg">
          <img
            alt="Codename Future City Site View"
            loading="lazy"
            src="/images/69e7c7b0c8b5b85fe79567a0_110610c2d57b2f714e3f602ef4cb5b97_after-2.avif"
            className="cover-image"
          />
          <div className="consultation-bg-overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationForm;
