import { forwardRef } from "react";

// eslint-disable-next-line react/display-name, react/prop-types
const ExerciseSchedule = forwardRef(({ selectedSchedule }, ref) => {
  return (
    <div className="exercise-schedule" ref={ref}>
      <h2>運動課表</h2>
      {selectedSchedule && (
        <div className="exercise-schedule-text">
          <ul>
            {Object.entries(selectedSchedule)?.map(([day, workout]) => (
              <li key={day}>
                <strong>{day}：</strong>
                <span>{workout}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});
export default ExerciseSchedule;
