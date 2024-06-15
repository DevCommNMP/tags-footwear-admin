import { useState, useEffect } from "react";
import Aside from "../components/Aside";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { deleteParticularProductAction, fetchAllProductsAction } from "../redux/actions/product/productActions";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link, useNavigate } from "react-router-dom";
// import "bootstrap/dist/js/bootstrap.bundle.min";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ListProductPage = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("userData"));
  const token = data?.token ?? null; // Providing a default value for token

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [productIdToDelete, setProductIdToDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(25); // Number of products per page

  const storeData = useSelector((store) => store.products);
  const { products, productsLoading, appErr, serverErr } = storeData;

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    dispatch(fetchAllProductsAction());
  }, [dispatch]);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const editProductHandler = (productId) => {
    navigate(`/edit-product/${productId}`);
  };

  const deleteHandler = (productId) => {
    setShow(!show);
    setProductIdToDelete(productId);
  };

  const editImageHandler = (productId) => {
    navigate(`/add-product-images/${productId}`);
  };
  const deleteproductHandler = () => {
    const res = dispatch(deleteParticularProductAction(productIdToDelete));

    setShow(!show);
  };
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle dropdown change
  const handleDropdownChange = (value) => {
    setProductsPerPage(value);
    setCurrentPage(1); // Reset to first page when changing products per page
  };

  return (
    <>
      {show ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Warning !</Modal.Title>
          </Modal.Header>
          <Modal.Body> You will not be able to retrieve the product after deletion.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={deleteproductHandler}>
              {productsLoading ? "Loading" : "Delete"}
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        ""
      )}
      <div className="screen-overlay"></div>
      <Aside />
      <main className="main-wrap">
        <Header />
        <section className="content-main">
          <div className="content-header">
            <div>
              <h2 className="content-title card-title">Products List</h2>
              <p></p>
            </div>
            <div>
              <div className="btn-group me-2">
                <div className="dropdown">
                  <button
                    className="btn-light rounded font-md dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ border: "1px solid #e3e6f0" }}
                  >
                    Show {productsPerPage} per page
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li>
                      <button className="dropdown-item border-none" onClick={() => handleDropdownChange(25)}>
                        25
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item border-none" onClick={() => handleDropdownChange(50)}>
                        50
                      </button>
                    </li>

                    <li>
                      <button className="dropdown-item border-none" onClick={() => handleDropdownChange(100)}>
                        100
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item border-none" onClick={() => handleDropdownChange(200)}>
                        200
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item border-none" onClick={() => handleDropdownChange(400)}>
                        400
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <Link to="/add-product" className="btn btn-primary btn-sm rounded">
                Add New Product
              </Link>
            </div>
          </div>
          <div className="card mb-4">
            <header className="card-header">Product List</header>
            <div className="card-body">
              <article className="itemlist">
                <div className="row align-items-center">
                  <div className="col-lg-4 col-sm-4 col-8 flex-grow-1 col-name">
                    <a className="itemside" href="#">
                      <div className="left">
                        <h6 style={{ marginRight: "5px" }}>S.N. </h6>
                      </div>
                      <div className="left">
                        <h6>Product image</h6>
                      </div>
                      <div className="info">
                        <h6 className="mb-0">Product Title</h6>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-2 col-sm-2 col-4 col-price">
                    <h6>Price</h6>
                  </div>
                  
                  <div className="col-lg-2 col-sm-2 col-4 col-status">
                    <span className=" ">Product Name</span>
                  </div>
                  <div className="col-lg-1 col-sm-2 col-4 col-date">
                    <span>
                      <h6>Category</h6>
                    </span>
                  </div>
                  <div className="col-lg-2 col-sm-2 col-4 col-action text-end">
                    <h6>Actions</h6>
                  </div>
                </div>
              </article>
              {currentProducts.map((product, index) => (
                <article key={index} className="itemlist">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-sm-4 col-8 flex-grow-1 col-name">
                      <a className="itemside" href="#">
                        <div className="left">
                          <h6 className="mb-0">{index + 1}</h6>
                        </div>
                        <div className="left">
                          <img src={product.productImage} className="img-sm img-thumbnail" alt="Item" />
                        </div>
                        <div className="info">
                          <h6 className="mb-0">{product.title}</h6>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-price">
                      <span>&#8377;{product.SellingPrice-product.SellingPrice * (1 - 0.6)}</span>
                    </div>
                    
                    <div className="col-lg-2 col-sm-2 col-4 col-status">
                      <span className="">{product.productName}</span>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-4 col-date">
                      <span>
                        <span>{product.subcategoryType?.subcategoryTypeName || "Leather"}</span>
                      </span>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-action text-end">
                      <a className="btn btn-sm font-sm rounded btn-brand mx-1" onClick={() => editImageHandler(product._id)}>
                        {" "}
                        <i className="material-icons md-edit"></i> Update Image{" "}
                      </a>
                      <a className="btn btn-sm font-sm rounded btn-brand mx-1" onClick={() => editProductHandler(product._id)}>
                        {" "}
                        <i className="material-icons md-edit"></i> Edit{" "}
                      </a>
                      <a className="btn btn-sm font-sm btn-light rounded mx-1" onClick={() => deleteHandler(product._id)}>
                        {" "}
                        <i className="material-icons md-delete_forever"></i> Delete{" "}
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="pagination-area mt-30 mb-50">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-start">
                {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, index) => (
                  <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                    <a onClick={() => paginate(index + 1)} className="page-link" href="#">
                      {index + 1}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default ListProductPage;
