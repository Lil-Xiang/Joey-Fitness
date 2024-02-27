import { useLocation, Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Navigation({ color, toggleColor }) {
  const location = useLocation();

  return (
    <>
      <ul className="layout-ul">
        <li>
          <Link
            className={`layout-li-text ${
              location.pathname === "/" ? "active" : ""
            }`}
            style={{ color: color }}
            to="/"
          >
            首頁
          </Link>
        </li>
        <li>
          <Link
            className={`layout-li-text ${
              location.pathname === "/sportsItems" ? "active" : ""
            }`}
            style={{ color: color }}
            to="/sportsItems"
          >
            運動項目
          </Link>
        </li>
        <li>
          <Link
            className={`layout-li-text ${
              location.pathname === "/muscle" ? "active" : ""
            }`}
            style={{ color: color }}
            to="/muscle"
          >
            肌肉部位
          </Link>
        </li>
        <li>
          <Link
            className={`layout-li-text ${
              location.pathname === "/selfPlanning" ? "active" : ""
            }`}
            style={{ color: color }}
            to="/selfPlanning"
          >
            自我編排
          </Link>
        </li>
        <li>
          <Link
            className={`layout-li-text ${
              location.pathname === "/shopItems" ? "active" : ""
            }`}
            style={{ color: color }}
            to="/shopItems"
          >
            購買商品
          </Link>
        </li>
        <li>
          <Link
            className={`layout-li-text ${
              location.pathname === "/rentItems" ? "active" : ""
            }`}
            style={{ color: color }}
            to="/rentItems"
          >
            租借商品
          </Link>
        </li>
        <li>
          <Link
            className={`layout-li-text ${
              location.pathname === "/checkoutScreen" ? "active" : ""
            }`}
            style={{ color: color }}
            to="/checkoutScreen"
          >
            結帳畫面
          </Link>
        </li>
      </ul>

      <div className="toggle-container">
        <label className="switch">
          <input type="checkbox" onChange={toggleColor} />
          <span className="slider round"></span>
        </label>
      </div>
    </>
  );
}