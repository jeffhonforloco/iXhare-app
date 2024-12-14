import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import type { User } from '../types';

export async function createUserProfile(userId: string, data: Partial<User>) {
  try {
    await setDoc(doc(db, 'users', userId), {
      ...data,
      createdAt: new Date(),
    });
  } catch (error) {
    throw new Error('Failed to create user profile');
  }
}

export async function getUserProfile(userId: string) {
  try {
    const docRef = doc(db, 'users', userId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as User;
    }
    return null;
  } catch (error) {
    throw new Error('Failed to fetch user profile');
  }
}

export async function updateUserProfile(userId: string, data: Partial<User>) {
  try {
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, {
      ...data,
      updatedAt: new Date(),
    });
  } catch (error) {
    throw new Error('Failed to update user profile');
  }
}