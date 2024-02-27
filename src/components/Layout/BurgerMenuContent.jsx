import { useLocation, Link } from "react-router-dom";

function BurgerMenuContent() {
  const location = useLocation();
  return (
    <ul className="burgerMenu-ul">
      <li>
        <Link
          className={`layout-li-text ${
            location.pathname === "/" ? "active" : ""
          }`}
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
          to="/checkoutScreen"
        >
          結帳畫面
        </Link>
      </li>
    </ul>
  );
}

export default BurgerMenuContent;
