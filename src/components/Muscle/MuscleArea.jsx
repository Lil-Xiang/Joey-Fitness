
// eslint-disable-next-line react/prop-types
export default function MuscleArea({ coords, muscleName, onClick }) {
  return (
    <area
      shape="circle"
      coords={coords}
      title={muscleName}
      href="#"
      onClick={() => onClick(muscleName)}
    />
  );
}
