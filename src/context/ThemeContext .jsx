import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext(null);

export function useThemeContext() {
  return useContext(ThemeContext);
}

// eslint-disable-next-line react/prop-types
export function ThemeContextProvider({ children }) {
  const url = {
    //fetch網址
    login: import.meta.env.URL_LOGIN,
    logout: import.meta.env.URL_LOGOUT,
    shopItem: import.meta.env.URL_SHOPITEM,
    rentItem: import.meta.env.URL_RENTITEM,
    userShopList: import.meta.env.URL_USERSHOPLIST
  };
  const [theme, setTheme] = useState(false); //切換主題顏色的狀態

  const [userState, setUserState] = useState(() => {
    const savedUserState = localStorage.getItem("userState");
    return savedUserState ? JSON.parse(savedUserState) : false;
  });

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser
      ? JSON.parse(savedUser)
      : {
          loginStatus: "",
          userId: "",
          userName: "",
          userEmail: "",
          userImg: "",
        };
  });

  //從localStorage讀取cartQuantities,如果沒有就先給一組空[]
  const [cartQuantities, setCartQuantities] = useState(() => {
    const savedCartQuantities = localStorage.getItem("cartQuantities");
    return savedCartQuantities ? JSON.parse(savedCartQuantities) : [];
  }); //購物車項目

  //更新cartQuantities時保存在localStorage裡面
  useEffect(() => {
    localStorage.setItem("cartQuantities", JSON.stringify(cartQuantities));
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("userState", JSON.stringify(userState));
  }, [cartQuantities, user, userState]);

  function toggleColor() {
    setTheme(!theme);
  }

  const themeValues = {
    userState,
    setUserState,
    user,
    setUser,
    theme,
    toggleColor,
    cartQuantities,
    setCartQuantities,
    url,
  };

  return (
    <ThemeContext.Provider value={themeValues}>
      {children}
    </ThemeContext.Provider>
  );
}
