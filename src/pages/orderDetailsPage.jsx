import { useEffect, useState } from "react";
import logo from "../assets/imgs/theme/logo.png";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { fetchOrder } from "../redux/actions/orders/ordersActions";
import axios from "axios";
import { baseUrl } from "../utils/baseUrl";
import LoaderImg from "../components/loading/loading";
import Header from "../components/Header";
import { CgEnter } from "react-icons/cg";


const Invoice = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrder(id));
  }, [id, dispatch]);

  const orderData = useSelector(state => state.orders);
  const { orderdata, loading, appErr, serverErr } = orderData;
console.log(orderdata)
  // Ensure we have order data before accessing properties
  const currentDate = orderdata && orderdata.orderDetails ? new Date(orderdata.orderDetails.Date) : new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US');

  return (
    <>
   {/* <Header/> */}
    <div>
      <div className="invoice invoice-content invoice-5">
        <div className="back-top-home hover-up mt-0 ml-30">
      
        </div>
        {loading ? <LoaderImg /> : (
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="invoice-inner">
                  <div className="invoice-info" id="invoice_wrapper">
                    <div className="invoice-header">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="logo d-flex align-items-center">
                            <Link className="mr-20" to="/">
                              <img src={logo} alt="logo" width={"250px"} />
                            </Link>
                            <div className="text">
                              <strong className="text-brand">Tags Footwear</strong> <br />
                              1368, D-5, Narayana Shasthri Road, Devaraj Mohalla, Mysore - 570001<br/>
                              GSTN:  29AAUFT8008P1Z2
                            </div>
                            
                          </div>
                        </div>
                        <div className="col-md-6 text-end">
                          <h2>INVOICE</h2>
                          <h6>
                          ID Number: <span className="text-brand">{orderdata && orderdata.orderNumber}</span>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="invoice-center">
                      <div className="table-responsive">
                        <table className="table table-striped invoice-table">
                          <thead className="bg-active">
                            <tr>
                              <th>Item</th>
                              <th className="text-center">Unit Price</th>
                              <th className="text-right">Tax (per quantity)</th>
                              <th className="text-center">Color</th>
                              <th className="text-center">Quantity</th>
                              <th className="text-center">Size</th>
                              <th className="text-right">Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                          {orderdata && orderdata.orderDetails && orderdata.orderDetails.productDetails && orderdata.orderDetails.productDetails.map((item, index) => (
                              <tr key={index}>
                                <td>
                                  <div className="item-desc-1" style={{color:"black"}}>
                                    <span>{item.product.title}</span>
                                    <p>SKUID: {item.product.productName}</p>
                                  </div>
                                </td>
                                <td className="text-center" style={{color:"black"}}><span style={{ fontSize: 15,color:"black" }}>&#8377;</span> {((item.price - (item.price <= 1000 ? (item.price * 0.12) : (item.price * 0.18))).toFixed(2))}</td>
                                <td className="text-center" style={{color:"black"}}>&#8377;  {item.price <= 1000 ? ((item.price * 0.12).toFixed(2)) : ((item.price * 0.18).toFixed(2))}</td>
                                <td className="text-center" style={{color:"black"}}>{item.color}</td>
                                <td className="text-center" style={{color:"black"}}>{item.quantity}</td>
                                <td className="text-center" style={{color:"black"}}>{item.size}</td>
                               
                                <td className="text-right"  style={{color:"black"}}>&#8377;    {((item.price - (item.price <= 1000 ? (item.price * 0.12) : (item.price * 0.18))).toFixed(2))}
                                </td>
                              </tr>
                            ))}
                           {orderdata && orderdata.orderDetails && orderdata.orderDetails.CGST >0 && (
                              <tr>
                                <td colSpan="6" className="text-end f-w-600"  style={{color:"black"}}>IGST</td>
                                <td className="text-right"  style={{color:"black"}}>&#8377;{(orderdata.orderDetails.CGST.toFixed(2))}</td>
                              </tr>
                            )}
                            {orderdata && orderdata.orderDetails && orderdata.orderDetails.SGST >0 && (
                              <tr>
                                <td colSpan="6" className="text-end f-w-600">SGST</td>
                                <td className="text-right">&#8377;{(orderdata.orderDetails.SGST.toFixed(0))}</td>
                              </tr>
                            )}
                            {orderdata && orderdata.orderDetails && (
                              <tr>
                                <td colSpan="6" className="text-end f-w-600" style={{color:"black"}} >SubTotal</td>
                                <td className="text-right"  style={{color:"black"}}>&#8377;{(orderdata.orderDetails.subtotal).toFixed(2)}</td>
                              </tr>
                            )}
                          </tbody>
                        </table>

                      </div>
                    </div>
                    <div className="invoice-bottom pb-80">
                      <div className="row">
                        <div className="col-md-6">
                          <h6 className="mb-15">Invoice Info</h6>
                          <p className="font-sm">
<strong>Issue date:</strong> {formattedDate}   
                         <br />
                         {orderdata && orderdata.orderDetails && orderdata.orderDetails.billingDetails && (
                              <>
                                <strong>Invoice To:</strong> {orderdata.orderDetails.billingDetails.fname} {orderdata.orderDetails.billingDetails.lname}
                                <br />
                                <strong>Shipping Address:</strong> {orderdata.orderDetails.billingDetails.billing_address}
                                <br />
                                {orderdata.orderDetails.billingDetails.billing_address2 && <>{orderdata.orderDetails.billingDetails.billing_address2}<br /></>}
                                {orderdata.orderDetails.billingDetails.city && <>{orderdata.orderDetails.billingDetails.city}<br /></>}
                                {orderdata.orderDetails.billingDetails.phone && <>{orderdata.orderDetails.billingDetails.phone}<br /></>}
                                {orderdata.orderDetails.billingDetails.state && <>{orderdata.orderDetails.billingDetails.state}<br /></>}
                                {orderdata.orderDetails.billingDetails.zipcode && <>{orderdata.orderDetails.billingDetails.zipcode}<br /></>}
                              </>
                            )}
                          </p>
                        </div>
                        <div className="col-md-6 text-end">
                          <h6 className="mb-15">Total Amount</h6>
                          <h3 className="mt-0 mb-0 text-brand">&#8377;{(orderdata && orderdata.orderDetails && orderdata.orderDetails.subtotal.toFixed(2))}</h3>
                          <p className="mb-0 text-muted">Taxes Included</p>
                        </div>
                      </div>
                      <div className="row text-center">
                        <div className="hr mt-30 mb-30"></div>
                        <p className="mb-0 text-muted">
                          <strong>Note:</strong> This is a computer-generated receipt and does not require a physical signature.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="invoice-btn-section clearfix d-print-none">
                    <a href="javascript:window.print()" className="btn btn-lg btn-custom btn-print hover-up">
                      <img src="assets/imgs/theme/icons/icon-print.svg" alt="" /> Print
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Invoice;
