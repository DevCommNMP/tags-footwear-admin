import Aside from "../components/Aside";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BasicProductDetails from "../components/ProductBasicDetails";
// import ProductShippingDetails from "../components/ProductShippingDetails";
// import ProductMainImage from "../components/ProductMainImage";
// import ProductSubImages from "../components/ProductSubImages";
import { Link,useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchParticularProduct } from "../redux/actions/product/productActions";
import { Slide, toast, ToastContainer } from "react-toastify";
import EditProductBasicDetails from "../components/editProductBasicDetails";
import { useNavigate } from "react-router-dom/dist";

const EditProductPage = () => {
//  const [loading,setLoading]=useState(false);
const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem('userData'));
  const token = data?.token ?? null; // Providing a default value for token

    const{id}=useParams()
    const dispatch = useDispatch();
    const storeData = useSelector((store) => store.products);
    const { particularproduct, productsLoading, appErr, serverErr } = storeData;
 useEffect(() => {
  if(!token){
    navigate("/login")
   }
   
    const fetchData = async () => {
        try {
          // Dispatch the action and wait for the response
          const res = await dispatch(fetchParticularProduct(id));
           
      
        } catch (error) {
        
toast.error("Something went wrong try again!")
        }
      };
      

      // Call the async function to fetch the data
      fetchData();

 }, [token])

 
  return (
    <>
    <ToastContainer />
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
                    <button className="btn btn-danger text-light rounded font-sm mr-5 hover-up">View Products</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-9 m-auto">
              {productsLoading ? <h1>Loading....</h1>:<EditProductBasicDetails particularproduct={particularproduct} productsLoading={productsLoading} appErr={appErr} serverErr={serverErr} />
}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default EditProductPage;
