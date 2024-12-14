import React from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { UserSettings } from '../components/UserSettings';
import { UserProfileForm } from '../components/UserProfileForm';
import { Container } from '../../../web/components/layout/Container';
import { PageHeader } from '../../../web/components/layout/PageHeader';

export function UserSettingsPage() {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <Container>
      <PageHeader
        title="Account Settings"
        description="Manage your account preferences and settings"
      />
      <div className="space-y-6">
        <UserProfileForm user={user} />
        <UserSettings user={user} />
      </div>
    </Container>
  );
}