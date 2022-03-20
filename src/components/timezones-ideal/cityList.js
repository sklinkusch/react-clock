import cityListRaw from "../cities500K.json"
import cPopulation from "../population"

const cityList = cityListRaw.filter(city => {
  const { country, population } = city
  const countryPopulation = cPopulation[country] 
  const minPopulation = 0.005 * countryPopulation
  if (population >= minPopulation) {
    return true
  }
  return false
})

export default cityList