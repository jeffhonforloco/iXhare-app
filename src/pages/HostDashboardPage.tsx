import React, { useEffect, useState } from 'react';
import { HostDashboard } from '../components/host/HostDashboard';
import { getHostBookings } from '../services/booking';
import { useAuth } from '../hooks/useAuth';
import type { HostStats } from '../types/booking';

export function HostDashboardPage() {
  const { user } = useAuth();
  const [stats, setStats] = useState<HostStats>({
    totalBookings: 0,
    totalRevenue: 0,
    averageRating: 0,
    upcomingBookings: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      if (user) {
        try {
          const bookings = await getHostBookings(user.uid);
          // Calculate stats from bookings
          // This is a simplified version - you'd want to add more sophisticated calculations
          setStats({
            totalBookings: bookings.length,
            totalRevenue: bookings.reduce((acc, booking) => acc + booking.totalPrice, 0),
            averageRating: 4.5, // Calculate from reviews
            upcomingBookings: bookings.filter(b => new Date(b.date) > new Date()).length,
          });
        } catch (error) {
          console.error('Failed to fetch host stats:', error);
        }
      }
    };

    fetchStats();
  }, [user]);

  if (!user) {
    return (
      <div className="text-center py-12">
        <p>Please sign in to view your host dashboard.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Host Dashboard</h1>
      <HostDashboard stats={stats} />
    </div>
  );
}