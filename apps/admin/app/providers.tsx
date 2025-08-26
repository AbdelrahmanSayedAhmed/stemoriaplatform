'use client';

import * as React from 'react';
// Note: SessionProvider would be imported from 'next-auth/react' in production
// For now, we'll use a mock provider

// Mock Session type for testing
interface MockSession {
  user?: {
    id?: string;
    name?: string | null;
    email?: string | null;
    role?: string;
  };
}

interface AdminProvidersProps {
  children: React.ReactNode;
  session?: MockSession | null;
}

// Mock SessionProvider for testing
function MockSessionProvider({ children, session }: { children: React.ReactNode; session?: MockSession | null }) {
  return <>{children}</>;
}

export function AdminProviders({ children, session }: AdminProvidersProps) {
  return (
    <MockSessionProvider session={session}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </MockSessionProvider>
  );
}

// Simple theme context provider
const ThemeContext = React.createContext<{
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}>({
  theme: 'light',
  toggleTheme: () => {},
});

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  const toggleTheme = React.useCallback(() => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }, []);

  const value = React.useMemo(() => ({
    theme,
    toggleTheme,
  }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      <div data-theme={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => React.useContext(ThemeContext);