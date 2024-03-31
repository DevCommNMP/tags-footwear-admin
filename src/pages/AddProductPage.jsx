import Aside from "../components/Aside";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BasicProductDetails from "../components/ProductBasicDetails";
import ProductShippingDetails from "../components/ProductShippingDetails";
import ProductMainImage from "../components/ProductMainImage";
import ProductSubImages from "../components/ProductSubImages";

const ProductListPage = () => {
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
                  <button className="btn btn-light rounded font-sm mr-5 text-body hover-up">
                    Save to draft
                  </button>
                  <button className="btn btn-md rounded font-sm hover-up">
                    Publish
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <BasicProductDetails />
              <ProductShippingDetails />
            </div>
            <div className="col-lg-3">
              <ProductMainImage />
              <ProductSubImages />
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

export default ProductListPage;
