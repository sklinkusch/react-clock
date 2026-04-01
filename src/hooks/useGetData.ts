import { useEffect, useRef } from 'react';
import { useDebugState } from 'use-named-state';
import moment from 'moment-timezone';
import { Timezone, TimezoneObject, TimezoneRaw } from '@customtypes';
import axios from 'axios';

const getSign = (value: number, reverse: boolean) => {
  if (reverse) {
    if (value < 0) return '-';
    if (value > 0) return '+';
    return '±';
  } else {
    if (value < 0) return '-';
    if (value > 0) return '+';
    return '±';
  }
};

export const useGetData = (mode: 'real' | 'ideal') => {
  const [lang, setLang] = useDebugState<string>('lang', '');
  const [allTz, setAllTz] = useDebugState<TimezoneRaw[]>('allTz', []);
  const [filtVal, setFiltVal] = useDebugState<string>('filterValue', '');
  const [timezones, setTimezones] = useDebugState<Timezone[]>('timezones', []);
  const allTzRef = useRef<TimezoneRaw[]>([]);
  const filterRef = useRef<string>('');
  const fetchData = async (currentLanguage: string) => {
    try {
      const response = await axios.get(`https://worldtime-api.vercel.app/${mode}?lang=${currentLanguage}`);
      const { data } = response;
      setAllTz(data as TimezoneRaw[]);
      allTzRef.current = data as TimezoneRaw[];
      setInterval(() => {
        prepareZones(allTzRef.current, filterRef.current);
      }, 1000);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(error as Error);
    }
  };
  const prepareZones = (data: TimezoneRaw[] | null, filterVal = '') => {
    const myData = data ? data : allTzRef.current;
    const unsortedStates = myData.map((tz) => {
      const { country, zone, flag, subdiv = [], cities = [], utcOffset = null } = tz;
      const offset =
        typeof zone === 'string' ? moment().tz(zone).utcOffset() : typeof utcOffset === 'number' ? utcOffset : 0;
      let numericOffset: number = 0;
      if (typeof zone === 'string') {
        const tz = moment.tz.zone(zone);
        if (!tz) {
          throw new Error(`timezone for zone ${zone} not defined!`);
        }
        const Now = Number(moment().utc().format('x'));
        numericOffset = (-1 * tz.utcOffset(Now)) as number;
      } else if (typeof utcOffset === 'number') {
        numericOffset = utcOffset;
      } else {
        numericOffset = 0;
      }
      return { country, zone, flag, offset, numericOffset, subdiv, cities };
    });
    const sortedStates = unsortedStates.sort((a, b) => a.numericOffset - b.numericOffset);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const timezoneObject: TimezoneObject = sortedStates.reduce((acc: { [key: string]: any }, curr) => {
      const obj = { ...acc };
      const { flag: code, offset, country: title, zone, numericOffset, subdiv = [], cities = [] } = curr;
      const isOffsetNumeric = typeof offset === 'number' && !Number.isNaN(offset);
      const offsetSign = isOffsetNumeric ? getSign(offset, false) : getSign(numericOffset, true);
      const offsetAbs = isOffsetNumeric ? Math.abs(offset) : Math.abs(numericOffset);
      const offsetHours = typeof offsetAbs === 'number' ? Math.floor(offsetAbs / 60) : null;
      const offsetFormattedHours =
        typeof offsetHours === 'number' ? (offsetHours < 10 ? `0${offsetHours}` : `${offsetHours}`) : null;
      const offsetMinutes = typeof offsetAbs === 'number' ? offsetAbs % 60 : null;
      const offsetFormattedMinutes =
        typeof offsetMinutes === 'number' ? (offsetMinutes < 10 ? `0${offsetMinutes}` : `${offsetMinutes}`) : null;
      const formattedOffset = `UTC${offsetSign}${offsetFormattedHours}:${offsetFormattedMinutes}`;
      const city = formattedOffset;
      const flag = { code, title, subdiv };
      if (obj.hasOwnProperty(city)) {
        obj[city].flags.push(flag);
        obj[city].cities = obj[city].cities.concat(cities);
      } else {
        obj[city] = { city, numericOffset, zone, flags: [flag], cities };
      }
      return obj;
    }, {});
    const timezoneArray = Object.values(timezoneObject).sort((a, b) => a.numericOffset - b.numericOffset);
    const filterValue = filterVal ? filterVal : filtVal;
    const filteredStates =
      filterValue !== ''
        ? timezoneArray.filter((tz) => {
            const { flags, cities } = tz;
            const filteredFlags = flags.filter((flag) => {
              const { title: country, subdiv = [] } = flag;
              const title = subdiv.length > 0 ? `${country}: ${subdiv.map((item) => item.title).join(', ')}` : country;
              if (filterValue !== '') {
                if (typeof title === 'string' && title.toLowerCase().includes(filterValue.toLowerCase())) return true;
                return false;
              }
              return true;
            });
            if (filteredFlags.length > 0) return true;
            const filteredCities = cities.filter((city) =>
              city.asciiname.toLowerCase().includes(filterValue.toLowerCase())
            );
            if (filteredCities.length > 0) return true;
            return false;
          })
        : timezoneArray;
    setTimezones(filteredStates);
  };
  useEffect(() => {
    const currentLanguage = window.navigator.language.substring(0, 2).toLowerCase();
    setLang(currentLanguage);
    void fetchData(currentLanguage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    filterRef.current = filtVal;
    prepareZones(allTzRef.current, filtVal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allTz, filtVal]);
  return {
    lang,
    allTz,
    timezones,
    filtVal,
    setFiltVal,
    prepareZones,
  };
};
