import React, { useState } from 'react';
import { Calendar, Users } from 'lucide-react';
import type { BookingFormData } from '../../types/booking';

interface BookingFormProps {
  experiencePrice: number;
  onSubmit: (data: BookingFormData) => void;
}

export function BookingForm({ experiencePrice, onSubmit }: BookingFormProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    date: new Date(),
    guestCount: 1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">
          Select Date
        </label>
        <div className="mt-1 relative">
          <input
            type="date"
            id="date"
            onChange={(e) => setFormData({ ...formData, date: new Date(e.target.value) })}
            className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            min={new Date().toISOString().split('T')[0]}
          />
          <Calendar className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div>
        <label htmlFor="guests" className="block text-sm font-medium text-gray-700">
          Number of Guests
        </label>
        <div className="mt-1 relative">
          <input
            type="number"
            id="guests"
            min="1"
            value={formData.guestCount}
            onChange={(e) => setFormData({ ...formData, guestCount: parseInt(e.target.value) })}
            className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <Users className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div>
        <label htmlFor="requirements" className="block text-sm font-medium text-gray-700">
          Special Requirements
        </label>
        <textarea
          id="requirements"
          rows={3}
          onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="border-t border-gray-200 pt-4">
        <div className="flex justify-between text-sm">
          <span>Price per person</span>
          <span>${experiencePrice}</span>
        </div>
        <div className="flex justify-between text-sm mt-2">
          <span>Total guests</span>
          <span>{formData.guestCount}</span>
        </div>
        <div className="flex justify-between font-medium text-lg mt-2 pt-2 border-t">
          <span>Total</span>
          <span>${experiencePrice * formData.guestCount}</span>
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Book Now
      </button>
    </form>
  );
}