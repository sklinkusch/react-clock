import citiesRaw from "cities15000-json"

const cities500k = citiesRaw.filter(city => Number(city.population) >= 500000)
const cityList = cities500k.filter(city => {
  if(city.featureClass === "P") {
    switch(city.featureCode) {
      case "PPL":
      case "PPLA":
      case "PPLC":
      case "PPLG":
        return true
      case "PPLA2":
        switch(city.asciiname) {
          case "The Bronx":
          case "Brooklyn":
          case "Manhattan":
          case "Borough of Queens":
            return false
          default:
            return true
        }
      default:
        return false
    }
  }
  return false
})

export default cityList