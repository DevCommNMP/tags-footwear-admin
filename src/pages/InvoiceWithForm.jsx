import React, { useState } from "react";
import Logo from "../assets/imgs/theme/logo.png";
import "./invoice.css";

const Invoice = () => {
  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: "#1970191",
    invoiceDate: "31/02/2024",
    invoiceTo: {
      name: "National Marketing Projects",
      address: "205 North Michigan Avenue, Suite 810\nChicago, 60601, USA",
      phone: "(+123) 456-7890",
      email: "example@email.com",
    },
    billTo: {
      name: "National Marketing Projects",
      address: "205 North Michigan Avenue, Suite 810\nChicago, 60601, USA",
      phone: "(+123) 456-7890",
      email: "example@email.com",
    },
    items: [
      {
        description: "Field Roast Chao Cheese Creamy Original",
        sku: "FWM15VKT",
        unitPrice: "$10.99",
        quantity: 1,
        amount: "$10.99",
      },
      {
        description: "Blue Diamond Almonds Lightly Salted",
        sku: "FWM15VKT",
        unitPrice: "$20.00",
        quantity: 3,
        amount: "$60.00",
      },
      {
        description: "Fresh Organic Mustard Leaves Bell Pepper",
        sku: "KVM15VK",
        unitPrice: "$640.00",
        quantity: 1,
        amount: "$640.00",
      },
      {
        description: "All Natural Italian-Style Chicken Meatballs",
        sku: "98HFG",
        unitPrice: "$240.00",
        quantity: 1,
        amount: "$240.00",
      },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoiceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleItemChange = (index, field, value) => {
    setInvoiceData((prevData) => ({
      ...prevData,
      items: prevData.items.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      ),
    }));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 print-hide">
          <input
            type="text"
            name="invoiceNumber"
            value={invoiceData.invoiceNumber}
            onChange={handleChange}
          />
          <input
            type="text"
            name="invoiceDate"
            value={invoiceData.invoiceDate}
            onChange={handleChange}
          />
          {/* Add input fields for other invoice details */}
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-lg-12">
              <div className="invoice-inner">
                <br />
                <br />
                <div
                  size="A4"
                  className="invoice-info"
                  id="invoice_wrapper"
                  style={{ marginTop: "100px !important" }}
                >
                  <div className="invoice-header">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="invoice-name">
                          <div className="logo">
                            <a href="/">
                              <img src={Logo} alt="logo" height={70} />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6  text-end">
                        <div className="invoice-numb">
                          <h4 className="invoice-header-1 mb-10 mt-20">
                            Invoice No:{" "}
                            <span className="text-heading">
                              {invoiceData.invoiceNumber}
                            </span>
                          </h4>
                          <h6>
                            Invoice Date:{" "}
                            <span className="text-heading">
                              {invoiceData.invoiceDate}
                            </span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="invoice-top">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="invoice-number">
                          <h4 className="invoice-title-1 mb-10">Invoice To</h4>
                          <p className="invoice-addr-1">
                            <strong>{invoiceData.invoiceTo.name}</strong>{" "}
                            <br />
                            {invoiceData.invoiceTo.address}
                            <br />
                            <abbr title="Phone">Phone:</abbr>{" "}
                            {invoiceData.invoiceTo.phone}
                            <br />
                            <abbr title="Email">Email: </abbr>
                            {invoiceData.invoiceTo.email}
                            <br />
                          </p>
                        </div>
                      </div>
                      <div
                        className="col-lg-6 col-md-6"
                        style={{ textAlign: "end" }}
                      >
                        <div className="invoice-number">
                          <h4 className="invoice-title-1 mb-10">Bill To</h4>
                          <p className="invoice-addr-1">
                            <strong>{invoiceData.billTo.name}</strong>{" "}
                            <br />
                            {invoiceData.billTo.address}
                            <br />
                            <abbr title="Phone">Phone:</abbr>{" "}
                            {invoiceData.billTo.phone}
                            <br />
                            <abbr title="Email">Email: </abbr>
                            {invoiceData.billTo.email}
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="invoice-center">
                    <div className="table-responsive">
                      <table className="table table-striped invoice-table">
                        <thead className="bg-active">
                          <tr>
                            <th>Item Description</th>
                            <th className="text-center">Unit Price</th>
                            <th className="text-center">Quantity</th>
                            <th className="text-right">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          {invoiceData.items.map((item, index) => (
                            <tr key={index}>
                              <td>
                                <input
                                  type="text"
                                  value={item.description}
                                  onChange={(e) =>
                                    handleItemChange(
                                      index,
                                      "description",
                                      e.target.value
                                    )
                                  }
                                />
                                <br />
                                <small>SKU: {item.sku}</small>
                              </td>
                              <td className="text-center">
                                <input
                                  type="text"
                                  value={item.unitPrice}
                                  onChange={(e) =>
                                    handleItemChange(
                                      index,
                                      "unitPrice",
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                              <td className="text-center">
                                <input
                                  type="text"
                                  value={item.quantity}
                                  onChange={(e) =>
                                    handleItemChange(
                                      index,
                                      "quantity",
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                              <td className="text-right">
                                <input
                                  type="text"
                                  value={item.amount}
                                  onChange={(e) =>
                                    handleItemChange(
                                      index,
                                      "amount",
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* Rest of the invoice content */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
