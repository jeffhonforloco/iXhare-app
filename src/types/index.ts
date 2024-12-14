// Re-export all types
export * from './booking';
export * from './experience';

export interface User {
  id: string;
  email: string;
  displayName: string;
  photoURL?: string;
}

export interface FileShare {
  id: string;
  fileName: string;
  fileSize: number;
  fileType: string;
  uploadedBy: string;
  uploadedAt: Date;
  expiresAt?: Date;
  downloadUrl: string;
  accessCount: number;
}

export interface ShareLink {
  id: string;
  fileId: string;
  createdAt: Date;
  expiresAt?: Date;
  password?: string;
  accessCount: number;
}