import React from 'react';
import { Hero } from '../components/home/Hero';
import { FileUpload } from '../components/upload/FileUpload';
import { useAuth } from '../hooks/useAuth';

export function Home() {
  const { user } = useAuth();

  const handleUploadComplete = (url: string) => {
    console.log('File uploaded:', url);
    // Handle the uploaded file URL
  };

  return (
    <div>
      <Hero />
      {user && (
        <div className="max-w-4xl mx-auto px-4 py-8">
          <FileUpload onUploadComplete={handleUploadComplete} />
        </div>
      )}
    </div>
  );
}