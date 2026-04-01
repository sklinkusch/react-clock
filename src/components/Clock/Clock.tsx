import { lazy, useState, useEffect } from 'react';
import moment from 'moment-timezone';
import '@styles/Clock.css';
import { City, FlagType } from '@customtypes';
const ClockTitle = lazy(() => import('../ClockTitle/ClockTitle').then((module) => ({ default: module.ClockTitle })));
const ClockDate = lazy(() =>
  import('@components/ClockDate/ClockDate').then((module) => ({ default: module.ClockDate }))
);
const ClockTime = lazy(() =>
  import('@components/ClockTime/ClockTime').then((module) => ({ default: module.ClockTime }))
);
const ClockFlags = lazy(() => import('@components/ClockFlags/ClockFlags'));
const ClockCities = lazy(() => import('@components/ClockClities/ClockCities'));

interface ClockProps {
  flags: FlagType[];
  city: string;
  zone: string;
  offset?: number;
  cities: City[];
}

export default function IdealClock({ flags, city, zone, offset, cities }: ClockProps) {
  const [formattedDate, setFormattedDate] = useState(
    // eslint-disable-next-line eqeqeq
    offset != null ? moment().utc().add(offset, 'minutes').format('DD/MM/YYYY') : moment().tz(zone).format('DD/MM/YYYY')
  );
  const [formattedTime, setFormattedTime] = useState(
    // eslint-disable-next-line eqeqeq
    offset != null ? moment().utc().add(offset, 'minutes').format('HH:mm:ss') : moment().tz(zone).format('HH:mm:ss')
  );
  useEffect(() => {
    const interval = setInterval(() => tick(), 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const tick = () => {
    setFormattedDate(
      // eslint-disable-next-line eqeqeq
      offset != null
        ? moment().utc().add(offset, 'minutes').format('DD/MM/YYYY')
        : moment().tz(zone).format('DD/MM/YYYY')
    );
    setFormattedTime(
      // eslint-disable-next-line eqeqeq
      offset != null ? moment().utc().add(offset, 'minutes').format('HH:mm:ss') : moment().tz(zone).format('HH:mm:ss')
    );
  };
  const sortedFlags = flags
    ? flags.sort((a, b) => {
        const aTitle = a.title;
        const bTitle = b.title;
        return aTitle.localeCompare(bTitle, 'de', { sensitivity: 'base' });
      })
    : [];
  const reducedFlags = sortedFlags.reduce((acc: FlagType[], curr) => {
    const arr = [...acc];
    const flagIndexes = arr.map((flag) => flag.code);
    if (flagIndexes.includes(curr.code)) {
      const index = flagIndexes.indexOf(curr.code);
      const element = arr[index];
      if (curr.subdiv) {
        // Kumuliere Subdivs, vermeide Duplikate
        const combinedSubdiv = [
          ...(element.subdiv || []),
          ...curr.subdiv.filter((item) => !(element.subdiv || []).some((existing) => existing.title === item.title)),
        ];
        element.subdiv = combinedSubdiv.sort((a, b) => {
          const aTitle = a.title;
          const bTitle = b.title;
          return aTitle.localeCompare(bTitle, 'de', { sensitivity: 'base' });
        });
      }
    } else {
      arr.push(curr);
    }
    return arr;
  }, []);
  const uniqueCities = [...new Set(cities)];
  return (
    <div>
      <div className="album-item">
        <ClockTitle city={city} />
        <ClockDate date={formattedDate} />
        <ClockTime date={formattedTime} />
        <ClockFlags flags={reducedFlags} />
        <ClockCities uniqueCities={uniqueCities} />
      </div>
    </div>
  );
}
