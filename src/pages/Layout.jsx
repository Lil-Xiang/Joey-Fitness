import { useState, useEffect, useRef } from "react";
import { useThemeContext } from "../context/ThemeContext ";
import { Outlet } from "react-router-dom";
import jwt_decode from "jwt-decode";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import "../styles/layout.scss";

import shopCarImg from "../../public/images/shoppingCartIcon.png";
import burgerIcon from "../../public/images/burger.png";

import Navigation from "../components/Layout/Navigation";
import ShoppingCart from "../components/Layout/ShoppingCart";
import ShoppingCartContent from "../components/Layout/ShoppingCartContent";
import BurgerMenu from "../components/Layout/BurgerMenu";
import BurgerMenuContent from "../components/Layout/BurgerMenuContent";

function Layout() {
  const [shopSlider, setShopSlider] = useState(false);
  const [burgerSlider, setBurgerSlider] = useState(false);
  const loginRef = useRef(null); // 創建ref

  const {
    theme,
    toggleColor,
    cartQuantities,
    setCartQuantities,
    user,
    setUser,
    userState,
    setUserState,
    url,
  } = useThemeContext(); //主題切換
  const backColor = theme ? "#161a1d" : "#ffffff";
  const color = theme ? "#ffffff" : "#161a1d";

  function removeFromCart(id) {
    const updatedCart = cartQuantities.filter(
      (item) => item.id !== id || item.userId !== user.userId
    );
    setCartQuantities(updatedCart);
  }

  function loginIn(res) {
    //credential 是 base64 的 JWT Token,要jwt_decode解碼才能看到資訊
    const userObject = jwt_decode(res.credential);
    const updatedUser = {
      loginStatus: "1",
      userId: userObject.sub,
      userName: userObject.name,
      userEmail: userObject.email,
      userImg: userObject.picture,
    };
    setUser(updatedUser);
    setUserState((prevState) => !prevState);

    fetch(url.login, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    loginRef.current.hidden = true;
  }

  function logOut() {
    const updatedUser = {
      ...user,
      loginStatus: "0",
    };
    setUser({});
    setUserState((prevState) => !prevState);

    fetch(url.logout, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    loginRef.current.hidden = false;
    localStorage.removeItem("user");
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: import.meta.env.GOOGLE_CLIENT_ID,
      callback: loginIn,
    });
    if (!userState) {
      google.accounts.id.renderButton(loginRef.current, {
        type: "icon",
        theme: "filled_black",
        size: "large",
        shape: "circle",
      });
    }
    google.accounts.id.prompt();
  }, []);

  return (
    <>
      <header
        className="layout-container"
        style={{ backgroundColor: backColor, color: color }}
      >
        <div className="layout-title">
          <h1>Joey Fitness</h1>
        </div>

        <div className="layout-text-container">
          <Navigation color={color} toggleColor={toggleColor} />

          <div className="login-logout-btn">
            <div ref={loginRef} id="google-login"></div>
            {userState && <button onClick={(e) => logOut(e)}>登出</button>}
          </div>

          <ShoppingCart
            setShopSlider={setShopSlider}
            shopCarImg={shopCarImg}
            cartQuantities={cartQuantities}
            user={user}
          />

          <BurgerMenu
            setBurgerSlider={setBurgerSlider}
            burgerIcon={burgerIcon}
          />
        </div>

        <SlidingPane
          title="您的購物車項目"
          isOpen={shopSlider}
          width="400px"
          onRequestClose={() => {
            setShopSlider(false);
          }}
        >
          <ShoppingCartContent
            cartQuantities={cartQuantities}
            user={user}
            removeFromCart={removeFromCart}
            setShopSlider={setShopSlider}
          />
        </SlidingPane>

        <SlidingPane
          isOpen={burgerSlider}
          width="400px"
          from="left"
          onRequestClose={() => {
            setBurgerSlider(false);
          }}
        >
          <BurgerMenuContent />
        </SlidingPane>
      </header>
      <Outlet />
    </>
  );
}

export default Layout;
