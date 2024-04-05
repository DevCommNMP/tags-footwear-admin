import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllsubCategories } from "../redux/actions/categories/allCategoriesActions";

import Aside from "../components/Aside";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ListCategoryPage = () => {
  const dispatch = useDispatch();

  const storeData = useSelector((store) => store.categories);
  console.log(storeData);
  storeData.categories.map((category) => category.subcategoriesName);
  const allSubcategories = storeData.categories.map(
    (category) => category.subcategoriesName
  );

  useEffect(() => {
    dispatch(fetchAllsubCategories());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(4); // Number of products per page

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allSubcategories.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleDropdownChange = (value) => {
    setProductsPerPage(value);
    setCurrentPage(1);
  };

  return (
    <>
      <div className="screen-overlay"></div>
      <Aside />
      <main className="main-wrap">
        <Header />
        <section className="content-main">
          <div className="content-header">
            <div>
              <h2 className="content-title card-title">All Categories</h2>
              <p>Lorem ipsum dolor sit amet.</p>
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
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li>
                      <button
                        className="dropdown-item border-none"
                        onClick={() => handleDropdownChange(2)}
                      >
                        2
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item border-none"
                        onClick={() => handleDropdownChange(4)}
                      >
                        4
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <a href="#" className="btn btn-light rounded font-md">
                Export
              </a>
              <a href="#" className="btn btn-light rounded font-md">
                Import
              </a>
              <Link
                to="/add-category"
                className="btn btn-primary btn-sm rounded"
              >
                Add New Category
              </Link>
            </div>
          </div>
          <div className="card mb-4">
            <header className="card-header"></header>
            <div className="card-body">
              {currentProducts.map((subcategories) => (
                <article key={subcategories.id} className="itemlist">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-sm-4 col-8 flex-grow-1 col-name">
                      <a className="itemside" href="#">
                        <div className="left">
                          <img
                            src={subcategories}
                            className="img-sm img-thumbnail"
                            alt="Item"
                          />
                        </div>
                        <div className="info">
                          <h6 className="mb-0">{subcategories}</h6>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-price">
                      <span>&#8377;span</span>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-status">
                      <span className="badge rounded-pill alert-success">
                        Active
                      </span>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-4 col-date">
                      <span>00</span>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-action text-end">
                      <a
                        href="#"
                        className="btn btn-sm font-sm rounded btn-brand"
                      >
                        {" "}
                        <i className="material-icons md-edit"></i> Edit{" "}
                      </a>
                      <a
                        href="#"
                        className="btn btn-sm font-sm btn-light rounded"
                      >
                        {" "}
                        <i className="material-icons md-delete_forever"></i>{" "}
                        Delete{" "}
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          {/* pagination */}
          <div className="pagination-area mt-30 mb-50">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-start">
                {Array.from(
                  {
                    length: Math.ceil(
                      allSubcategories.length / productsPerPage
                    ),
                  },
                  (_, index) => (
                    <li
                      key={index}
                      className={`page-item ${
                        currentPage === index + 1 ? "active" : ""
                      }`}
                    >
                      <a
                        onClick={() => paginate(index + 1)}
                        className="page-link"
                        href="#"
                      >
                        {index + 1}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default ListCategoryPage;
