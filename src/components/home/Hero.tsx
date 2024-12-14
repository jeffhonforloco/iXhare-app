import React from 'react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-teal-50/80 to-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <div className="flex">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Share files securely with anyone{' '}
              <Link to="/features" className="font-semibold text-teal-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Learn more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-x-6">
            <img 
              src="https://raw.githubusercontent.com/yourusername/ixhare/main/public/logo-full.png" 
              alt="iXhare" 
              className="h-16"
            />
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Share files securely with anyone, anywhere
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            iXhare makes it simple to share files securely. Upload, share, and track your files with
            end-to-end encryption and powerful collaboration features.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              to="/signup"
              className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              Get started
            </Link>
            <Link to="/features" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <img
            src="https://raw.githubusercontent.com/yourusername/ixhare/main/public/app-icon.png"
            alt="iXhare App"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
      </div>
    </div>
  );
}