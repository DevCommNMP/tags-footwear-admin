import Aside from "../components/Aside";
import CardHeader from "../components/CardHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MyChartsComponent from "../components/charts/MyChartsComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProductsAction } from "../redux/actions/product/productActions";
import { Link, useNavigate } from "react-router-dom";
import user1 from "../assets/imgs/people/avatar-1.png";
import user2 from "../assets/imgs/people/avatar-2.png";
import user3 from "../assets/imgs/people/avatar-3.png";
import { useState,useEffect } from "react";
import { fetchAllsubCategories } from "../redux/actions/categories/allCategoriesActions";
import { fetchAllOrdersAction } from "../redux/actions/orders/ordersActions";
import LoaderImg from "../components/loading/loading";
import {toast, ToastContainer } from "react-toastify";

const HomePage = () => {


  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [loading,setLoading]=useState(false);
  const navigate = useNavigate();
  const[paidCount,setPaidCount]=useState();
  const[codCount,setcodCount]=useState();
  const productData = useSelector((store) => store.products);
  const orderData = useSelector((store) => store.orders);
  const { products, productsLoading, appErr, serverErr } = productData;
  const categoryData = useSelector((store) => store.categories);
  const allSubcategories = categoryData.categoriesData;
  
  const data = JSON.parse(localStorage.getItem('userData'));
  const token = data?.token ?? null; // Providing a default value for token

  if(!token){
    navigate("/login")
  }
  

  const viewOrderHandler=async(orderId)=>{
    navigate(`/order-details/${orderId}`)

  }

  const paidOrders = async (orderData) => {
    const paidCount = orderData.orders.filter((item) => {
      return item.PaymentStatus === "Paid"; // Corrected the comparison and added return
    }).length;
     // Added .length to get the count
     setPaidCount(paidCount)
  
    return paidCount; // Return the count
  };
  const CODOrders = async (orderData) => {
    const CODCount = orderData.orders.filter((item) => {
      return item.PaymentStatus === "COD"; // Corrected the comparison and added return
    }).length;
     // Added .length to get the count
     setcodCount(CODCount)
     
    return paidCount; // Return the count
  };

  useEffect(() => {
    setLoading(true)
    if(!token){
      navigate("/login")
    }
  dispatch(fetchAllProductsAction())
  dispatch(fetchAllsubCategories())
  dispatch(fetchAllOrdersAction())
paidOrders(orderData);
CODOrders(orderData);
  setLoading(false)
  }, [dispatch])



  return (
    <>
      <ToastContainer/>
      <div className="screen-overlay"></div>
      <Aside />
      <main className="main-wrap">
        <Header />
        {loading? <LoaderImg/>: <section className="content-main">
          <div className="content-header">
            <div>
              <h2 className="content-title card-title">Dashboard</h2>
              <p>Whole data about your business here</p>
            </div>
            <div>
              <a href="#" className="btn btn-primary">
                <i className="text-muted material-icons md-post_add"></i>
                Create report
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="card card-body mb-4">
                <article className="icontext">
                  <span className="icon icon-sm rounded-circle bg-primary-light">
                    <i className="text-primary material-icons md-monetization_on"></i>
                  </span>
                  <div className="text">
                    <h6 className="mb-1 card-title">Paid Orders</h6>
                    <span>{paidCount}</span>
                    <span className="text-sm"> </span>
                  </div>
                </article>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card card-body mb-4">
                <article className="icontext">
                  <span className="icon icon-sm rounded-circle bg-success-light">
                    <i className="text-success material-icons md-local_shipping"></i>
                  </span>
                  <div className="text">
                    <h6 className="mb-1 card-title">Orders</h6>
                    <span>{orderData.orders.length}</span>
                    <span className="text-sm">  </span>
                  </div>
                </article>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card card-body mb-4">
                <article className="icontext">
                  <span className="icon icon-sm rounded-circle bg-warning-light">
                    <i className="text-warning material-icons md-qr_code"></i>
                  </span>
                  <div className="text">
                    <h6 className="mb-1 card-title">Products</h6>
                    <span>{products.length}</span>
                    <span className="text-sm"> In {allSubcategories.length} Categories </span>
                  </div>
                </article>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card card-body mb-4">
                <article className="icontext">
                  <span className="icon icon-sm rounded-circle bg-info-light">
                    <i className="text-info material-icons md-shopping_basket"></i>
                  </span>
                  <div className="text">
                    <h6 className="mb-1 card-title">COD Orders</h6>
                    <span>{codCount}</span>
                    <span className="text-sm"> Based in your local time. </span>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="card mb-4">
            <CardHeader />
            <div className="card-body">
              <div className="table-responsive">
                <div className="table-responsive">
                <table className="table align-middle table-nowrap mb-0">
  <thead className="table-light">
    <tr>
      <th scope="col" className="text-center">
        <div className="form-check align-middle">
          S.no
        </div>
      </th>
      <th className="align-middle" scope="col">
        Order Number
      </th>
      <th className="align-middle" scope="col">
        Billing Name
      </th>
      <th className="align-middle" scope="col">
        Date
      </th>
      <th className="align-middle" scope="col">
        Total
      </th>
      <th className="align-middle" scope="col">
        Payment Status
      </th>
      <th className="align-middle" scope="col">
        Payment Method
      </th>
      <th className="align-middle" scope="col">
        View Details
      </th>
    </tr>
  </thead>
  <tbody>
    {orderData ? orderData.orders
      .slice() // Create a copy of the array to avoid mutating the original array
      .sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate)) // Sort the array by order date in descending order
      .map((order, index) => (
        <tr key={index}>
          <td className="text-center">
            <div className="form-check">
              {index + 1}
            </div>
          </td>
          <td>
            <a href="#" className="fw-bold">
              {order.orderNumber}
            </a>
          </td>
          <td>{order?.orderDetails?.billingDetails.fname} {order.orderDetails?.billingDetails.lname}</td>
          <td>{new Date(order.orderDate).toLocaleDateString()}</td>
          <td>₹{order?.orderDetails?.subtotal}</td>
          <td>
            <span className="badge badge-pill badge-soft-success">{order.PaymentStatus}</span>
          </td>
          <td>
            <i className="material-icons md-payment font-xxl text-muted mr-5"></i> {order.paymentMethod?order.paymentMethod:""}
          </td>
          <td onClick={() => viewOrderHandler(order._id)}>
            <a className="btn btn-xs">
              View details
            </a>
          </td>
        </tr>
      )) : <tr><td colSpan="8">Some Thing Went wrong try again</td></tr>}
  </tbody>
</table>

                </div>
              </div>
            </div>
          </div>

         
          <div className="pagination-area mt-30 mb-50">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-start">
                <li className="page-item active">
                  <a className="page-link" href="#">
                    01
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    02
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    03
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link dot" href="#">
                    ...
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    16
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i className="material-icons md-chevron_right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>}
       
        <Footer />
      </main>
      <script src="assets/js/vendors/jquery-3.6.0.min.js"></script>
      <script src="assets/js/vendors/bootstrap.bundle.min.js"></script>
      <script src="assets/js/vendors/select2.min.js"></script>
      <script src="assets/js/vendors/perfect-scrollbar.js"></script>
      <script src="assets/js/vendors/jquery.fullscreen.min.js"></script>
      <script src="assets/js/vendors/chart.js"></script>
      <script src="assets/js/main5103.js?v=6.0" type="text/javascript"></script>
      <script src="assets/js/custom-chart.js" type="text/javascript"></script>
    </>
  );
};

export default HomePage;
