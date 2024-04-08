import { useState } from "react";
import Logo from "../assets/imgs/theme/logo.png";
import "./invoice.css";

const Invoice = () => {
  const [invoiceNumber, setInvoiceNumber] = useState("#1970191");
  const [invoiceDate, setInvoiceDate] = useState("31/02/2024");
  const [invoiceToName, setInvoiceToName] = useState(
    "National Marketing Projects"
  );
  const [invoiceToAddress, setInvoiceToAddress] = useState(
    "205 North Michigan Avenue, Suite 810\nChicago, 60601, USA"
  );
  const [invoiceToPhone, setInvoiceToPhone] = useState("(+123) 456-7890");
  const [invoiceToEmail, setInvoiceToEmail] = useState("example@email.com");
  const [billToName, setBillToName] = useState("National Marketing Projects");
  const [billToAddress, setBillToAddress] = useState(
    "205 North Michigan Avenue, Suite 810\nChicago, 60601, USA"
  );
  const [billToPhone, setBillToPhone] = useState("(+123) 456-7890");
  const [billToEmail, setBillToEmail] = useState("example@email.com");

  // State for item numbers, descriptions, prices, quantities, and amounts
  const [items, setItems] = useState([
    {
      number: "",
      description: "Field Roast Chao Cheese Creamy Original",
      price: "$10.99",
      quantity: 1,
      amount: "$10.99",
    },
  ]);

  const handleChange = (e) => setInvoiceNumber(e.target.value);
  const handleDateChange = (e) => setInvoiceDate(e.target.value);
  const handleInvoiceToNameChange = (e) => setInvoiceToName(e.target.value);
  const handleInvoiceToAddressChange = (e) =>
    setInvoiceToAddress(e.target.value);
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
        number: "",
        description: "",
        price: "",
        quantity: 1,
        amount: "",
      },
    ]);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 print-hide">
            <input type="text" value={invoiceNumber} onChange={handleChange} />
            <input
              type="text"
              value={invoiceDate}
              onChange={handleDateChange}
            />
            <input
              type="text"
              value={invoiceToName}
              onChange={handleInvoiceToNameChange}
            />
            <input
              type="text"
              value={invoiceToAddress}
              onChange={handleInvoiceToAddressChange}
            />
            <input
              type="text"
              value={invoiceToPhone}
              onChange={handleInvoiceToPhoneChange}
            />
            <input
              type="text"
              value={invoiceToEmail}
              onChange={handleInvoiceToEmailChange}
            />
            <input
              type="text"
              value={billToName}
              onChange={handleBillToNameChange}
            />
            <input
              type="text"
              value={billToAddress}
              onChange={handleBillToAddressChange}
            />
            <input
              type="text"
              value={billToPhone}
              onChange={handleBillToPhoneChange}
            />
            <input
              type="text"
              value={billToEmail}
              onChange={handleBillToEmailChange}
            />
          </div>
        </div>
      </div>
      {/* Input fields for item details */}
      <div className="container">
        <div className="row mt-4">
          {items.map((item, index) => (
            <div key={index} className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder={`Item ${index + 1} Number`}
                value={item.number}
                onChange={(e) =>
                  handleItemChange(index, "number", e.target.value)
                }
              />
              <input
                type="text"
                className="form-control mt-2"
                placeholder={`Item ${index + 1} Description`}
                value={item.description}
                onChange={(e) =>
                  handleItemChange(index, "description", e.target.value)
                }
              />
              <input
                type="text"
                className="form-control mt-2"
                placeholder={`Item ${index + 1} Price`}
                value={item.price}
                onChange={(e) =>
                  handleItemChange(index, "price", e.target.value)
                }
              />
            </div>
          ))}
          <div className="col-md-3">
            <button className="btn btn-primary" onClick={handleAddItem}>
              Add Item
            </button>
          </div>
        </div>
      </div>
      {/* Table for item details */}
      <div className="container">
        <div className="row mt-4">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table table-striped invoice-table">
                <thead className="bg-active">
                  <tr>
                    <th>Item Number</th>
                    <th>Description</th>
                    <th>Price</th>
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
                          value={item.number}
                          onChange={(e) =>
                            handleItemChange(index, "number", e.target.value)
                          }
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          value={item.description}
                          onChange={(e) =>
                            handleItemChange(
                              index,
                              "description",
                              e.target.value
                            )
                          }
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          value={item.price}
                          onChange={(e) =>
                            handleItemChange(index, "price", e.target.value)
                          }
                        />
                      </td>
                      <td>{item.quantity}</td>
                      <td>{item.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="invoice-bottom">
                <div className="row">
                  <div className="col-sm-6">
                    <div>
                      <h3 className="invoice-title-1">Important Note</h3>
                      <ul className="important-notes-list-1">
                        <li>
                          All amounts shown on this invoice are in US dollars
                        </li>
                        <li>
                          finance charge of 1.5% will be made on unpaid balances
                          after 30 days.
                        </li>
                        <li>Once order done, money can&apos;t refund</li>
                        <li>
                          Delivery might delay due to some external dependency
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6 col-offsite">
                    <div className="text-end">
                      <p className="mb-0 text-13">
                        Thank you for your business
                      </p>
                      <p>
                        <strong>AliThemes JSC</strong>
                      </p>
                      <div className="mobile-social-icon mt-50 print-hide">
                        <h6>Follow Us</h6>
                        <a href="#">
                          <img
                            src="assets/imgs/theme/icons/icon-facebook-white.svg"
                            alt=""
                          />
                        </a>
                        <a href="#">
                          <img
                            src="assets/imgs/theme/icons/icon-twitter-white.svg"
                            alt=""
                          />
                        </a>
                        <a href="#">
                          <img
                            src="assets/imgs/theme/icons/icon-instagram-white.svg"
                            alt=""
                          />
                        </a>
                        <a href="#">
                          <img
                            src="assets/imgs/theme/icons/icon-pinterest-white.svg"
                            alt=""
                          />
                        </a>
                        <a href="#">
                          <img
                            src="assets/imgs/theme/icons/icon-youtube-white.svg"
                            alt=""
                          />
                        </a>
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
