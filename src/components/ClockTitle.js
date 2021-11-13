import React from "react"

const ClockTitle = ({ city }) => {
  const correctedCity = city.replace("-","–")
  return (
    <h2>
      <span>
        {correctedCity}
      </span>
    </h2>
  )
}

export default ClockTitle