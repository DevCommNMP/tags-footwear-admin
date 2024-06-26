import { useEffect, useState } from "react";
import Logo from "../assets/imgs/theme/logo.png";
import "./invoice.css";
import { useNavigate } from "react-router-dom/dist";
import Header from "../components/Header";
// import Aside from "../components/Aside"; // Commented as it's not used

const Invoice = () => {
  const [invoiceNumber, setInvoiceNumber] = useState("#1970191");
  const [invoiceDate, setInvoiceDate] = useState("31/02/2024");
  const [invoiceToName, setInvoiceToName] = useState("National Marketing Projects");
  const [invoiceToAddress, setInvoiceToAddress] = useState("205 North Michigan Avenue, Suite 810\nChicago, 60601, USA");
  const [invoiceToPhone, setInvoiceToPhone] = useState("(+123) 456-7890");
  const [invoiceToEmail, setInvoiceToEmail] = useState("example@email.com");
  const [billToName, setBillToName] = useState("National Marketing Projects");
  const [billToAddress, setBillToAddress] = useState("205 North Michigan Avenue, Suite 810\nChicago, 60601, USA");
  const [billToPhone, setBillToPhone] = useState("(+123) 456-7890");
  const [billToEmail, setBillToEmail] = useState("example@email.com");

  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("userData"));
  const token = data?.token ?? null; // Providing a default value for token

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
  }, [token]);

  const [items, setItems] = useState([
    {
      productName: "I am Name of the product",
      description: "I am description",
      unitPrice: "₹10",
      quantity: 2,
      amount: "₹20",
    },
  ]);

  const handleChange = (e) => setInvoiceNumber(e.target.value);
  const handleDateChange = (e) => setInvoiceDate(e.target.value);
  const handleInvoiceToNameChange = (e) => setInvoiceToName(e.target.value);
  const handleInvoiceToAddressChange = (e) => setInvoiceToAddress(e.target.value);
  const handleInvoiceToPhoneChange = (e) => setInvoiceToPhone(e.target.value);
  const handleInvoiceToEmailChange = (e) => setInvoiceToEmail(e.target.value);
  const handleBillToNameChange = (e) => setBillToName(e.target.value);
  const handleBillToAddressChange = (e) => setBillToAddress(e.target.value);
  const handleBillToPhoneChange = (e) => setBillToPhone(e.target.value);
  const handleBillToEmailChange = (e) => setBillToEmail(e.target.value);

  const handleItemChange = (index, key, value) => {
    const updatedItems = [...items];
    updatedItems[index][key] = value;
    setItems(updatedItems);
  };

  const handleAddItem = () => {
    setItems([
      ...items,
      {
        productName: "I am Name of the product",
        description: "I am description",
        unitPrice: "$10",
        quantity: 2,
        gst: 0,
        amount: "$20",
      },
    ]);
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <>
      <Header />
      {/* <Aside/> */}
      <div className="container">
        <div className="row">
          <div className="col-6 print-hide">
            <div className="row">
              <div className="col-12">
                <h4>Invoice Details</h4>
                <div className="row">
                  <div className="col-6">
                    <label htmlFor="">Invoice Number</label>
                    <input type="text" className="col-6 form-control" value={invoiceNumber} onChange={handleChange} />
                  </div>
                  <div className="col-6">
                    <label htmlFor="">Date</label>
                    <input type="text" className="col-6 form-control" value={invoiceDate} onChange={handleDateChange} />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <h4>Sellers detail</h4>
                <label htmlFor="">Name</label>
                <input type="text" className="col-6 form-control" value={invoiceToName} onChange={handleInvoiceToNameChange} />
                <label htmlFor="">Address</label>
                <input type="text" className="col-6 form-control" value={invoiceToAddress} onChange={handleInvoiceToAddressChange} />
                <label htmlFor="">Phone Number</label>
                <input type="text" className="col-6 form-control" value={invoiceToPhone} onChange={handleInvoiceToPhoneChange} />
                <label htmlFor="">Email</label>
                <input type="text" className="col-6 form-control" value={invoiceToEmail} onChange={handleInvoiceToEmailChange} />
              </div>
              <div className="col-6">
                <h4>Buyers detail</h4>
                <label htmlFor="">Name</label>
                <input type="text" className="col-6 form-control" value={billToName} onChange={handleBillToNameChange} />
                <label htmlFor="">Address</label>
                <input type="text" className="col-6 form-control" value={billToAddress} onChange={handleBillToAddressChange} />
                <label htmlFor="">Phone Number</label>
                <input type="text" className="col-6 form-control" value={billToPhone} onChange={handleBillToPhoneChange} />
                <label htmlFor="">Email</label>
                <input type="text" className="col-6 form-control" value={billToEmail} onChange={handleBillToEmailChange} />
              </div>
              <h4>Product Details</h4>
              <div>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Product Description</th>
                      <th>Unit Price</th>
                      <th>Quantity</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={`Product Name${index + 1}`}
                            value={item.productName}
                            onChange={(e) => handleItemChange(index, "productName", e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={`Product Description`}
                            value={item.description}
                            onChange={(e) => handleItemChange(index, "description", e.target.value)}
                          />
                        </td>
                        <td className="col-sm">
                          <input
                            type="text"
                            className="form-control"
                            placeholder={`Unit Price`}
                            value={item.unitPrice}
                            onChange={(e) => handleItemChange(index, "unitPrice", e.target.value)}
                          />
                        </td>
                        <td className="col-sm">
                          <input
                            type="text"
                            className="form-control"
                            placeholder={`Quantity`}
                            value={item.quantity}
                            onChange={(e) => handleItemChange(index, "quantity", e.target.value)}
                          />
                        </td>
                        <td className="col-sm">
                          <input
                            type="text"
                            className="form-control"
                            placeholder={`Amount`}
                            value={item.amount}
                            onChange={(e) => handleItemChange(index, "amount", e.target.value)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="row">
                <div className="col-md-3 mx-auto">
                  <button className="btn btn-outline-secondary" onClick={handleAddItem}>
                    Add Item
                  </button>
                  <button className="btn btn-outline-secondary" onClick={handleRemoveItem}>
                    Remove Item
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="invoice-inner print-area">
              <div size="A5" className="invoice-info " id="invoice_wrapper">
                <div className="invoice-header">
                  <div className="row">
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div className="col-12" style={{ textAlign: "center" }}>
                        <div className="invoice-name">
                          <div className="logo">
                            <a href="/">
                              <img src={Logo} alt="logo" height={80} />
                            </a>
                          </div>
                          <p>1368, D-5, Narayana Shasthri Road, Devaraj Mohalla, Mysore - 570001</p>
                          <hr style={{margin:'0px'}}/>
                          <div
                            className="section-container"
                            style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
                          >
                            <div className="phone">
                              <span title="Phone">Phone:</span> +91 9611 459 290
                            </div>
                            <h3 className="invoice-title">Invoice</h3>
                            <div className="gstin">
                              <span title="Phone">GSTIN : </span> 29AAUFT8008P1Z2
                            </div>
                          </div>
                          <hr style={{margin:'0px'}}/>

                          <div className="invoice-numb" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <span className="invoice-header-1">
                              Invoice No: <span className="text-heading">{invoiceNumber}</span>
                            </span>
                            <span>
                              Invoice Date: <span className="text-heading">{invoiceDate}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr style={{margin:'0px'}}/>

                <div className="invoice-top">
                  <div className="row">
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div className="">
                        <div className="invoice-number">
                          <h4 className="invoice-title-1 mb-10">Invoice To</h4>
                          <p className="invoice-addr-1">
                            <strong>{invoiceToName}</strong> <br />
                            {invoiceToAddress}
                            <br />
                            <abbr title="Phone">Phone:</abbr> {invoiceToPhone}
                            <br />
                            <abbr title="Email">Email:</abbr>
                            {invoiceToEmail}
                            <br />
                          </p>
                        </div>
                      </div>

                      <div style={{ textAlign: "start" }}>
                        <div className="invoice-number">
                          <h4 className="invoice-title-1 mb-10">Bill To</h4>
                          <p className="invoice-addr-1">
                            <strong>{billToName}</strong> <br />
                            <div>{billToAddress}</div>
                            <abbr title="Phone">Phone:</abbr> {billToPhone}
                            <br />
                            <abbr title="Email">Email: </abbr>
                            {billToEmail}
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="invoice-center">
                  <div className="table-responsive">
                    <table className="table invoice-table">
                      <thead className="bg-active">
                        <tr>
                          <th>#</th>
                          <th>Product</th>
                          <th>Unit Price</th>
                          <th>Quantity</th>
                          <th>GST</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map((item, index) => (
                          <tr key={index}>
                            <td>{index + 1}.</td>
                            <td>
                              {item.productName} - {item.description}
                            </td>
                            <td>{item.unitPrice}</td>
                            <td>{item.quantity}</td>
                            <td>{item.gst}</td>
                            <td>{item.amount}</td>
                          </tr>
                        ))}

                        <tr>
                          <td colSpan="5" className="text-end f-w-600">
                            SubTotal
                          </td>
                          <td className="text-right">$1710.99</td>
                        </tr>
                        <tr>
                          <td colSpan="5" className="text-end f-w-600">
                            Tax
                          </td>
                          <td className="text-right">$85.99</td>
                        </tr>
                        <tr>
                          <td colSpan="5" className="text-end f-w-600">
                            Grand Total
                          </td>
                          <td className="text-right f-w-600">$1795.99</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="invoice-bottom">
                  <div className="row">
                    <div className="col-sm-6">
                      <div>
                        <h3 className="invoice-title-1">Important Note</h3>
                        <ul className="important-notes-list-1">
                          <li>All amounts shown on this invoice are in INR</li>

                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-6 col-offsite">
                      <div className="text-end">
                        <p className="mb-0 text-13">Thank you for your business</p>
                        <p>
                          <strong>TAGS Footwear</strong>
                        </p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;
