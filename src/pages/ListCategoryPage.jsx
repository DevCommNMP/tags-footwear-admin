import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllsubCategories } from "../redux/actions/categories/allCategoriesActions";

import Aside from "../components/Aside";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom/dist";

const ListCategoryPage = () => { 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem('userData'));
  const token = data?.token ?? null; // Providing a default value for token

  // Fetching subcategories from the Redux store
  const storeData = useSelector((store) => store.categories);
  const allSubcategories = storeData.categoriesData; // assuming storeData.categoriesData contains the subcategories array
  
  useEffect(() => {
    if(!token){
      navigate("/login")
      return;
     }
    dispatch(fetchAllsubCategories());
  }, [dispatch,token]);

  // State to handle the delete modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  // Function to handle opening the delete modal
  const handleShowDeleteModal = (subcategory) => {
    setSelectedSubcategory(subcategory);
    setShowDeleteModal(true);
  };

  // Function to handle closing the delete modal
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setSelectedSubcategory(null);
  };

  // Function to handle subcategory deletion
  const handleDeleteSubcategory = () => {
    // Dispatch action to delete subcategory
    // This is where you would dispatch the action to delete the selected subcategory
    console.log("Deleting subcategory:", selectedSubcategory);
    // After deletion, you can close the modal
    setShowDeleteModal(false);
    setSelectedSubcategory(null);
  };

  return (
    <>
      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Delete Subcategory</h5>
                {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleCloseDeleteModal}>
                  <span aria-hidden="true">&times;</span>
                </button> */}
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete the subcategory "{selectedSubcategory.subcategoriesName}"?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseDeleteModal}>Cancel</button>
                <button type="button" className="btn btn-danger" onClick={handleDeleteSubcategory}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}

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
              {/* Dropdown and buttons */}
              <Link to="/add-category" className="btn btn-primary btn-sm rounded">
                Add New Product
              </Link>            </div>
          </div>
          <div className="card mb-4">
            <header className="card-header"></header>
            <div className="card-body">
              {/* Displaying subcategories */}
              {allSubcategories.map((subcategory, index) => (
                <article key={index} className="itemlist">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-sm-4 col-8 flex-grow-1 col-name">
                      <a className="itemside" href="#">
                        <div className="left">
                          <img
                            src={subcategory.imgUrl} // Assuming subcategory has imgUrl property
                            className="img-sm img-thumbnail"
                            alt="Item"
                          />
                        </div>
                        <div className="info">
                          <h6 className="mb-0">{subcategory.subcategoriesName}</h6>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-price">
                      <span>&#8377;{subcategory.price}</span> {/* Assuming subcategory has price property */}
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
                        <i className="material-icons md-edit"></i> Edit
                      </a>
                      <a
                        href="#"
                        className="btn btn-sm font-sm btn-light rounded"
                        onClick={() => handleShowDeleteModal(subcategory)} // Open delete modal on click
                      >
                        <i className="material-icons md-delete_forever"></i>{" "}
                        Delete
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          {/* pagination */}
          {/* You can implement pagination based on your requirements */}
        </section>
        <Footer />
      </main>
    </>
  );
};

export default ListCategoryPage;
