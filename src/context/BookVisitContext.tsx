import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

interface BookVisitContextValue {
  isOpen: boolean;
  openBookVisit: () => void;
  closeBookVisit: () => void;
}

const BookVisitContext = createContext<BookVisitContextValue | null>(null);

export const BookVisitProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openBookVisit = useCallback(() => setIsOpen(true), []);
  const closeBookVisit = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, openBookVisit, closeBookVisit }),
    [isOpen, openBookVisit, closeBookVisit]
  );

  return <BookVisitContext.Provider value={value}>{children}</BookVisitContext.Provider>;
};

export function useBookVisit(): BookVisitContextValue {
  const ctx = useContext(BookVisitContext);
  if (!ctx) {
    throw new Error('useBookVisit must be used within BookVisitProvider');
  }
  return ctx;
}
