import React from 'react';
import { User } from '../../../types';

interface UserAvatarProps {
  user: User;
  size?: 'sm' | 'md' | 'lg';
}

export function UserAvatar({ user, size = 'md' }: UserAvatarProps) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
  };

  return (
    <div className={`relative ${sizeClasses[size]}`}>
      {user.photoURL ? (
        <img
          src={user.photoURL}
          alt={user.displayName || 'User avatar'}
          className="rounded-full object-cover"
        />
      ) : (
        <div className="flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
          {(user.displayName || user.email || '?').charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  );
}