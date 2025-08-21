'use client';

// This hook is only used in development to keep the dev server alive
// It's causing build issues, so we're removing it for production builds
export function useDevServerHeartbeat() {
  // Empty function for production builds
}
