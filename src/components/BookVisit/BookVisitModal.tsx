import React, { useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useBookVisit } from '../../context/BookVisitContext';
import { getLenis } from '../../hooks/useLenis';

const PLOT_OPTIONS = ['150 Sq Yds', '200 Sq Yds', '300+ Sq Yds'] as const;

const BookVisitModal: React.FC = () => {
  const { isOpen, closeBookVisit } = useBookVisit();
  const titleId = useId();
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    plotSize: '150 Sq Yds',
    visitDate: '',
    message: '',
    consent: false,
  });

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.classList.add('book-visit-modal-open');
    getLenis()?.stop();

    const timer = window.setTimeout(() => firstFieldRef.current?.focus(), 50);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeBookVisit();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.classList.remove('book-visit-modal-open');
      getLenis()?.start();
      window.clearTimeout(timer);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, closeBookVisit]);

  useEffect(() => {
    if (!isOpen) {
      setStatus('idle');
      setFormData({
        name: '',
        phone: '',
        email: '',
        plotSize: '150 Sq Yds',
        visitDate: '',
        message: '',
        consent: false,
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      setStatus('error');
      return;
    }
    setStatus('success');
  };

  return createPortal(
    <div className="book-visit-modal" role="presentation">
      <button
        type="button"
        className="book-visit-modal__backdrop"
        aria-label="Close booking form"
        onClick={closeBookVisit}
      />

      <div
        className="book-visit-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <button
          type="button"
          className="book-visit-modal__close"
          aria-label="Close"
          onClick={closeBookVisit}
        >
          ×
        </button>

        <div className="book-visit-modal__header">
          <p className="book-visit-modal__eyebrow">Codename Future City</p>
          <h2 id={titleId} className="book-visit-modal__title">
            Book a Private Site Visit
          </h2>
          <p className="book-visit-modal__subtitle">
            Reserve your preferred slot. Our executive will confirm shortly.
          </p>
        </div>

        {status === 'success' ? (
          <div className="book-visit-modal__success">
            <p className="book-visit-modal__success-title">Request received</p>
            <p className="book-visit-modal__success-text">
              Thank you. Your site visit request has been submitted. Our team will contact you
              shortly.
            </p>
            <button type="button" className="book-visit-modal__submit" onClick={closeBookVisit}>
              Close
            </button>
          </div>
        ) : (
          <form className="book-visit-modal__form" onSubmit={handleSubmit}>
            <div className="book-visit-modal__field">
              <label htmlFor="book-name">Full Name</label>
              <input
                ref={firstFieldRef}
                id="book-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="book-visit-modal__row">
              <div className="book-visit-modal__field">
                <label htmlFor="book-phone">Phone Number</label>
                <input
                  id="book-phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="book-visit-modal__field">
                <label htmlFor="book-email">Email</label>
                <input
                  id="book-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="book-visit-modal__row">
              <div className="book-visit-modal__field">
                <label htmlFor="book-plot">Preferred Plot Size</label>
                <select
                  id="book-plot"
                  name="plotSize"
                  value={formData.plotSize}
                  onChange={(e) => setFormData({ ...formData, plotSize: e.target.value })}
                >
                  {PLOT_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="book-visit-modal__field">
                <label htmlFor="book-date">Preferred Visit Date</label>
                <input
                  id="book-date"
                  name="visitDate"
                  type="text"
                  placeholder="e.g. Tomorrow / Weekend"
                  value={formData.visitDate}
                  onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                />
              </div>
            </div>

            <div className="book-visit-modal__field">
              <label htmlFor="book-message">Message</label>
              <textarea
                id="book-message"
                name="message"
                rows={3}
                placeholder="Any specific plot preference or questions"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <label className="book-visit-modal__consent">
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={(e) => {
                  setFormData({ ...formData, consent: e.target.checked });
                  if (e.target.checked && status === 'error') setStatus('idle');
                }}
              />
              <span>I agree to receive project updates and schedule a site visit.</span>
            </label>

            {status === 'error' && (
              <p className="book-visit-modal__error" role="alert">
                Please accept the terms to schedule your visit.
              </p>
            )}

            <button type="submit" className="book-visit-modal__submit">
              Schedule Site Visit
            </button>
          </form>
        )}
      </div>
    </div>,
    document.body
  );
};

export default BookVisitModal;
