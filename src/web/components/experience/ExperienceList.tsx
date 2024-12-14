import React from 'react';
import { ExperienceCard } from './ExperienceCard';
import type { Experience } from '../../../types/experience';

interface ExperienceListProps {
  experiences: Experience[];
  loading?: boolean;
}

export function ExperienceList({ experiences, loading }: ExperienceListProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="animate-pulse bg-gray-200 rounded-lg h-72"
          />
        ))}
      </div>
    );
  }

  if (experiences.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No experiences found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {experiences.map((experience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}
    </div>
  );
}