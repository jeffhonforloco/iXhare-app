export function validateDisplayName(name: string): {
  isValid: boolean;
  message?: string;
} {
  if (!name.trim()) {
    return {
      isValid: false,
      message: 'Display name is required',
    };
  }

  if (name.length < 2) {
    return {
      isValid: false,
      message: 'Display name must be at least 2 characters long',
    };
  }

  if (name.length > 50) {
    return {
      isValid: false,
      message: 'Display name must be less than 50 characters',
    };
  }

  return { isValid: true };
}

export function validatePhotoURL(url: string): {
  isValid: boolean;
  message?: string;
} {
  if (!url) return { isValid: true };

  try {
    new URL(url);
    return { isValid: true };
  } catch {
    return {
      isValid: false,
      message: 'Please enter a valid URL',
    };
  }
}