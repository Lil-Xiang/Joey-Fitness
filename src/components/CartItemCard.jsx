import { useThemeContext } from "../context/ThemeContext ";
import useImagePath from "../hooks/useImagePath";

// eslint-disable-next-line react/prop-types
export default function CartItemCard({itemsData,  purpose,  increaseNumOfItem,  decreaseNumOfItem,
}) {
  const { cartQuantities, user, userState } = useThemeContext();

  return (
    <div className="items-cards-container">
      {itemsData?.map((item) => (
        <div className="items-card-box" key={item.id}>
          <div className="itemImg-container">
            <img src={useImagePath(item.img)} alt={item.itemName} />
          </div>
          <div className="itemText-container">
            <div className="itemText-up">
              <span>{item.itemName}</span>
              <span>TWD${item.price}</span>
            </div>
            {userState ? (
              <div className="itemText-middle">
                <button onClick={() => decreaseNumOfItem(item.id)}>-</button>
                <span>
                  {cartQuantities.find(
                    (cartItem) =>
                      cartItem.id === item.id &&
                      cartItem.purpose === purpose &&
                      cartItem.userId === user.userId
                  )?.[purpose === "buy" ? "quantity" : "day"] || 0}
                  {purpose === "buy" ? "件" : "天"}
                </span>
                <button onClick={() => increaseNumOfItem(item.id)}>+</button>
              </div>
            ) : (
              <h4 style={{ color: "red" }}>登入後才能將商品加入購物車唷</h4>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
