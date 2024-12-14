export interface BookingFormData {
  date: Date;
  guestCount: number;
  specialRequirements?: string;
}

export interface BookingConfirmation {
  bookingId: string;
  experienceId: string;
  date: Date;
  guestCount: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface HostStats {
  totalBookings: number;
  totalRevenue: number;
  averageRating: number;
  upcomingBookings: number;
}