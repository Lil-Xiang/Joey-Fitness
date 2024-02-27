/* eslint-disable react/prop-types */

export default function MusclePopUp({
  selectedMuscle,
  onCloseModal,
  muscleData,
}) {
  const muscle = muscleData.find(
    (item) => item["muscle-Eg"] === selectedMuscle
  );

  return (
    <div className="muscle-popUp-background">
      <div className="muscle-popUp-content">
        <button className="muclse-back-btn" onClick={onCloseModal}>
          關閉
        </button>
        <h3>{muscle["muscle-Tw"]}</h3>
        <span className="muclse-train-text">
          <p>1.{muscle["trainName"][0]}:</p>
          <p>{muscle["trainMethod"][0]}</p>
        </span>
        <span className="muclse-train-text">
          <p>2.{muscle["trainName"][1]}:</p>
          <p>{muscle["trainMethod"][1]}</p>
        </span>
      </div>
    </div>
  );
}