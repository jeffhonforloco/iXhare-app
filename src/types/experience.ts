export interface Experience {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  duration: number;
  capacity: number;
  category: string;
  images: string[];
  hostId: string;
  rating: number;
  reviewCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Review {
  id: string;
  experienceId: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

export interface Booking {
  id: string;
  experienceId: string;
  userId: string;
  date: Date;
  guestCount: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: Date;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}