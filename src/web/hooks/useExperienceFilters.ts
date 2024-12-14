import { useState, useCallback } from 'react';
import type { Experience } from '../../types/experience';

interface Filters {
  search: string;
  priceRange: { min: number; max: number };
  duration: number | null;
}

export function useExperienceFilters(experiences: Experience[]) {
  const [filters, setFilters] = useState<Filters>({
    search: '',
    priceRange: { min: 0, max: Infinity },
    duration: null,
  });

  const filteredExperiences = experiences.filter((experience) => {
    const matchesSearch =
      experience.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      experience.description.toLowerCase().includes(filters.search.toLowerCase());

    const matchesPrice =
      experience.price >= filters.priceRange.min &&
      experience.price <= filters.priceRange.max;

    const matchesDuration = !filters.duration || experience.duration <= filters.duration;

    return matchesSearch && matchesPrice && matchesDuration;
  });

  const setSearch = useCallback((search: string) => {
    setFilters((prev) => ({ ...prev, search }));
  }, []);

  const setPriceRange = useCallback((min: number, max: number) => {
    setFilters((prev) => ({ ...prev, priceRange: { min, max } }));
  }, []);

  const setDuration = useCallback((duration: number) => {
    setFilters((prev) => ({ ...prev, duration }));
  }, []);

  return {
    filteredExperiences,
    setSearch,
    setPriceRange,
    setDuration,
  };
}