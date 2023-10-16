import { CityContext } from '@/services/Contexts/CityContext/CityContextProvider';
import { useContext } from 'react';

export const useCity = () => useContext(CityContext);
