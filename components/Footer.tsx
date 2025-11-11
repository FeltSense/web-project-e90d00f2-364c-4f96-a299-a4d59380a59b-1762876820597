'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
  {/* Main Footer Content */}
  <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
    <div className="grid md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
      {/* Company Section */}
      <div className="flex flex-col">
        <div className="text-white text-xl font-bold mb-6">Include</div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Empowering businesses with modern solutions. We&apos;re committed to your success.
        </p>
        <div className="flex gap-4 mt-6">
          <a
            href="#"
            className="w-6 h-6 text-gray-400 hover:text-teal-400 transition-colors duration-300"
            aria-label="Facebook"
          >
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-6 h-6 text-gray-400 hover:text-teal-400 transition-colors duration-300"
            aria-label="Twitter"
          >
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 002.856-3.515 10 10 0 01-2.837.856c1.022-.604 1.802-1.562 2.169-2.688a10 10 0 01-3.127 1.195 4.982 4.982 0 00-8.604 4.55A14.129 14.129 0 011.671 3.149a4.982 4.982 0 001.523 6.657 4.936 4.936 0 01-2.261-.556v.06a4.983 4.983 0 003.995 4.882 4.984 4.984 0 01-2.252.085 4.985 4.985 0 004.644 3.461A10.01 10.01 0 010 19.54a14.108 14.108 0 007.675 2.25c9.212 0 14.329-7.602 14.329-14.199 0-.216-.005-.432-.015-.648a10.217 10.217 0 002.506-2.61z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-6 h-6 text-gray-400 hover:text-teal-400 transition-colors duration-300"
            aria-label="Instagram"
          >
            <svg fill="currentColor" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
            </svg>
          </a>
          <a
            href="#"
            className="w-6 h-6 text-gray-400 hover:text-teal-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Services Section */}
      <div className="flex flex-col">
        <h3 className="text-white text-lg font-semibold mb-6">Services</h3>
        <ul className="space-y-2">
          <li>
            <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">
              Consulting
            </a>
          </li>
          <li>
            <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">
              Development
            </a>
          </li>
          <li>
            <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">
              Strategy
            </a>
          </li>
          <li>
            <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">
              Support
            </a>
          </li>
        </ul>
      </div>

      {/* Company Section */}
      <div className="flex flex-col">
        <h3 className="text-white text-lg font-semibold mb-6">Company</h3>
        <ul className="space-y-2">
          <li>
            <a href="/" className="text-gray-400 hover:text-white transition-colors duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Careers
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col">
        <h3 className="text-white text-lg font-semibold mb-6">Contact</h3>
        <div className="space-y-4">
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Email</p>
            <a href="mailto:hello@include.com" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              hello@include.com
            </a>
          </div>
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Phone</p>
            <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              +1 (234) 567-890
            </a>
          </div>
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Location</p>
            <p className="text-gray-400 text-sm">San Francisco, CA</p>
          </div>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-slate-800 mt-12 pt-8">
      {/* Copyright & Legal */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        <p className="text-gray-500 text-sm">
          © 2025 Include. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300 text-sm">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300 text-sm">
            Terms of Service
          </a>
          <a href="#contact" className="text-gray-500 hover:text-gray-300 transition-colors duration-300 text-sm">
            Contact
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
  );
}