import React, { lazy } from "react"
const Flag = lazy(() => import("./Flag"))

function getMultiTitle(flagTitle, flagSubdiv){
  const lang = window.navigator.language
  if(flagSubdiv.length === 1) {
    const [subdiv] = flagSubdiv
    const {title, extra = "" } = subdiv
    const fTitle = typeof flagTitle === "object"
      ? flagTitle.hasOwnProperty(lang)
        ? flagTitle[lang] 
        : flagTitle["en"]
      : flagTitle
    const Title = typeof title === "object"
      ? title.hasOwnProperty(lang)
        ? title[lang]
        : title["en"]
      : title
      const Extra = typeof extra === "object"
      ? extra.hasOwnProperty(lang)
        ? extra[lang]
        : extra["en"]
      : extra.length > 0
        ? extra
        : null
    if(Extra) {
      return `${fTitle}: ${Title} ${Extra}`
    } else {
      return `${fTitle}: ${Title}`
    }
  } else {
    const modSubdiv = flagSubdiv.map(flag => {
      const { title: ftitle, extra: fextra = "" } = flag
      const Title = typeof ftitle === "object"
        ? ftitle.hasOwnProperty(lang)
          ? ftitle[lang] 
          : ftitle["en"]
        : ftitle
      const Extra = typeof fextra === "object"
        ? fextra.hasOwnProperty(lang)
          ? fextra[lang] 
          : fextra["en"]
        : fextra.length > 0
          ? fextra
          : null
      if (Extra) return { title: Title }
      return { title: Title, extra: Extra }
    })
    const sortedSubdiv = modSubdiv.sort((a,b) => a.title.localeCompare(b.title,"de",{sensitivy: "base"}))
    const text = sortedSubdiv.map(item => item.extra ? `${item.title} ${item.extra}` : `${item.title}`).join(", ")
    const fTitle = typeof flagTitle === "object"
      ? flagTitle.hasOwnProperty(lang)
        ? flagTitle[lang] 
        : flagTitle["en"]
      : flagTitle
    return `${fTitle}: ${text}`
  }
}

const ClockFlags = ({flags}) => (
  <div>
    {flags && Array.isArray(flags) && flags.length > 0 && flags.map((flag, index) => {
      const flagTitle = flag.subdiv.length > 0 
        ? getMultiTitle(flag.title, flag.subdiv)
        : typeof flag.title === "object"
          ? flag.title.hasOwnProperty(window.navigator.language)
            ? flag.title[window.navigator.language]
            : flag.title.en
          : flag.title
      return (
        <Flag key={index} code={flag.code} title={flagTitle} />
      )
    })}
  </div>
)

export default ClockFlags