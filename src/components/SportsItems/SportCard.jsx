import useImagePath from "../../hooks/useImagePath";

// eslint-disable-next-line react/prop-types
export default function SportCard({ item, isFlipped, onCardClick }) {
  return (
    <div
      className={`flip-card ${isFlipped(item.id) ? "flipped" : ""}`}
      onClick={() => onCardClick(item.id)}
      key={item.id}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={useImagePath(item.img)} alt={item.name} />
        </div>

        <div className="flip-card-back">
          <div className="card-back-title">
            <span>{item.name}</span>
          </div>
          <div className="card-back-content">
            <span>{item.describtion}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
