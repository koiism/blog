import { useEffect, useState } from 'react';

export const getThemePreference = () => {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
    return localStorage.getItem('theme');
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

export const useThemePreference = () => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const localTheme = getThemePreference();
    setTheme(localTheme);
  }, []);

  return theme;
};
