import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { getThemePreference } from '@/services/utils';
import { useStore } from '@/services/store';

export function ModeToggle() {
  const isDark = useStore().isDark;
  const setDarkMode = useStore().setDarkMode;

  useEffect(() => {
    const isDarkMode = getThemePreference() === 'dark';
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
  }, [isDark]);

  function toggleTheme() {
    setDarkMode(!isDark);
  }

  return (
    <Button
      className="relative"
      variant="ghost"
      size="roundIcon"
      onClick={toggleTheme}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
