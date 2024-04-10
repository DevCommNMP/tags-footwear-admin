import Aside from "../components/Aside";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BasicProductDetails from "../components/ProductBasicDetails";
import { Link } from "react-router-dom";
import MyDropzone from "../components/myDropzone";

const AddCategoryPage = () => {
  return (
    <>
      <div className="screen-overlay"></div>
      <Aside />
      <main className="main-wrap">
        <Header />
        <section className="content-main">
          <div className="row">
            <div className="col-9 m-auto">
              <div className="content-header">
                <h2 className="content-title">Add New Category</h2>
              </div>
            </div>
            <div className="col-lg-9 m-auto">
              <div className="card mb-4">
                <div className="card-header">
                  <h4>Category</h4>
                </div>
                <div className="card-body">
                  <div className="container mt-4">
                    <div className="row">
                      <div className="mb-4 col-12">
                        <label htmlFor="title" className="form-label">
                          Category Name:
                        </label>
                        <input
                          type="text"
                          id="title"
                          name="title"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="mb-4 col-12">
                        <label htmlFor="title" className="form-label">
                          Category Image:
                        </label>
                        <MyDropzone />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Card */}
              <div className="card mb-4">
                <div className="card-header">
                  <h4>Subcategory</h4>
                </div>
                <div className="card-body">
                  <form className="container mt-4">
                    <div className="row">
                      <div className="mb-4 col-12">
                        <label htmlFor="title" className="form-label">
                          Subcategory Name:
                        </label>
                        <input
                          type="text"
                          id="title"
                          name="title"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/* Third Card */}
              <div className="card mb-4">
                <div className="card-header">
                  <h4>Footwear Type</h4>
                </div>
                <div className="card-body">
                  <form className="container mt-4">
                    <div className="row">
                      <div className="mb-4 col-12">
                        <label htmlFor="title" className="form-label">
                          Footwear Type:
                        </label>
                        <input
                          type="text"
                          id="title"
                          name="title"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default AddCategoryPage;
