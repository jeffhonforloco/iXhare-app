import React, { useState } from 'react';
import { SearchBar } from '../components/experience/SearchBar';
import { CategoryFilter } from '../components/experience/CategoryFilter';
import { ExperienceGrid } from '../components/experience/ExperienceGrid';
import type { Experience, Category } from '../types/experience';

// Mock data - replace with actual API calls
const mockCategories: Category[] = [
  { id: '1', name: 'Adventure', icon: 'mountain' },
  { id: '2', name: 'Food & Drink', icon: 'utensils' },
  { id: '3', name: 'Arts & Culture', icon: 'palette' },
];

const mockExperiences: Experience[] = [
  {
    id: '1',
    title: 'Mountain Hiking Adventure',
    description: 'Experience the thrill of mountain hiking',
    price: 89,
    location: 'Rocky Mountains',
    duration: 4,
    capacity: 8,
    category: '1',
    images: ['https://images.unsplash.com/photo-1551632811-561732d1e306'],
    hostId: 'host1',
    rating: 4.8,
    reviewCount: 124,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Add more mock experiences...
];

export function ExperiencesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredExperiences = mockExperiences.filter((experience) => {
    const matchesSearch = experience.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || experience.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Discover Experiences</h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-64">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
          <div className="flex-1">
            <CategoryFilter
              categories={mockCategories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
        </div>
        <ExperienceGrid experiences={filteredExperiences} />
      </div>
    </div>
  );
}