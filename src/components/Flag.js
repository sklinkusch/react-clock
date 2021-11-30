import React from 'react'
import WFlag from "react-world-flags"

const Flag = ({code, title}) => {
  switch(code) {
    case "AS":
      return <span title={title} role="img" aria-label={title}>🇦🇸</span>
    case "BR":
      return <span title={title} role="img" aria-label={title}>🇧🇷</span>
    case "BS":
      return <span title={title} role="img" aria-label={title}>🇧🇸</span>
    case "BZ":
      return <span title={title} role="img" aria-label={title}>🇧🇿</span>
    case "CA":
      return <span title={title} role="img" aria-label={title}>🇨🇦</span>
    case "CK":
      return <span title={title} role="img" aria-label={title}>🇨🇰</span>
    case "CL":
      return <span title={title} role="img" aria-label={title}>🇨🇱</span>
    case "CR":
      return <span title={title} role="img" aria-label={title}>🇨🇷</span>
    case "EC":
      return <span title={title} role="img" aria-label={title}>🇪🇨</span>
    case "GT":
      return <span title={title} role="img" aria-label={title}>🇬🇹</span>
    case "HN":
      return <span title={title} role="img" aria-label={title}>🇭🇳</span>
    case "KY":
      return <span title={title} role="img" aria-label={title}>🇰🇾</span>
    case "MX":
      return <span title={title} role="img" aria-label={title}>🇲🇽</span>
    case "NI":
      return <span title={title} role="img" aria-label={title}>🇳🇮</span>
    case "NU":
      return <span title={title} role="img" aria-label={title}>🇳🇺</span>
    case "PF":
      return <span title={title} role="img" aria-label={title}>🇵🇫</span>
    case "PN":
      return <span title={title} role="img" aria-label={title}>🇵🇳</span>
    case "SV":
      return <span title={title} role="img" aria-label={title}>🇸🇻</span>
    case "US":
      return <span title={title} role="img" aria-label={title}>🇺🇸</span>
    default:
      return <WFlag title={title} code={code} />
  }
}

export default Flag