import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
// import Blankpage from "./pages/BlankPage";
import ListProductPage from "./pages/ListProductPage";
import AddProductPage from "./pages/AddProductPage";
import QuickView from "./components/QuickView";
import StateModal from "./components/StateModal";
import NotfoundPage from "./pages/NotfoundPage";
import "./App.css";
import store from "../src/redux/store/store";
import { Provider } from "react-redux";
import ListCategoryPage from "./pages/ListCategoryPage";
import AddCategoryPage from "./pages/AddCategoryPage";
import AddProductImages from "./pages/AddProductImages";
import Invoice from "./pages/Invoice2";
import EditProductPage from "./pages/editProductPage";
import Login from "./components/auth/login";
import OrderDetailsPage from "./pages/orderDetailsPage";
import OrderCancellation from "./pages/orderCancellation";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cancelled-orders" element={<OrderCancellation />} />
          <Route path="/products-list" element={<ListProductPage />} />
          <Route path="/add-product" element={<AddProductPage />} />
          <Route path="/edit-product/:id" element={<EditProductPage />} />
          <Route path="/add-product-images/:id" element={<AddProductImages />} />       
          <Route path="/manage-categories" element={<ListCategoryPage />} />
          <Route path="/add-category" element={<AddCategoryPage />} />
          <Route path="/order-details/:id" element={<OrderDetailsPage />} />
          <Route path="/generate-invoice" element={<Invoice />} />
          <Route element={<NotfoundPage />} /> {/* Not Found Route */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
