import Aside from "../components/Aside";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BasicProductDetails from "../components/ProductBasicDetails";
import ProductMainImage from "../components/ProductMainImage";
import ProductSubImages from "../components/ProductSubImages";
import { Link, useNavigate } from "react-router-dom";
import { Slide, toast, ToastContainer } from "react-toastify";
import { useState } from "react";

const AddProductImages = () => {
   const[updatedProductImage,setProductImage]=useState(false);
   const [updateProductSubImage,setupdatedProductSubImages]=useState(false);
   const navigate = useNavigate();
   if(updatedProductImage  && updateProductSubImage){
    setTimeout(() => {
      navigate("/products-list");
    },2000);
    
   }
  return (
    <>
    
      <div className="screen-hardlight
      "></div>
      <Aside />
      <main className="main-wrap">
      <ToastContainer />
        <Header />
        <section className="content-main">
          <div className="row">
            <div className="col-9 m-auto">
              <div className="content-header">
                <h2 className="content-title">Add Product Images</h2>
                <div>
                  <Link to="/products-list">
                    <button className="btn btn-danger text-light rounded font-sm mr-5 hover-up">
                      View Products
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-9 m-auto">
              <div className="row">
                <div classNam
              e="col-47">
                  <ProductMainImage  setProductImage={setProductImage}/>
                </div>
                <div className="col-8">
                  <ProductSubImages setupdatedProductSubImages={setupdatedProductSubImages} />
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

export default AddProductImages;
