import React from 'react';
import { useParams } from 'react-router-dom';
import { useUserProfile } from '../hooks/useUserProfile';
import { UserProfile } from '../components/UserProfile';
import { LoadingSpinner } from '../../../components/common/LoadingSpinner';
import { ErrorMessage } from '../../../components/common/ErrorMessage';
import { Container } from '../../../web/components/layout/Container';
import { PageHeader } from '../../../web/components/layout/PageHeader';

export function UserProfilePage() {
  const { userId } = useParams<{ userId: string }>();
  const { profile, loading, error } = useUserProfile(userId);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!profile) return <ErrorMessage message="User not found" />;

  return (
    <Container>
      <PageHeader
        title="User Profile"
        description="View and manage your profile information"
      />
      <div className="space-y-6">
        <UserProfile user={profile} />
      </div>
    </Container>
  );
}