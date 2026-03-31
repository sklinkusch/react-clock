interface ClockTitleProps {
  city: string;
}

export const ClockTitle = ({ city }: ClockTitleProps) => {
  const correctedCity = city.replace('-', '–');
  return (
    <h2>
      <span>{correctedCity}</span>
    </h2>
  );
};
