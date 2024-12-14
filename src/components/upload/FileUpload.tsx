import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';
import { uploadFile } from '../../services/storage';

interface FileUploadProps {
  onUploadComplete: (url: string) => void;
}

export function FileUpload({ onUploadComplete }: FileUploadProps) {
  const handleDrop = useCallback(async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      try {
        const path = `uploads/${Date.now()}-${file.name}`;
        const { downloadUrl } = await uploadFile(file, path);
        onUploadComplete(downloadUrl);
      } catch (error) {
        console.error('Upload failed:', error);
      }
    }
  }, [onUploadComplete]);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-indigo-500 transition-colors"
    >
      <Upload className="mx-auto h-12 w-12 text-gray-400" />
      <p className="mt-4 text-sm text-gray-600">
        Drag and drop your file here, or click to select a file
      </p>
    </div>
  );
}