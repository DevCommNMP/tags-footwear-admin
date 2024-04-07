const Invoice = () => {
  return (
    <>
      <div className="container mt-6 mb-7">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-xl-7">
            <div className="card">
              <div className="card-body p-5">
                <h2>Hey Anna,</h2>
                <p className="fs-sm">
                  This is the receipt for a payment of <strong>$312.00</strong>{" "}
                  (USD) you made to Spacial Themes.
                </p>

                <div className="border-top border-gray-200 pt-4 mt-4">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="text-muted mb-2">Payment No.</div>
                      <strong>#88305</strong>
                    </div>
                    <div className="col-md-6 text-md-end">
                      <div className="text-muted mb-2">Payment Date</div>
                      <strong>Feb/09/20</strong>
                    </div>
                  </div>
                </div>

                <div className="border-top border-gray-200 mt-4 py-4">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="text-muted mb-2">Client</div>
                      <strong>John McClane</strong>
                      <p className="fs-sm">
                        989 5th Avenue, New York, 55832
                        <br />
                        <a href="#!" className="text-purple">
                          john@email.com
                        </a>
                      </p>
                    </div>
                    <div className="col-md-6 text-md-end">
                      <div className="text-muted mb-2">Payment To</div>
                      <strong>Themes LLC</strong>
                      <p className="fs-sm">
                        9th Avenue, San Francisco 99383
                        <br />
                        <a href="#!" className="text-purple">
                          themes@email.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <table className="table border-bottom border-gray-200 mt-3">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="fs-sm text-dark text-uppercase-bold-sm px-0"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        className="fs-sm text-dark text-uppercase-bold-sm text-end px-0"
                      >
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-0">Theme customization</td>
                      <td className="text-end px-0">$60.00</td>
                    </tr>
                    <tr>
                      <td className="px-0">Website design</td>
                      <td className="text-end px-0">$80.00</td>
                    </tr>
                  </tbody>
                </table>

                <div className="mt-5">
                  <div className="d-flex justify-content-end">
                    <p className="text-muted me-3">Subtotal:</p>
                    <span>$390.00</span>
                  </div>
                  <div className="d-flex justify-content-end">
                    <p className="text-muted me-3">Discount:</p>
                    <span>-$40.00</span>
                  </div>
                  <div className="d-flex justify-content-end mt-3">
                    <h5 className="me-3">Total:</h5>
                    <h5 className="text-success">$399.99 USD</h5>
                  </div>
                </div>
              </div>
              <a
                href="#!"
                className="btn btn-dark btn-lg card-footer-btn justify-content-center text-uppercase-bold-sm hover-lift-light"
              >
                <span className="svg-icon text-white me-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="512"
                    height="512"
                    viewBox="0 0 512 512"
                  >
                    <title>ionicons-v5-g</title>
                    <path
                      d="M336,208V113a80,80,0,0,0-160,0v95"
                    //   style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
                    ></path>
                    <rect
                      x="96"
                      y="208"
                      width="320"
                      height="272"
                      rx="48"
                      ry="48"
                    //   style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
                    ></rect>
                  </svg>
                </span>
                Pay Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;
