import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, Clock, Users, MapPin } from 'lucide-react';
import type { Experience } from '../types/experience';

// Mock data - replace with actual API call
const mockExperience: Experience = {
  id: '1',
  title: 'Mountain Hiking Adventure',
  description: 'Experience the thrill of mountain hiking with our expert guides. Perfect for beginners and experienced hikers alike.',
  price: 89,
  location: 'Rocky Mountains',
  duration: 4,
  capacity: 8,
  category: '1',
  images: [
    'https://images.unsplash.com/photo-1551632811-561732d1e306',
    'https://images.unsplash.com/photo-1551632810-561732d1e305',
  ],
  hostId: 'host1',
  rating: 4.8,
  reviewCount: 124,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export function ExperienceDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const experience = mockExperience; // Replace with API call using id

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
            <img
              src={experience.images[0]}
              alt={experience.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {experience.images.slice(1).map((image, index) => (
              <div key={index} className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`${experience.title} ${index + 2}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{experience.title}</h1>
            <div className="mt-2 flex items-center">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="ml-1 text-sm text-gray-600">
                {experience.rating} ({experience.reviewCount} reviews)
              </span>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-gray-400" />
                <span className="ml-2 text-sm text-gray-700">
                  {experience.duration} hours
                </span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-gray-400" />
                <span className="ml-2 text-sm text-gray-700">
                  Up to {experience.capacity} people
                </span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span className="ml-2 text-sm text-gray-700">
                  {experience.location}
                </span>
              </div>
            </dl>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-lg font-medium text-gray-900">About this experience</h2>
            <p className="mt-4 text-sm text-gray-600">{experience.description}</p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">${experience.price}</p>
                <p className="text-sm text-gray-500">per person</p>
              </div>
              <button className="rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}