import { useState } from "react";
import { useThemeContext } from "../context/ThemeContext ";
import SportCard from "../components/SportsItems/SportCard"
import sportsItemsData from "../data/sportsItems.json";
import "../styles/sportsItems.scss";

function SportsItems() {
  const { theme } = useThemeContext(); //主題切換
  const backColor = theme ? "#161a1d" : "#ffffff";
  const color = theme ? "#ffffff" : "#161a1d";
  const [flippedCards, setFlippedCards] = useState([]);

  //檢查該卡片id是否已被翻,是就移除,否就加入陣列
  const handleFlip = (id) => {
    if (flippedCards?.includes(id)) {
      setFlippedCards(flippedCards?.filter((cardId) => cardId !== id));
    } else {
      setFlippedCards([...flippedCards, id]);
    }
  };
  //檢查特定卡片是否已被翻轉
  const isFlipped = (id) => flippedCards?.includes(id);

  return (
    <>
      <div
        className="sportItems-container"
        style={{ backgroundColor: backColor }}
      >
        <div className="sportCards-container">
          <div className="sportCards-describe" style={{ color: color }}>
            <h2>有氧運動</h2>
            <span style={{ color: "red" }}>(點擊照片可翻轉看細項)</span>
            <div className="sportCards-content">
              <span>能夠幫助您燃燒多餘的卡路里，促進體重控制和減脂。</span>
              <span>可以有效增強心肺功能，提高身體的持久力和耐力。</span>
              <span>
                可以提升心血管的健康狀態促進血液循環，增加氧氣和營養物質的供應，同時幫助排除體內的代謝廢物。
              </span>
            </div>
          </div>

          <div className="sport-cards">
            {sportsItemsData
              ?.filter((item) => item.type === "aerobicExercise")
              ?.map((item) => (
                <SportCard
                  key={item.id}
                  item={item}
                  isFlipped={isFlipped} // Pass isFlipped as a prop
                  onCardClick={handleFlip}
                />
              ))}
          </div>
        </div>
        <div className="sportCards-container">
          <div className="sportCards-describe" style={{ color: color }}>
            <h2>重量訓練</h2>
            <div className="sportCards-content">
              <span>
                通過使用重量訓練器材或自身體重進行的運動，可以增強肌肉力量和肌肉質量。
              </span>
              <span>
                可以有針對性地訓練不同部位的肌肉，塑造身材並增加身體的線條美。
              </span>
              <span>
                可以促進骨骼的生長和密度，減少骨質疏鬆的風險，對於骨骼健康非常有益。
              </span>
            </div>
          </div>

          <div className="sport-cards">
            {sportsItemsData
              ?.filter((item) => item.type === "workOut")
              ?.map((item) => (
                <SportCard
                  key={item.id}
                  item={item}
                  isFlipped={isFlipped} // Pass isFlipped as a prop
                  onCardClick={handleFlip}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SportsItems;
