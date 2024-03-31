import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Blankpage from "./pages/BlankPage";
import ListProductPage from "./pages/ListProductPage";
import AddProductPage from "./pages/AddProductPage";
import QuickView from "./components/QuickView";
import StateModal from "./components/StateModal";
import NotfoundPage from "./pages/NotfoundPage";
import "./App.css";
import store from "../src/redux/store/store"
import { Provider } from "react-redux";
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
          <Route exact path="/quickview" element={<QuickView />} />
          <Route exact path="/state" element={<StateModal />} />
          <Route exact path="/notfound" element={<NotfoundPage />} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
