import citiesRaw from "cities15000-json"

const cities500k = citiesRaw.filter(city => city.population >= 500000)

export default cities500k