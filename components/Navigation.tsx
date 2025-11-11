'use client';
import { useState } from 'react';
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-gray-900">Include</div>
        <div className="hidden md:flex gap-8 text-gray-600">
          <a href="#" className="hover:text-gray-900">Home</a>
          <a href="#" className="hover:text-gray-900">Services</a>
          <a href="#" className="hover:text-gray-900">About</a>
          <a href="#" className="hover:text-gray-900">Contact</a>
        </div>
      </div>
    </nav>
  );
}