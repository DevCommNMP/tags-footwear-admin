import Aside from "../components/Aside";
import CardHeader from "../components/CardHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MyChartsComponent from "../components/charts/MyChartsComponent";

import user1 from "../assets/imgs/people/avatar-1.png";
import user2 from "../assets/imgs/people/avatar-2.png";
import user3 from "../assets/imgs/people/avatar-3.png";

const HomePage = () => {
  return (
    <>
      <div className="screen-overlay"></div>
      <Aside />
      <main className="main-wrap">
        <Header />
        <section className="content-main">
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
                    <h6 className="mb-1 card-title">Revenue</h6>
                    <span>$13,456.5</span>
                    <span className="text-sm"> Shipping fees are not included </span>
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
                    <span>53.668</span>
                    <span className="text-sm"> Excluding orders in transit </span>
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
                    <span>9.856</span>
                    <span className="text-sm"> In 19 Categories </span>
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
                    <h6 className="mb-1 card-title">Monthly Earning</h6>
                    <span>$6,982</span>
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
                            <input className="form-check-input" type="checkbox" id="transactionCheck01" />
                            <label className="form-check-label" htmlFor="transactionCheck01"></label>
                          </div>
                        </th>
                        <th className="align-middle" scope="col">
                          Order ID
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
                      <tr>
                        <td className="text-center">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="transactionCheck02" />
                            <label className="form-check-label" htmlFor="transactionCheck02"></label>
                          </div>
                        </td>
                        <td>
                          <a href="#" className="fw-bold">
                            #SK2540
                          </a>
                        </td>
                        <td>Neal Matthews</td>
                        <td>07 Oct, 2021</td>
                        <td>$400</td>
                        <td>
                          <span className="badge badge-pill badge-soft-success">Paid</span>
                        </td>
                        <td>
                          <i className="material-icons md-payment font-xxl text-muted mr-5"></i> Mastercard
                        </td>
                        <td>
                          <a href="#" className="btn btn-xs">
                            {" "}
                            View details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="transactionCheck03" />
                            <label className="form-check-label" htmlFor="transactionCheck03"></label>
                          </div>
                        </td>
                        <td>
                          <a href="#" className="fw-bold">
                            #SK2541
                          </a>
                        </td>
                        <td>Jamal Burnett</td>
                        <td>07 Oct, 2021</td>
                        <td>$380</td>
                        <td>
                          <span className="badge badge-pill badge-soft-danger">Chargeback</span>
                        </td>
                        <td>
                          <i className="material-icons md-payment font-xxl text-muted mr-5"></i> Visa
                        </td>
                        <td>
                          <a href="#" className="btn btn-xs">
                            {" "}
                            View details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="transactionCheck04" />
                            <label className="form-check-label" htmlFor="transactionCheck04"></label>
                          </div>
                        </td>
                        <td>
                          <a href="#" className="fw-bold">
                            #SK2542
                          </a>
                        </td>
                        <td>Juan Mitchell</td>
                        <td>06 Oct, 2021</td>
                        <td>$384</td>
                        <td>
                          <span className="badge badge-pill badge-soft-success">Paid</span>
                        </td>
                        <td>
                          <i className="material-icons md-payment font-xxl text-muted mr-5"></i> Paypal
                        </td>
                        <td>
                          <a href="#" className="btn btn-xs">
                            {" "}
                            View details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="transactionCheck05" />
                            <label className="form-check-label" htmlFor="transactionCheck05"></label>
                          </div>
                        </td>
                        <td>
                          <a href="#" className="fw-bold">
                            #SK2543
                          </a>
                        </td>
                        <td>Barry Dick</td>
                        <td>05 Oct, 2021</td>
                        <td>$412</td>
                        <td>
                          <span className="badge badge-pill badge-soft-success">Paid</span>
                        </td>
                        <td>
                          <i className="material-icons md-payment font-xxl text-muted mr-5"></i> Mastercard
                        </td>
                        <td>
                          <a href="#" className="btn btn-xs">
                            {" "}
                            View details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="transactionCheck06" />
                            <label className="form-check-label" htmlFor="transactionCheck06"></label>
                          </div>
                        </td>
                        <td>
                          <a href="#" className="fw-bold">
                            #SK2544
                          </a>
                        </td>
                        <td>Ronald Taylor</td>
                        <td>04 Oct, 2021</td>
                        <td>$404</td>
                        <td>
                          <span className="badge badge-pill badge-soft-warning">Refund</span>
                        </td>
                        <td>
                          <i className="material-icons md-payment font-xxl text-muted mr-5"></i> Visa
                        </td>
                        <td>
                          <a href="#" className="btn btn-xs">
                            {" "}
                            View details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="transactionCheck07" />
                            <label className="form-check-label" htmlFor="transactionCheck07"></label>
                          </div>
                        </td>
                        <td>
                          <a href="#" className="fw-bold">
                            #SK2545
                          </a>
                        </td>
                        <td>Jacob Hunter</td>
                        <td>04 Oct, 2021</td>
                        <td>$392</td>
                        <td>
                          <span className="badge badge-pill badge-soft-success">Paid</span>
                        </td>
                        <td>
                          <i className="material-icons md-payment font-xxl text-muted mr-5"></i> Paypal
                        </td>
                        <td>
                          <a href="#" className="btn btn-xs">
                            {" "}
                            View details
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-8 col-lg-12">
              <div className="card mb-4">
                <article className="card-body">
                  <h5 className="card-title">Sale statistics</h5>
                  {/* <canvas id="myChart" height="120px"></canvas> */}
                  <MyChartsComponent />
                </article>
              </div>
              <div className="row">
                <div className="col-lg-5">
                  <div className="card mb-4">
                    <article className="card-body">
                      <h5 className="card-title">New Members</h5>
                      <div className="new-member-list">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                          <div className="d-flex align-items-center">
                            <img src={user1} alt="" className="avatar" />
                            <div>
                              <h6>Patric Adams</h6>
                              <p className="text-muted font-xs">Sanfrancisco</p>
                            </div>
                          </div>
                          <a href="#" className="btn btn-xs">
                            <i className="material-icons md-add"></i> Add
                          </a>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-4">
                          <div className="d-flex align-items-center">
                            <img src={user2} alt="" className="avatar" />
                            <div>
                              <h6>Dilan Specter</h6>
                              <p className="text-muted font-xs">Sanfrancisco</p>
                            </div>
                          </div>
                          <a href="#" className="btn btn-xs">
                            <i className="material-icons md-add"></i> Add
                          </a>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-4">
                          <div className="d-flex align-items-center">
                            <img src={user3} alt="" className="avatar" />
                            <div>
                              <h6>Tomas Baker</h6>
                              <p className="text-muted font-xs">Sanfrancisco</p>
                            </div>
                          </div>
                          <a href="#" className="btn btn-xs">
                            <i className="material-icons md-add"></i> Add
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="card mb-4">
                    <article className="card-body">
                      <h5 className="card-title">Recent activities</h5>
                      <ul className="verti-timeline list-unstyled font-sm">
                        <li className="event-list">
                          <div className="event-timeline-dot">
                            <i className="material-icons md-play_circle_outline font-xxl"></i>
                          </div>
                          <div className="media">
                            <div className="me-3">
                              <h6>
                                <span>Today</span> <i className="material-icons md-trending_flat text-brand ml-15 d-inline-block"></i>
                              </h6>
                            </div>
                            <div className="media-body">
                              <div>Lorem ipsum dolor sit amet consectetur</div>
                            </div>
                          </div>
                        </li>
                        <li className="event-list active">
                          <div className="event-timeline-dot">
                            <i className="material-icons md-play_circle_outline font-xxl animation-fade-right"></i>
                          </div>
                          <div className="media">
                            <div className="me-3">
                              <h6>
                                <span>17 May</span> <i className="material-icons md-trending_flat text-brand ml-15 d-inline-block"></i>
                              </h6>
                            </div>
                            <div className="media-body">
                              <div>Debitis nesciunt voluptatum dicta reprehenderit</div>
                            </div>
                          </div>
                        </li>
                        <li className="event-list">
                          <div className="event-timeline-dot">
                            <i className="material-icons md-play_circle_outline font-xxl"></i>
                          </div>
                          <div className="media">
                            <div className="me-3">
                              <h6>
                                <span>13 May</span> <i className="material-icons md-trending_flat text-brand ml-15 d-inline-block"></i>
                              </h6>
                            </div>
                            <div className="media-body">
                              <div>Accusamus voluptatibus voluptas.</div>
                            </div>
                          </div>
                        </li>
                        <li className="event-list">
                          <div className="event-timeline-dot">
                            <i className="material-icons md-play_circle_outline font-xxl"></i>
                          </div>
                          <div className="media">
                            <div className="me-3">
                              <h6>
                                <span>05 April</span> <i className="material-icons md-trending_flat text-brand ml-15 d-inline-block"></i>
                              </h6>
                            </div>
                            <div className="media-body">
                              <div>At vero eos et accusamus et iusto odio dignissi</div>
                            </div>
                          </div>
                        </li>
                        <li className="event-list">
                          <div className="event-timeline-dot">
                            <i className="material-icons md-play_circle_outline font-xxl"></i>
                          </div>
                          <div className="media">
                            <div className="me-3">
                              <h6>
                                <span>26 Mar</span> <i className="material-icons md-trending_flat text-brand ml-15 d-inline-block"></i>
                              </h6>
                            </div>
                            <div className="media-body">
                              <div>Responded to need “Volunteer Activities</div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-12">
              <div className="card mb-4">
                <article className="card-body">
                  <h5 className="card-title">Revenue Base on Area</h5>
                  {/* <canvas id="myChart2" height="217"></canvas> */}
                </article>
              </div>
              <div className="card mb-4">
                <article className="card-body">
                  <h5 className="card-title">Marketing Chanel</h5>
                  <span className="text-muted font-xs">Facebook</span>
                  <div className="progress mb-3">
                    <div className="progress-bar" role="progressbar" style={{ width: "15%" }}>
                      15%
                    </div>
                  </div>
                  <span className="text-muted font-xs">Instagram</span>
                  <div className="progress mb-3">
                    <div className="progress-bar" role="progressbar" style={{ width: "65%" }}>
                      65%
                    </div>
                  </div>
                  <span className="text-muted font-xs">Google</span>
                  <div className="progress mb-3">
                    <div className="progress-bar" role="progressbar" style={{ width: "51%" }}>
                      51%
                    </div>
                  </div>
                  <span className="text-muted font-xs">Twitter</span>
                  <div className="progress mb-3">
                    <div className="progress-bar" role="progressbar" style={{ width: "80%" }}>
                      80%
                    </div>
                  </div>
                  <span className="text-muted font-xs">Other</span>
                  <div className="progress mb-3">
                    <div className="progress-bar" role="progressbar" style={{ width: "80%" }}>
                      80%
                    </div>
                  </div>
                </article>
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
        </section>
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
