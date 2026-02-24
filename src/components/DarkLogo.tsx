import React from 'react';

export const DarkLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    fill="none"
    className="w-10"
  >
    <rect width="40" height="40" rx="8" fill="#a78bfa" />
    <circle cx="12" cy="12" r="3" fill="white" />
    <circle cx="28" cy="12" r="3" fill="white" />
    <path
      d="M 12 20 Q 20 28 28 20"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
