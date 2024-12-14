import React from 'react';
import { User } from '../../../types';
import { UserAvatar } from './UserAvatar';
import { Button } from '../../../web/components/common/Button';
import { Card } from '../../../web/components/common/Card';

interface UserProfileProps {
  user: User;
  onEdit?: () => void;
}

export function UserProfile({ user, onEdit }: UserProfileProps) {
  return (
    <Card>
      <Card.Body>
        <div className="flex items-center space-x-4">
          <UserAvatar user={user} size="lg" />
          <div className="flex-1">
            <h3 className="text-lg font-medium text-gray-900">
              {user.displayName || 'Anonymous User'}
            </h3>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
          {onEdit && (
            <Button variant="outline" onClick={onEdit}>
              Edit Profile
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}