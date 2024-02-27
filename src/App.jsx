import { Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import SportsItems from "./pages/SportsItems";
import Muscle from "./pages/Muscle";
import SelfPlanning from "./pages/SelfPlanning";
import ShopItems from "./pages/ShopItems";
import RentItems from "./pages/RentItems";
import CheckoutScreen from "./pages/checkoutScreen";

import { ThemeContextProvider } from "./context/ThemeContext ";

function App() {
  return (
    <div
      className="main_container"
      style={{ width: "100%", height: "100vh", overflowY: "scroll" }}
    >
      <ThemeContextProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="sportsItems" element={<SportsItems />} />
              <Route path="muscle" element={<Muscle />} />
              <Route path="selfPlanning" element={<SelfPlanning />} />
              <Route path="shopItems" element={<ShopItems />} />
              <Route path="rentItems" element={<RentItems />} />
              <Route path="checkoutScreen" element={<CheckoutScreen />} />
            </Route>
          </Routes>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
