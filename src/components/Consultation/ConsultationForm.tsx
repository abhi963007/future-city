import React, { useRef, useState } from 'react';
import { useFormLabelAnimation } from '../../hooks/useFormLabelAnimation';

const ConsultationForm: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    phone: '',
    email: '',
    message: '',
    service: '',
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
            <h2 className="heading is-2xlarge">Book a private consultation</h2>
          </div>
        </div>
        <div className="consultation-form">
          <div className="the-form w-form">
            {status === 'success' ? (
              <div className="success-message w-form-done" style={{ display: 'block' }}>
                <div className="label-text">
                  Thank you!
                  <br />
                  Your submission has been received!
                </div>
              </div>
            ) : (
              <form id="wf-form-Form" name="wf-form-Form" onSubmit={handleSubmit}>
                <div className="form-field-wrap">
                  <label htmlFor="Name" className="field-label">
                    Name
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
                  <label htmlFor="Location" className="field-label">
                    Location
                  </label>
                  <input
                    className="field w-input"
                    maxLength={256}
                    name="Location"
                    type="text"
                    id="Location"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>

                <div className="form-field-wrap">
                  <label htmlFor="Phone" className="field-label">
                    Phone
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
                    Email
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
                  <label htmlFor="Message" className="field-label">
                    Reason for enquiry
                  </label>
                  <textarea
                    className="field message w-input"
                    maxLength={5000}
                    name="Message"
                    minLength={10}
                    id="Message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <div className="form-field-wrap is-radio">
                  <label className="field-label is-2nd">Service type</label>
                  <div className="tab-form-wrap">
                    {[
                      { id: 'Property-investment', label: 'Property investment' },
                      { id: 'Residential-sales', label: 'Residential sales' },
                      { id: 'Development-consultancy', label: 'Development consultancy' },
                    ].map((srv) => (
                      <label key={srv.id} className="tab-form-field w-radio">
                        <div
                          className={`w-form-formradioinput w-form-formradioinput--inputType-custom tab-form-button w-radio-input${
                            formData.service === srv.label ? ' w--redirected-checked' : ''
                          }`}
                        ></div>
                        <input
                          type="radio"
                          name="Service"
                          id={srv.id}
                          style={{ opacity: 0, position: 'absolute', zIndex: -1 }}
                          value={srv.label}
                          checked={formData.service === srv.label}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
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
                        I agree to the processing of my personal data.
                      </span>
                    </label>
                  </div>
                </div>

                <div className="button-form-wrap">
                  <input
                    type="submit"
                    aria-label="Submit form"
                    className="form-submit-button w-button"
                    value="Book consultation"
                  />
                </div>
              </form>
            )}

            {status === 'error' && (
              <div className="error-message w-form-fail" style={{ display: 'block' }}>
                <div className="label-text">Oops! Something went wrong while submitting the form.</div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="consultation-bg">
        <div className="consultation-sticky-bg">
          <img
            alt="Modern residential architecture with minimalist brick facade and contemporary balcony design at dusk."
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
