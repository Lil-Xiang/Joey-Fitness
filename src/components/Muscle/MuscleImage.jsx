import MuscleArea from "./MuscleArea"
import useImagePath from "../../hooks/useImagePath"

// eslint-disable-next-line react/prop-types
export default function MuscleImage({ muscleImg, muscleMapAreas, onClick }) {
  return (
    <>
      <img
        className="muscle-img"
        src={useImagePath(muscleImg)}
        alt="肌肉分布正面"
        useMap={`#${muscleImg}Map`}
      />
      <map name={`${muscleImg}Map`}>
        {muscleMapAreas?.map((area) => (
          <MuscleArea
            key={area.muscleName}
            coords={area.coords}
            muscleName={area.muscleName}
            onClick={onClick}
          />
        ))}
      </map>
    </>
  );
}

