import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '../common/Input';

interface ExperienceFiltersProps {
  onSearch: (query: string) => void;
  onPriceRangeChange: (min: number, max: number) => void;
  onDurationChange: (duration: number) => void;
}

export function ExperienceFilters({
  onSearch,
  onPriceRangeChange,
  onDurationChange,
}: ExperienceFiltersProps) {
  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        <Input
          placeholder="Search experiences..."
          className="pl-10"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price Range
          </label>
          <div className="mt-1 flex space-x-2">
            <Input
              type="number"
              placeholder="Min"
              onChange={(e) =>
                onPriceRangeChange(Number(e.target.value), Infinity)
              }
            />
            <Input
              type="number"
              placeholder="Max"
              onChange={(e) =>
                onPriceRangeChange(0, Number(e.target.value))
              }
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Duration (hours)
          </label>
          <Input
            type="number"
            className="mt-1"
            onChange={(e) => onDurationChange(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
}