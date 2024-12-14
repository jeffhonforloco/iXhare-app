import { useState, useCallback, useMemo } from 'react';
import type { Experience } from '../../types/experience';

type SortOption = 'price-asc' | 'price-desc' | 'rating-desc' | 'date-desc';

export function useExperienceSort(experiences: Experience[]) {
  const [sortOption, setSortOption] = useState<SortOption>('date-desc');

  const sortedExperiences = useMemo(() => {
    return [...experiences].sort((a, b) => {
      switch (sortOption) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating-desc':
          return b.rating - a.rating;
        case 'date-desc':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        default:
          return 0;
      }
    });
  }, [experiences, sortOption]);

  const handleSort = useCallback((option: SortOption) => {
    setSortOption(option);
  }, []);

  return {
    sortedExperiences,
    handleSort,
  };
}