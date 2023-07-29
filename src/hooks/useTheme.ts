import { ThemeContext } from '@/services/Contexts/ThemeContext/ThemeContext';
import { useContext } from 'react';

export const useTheme = () => useContext(ThemeContext);
