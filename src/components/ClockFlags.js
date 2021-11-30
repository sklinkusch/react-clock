import React from "react"
import Flag from "./Flag"

function getMultiTitle(flagTitle, flagSubdiv){
  if(flagSubdiv.length === 1) {
    const [subdiv] = flagSubdiv
    const {title, extra} = subdiv
    if(extra) {
      return `${flagTitle}: ${title} ${extra}`
    } else {
      return `${flagTitle}: ${title}`
    }
  } else {
    const sortedSubdiv = flagSubdiv.sort((a,b) => a.title.localeCompare(b.title,"de",{sensitivy: "base"}))
    const text = sortedSubdiv.map(item => item.extra ? `${item.title} ${item.extra}` : `${item.title}`).join(", ")
    return `${flagTitle}: ${text}`
  }
}

const ClockFlags = ({flags}) => (
  <div>
    {flags && Array.isArray(flags) && flags.length > 0 && flags.map((flag, index) => {
      const flagTitle = flag.subdiv.length > 0 
        ? getMultiTitle(flag.title, flag.subdiv)
        : flag.title
      return (
        <Flag key={index} code={flag.code} title={flagTitle} />
      )
    })}
  </div>
)

export default ClockFlags