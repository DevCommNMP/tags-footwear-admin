import Aside from "../components/Aside";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BasicProductDetails from "../components/ProductBasicDetails";
// import ProductShippingDetails from "../components/ProductShippingDetails";
import ProductMainImage from "../components/ProductMainImage";
import ProductSubImages from "../components/ProductSubImages";
import { Link, Navigate } from "react-router-dom";

const AddProductPage = () => {
  return (
    <>
      <div className="screen-overlay"></div>
      <Aside />
      <main className="main-wrap">
        <Header />
        <section className="content-main">
          <div className="row">
            <div className="col-9">
              <div className="content-header">
                <h2 className="content-title">Add New Product</h2>
                <div>
                  <Link to="/products-list">
                    <button
                      className="btn btn-danger text-light rounded font-sm mr-5 hover-up"
                    >
                      View Products
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <BasicProductDetails />
            </div>
            <div className="col-lg-3">
              <ProductMainImage />
              <ProductSubImages />
              {/* <ProductShippingDetails /> */}
              <div className="card mb-4">
                <div className="card-header">
                  <h4>Coupon Code</h4>
                </div>
                <div className="card-body">
                  <div className="row gx-2">
                    <div className="mb-4">
                      <label htmlFor="product_name" className="form-label">
                        Enter coupon code for this product
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default AddProductPage;
