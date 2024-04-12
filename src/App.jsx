import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Blankpage from "./pages/BlankPage";
import ListProductPage from "./pages/ListProductPage";
import AddProductPage from "./pages/AddProductPage";
import QuickView from "./components/QuickView";
import StateModal from "./components/StateModal";
import NotfoundPage from "./pages/NotfoundPage";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import store from "../src/redux/store/store"
import { Provider } from "react-redux";
import ListCategoryPage from "./pages/ListCategoryPage";
import AddCategoryPage from "./pages/AddCategoryPage";
import AddProductImages from "./pages/AddProductImages";
import Invoice from "./pages/Invoice2";
import EditProductPage from "./pages/editProductPage";
// import InvoiceWithForm from "./pages/InvoiceWithForm";
function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/blank" element={<Blankpage />} />
          <Route exact path="/products-list" element={<ListProductPage />} />
          <Route exact path="/add-product" element={<AddProductPage />} />
          <Route exact path="/edit-product/:id" element={<EditProductPage />} />
          <Route exact path="/add-product-images/:id" element={<AddProductImages />} />
          <Route exact path="/quickview" element={<QuickView />} />
          <Route exact path="/state" element={<StateModal />} />
          <Route exact path="/notfound" element={<NotfoundPage />} />
          <Route path="/manage-categories" element={<ListCategoryPage />} />
          <Route path="/add-category" element={<AddCategoryPage />} />
          <Route path="/generate-invoice" element={<Invoice />} />
          {/* <Route path="/create-invoice" element={<InvoiceWithForm />} /> */}
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
