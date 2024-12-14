import React from 'react';

type SortOption = 'price-asc' | 'price-desc' | 'rating-desc' | 'date-desc';

interface ExperienceSortProps {
  onSort: (option: SortOption) => void;
}

export function ExperienceSort({ onSort }: ExperienceSortProps) {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-500">Sort by:</span>
      <select
        className="rounded-md border-gray-300 py-1.5 pl-3 pr-8 text-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
        onChange={(e) => onSort(e.target.value as SortOption)}
      >
        <option value="date-desc">Newest</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating-desc">Highest Rated</option>
      </select>
    </div>
  );
}