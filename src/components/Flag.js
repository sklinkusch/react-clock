import React from 'react'
import WFlag from "react-world-flags"

const Flag = ({code, title}) => {
  switch(code) {
    case "AD":
      return <span title={title} role="img" aria-label={title}>🇦🇩</span>
    case "AE":
      return <span title={title} role="img" aria-label={title}>🇦🇪</span>
    case "AF":
      return <span title={title} role="img" aria-label={title}>🇦🇫</span>
    case "AG":
      return <span title={title} role="img" aria-label={title}>🇦🇬</span>
    case "AI":
      return <span title={title} role="img" aria-label={title}>🇦🇮</span>
    case "AL":
      return <span title={title} role="img" aria-label={title}>🇦🇱</span>
    case "AM":
      return <span title={title} role="img" aria-label={title}>🇦🇲</span>
    case "AO":
      return <span title={title} role="img" aria-label={title}>🇦🇴</span>
    case "AQ":
      return <span title={title} role="img" aria-label={title}>🇦🇶</span>
    case "AR":
      return <span title={title} role="img" aria-label={title}>🇦🇷</span>
    case "AS":
      return <span title={title} role="img" aria-label={title}>🇦🇸</span>
    case "AT":
      return <span title={title} role="img" aria-label={title}>🇦🇹</span>
    case "AU":
      return <span title={title} role="img" aria-label={title}>🇦🇺</span>
    case "AW":
      return <span title={title} role="img" aria-label={title}>🇦🇼</span>
    case "AX":
      return <span title={title} role="img" aria-label={title}>🇦🇽</span>
    case "AZ":
      return <span title={title} role="img" aria-label={title}>🇦🇿</span>
    case "BB":
      return <span title={title} role="img" aria-label={title}>🇧🇧</span>
    case "BM":
      return <span title={title} role="img" aria-label={title}>🇧🇲</span>
    case "BO":
      return <span title={title} role="img" aria-label={title}>🇧🇴</span>
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
    case "CO":
      return <span title={title} role="img" aria-label={title}>🇨🇴</span>
    case "CR":
      return <span title={title} role="img" aria-label={title}>🇨🇷</span>
    case "CU":
      return <span title={title} role="img" aria-label={title}>🇨🇺</span>
    case "CW":
      return <span title={title} role="img" aria-label={title}>🇨🇼</span>
    case "EC":
      return <span title={title} role="img" aria-label={title}>🇪🇨</span>
    case "GT":
      return <span title={title} role="img" aria-label={title}>🇬🇹</span>
    case "HN":
      return <span title={title} role="img" aria-label={title}>🇭🇳</span>
    case "HT":
      return <span title={title} role="img" aria-label={title}>🇭🇹</span>
    case "JM":
      return <span title={title} role="img" aria-label={title}>🇯🇲</span>
    case "KY":
      return <span title={title} role="img" aria-label={title}>🇰🇾</span>
    case "MX":
      return <span title={title} role="img" aria-label={title}>🇲🇽</span>
    case "NI":
      return <span title={title} role="img" aria-label={title}>🇳🇮</span>
    case "NU":
      return <span title={title} role="img" aria-label={title}>🇳🇺</span>
    case "PA":
      return <span title={title} role="img" aria-label={title}>🇵🇦</span>
    case "PE":
      return <span title={title} role="img" aria-label={title}>🇵🇪</span>
    case "PF":
      return <span title={title} role="img" aria-label={title}>🇵🇫</span>
    case "PN":
      return <span title={title} role="img" aria-label={title}>🇵🇳</span>
    case "SV":
      return <span title={title} role="img" aria-label={title}>🇸🇻</span>
    case "TC":
      return <span title={title} role="img" aria-label={title}>🇹🇨</span>
    case "US":
      return <span title={title} role="img" aria-label={title}>🇺🇸</span>
    case "VG":
      return <span title={title} role="img" aria-label={title}>🇻🇬</span>
    case "VI":
      return <span title={title} role="img" aria-label={title}>🇻🇮</span>
    default:
      return <WFlag title={title} code={code} />
  }
}

export default Flag