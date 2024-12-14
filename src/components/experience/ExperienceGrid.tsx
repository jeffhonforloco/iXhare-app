import React from 'react';
import { ExperienceCard } from './ExperienceCard';
import type { Experience } from '../../types/experience';

interface ExperienceGridProps {
  experiences: Experience[];
}

export function ExperienceGrid({ experiences }: ExperienceGridProps) {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
      {experiences.map((experience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}
    </div>
  );
}