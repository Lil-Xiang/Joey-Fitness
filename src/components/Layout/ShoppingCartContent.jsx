import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
export default function ShoppingCartContent({
  cartQuantities,
  user,
  removeFromCart,
  setShopSlider,
}) {
  return (
    <>
      {cartQuantities
        ?.filter((item) => item.userId === user.userId)
        ?.map((item) => (
          <div className="shoppingCart-container" key={item.id}>
            <div className="shoppingCart-left">
              <span>{item.purpose === "buy" ? "購買" : "租借"}</span>
            </div>
            <div className="shoppingCart-middle">
              <span>
                {item.itemName} x{" "}
                {item.purpose === "buy"
                  ? item.quantity + "件"
                  : item.day + "天"}
              </span>
              <p>TWD$ {item.price}</p>
            </div>
            <div className="shoppingCart-right">
              <span>TWD$ {item.totalPrice}</span>
              <button onClick={() => removeFromCart(item.id)}>X</button>
            </div>
          </div>
        ))}
      <div className="total-prize">
        <span>
          Total TWD${" "}
          {cartQuantities
            ?.filter((item) => item.userId === user.userId)
            ?.reduce((total, item) => total + item.totalPrice, 0)}
        </span>
      </div>
      <Link className="layout-li-text" to="/checkoutScreen">
        <button
          className="send-allItems-btn"
          onClick={() => setShopSlider(false)}
        >
          結帳去
        </button>
      </Link>
    </>
  );
}