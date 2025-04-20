// components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../lib/auth';

export default function Navbar() {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">Your Product</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-x-6 ml-10">
            <Link href="/" className="text-sm font-medium text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
              Home
            </Link>
            <Link href="/#about" className="text-sm font-medium text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
              About
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
              Features
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
              Contact
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-x-4">
            {user ? (
              <>
                <span className="text-sm text-gray-600 dark:text-gray-300">{user.email}</span>
                <Link href="/download" className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                  Download
                </Link>
                <button
                  onClick={logout}
                  className="px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-2 rounded-md text-sm font-medium text-white bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          <div className="px-4 py-3 space-y-2">
            <Link href="/" className="block text-base font-medium text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
              Home
            </Link>
            <Link href="/#about" className="block text-base font-medium text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
              About
            </Link>
            <Link href="#" className="block text-base font-medium text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
              Features
            </Link>
            <Link href="#" className="block text-base font-medium text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
              Contact
            </Link>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-3 space-y-2">
            {user ? (
              <>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-300">{user.email}</p>
                <Link href="/download" className="block text-base font-medium text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                  Download
                </Link>
                <button
                  onClick={logout}
                  className="block w-full text-left text-base font-medium text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="block text-base font-medium text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                  Log in
                </Link>
                <Link href="/signup" className="block text-base font-medium text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
