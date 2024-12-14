import React, { createContext, useContext, useState } from 'react';
import type { BookingConfirmation } from '../types/booking';

interface BookingContextType {
  currentBooking: BookingConfirmation | null;
  setCurrentBooking: (booking: BookingConfirmation | null) => void;
  clearBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [currentBooking, setCurrentBooking] = useState<BookingConfirmation | null>(null);

  const clearBooking = () => setCurrentBooking(null);

  return (
    <BookingContext.Provider value={{ currentBooking, setCurrentBooking, clearBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBookingContext() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBookingContext must be used within a BookingProvider');
  }
  return context;
}