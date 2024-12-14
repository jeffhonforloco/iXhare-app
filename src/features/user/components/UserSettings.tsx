import React from 'react';
import { User } from '../../../types';
import { Card } from '../../../web/components/common/Card';
import { Button } from '../../../web/components/common/Button';
import { signOut } from '../../../services/auth';

interface UserSettingsProps {
  user: User;
}

export function UserSettings({ user }: UserSettingsProps) {
  return (
    <div className="space-y-6">
      <Card>
        <Card.Header>
          <h3 className="text-lg font-medium">Account Settings</h3>
        </Card.Header>
        <Card.Body className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-900">Email</h4>
            <p className="mt-1 text-sm text-gray-500">{user.email}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-900">Account ID</h4>
            <p className="mt-1 text-sm text-gray-500">{user.id}</p>
          </div>
        </Card.Body>
      </Card>

      <Card>
        <Card.Header>
          <h3 className="text-lg font-medium">Security</h3>
        </Card.Header>
        <Card.Body>
          <Button variant="outline" onClick={() => signOut()}>
            Sign Out
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}