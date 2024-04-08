import "./invoice.css";

const Invoice = () => {
  return (
    <page size="A4" className="theme-color2 bg-light">
      <section className="theme-invoice-1 section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 m-auto">
              <div className="invoice-wrapper">
                <div className="invoice-header">
                  <div className="upper-icon">
                    <img
                      src="assets/images/invoice.svg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="row header-content">
                    <div className="col-md-6">
                      <img
                        src="assets/images/logo.png"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="mt-md-4 mt-3">
                        <h4 className="mb-2">
                          Multikart Demo Store india - 363512
                        </h4>
                        <h4 className="mb-0">support@multikart.com</h4>
                      </div>
                    </div>
                    <div className="col-md-6 text-md-end mt-md-0 mt-4">
                      <h2>invoice</h2>
                      <div className="mt-md-4 mt-3">
                        <h4 className="mb-2">2664 Tail Ends Road, ORADELL</h4>
                        <h4 className="mb-0">New Jersey, 07649</h4>
                      </div>
                    </div>
                  </div>
                  <div className="detail-bottom">
                    <ul>
                      <li>
                        <span>issue date :</span> <br />
                        <h4> 20 march, 2024</h4>
                      </li>
                      <li>
                        <span>invoice no :</span> <br />
                        <h4> 908452</h4>
                      </li>
                      <li>
                        <span>email :</span>
                        <h4> whatifemailislong@gmail.com</h4> <br />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="invoice-body table-responsive-md">
                  <table className="table table-borderless mb-0">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">description</th>
                        <th scope="col">price</th>
                        <th scope="col">hrs.</th>
                        <th scope="col">total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Logo Designing</td>
                        <td>$50</td>
                        <td>2</td>
                        <td>$100</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>website & banner design</td>
                        <td>$30</td>
                        <td>3</td>
                        <td>$90</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>frontend development</td>
                        <td>$95</td>
                        <td>1</td>
                        <td>$95</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>backend development</td>
                        <td>$95</td>
                        <td>1</td>
                        <td>$95</td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>SEO, Deigital marketing</td>
                        <td>$95</td>
                        <td>1</td>
                        <td>$95</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="2"></td>
                        <td className="font-bold text-dark" colSpan="2">
                          GRAND TOTAL
                        </td>
                        <td className="font-bold text-theme">$325.00</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="invoice-footer text-end">
                  <div className="authorise-sign">
                    <img
                      src="assets/images/sign.png"
                      className="img-fluid"
                      alt="sing"
                    />
                    <span className="line"></span>
                    <h6>Authorised Sign</h6>
                  </div>
                  <div className="buttons">
                    <a
                      href="#"
                      className="btn btn-solid-default rounded-2 me-2"
                      onClick="window.print();"
                    >
                      export as PDF
                    </a>
                    <a
                      href="#"
                      className="btn btn-solid-dark rounded-2"
                      onClick="window.print();"
                    >
                      print
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </page>
  );
};

export default Invoice;
