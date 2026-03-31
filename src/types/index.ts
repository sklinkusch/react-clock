export interface City {
  asciiname: string;
  lat: string;
  lon: string;
  featureClass: string;
  featureCode: string;
  country: string;
  adminCode: string;
  countrySubdivision: string;
  municipality: string;
  municipalitySubdivision: string;
  population: string;
  tz: string;
}

export interface FlagType {
  code: string;
  title: string;
  subdiv?: {
    title: string;
    extra?: string;
  }[];
}

interface TimezoneRawA {
  country: string;
  zone: string;
  flag: string;
  subdiv?: {
    title: string;
    extra?: string;
  }[];
  cities: City[];
  utcOffset: undefined;
}

interface TimezoneRawB {
  country: string;
  zone: undefined;
  flag: string;
  subdiv?: {
    title: string;
    extra?: string;
  }[];
  cities: City[];
  utcOffset: number;
}

export type TimezoneRaw = TimezoneRawA | TimezoneRawB;

export interface TimezoneObject {
  [key: string]: {
    city: string;
    numericOffset: number;
    zone: string;
    cities: City[];
    flags: FlagType[];
  };
}

export interface Timezone {
  city: string;
  numericOffset: number;
  zone: string;
  cities: City[];
  flags: FlagType[];
}
