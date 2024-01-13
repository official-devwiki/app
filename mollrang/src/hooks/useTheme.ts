import {useState, useEffect, useMemo, useCallback, useLayoutEffect} from 'react';

type ThemeKey = 'light' | 'dark';

type ReturnType = {
  theme: ThemeKey;
  isDarkMode: boolean;
  setTheme: (theme: ThemeKey) => void;
  toggleTheme: () => void;
};

const useTheme = (): ReturnType => {
  const defaultState = localStorage?.getItem('theme') as ThemeKey;
  const [theme, setTheme] = useState<ThemeKey>(defaultState || 'light');
  const isDarkMode = useMemo(() => theme === 'dark', [theme]);

  const initTheme = useCallback(() => {
    const initialTheme = localStorage?.getItem('theme') as ThemeKey;
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    const mode = localStorage.getItem('theme') as ThemeKey;
    if (mode && ['dark', 'light'].includes(mode)) setTheme(mode);

    if (window !== undefined) {
      const preferDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (preferDarkMode) setTheme('dark');
    }
  }, [])

  /*
    @description: 스토리지, 브라우저 설정에 따른 초기 테마 셋업
   */
  useEffect(() => {
    initTheme();
  }, []);

  /*
    @description: 테마 변경 시 dataset, 스토리지 반영
   */
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  return {theme, isDarkMode, setTheme, toggleTheme};
};

export default useTheme;
