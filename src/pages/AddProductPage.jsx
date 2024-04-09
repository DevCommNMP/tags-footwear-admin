import Aside from "../components/Aside";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BasicProductDetails from "../components/ProductBasicDetails";
// import ProductShippingDetails from "../components/ProductShippingDetails";
// import ProductMainImage from "../components/ProductMainImage";
// import ProductSubImages from "../components/ProductSubImages";
import { Link} from "react-router-dom";

const AddProductPage = () => {



  
  return (
    <>
    
      <div className="screen-overlay"></div>
      <Aside />
      <main className="main-wrap">
        <Header />
        <section className="content-main">
          <div className="row">
            <div className="col-9 m-auto">
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
            <div className="col-lg-9 m-auto">
              <BasicProductDetails />
            </div>
           
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default AddProductPage;
