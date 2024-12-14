import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { signOut } from '../../services/auth';
import { UserAvatar } from '../../features/user/components/UserAvatar';

export function Header() {
  const { user } = useAuth();

  return (
    <header className="bg-gradient-to-r from-teal-400 via-orange-300 to-orange-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="https://raw.githubusercontent.com/yourusername/ixhare/main/public/logo.png" 
                alt="iXhare" 
                className="h-10 w-10"
              />
              <span className="text-2xl font-bold text-gray-900">iXhare</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to={`/user/${user.id}`}>
                  <UserAvatar user={user} size="sm" />
                </Link>
                <button
                  onClick={() => signOut()}
                  className="rounded-md bg-white/20 px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-white/30"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                <Link 
                  to="/signin" 
                  className="rounded-md bg-white/20 px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-white/30"
                >
                  Sign In
                </Link>
                <Link 
                  to="/signup"
                  className="rounded-md bg-white px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}