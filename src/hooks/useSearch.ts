import { useState, useCallback } from 'react';
import type { Experience } from '../types/experience';

export function useSearch(initialExperiences: Experience[]) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredExperiences, setFilteredExperiences] = useState(initialExperiences);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    const filtered = initialExperiences.filter((experience) =>
      experience.title.toLowerCase().includes(query.toLowerCase()) ||
      experience.description.toLowerCase().includes(query.toLowerCase()) ||
      experience.location.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredExperiences(filtered);
  }, [initialExperiences]);

  return {
    searchQuery,
    filteredExperiences,
    handleSearch,
  };
}