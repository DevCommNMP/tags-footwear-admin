import Logo from "../assets/imgs/theme/logo.png";
import './invoice.css'

const invoice = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="invoice-inner">
              <br /><br />
              <page size="A4" className="invoice-info" id="invoice_wrapper" style={{marginTop:'100px !important'}} >
                <div className="invoice-header">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="invoice-name">
                        <div className="logo">
                          <a href="/">
                            <img
                              src={Logo}
                              alt="logo"
                              height={70}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6  text-end">
                      <div className="invoice-numb">
                        <h4 className="invoice-header-1 mb-10 mt-20">
                          Invoice No:{" "}
                          <span className="text-heading">#1970191</span>
                        </h4>
                        <h6>
                          Invoice Date:{" "}
                          <span className="text-heading">30 Nov 2024</span>
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
                          <strong>NestMart Inc</strong> <br />
                          205 North Michigan Avenue, Suite 810
                          <br />
                          Chicago, 60601, USA
                          <br />
                          <abbr title="Phone">Phone:</abbr> (+123) 456-7890
                          <br />
                          <abbr title="Email">Email: </abbr>
                          contact@nestmart.com
                          <br />
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6" style={{textAlign:'end'}}>
                      <div className="invoice-number" >
                        <h4 className="invoice-title-1 mb-10">Bill To</h4>
                        <p className="invoice-addr-1">
                          <strong>Webz Poland</strong> <br />
                          Madalinskiego 8<br />
                          71-101 Szczecin, Poland
                          <br />
                          <abbr title="Phone">Phone:</abbr> +48 444 666 3333
                          <br />
                          <abbr title="Email">Email: </abbr>nfo@webz.com.pl
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
                          <th>Item Item</th>
                          <th className="text-center">Unit Price</th>
                          <th className="text-center">Quantity</th>
                          <th className="text-right">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="item-desc-1">
                              <span>
                                Field Roast Chao Cheese Creamy Original
                              </span>{" "}
                              <br />
                              <small>SKU: FWM15VKT</small>
                            </div>
                          </td>
                          <td className="text-center">$10.99</td>
                          <td className="text-center">1</td>
                          <td className="text-right">$10.99</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="item-desc-1">
                              <span>Blue Diamond Almonds Lightly Salted</span>{" "}
                              <br />
                              <small>SKU: FWM15VKT</small>
                            </div>
                          </td>
                          <td className="text-center">$20.00</td>
                          <td className="text-center">3</td>
                          <td className="text-right">$60.00</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="item-desc-1">
                              <span>
                                Fresh Organic Mustard Leaves Bell Pepper
                              </span>{" "}
                              <br />
                              <small>SKU: KVM15VK</small>
                            </div>
                          </td>
                          <td className="text-center">$640.00</td>
                          <td className="text-center">1</td>
                          <td className="text-right">$640.00</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="item-desc-1">
                              <span>
                                All Natural Italian-Style Chicken Meatballs
                              </span>{" "}
                              <br />
                              <small>SKU: 98HFG</small>
                            </div>
                          </td>
                          <td className="text-center">$240.00</td>
                          <td className="text-center">1</td>
                          <td className="text-right">$240.00</td>
                        </tr>
                        <tr>
                          <td colSpan="3" className="text-end f-w-600">
                            SubTotal
                          </td>
                          <td className="text-right">$1710.99</td>
                        </tr>
                        <tr>
                          <td colSpan="3" className="text-end f-w-600">
                            Tax
                          </td>
                          <td className="text-right">$85.99</td>
                        </tr>
                        <tr>
                          <td colSpan="3" className="text-end f-w-600">
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
                          <li>
                            All amounts shown on this invoice are in US dollars
                          </li>
                          <li>
                            finance charge of 1.5% will be made on unpaid
                            balances after 30 days.
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
              </page>
              <div className="invoice-btn-section clearfix d-print-none">
                <a
                  href="javascript:window.print()"
                  className="btn btn-lg btn-custom btn-print hover-up"
                >
                  {" "}
                  <img
                    src="assets/imgs/theme/icons/icon-print.svg"
                    alt=""
                  />{" "}
                  Print{" "}
                </a>
                <a
                  id="invoice_download_btn"
                  className="btn btn-lg btn-custom btn-download hover-up"
                >
                  {" "}
                  <img
                    src="assets/imgs/theme/icons/icon-download.svg"
                    alt=""
                  />{" "}
                  Download{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default invoice;
