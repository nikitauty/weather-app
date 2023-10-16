import { useCity } from '@/hooks/useCity';
import { APIKEY } from '@/shared/constants/ApiKey';

import { ICityProvider } from '../Contexts/CityContext/CityContextProvider';

// eslint-disable-next-line react-hooks/rules-of-hooks
const city: ICityProvider = useCity();

const location = `http://api.openweathermap.org/geo/1.0/direct?q=${city?.city}&limit=1&appid=${APIKEY}`;
