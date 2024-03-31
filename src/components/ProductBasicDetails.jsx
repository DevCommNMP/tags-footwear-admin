const BasicProductDetails = () => {
  return (
    <div>
      <div className="card mb-4">
        <div className="card-header">
          <h4>Basic</h4>
        </div>
        <div className="card-body">
          <form>
            <div className="mb-4">
              <label htmlFor="product_name" className="form-label">
                Product title
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="form-control"
                id="product_name"
              />
            </div>
            <div className="row">
              <div className="col mb-4">
                <label htmlFor="product_name" className="form-label">
                  Product ID
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="form-control"
                  id="product_name"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label">Full description</label>
              <textarea
                placeholder="Type here"
                className="form-control"
                rows="4"
              ></textarea>
            </div>
            <div className="row">
              <div className="col-lg-4  mb-4">
                <label className="form-label">Main Category</label>
                <select className="form-select">
                  <option>Main Cat One</option>
                  <option>Main Cat Two</option>
                  <option>Main Cat Three</option>
                </select>
              </div>
              <div className="col-lg-4  mb-4">
                <label className="form-label">Sub-Category</label>
                <select className="form-select">
                  <option>Sub Cat One</option>
                  <option>Sub Cat Two</option>
                  <option>Sub Cat Three</option>
                </select>
              </div>
              <div className="col-lg-4  mb-4">
                <label className="form-label">Sub-Type</label>
                <select className="form-select">
                  <option>Sub Type One</option>
                  <option>Sub Type Two</option>
                  <option>Sub Type Three</option>
                </select>
              </div>
              <div className="col-lg-6">
                <div className="mb-4">
                  <label className="form-label">Regular price</label>
                  <div className="row gx-2">
                    <input
                      placeholder="$"
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-4">
                  <label className="form-label">Promotional price</label>
                  <input placeholder="$" type="text" className="form-control" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BasicProductDetails;
