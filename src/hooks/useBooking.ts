import { useState } from 'react';
import { createBooking } from '../services/booking';
import type { BookingFormData, BookingConfirmation } from '../types/booking';

export function useBooking() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitBooking = async (
    experienceId: string,
    userId: string,
    formData: BookingFormData
  ): Promise<BookingConfirmation | null> => {
    setLoading(true);
    setError(null);

    try {
      const confirmation = await createBooking(experienceId, userId, formData);
      return confirmation;
    } catch (err) {
      setError('Failed to create booking. Please try again.');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    submitBooking,
    loading,
    error,
  };
}