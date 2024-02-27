import { useEffect, useState } from "react";
import { useThemeContext } from "../context/ThemeContext ";
import CartItemCard from "../components/CartItemCard";
import "../styles/rentItems.scss";

function RentItems() {
  const { theme, cartQuantities, setCartQuantities, user, url } =
    useThemeContext(); //主題切換
  const backColor = theme ? "#161a1d" : "#ffffff";
  const color = theme ? "#ffffff" : "#161a1d";

  const [rentItemsData, setRentItemsData] = useState([]); //顯示在畫面的商品
  const [isLoading, setIsLoading] = useState(true); //資料加載狀態

  useEffect(() => {
    fetch(url.rentItem)
      .then((res) => res.json())
      .then((data) => {
        setRentItemsData(data);
        setIsLoading(false); // 数据加载完成后更新加载状态
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false); // 数据加载出错时更新加载状态
      });
  }, []);

  //增加租借商品數量
  function increaseNumOfItem(id) {
    const itemIndex = cartQuantities?.findIndex(
      (item) =>
        item.id === id && item.purpose === "rent" && item.userId === user.userId
    );
    if (itemIndex !== -1) {
      const updatedQuantities = [...cartQuantities];
      updatedQuantities[itemIndex].day += 1;
      updatedQuantities[itemIndex].totalPrice =
        updatedQuantities[itemIndex].day * updatedQuantities[itemIndex].price;
      setCartQuantities(updatedQuantities);
    } else {
      const item = rentItemsData?.find((item) => item.id === id);
      if (item && item.purpose === "rent") {
        const newItem = {
          id: item.id,
          userId: user.userId,
          purpose: "rent",
          itemName: item.itemName,
          day: 1,
          price: item.price,
          totalPrice: item.price,
        };
        setCartQuantities([...cartQuantities, newItem]);
      }
    }
  }
  // 減少租借商品數量
  function decreaseNumOfItem(id) {
    const itemIndex = cartQuantities?.findIndex(
      (item) =>
        item.id === id && item.purpose === "rent" && item.userId === user.userId
    );
    if (itemIndex !== -1) {
      const updatedQuantities = [...cartQuantities];
      updatedQuantities[itemIndex].day -= 1;
      updatedQuantities[itemIndex].totalPrice =
        updatedQuantities[itemIndex].day * updatedQuantities[itemIndex].price;
      if (updatedQuantities[itemIndex].day === 0) {
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
        <h2 style={{ color: color }}>可租借商品</h2>
        <h4 style={{ color: color }}>
          覺得商品太貴?可以先用半價租借體驗看看,喜歡再購買
        </h4>
        {isLoading ? (
          <h3 style={{ color: color }}>Loading...</h3> // 加载中的提示信息
        ) : rentItemsData.length === 0 ? (
          <h3 style={{ color: color }}>No Data.</h3>
        ) : (
          <CartItemCard
            itemsData={rentItemsData}
            purpose="rent"
            increaseNumOfItem={(id) =>
              increaseNumOfItem(
                id,
                "rent",
                cartQuantities,
                setCartQuantities,
                user
              )
            }
            decreaseNumOfItem={(id) =>
              decreaseNumOfItem(
                id,
                "rent",
                cartQuantities,
                setCartQuantities,
                user
              )
            }
          />
        )}
      </div>
    </>
  );
}

export default RentItems;
