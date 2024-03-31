const ProductShippingDetails = () => {
  return (
    <div>
      <div className="card mb-4">
        <div className="card-header">
          <h4>Shipping</h4>
        </div>
        <div className="card-body">
          <form>
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-4">
                  <label htmlFor="product_name" className="form-label">
                    Width
                  </label>
                  <input
                    type="text"
                    placeholder="inch"
                    className="form-control"
                    id="product_name"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-4">
                  <label htmlFor="product_name" className="form-label">
                    Height
                  </label>
                  <input
                    type="text"
                    placeholder="inch"
                    className="form-control"
                    id="product_name"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="product_name" className="form-label">
                Weight
              </label>
              <input
                type="text"
                placeholder="gam"
                className="form-control"
                id="product_name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="product_name" className="form-label">
                Shipping fees
              </label>
              <input
                type="text"
                placeholder="$"
                className="form-control"
                id="product_name"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductShippingDetails;
