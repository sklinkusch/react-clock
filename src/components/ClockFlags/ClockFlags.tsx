import { FlagType } from '@customtypes';
import { lazy } from 'react';
const Flag = lazy(() => import('@components/Flag/Flag'));

interface ClockFlagProps {
  flags: FlagType[];
}

interface Subdiv {
  title: string;
  extra?: string;
}

function getMultiTitle(flagTitle: string, flagSubdiv: Subdiv[]) {
  if (flagSubdiv.length === 1) {
    const [subdiv] = flagSubdiv;
    const { title, extra = '' } = subdiv;
    const fTitle = flagTitle;
    const Title = title;
    const Extra = extra.length > 0 ? extra : null;
    if (Extra) {
      return `${fTitle}: ${Title} ${Extra}`;
    } else {
      return `${fTitle}: ${Title}`;
    }
  } else {
    const modSubdiv = flagSubdiv.map((flag) => {
      const { title: ftitle, extra: fextra = '' } = flag;
      const Title = ftitle;
      const Extra = fextra.length > 0 ? fextra : null;
      if (Extra) return { title: Title, extra: Extra };
      return { title: Title };
    });
    const sortedSubdiv = modSubdiv.sort((a, b) => a.title.localeCompare(b.title, 'de', { sensitivity: 'base' }));
    const text = sortedSubdiv.map((item) => (item.extra ? `${item.title} ${item.extra}` : `${item.title}`)).join(', ');
    const fTitle = flagTitle;
    return `${fTitle}: ${text}`;
  }
}

const ClockFlags = ({ flags }: ClockFlagProps) => {
  return (
    <div>
      {flags &&
        Array.isArray(flags) &&
        flags.length > 0 &&
        flags.map((flag, index) => {
          const flagTitle = flag.subdiv && flag.subdiv.length > 0 ? getMultiTitle(flag.title, flag.subdiv) : flag.title;
          return <Flag key={index} code={flag.code} title={flagTitle} />;
        })}
    </div>
  );
};

export default ClockFlags;
