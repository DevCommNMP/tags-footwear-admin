import { useState, useEffect } from "react";
import Aside from "../components/Aside";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { deleteParticularProductAction, fetchAllProductsAction } from "../redux/actions/product/productActions";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ListProductPage = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [productIdToDelete, setProductIdToDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10); // Number of products per page

  const storeData = useSelector((store) => store.products);
  const { products, productsLoading, appErr, serverErr } = storeData;

  useEffect(() => {
    dispatch(fetchAllProductsAction());
  }, [dispatch]);

  console.log(products, productsLoading, appErr, serverErr);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const editProductHandler = (productId) => {
    navigate(`/edit-product/${productId}`);
    console.log(productId);
  };

  const deleteHandler = (productId) => {
    setShow(!show);
    setProductIdToDelete(productId);
  };

  const deleteproductHandler = () => {
    
    console.log("product deleted successfully");
    const res = dispatch(deleteParticularProductAction(productIdToDelete));
    console.log(res.status);
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
                      <button className="dropdown-item border-none" onClick={() => handleDropdownChange(2)}>
                        2
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item border-none" onClick={() => handleDropdownChange(4)}>
                        4
                      </button>
                    </li>

                    <li>
                      <button className="dropdown-item border-none" onClick={() => handleDropdownChange(5)}>
                        5
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item border-none" onClick={() => handleDropdownChange(10)}>
                        10
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item border-none" onClick={() => handleDropdownChange(20)}>
                        20
                      </button>
                    </li>
                    {/* Add more options as needed */}
                  </ul>
                </div>
              </div>
              <a href="#" className="btn btn-light rounded font-md">
                Export
              </a>
              <a href="#" className="btn btn-light rounded font-md">
                Import
              </a>
              <Link to="/add-product" className="btn btn-primary btn-sm rounded">
                Add New Product
              </Link>
            </div>
          </div>
          <div className="card mb-4">
            <header className="card-header">Product List</header>
            <div className="card-body">
            
              {currentProducts.map((product,index) => (
                <article key={index} className="itemlist">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-sm-4 col-8 flex-grow-1 col-name">
                      <a className="itemside" href="#">
                        <div className="left">
                          <img src={product.productImage} className="img-sm img-thumbnail" alt="Item" />
                        </div>
                        <div className="info">
                          <h6 className="mb-0">{product.title}</h6>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-price">
                      <span>&#8377;{product.SellingPrice}</span>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-status">
                      <span className="badge rounded-pill alert-success">Active</span>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-4 col-date">
                      <span>{product.subcategoryType.subcategoryTypeName}</span>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-action text-end">
                      <a className="btn btn-sm font-sm rounded btn-brand" onClick={() => editProductHandler(product._id)}>
                        {" "}
                        <i className="material-icons md-edit"></i> Edit{" "}
                      </a>
                      <a className="btn btn-sm font-sm btn-light rounded" onClick={() => deleteHandler(product._id)}>
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
