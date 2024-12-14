import React, { useState } from 'react';
import { User } from '../../../types';
import { Input } from '../../../web/components/common/Input';
import { Button } from '../../../web/components/common/Button';
import { Card } from '../../../web/components/common/Card';
import { updateUserProfile } from '../../../services/user';

interface UserProfileFormProps {
  user: User;
  onSuccess?: () => void;
}

export function UserProfileForm({ user, onSuccess }: UserProfileFormProps) {
  const [formData, setFormData] = useState({
    displayName: user.displayName || '',
    photoURL: user.photoURL || '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await updateUserProfile(user.id, formData);
      onSuccess?.();
    } catch (err) {
      setError('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <Card.Body className="space-y-4">
          <Input
            label="Display Name"
            value={formData.displayName}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, displayName: e.target.value }))
            }
          />
          <Input
            label="Profile Picture URL"
            value={formData.photoURL}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, photoURL: e.target.value }))
            }
          />
          {error && <p className="text-sm text-red-500">{error}</p>}
        </Card.Body>
        <Card.Footer className="flex justify-end space-x-4">
          <Button type="submit" loading={loading}>
            Save Changes
          </Button>
        </Card.Footer>
      </form>
    </Card>
  );
}