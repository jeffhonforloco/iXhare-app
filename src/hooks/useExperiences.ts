import { useState, useEffect } from 'react';
import type { Experience } from '../types/experience';

export function useExperiences(categoryId?: string) {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      setLoading(true);
      try {
        // Replace with actual API call
        const response = await fetch('/api/experiences' + (categoryId ? `?category=${categoryId}` : ''));
        const data = await response.json();
        setExperiences(data);
      } catch (err) {
        setError('Failed to fetch experiences');
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, [categoryId]);

  return { experiences, loading, error };
}