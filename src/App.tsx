import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { BookingProvider } from './context/BookingContext';
import { Header } from './components/layout/Header';
import { ExperiencesPage } from './pages/ExperiencesPage';
import { ExperienceDetailsPage } from './pages/ExperienceDetailsPage';
import { UserProfilePage } from './features/user/pages/UserProfilePage';
import { UserSettingsPage } from './features/user/pages/UserSettingsPage';

function App() {
  return (
    <AuthProvider>
      <BookingProvider>
        <Router>
          <div className="min-h-screen bg-white">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<ExperiencesPage />} />
                <Route path="/experience/:id" element={<ExperienceDetailsPage />} />
                <Route path="/user/:userId" element={<UserProfilePage />} />
                <Route path="/settings" element={<UserSettingsPage />} />
              </Routes>
            </main>
          </div>
        </Router>
      </BookingProvider>
    </AuthProvider>
  );
}