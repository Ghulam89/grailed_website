import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screens/home";
import Navbar from "./components/navbar";
import ContactUs from "./screens/contactUs";
import Footer from "./components/footer";
import ProductDetails from "./screens/productDetails";
import ForYou from "./screens/forYou";
import Shop from "./screens/shop";
import Accessibility from "./screens/accessibility";
import DesignersDetails from "./screens/designersDetails";
import Sells from "./screens/sells";
import NewListing from "./screens/sells/newListing";
import Favorites from "./screens/Favorites";
import MyProfile from "./screens/users/myProfile";
import Users from "./screens/users";
import Address from "./screens/users/address";
import Purchases from "./screens/users/purchases";
import ForSale from "./screens/sells/ForSale/ForSale";
import FeedBack from "./screens/sells/FeedBack";
import Payments from "./screens/users/payments";
import Categories from "./screens/Categories";
import Checkout from "./screens/checkout";
import Stores from "./screens/Stores";

function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/product_details" element={<ProductDetails />} />
        <Route path="/for_you" element={<ForYou />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/designers_details" element={<DesignersDetails />} />
        <Route path="/sells" element={<Sells />} />
        <Route path="/new_listing" element={<NewListing />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/stores" element={<Stores/>} />

        <Route path="/users" element={<Users />}>
          <Route path="my_profile" element={<MyProfile />} />
          <Route path="address" element={<Address />} />
          <Route path="purchases" element={<Purchases />} />
          <Route path="payments" element={<Payments />} />
        </Route>

        <Route path="/sell" element={<Sells />}>
          <Route path="for_sale" element={<ForSale />} />
          <Route path="feed_back" element={<FeedBack />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
