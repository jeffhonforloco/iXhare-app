import React from 'react';
import { Star, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Experience } from '../../types/experience';

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Link to={`/experience/${experience.id}`} className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          src={experience.images[0]}
          alt={experience.title}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <div className="mt-4 flex items-start justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-900">{experience.title}</h3>
          <p className="mt-1 text-sm text-gray-500">{experience.location}</p>
        </div>
        <div className="flex items-center">
          <Star className="h-4 w-4 text-yellow-400" />
          <span className="ml-1 text-sm text-gray-600">{experience.rating}</span>
        </div>
      </div>
      <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          <span>{experience.duration}h</span>
        </div>
        <div className="flex items-center">
          <Users className="h-4 w-4 mr-1" />
          <span>Up to {experience.capacity}</span>
        </div>
        <div className="font-medium text-gray-900">
          ${experience.price}/person
        </div>
      </div>
    </Link>
  );
}