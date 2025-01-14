import CartPage from "./pages/CartPage";
import OrdersPage from "./pages/OrdersPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import Api from "./Api";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path='/msq/orders' element={<OrdersPage/>}/>
            <Route path='/msq/cart' element={<CartPage/>}/>
            <Route path='/msq/profile' element={<ProfilePage/>}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
