import { useState } from "react";
import { useThemeContext } from "../context/ThemeContext ";
import muscleData from "../data/muscleItems.json";
import MuscleImage from "../components/Muscle/MuscleImage";
import MusclePopUp from "../components/Muscle/MusclePopUp";
import "../styles/muscle.scss";

function Muscle() {
  const { theme } = useThemeContext(); //主題切換
  const backColor = theme ? "#161a1d" : "#ffffff";
  const color = theme ? "#ffffff" : "#161a1d";

  const [selectedMuscle, setSelectedMuscle] = useState(null);

  const handleMuscleClick = (muscleName) => {
    setSelectedMuscle(muscleName);
  };

  const handleCloseModal = () => {
    setSelectedMuscle(null);
  };

  const muscleFrontMapAreas = [
    { coords: "210,187,11", muscleName: "chest" },
    { coords: "255,166,9", muscleName: "shoulder" },
    { coords: "256,223,6", muscleName: "biceps" },
    { coords: "192,272,9", muscleName: "abs" },
    { coords: "218,403,10", muscleName: "frontThigh" },
  ];

  const muscleBackMapAreas = [
    { coords: "217,208,10", muscleName: "backMuscles" },
    { coords: "251,204,8", muscleName: "triceps" },
    { coords: "155,335,10", muscleName: "hipMuscles" },
    { coords: "226,408,6", muscleName: "backThigh" },
  ];

  return (
    <>
      <div className="muscle-container" style={{ backgroundColor: backColor }}>
        <h2 style={{ color: color }}>點擊紅點可看該肌肉部位詳細資訊</h2>
        <div className="muscle-img-container">
          <MuscleImage
            muscleImg="muscleFrontImg"
            muscleMapAreas={muscleFrontMapAreas}
            onClick={handleMuscleClick}
          />
          <MuscleImage
            muscleImg="muscleBackImg"
            muscleMapAreas={muscleBackMapAreas}
            onClick={handleMuscleClick}
          />
        </div>
        {selectedMuscle && (
          <MusclePopUp
            selectedMuscle={selectedMuscle}
            onCloseModal={handleCloseModal}
            muscleData={muscleData}
          />
        )}
      </div>
    </>
  );
}

export default Muscle;
