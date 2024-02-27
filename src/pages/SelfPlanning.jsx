import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useThemeContext } from "../context/ThemeContext ";
import selfPlanningData from "../data/selfPlanning.json";
import ExerciseSchedule from "../components/SelfPlanning/ExerciseSchedule"
import "../styles/selfPlanning.scss";

function SelfPlanning() {
  const [selectedDegree, setSelectedDegree] = useState("");
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const componentRef = useRef();

  const { theme } = useThemeContext(); //主題切換
  const backColor = theme ? "#161a1d" : "#ffffff";
  const color = theme ? "#ffffff" : "#161a1d";

  const handleDegreeChange = (e) => {
    const degree = e.target.value;
    if (degree !== selectedDegree) {
      setSelectedDegree(degree);
      const schedule = selfPlanningData.find((item) => item.degree === degree);
      setSelectedSchedule(schedule);
    }
  };

  const handleWorkoutChange = (day, workout) => {
    if (selectedSchedule) {
      const updatedSchedule = { ...selectedSchedule, [day]: workout };
      setSelectedSchedule(updatedSchedule);
    }
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "exercise_schedule",
  });

  return (
    <>
      <div
        className="selfPlanning-container"
        style={{ backgroundColor: backColor }}
      >
        <div className="selfPlanning-title">
          <h2 style={{ color: color }}>推薦課表</h2>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <td></td>
                  <td>星期一</td>
                  <td>星期二</td>
                  <td>星期三</td>
                  <td>星期四</td>
                  <td>星期五</td>
                  <td>星期六</td>
                  <td>星期日</td>
                </tr>
              </thead>
              <tbody>
                {selfPlanningData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.degree}</td>
                    <td>{item.Monday}</td>
                    <td>{item.Tuesday}</td>
                    <td>{item.Wednesday}</td>
                    <td>{item.Thursday}</td>
                    <td>{item.Friday}</td>
                    <td>{item.Saturday}</td>
                    <td>{item.Sunday}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="select-planning">
          <div>
            <span style={{ color: color }}>
              選擇你想嘗試的階級,不喜歡的課程可自行更改
            </span>
          </div>
          <div>
            <label style={{ color: color }} htmlFor="degree-select">
              選擇階級：
            </label>
            <select
              id="degree-select"
              value={selectedDegree}
              onChange={handleDegreeChange}
            >
              <option value="">請選擇</option>
              {selfPlanningData.map((schedule) => (
                <option key={schedule.id} value={schedule.degree}>
                  {schedule.degree}
                </option>
              ))}
            </select>
          </div>
        </div>

        {selectedSchedule && (
          <div className="your-choice-degree">
            <h3 style={{ color: color }}>你的{selectedDegree}課程規劃</h3>
            <ul className="your-choice-text">
              {Object.entries(selectedSchedule)?.map(([day, workout]) => {
                if (day !== "id" && day !== "degree") {
                  return (
                    <li className="choice-all" key={day}>
                      <strong style={{ color: color }} className="choice-day">
                        {day}：
                      </strong>
                      <input
                        className=""
                        type="text"
                        value={workout}
                        onChange={(e) =>
                          handleWorkoutChange(day, e.target.value)
                        }
                      />
                    </li>
                  );
                }
                return null;
              })}
            </ul>
            <button onClick={handlePrint}>列印課表</button>
          </div>
        )}
        <div style={{ display: "none" }}>
          <ExerciseSchedule
            ref={componentRef}
            selectedSchedule={selectedSchedule}
          />
        </div>
      </div>
    </>
  );
}

export default SelfPlanning;
