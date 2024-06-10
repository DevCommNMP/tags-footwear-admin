import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllsubCategories } from "../redux/actions/categories/allCategoriesActions";
import Aside from "../components/Aside";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom/dist";
import { baseUrl } from "../utils/baseUrl";
import axios from "axios";
import { Button } from "react-bootstrap";

const OrderCancellation = () => { 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem('userData'));
  const token = data?.token ?? null; // Providing a default value for token
const [Orders,setOrders]=useState([]);
  // Fetching subcategories from the Redux store
  console.log(Orders)
  useEffect( () => {
    if(!token){
      navigate("/login")
      return;
     }
     const fetchOrders=async()=>{
      const orders =await axios.get(`${baseUrl}/api/orders/getAllOrders`)
      setOrders(orders.data)
     }

     fetchOrders();
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
              <h2 className="content-title card-title">All Cancelled Orders</h2>
              {/* <p>Lorem ipsum dolor sit amet.</p> */}
            </div>
            
          </div>
          <div className="card mb-4">
            <header className="card-header"></header>
            
            <div className="card-body">
            <article  className="itemlist">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-sm-4 col-8 flex-grow-1 col-name">
                      <a className="itemside" href="#">
                        <div className="left">
                          
                        </div>
                        <div className="info">
                          <h6 className="mb-0">SNo.</h6>
                        </div>
                        <div className="info">
                          <h6 className="mb-0">Order No.</h6>
                        </div>
                        <div className="info">
                          <h6 className="mb-0">Order No.</h6>
                        </div>
                        
                      </a>
                      
                    </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-price info">
                      <span>User</span> {/* Assuming subcategory has price property */}
                    </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-price info">
                      <span>Amount</span> {/* Assuming subcategory has price property */}
                    </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-status info">
                      <span className="badge rounded-pill alert-success info">
                       Status
                      </span>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-4 col-date info">
                      <span>Actions</span>
                    </div>
                  
                  </div>
                </article>
              {Orders.map((order, index) => (
                <article key={index} className="itemlist">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-sm-4 col-8 flex-grow-1 col-name">
                      <a className="itemside" href="#">
                        <div className="left">
                          <img
                            src={order.orderNumber} // Assuming subcategory has imgUrl property
                            className="img-sm img-thumbnail"
                            alt="Item"
                          />
                        </div>
                        <div className="info">
                          <h6 className="mb-0">{order.orderNumber}</h6>
                        </div>
                        <div className="info">
                          <h6 className="mb-0">{order.order_id}</h6>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-price">
                      <span>{order.orderDetails.billingDetails.fname} {order.orderDetails.billingDetails.lname}</span> {/* Assuming subcategory has price property */}
                    </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-price">
                      <span>&#8377;{order.order_id}</span> {/* Assuming subcategory has price property */}
                    </div>
                    <div className="col-lg-2 col-sm-2 col-4 col-status">
                      <span className="badge rounded-pill alert-success">
                        Active
                      </span>
                     
                    </div>
                    <div className="col-lg-1 col-sm-2 col-4 col-date">
                    <span className="badge rounded-pill alert-success">
                    <span className="badge rounded-pill alert-success"  style={{backgroundColor:"red",padding:10,borderRadius:5,cursor:"pointer"}}>
                       View
                      </span>
                      </span>
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

export default OrderCancellation;
