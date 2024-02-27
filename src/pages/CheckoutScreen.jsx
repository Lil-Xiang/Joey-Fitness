import { useThemeContext } from "../context/ThemeContext ";
import UserHeader from "../components/CheckoutScreen/UserHeader";
import CheckoutTable from "../components/CheckoutScreen/CheckoutTable";
import "../styles/checkoutScreen.scss";

function CheckoutScreen() {
  const { theme, cartQuantities, setCartQuantities, user, userState, url } =
    useThemeContext(); //主題切換

  const backColor = theme ? "#161a1d" : "#ffffff";
  const color = theme ? "#ffffff" : "#161a1d";
  const filterCartQuantities = cartQuantities.filter(
    (item) => item.userId === user.userId
  );
  //拿取當天日期和租借天數換算成歸還日期
  function countReturnDay(rentDay) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const returnDate = new Date(
      currentYear,
      currentMonth,
      currentDay + rentDay
    );

    // 檢查是否超過當月的總天數
    if (returnDate.getDate() > monthDays[currentMonth]) {
      // 超過當月，加一個月
      returnDate.setMonth(returnDate.getMonth() + 1);
      returnDate.setDate(returnDate.getDate() - monthDays[currentMonth]);
    }

    // 檢查是否超過當年的月數
    if (returnDate.getMonth() > 13) {
      // 超過當年，加一年
      returnDate.setFullYear(returnDate.getFullYear() + 1);
    }
    return returnDate.toLocaleDateString();
  }

  function handleCheckout() {
    //送出訂單給後端
    const data = filterCartQuantities?.map((item) => ({
      userName: user.userName,
      itemName: item.itemName,
      purpose: item.purpose,
      num: item.purpose === "buy" ? item.quantity : item.day,
      returnDay: item.purpose === "buy" ? "不用" : countReturnDay(item.day),
      price: item.totalPrice,
    }));

    // 傳送訂單給後端
    fetch(url.userShopList, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((result) => {
        // 後端回傳結果
        console.log("result", result);
        // 成功後清空當前使用者購物車
        setCartQuantities((pre) =>
          pre.filter((item) => item.userId !== user.userId)
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <>
      <div
        className="checkoutScreen-container"
        style={{ backgroundColor: backColor }}
      >
        <h2 style={{ color: color }}>結帳畫面</h2>

        <div className="checkoutScreen-news">
          {userState && <UserHeader user={user} color={color} />}
          <CheckoutTable
            filterCartQuantities={filterCartQuantities}
            countReturnDay={countReturnDay}
          />

          <div className="checkoutScreen-news-bottom">
            {userState && <button onClick={handleCheckout}>送出訂單</button>}
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutScreen;
