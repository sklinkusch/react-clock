import { lazy } from 'react';
import '@styles/App.css';
import { getLocale } from '@utils/getLocale';
import { useGetData } from '@hooks/useGetData';
const Clock = lazy(() => import('@components/Clock/Clock'));

export default function Home() {
  const { timezones, setFiltVal, prepareZones } = useGetData('real');
  return (
    <div className="app">
      <div style={{ textAlign: 'center', marginBottom: '24px', marginTop: '24px' }}>
        <input
          type="text"
          placeholder={getLocale('FilterCountries')}
          onChange={(e) => {
            setFiltVal(e.target.value);
            prepareZones(null, e.target.value);
          }}
        />
      </div>
      <div className="row album sk-album">
        {timezones &&
          timezones.length > 0 &&
          timezones.map((time, index) => (
            <Clock key={index} flags={time.flags} city={time.city} zone={time.zone} cities={time.cities} />
          ))}
      </div>
    </div>
  );
}
