import { useEffect, useState } from "react";
import { useThemeContext } from "../context/ThemeContext ";
import CartItemCard from "../components/CartItemCard";
import "../styles/shopItems.scss";

function ShopItems() {
  const { theme, cartQuantities, setCartQuantities, user, url } =
    useThemeContext(); //主題切換
  const backColor = theme ? "#161a1d" : "#ffffff";
  const color = theme ? "#ffffff" : "#161a1d";

  const [shopItemsData, setShopItemsData] = useState([]); //顯示在畫面的商品
  const [isLoading, setIsLoading] = useState(true); //資料加載狀態

  useEffect(() => {
    fetch(url.shopItem)
      .then((res) => res.json())
      .then((data) => {
        setShopItemsData(data);
        setIsLoading(false); // 数据加载完成后更新加载状态
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false); // 数据加载出错时更新加载状态
      });
  }, []);

  //增加購買商品數量
  function increaseNumOfItem(id) {
    const itemIndex = cartQuantities?.findIndex(
      (item) =>
        item.id === id && item.purpose === "buy" && item.userId === user.userId
    );
    if (itemIndex !== -1) {
      const updatedQuantities = [...cartQuantities];
      updatedQuantities[itemIndex].quantity += 1;
      updatedQuantities[itemIndex].totalPrice =
        updatedQuantities[itemIndex].quantity *
        updatedQuantities[itemIndex].price;
      setCartQuantities(updatedQuantities);
    } else {
      const item = shopItemsData?.find((item) => item.id === id);
      if (item && item.purpose === "buy") {
        const newItem = {
          id: item.id,
          userId: user.userId,
          purpose: "buy",
          itemName: item.itemName,
          quantity: 1,
          price: item.price,
          totalPrice: item.price,
        };
        setCartQuantities([...cartQuantities, newItem]);
      }
    }
  }

  //減少購買商品數量
  function decreaseNumOfItem(id) {
    const itemIndex = cartQuantities?.findIndex(
      (item) =>
        item.id === id && item.purpose === "buy" && item.userId === user.userId
    );
    if (itemIndex !== -1) {
      const updatedQuantities = [...cartQuantities];
      updatedQuantities[itemIndex].quantity -= 1;
      updatedQuantities[itemIndex].totalPrice =
        updatedQuantities[itemIndex].quantity *
        updatedQuantities[itemIndex].price;
      if (updatedQuantities[itemIndex].quantity === 0) {
        updatedQuantities.splice(itemIndex, 1);
      }
      setCartQuantities(updatedQuantities);
    }
  }

  return (
    <>
      <div
        className="shopItems-container"
        style={{ backgroundColor: backColor }}
      >
        <h2 style={{ color: color }}>可購買商品</h2>
        <h4 style={{ color: color }}>
          按該商品的+鈕,就能加進購物車,並增減數量
        </h4>
        {isLoading ? (
          <h3 style={{ color: color }}>Loading...</h3> // 加载中的提示信息
        ) : shopItemsData.length === 0 ? (
          <h3 style={{ color: color }}>No Data.</h3>
        ) : (
          <CartItemCard
            itemsData={shopItemsData}
            purpose="buy"
            increaseNumOfItem={increaseNumOfItem}
            decreaseNumOfItem={decreaseNumOfItem}
          />
        )}
      </div>
    </>
  );
}

export default ShopItems;
