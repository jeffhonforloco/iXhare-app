import { collection, addDoc, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';
import type { BookingFormData, BookingConfirmation } from '../types/booking';

export async function createBooking(
  experienceId: string,
  userId: string,
  formData: BookingFormData
): Promise<BookingConfirmation> {
  try {
    const bookingData = {
      experienceId,
      userId,
      date: formData.date,
      guestCount: formData.guestCount,
      specialRequirements: formData.specialRequirements,
      status: 'pending',
      createdAt: new Date(),
    };

    const docRef = await addDoc(collection(db, 'bookings'), bookingData);
    
    return {
      bookingId: docRef.id,
      experienceId,
      date: formData.date,
      guestCount: formData.guestCount,
      totalPrice: 0, // Calculate based on experience price
      status: 'pending',
    };
  } catch (error) {
    throw new Error('Failed to create booking');
  }
}

export async function getUserBookings(userId: string) {
  try {
    const q = query(
      collection(db, 'bookings'),
      where('userId', '==', userId)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    throw new Error('Failed to fetch user bookings');
  }
}

export async function getHostBookings(hostId: string) {
  try {
    const q = query(
      collection(db, 'bookings'),
      where('hostId', '==', hostId)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    throw new Error('Failed to fetch host bookings');
  }
}

export async function updateBookingStatus(
  bookingId: string,
  status: 'confirmed' | 'cancelled'
) {
  try {
    const bookingRef = doc(db, 'bookings', bookingId);
    await updateDoc(bookingRef, { status });
  } catch (error) {
    throw new Error('Failed to update booking status');
  }
}