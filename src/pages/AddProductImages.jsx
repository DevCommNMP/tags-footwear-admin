import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Aside from "../components/Aside";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BasicProductDetails from "../components/ProductBasicDetails";
import ProductMainImage from "../components/ProductMainImage";
import ProductSubImages from "../components/ProductSubImages";
import { Alert } from "react-bootstrap";

const AddProductImages = () => {
  const [updatedProductImage, setUpdatedProductImage] = useState(false);
  const [updatedProductSubImage, setUpdatedProductSubImage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [message, setMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (updatedProductImage && updatedProductSubImage) {
      setSuccessMessage(true);
      setMessage("Images added successfully!");
      setTimeout(() => {
        navigate("/products-list");
      }, 2000);
    }
  }, [updatedProductImage, updatedProductSubImage, navigate]);

  return (
    <>
      <div className="screen-hardlight"></div>
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
                  <Link to="/products-list"></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {successMessage && message && (
              <Alert variant="success" onClose={() => setSuccessMessage(false)}>
                <Alert.Heading>{message}</Alert.Heading>
              </Alert>
            )}
            <div className="col-4">
              <ProductMainImage setUpdatedProductImage={setUpdatedProductImage} />
            </div>
            <div className="col-8">
              <ProductSubImages setUpdatedProductSubImage={setUpdatedProductSubImage} />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default AddProductImages;
