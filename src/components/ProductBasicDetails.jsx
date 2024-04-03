import { useState } from 'react';

const BasicProductDetails = () => {
  const [formData, setFormData] = useState({
    title: "",
    productImage: "",
    productName: "",
    brand: "",
    sizesAvailable: [{
      size:"",
      quantity:""
    }],
    colorsAvailable: "",
    description: "",
    gender: "",
    occasion: "",
    countryOfOrigin: "",
    price: "",
    productSubImages: "",
    category: "",
    subcategory: "",
    subcategoryType: "",
    tag: "",
    rating: "",
    reviews: [],
    SellingPrice: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Log JSON object in the console
    console.log(formData);
  };

  return (
    <div>
      <div className="card mb-4">
        <div className="card-header">
          <h4>Basic</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="product_title" className="form-label">
                Product title
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="form-control"
                id="product_title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="product_productImage" className="form-label">
                Product Image
              </label>
              <input
                type="text"
                placeholder="Image URL"
                className="form-control"
                id="product_productImage"
                name="productImage"
                value={formData.productImage}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="product_productName" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="form-control"
                id="product_productName"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="product_brand" className="form-label">
                Brand
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="form-control"
                id="product_brand"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="product_sizes" className="form-label">
                Sizes Available
              </label>
              <input
                type="text"
                placeholder="e.g., 36,37,38"
                className="form-control"
                id="product_sizes"
                name="sizesAvailable" 
                value={formData.sizesAvailable.quantity}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="product_colors" className="form-label">
                Colors Available
              </label>
              <input
                type="text"
                placeholder="e.g., maroon,gold,peach"
                className="form-control"
                id="product_colors"
                name="colorsAvailable"
                value={formData.colorsAvailable}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="product_description" className="form-label">
                Description
              </label>
              <textarea
                placeholder="Type here"
                className="form-control"
                rows="4"
                id="product_description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="product_gender" className="form-label">
                Gender
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="form-control"
                id="product_gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="product_occasion" className="form-label">
                Occasion
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="form-control"
                id="product_occasion"
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="product_country" className="form-label">
                Country of Origin
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="form-control"
                id="product_country"
                name="countryOfOrigin"
                value={formData.countryOfOrigin}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="product_price" className="form-label">
                Price
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="form-control"
                id="product_price"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="product_rating" className="form-label">
                Rating
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="form-control"
                id="product_rating"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="product_SellingPrice" className="form-label">
                Selling Price
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="form-control"
                id="product_SellingPrice"
                name="SellingPrice"
                value={formData.SellingPrice}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="product_productSubImages" className="form-label">
                Product Sub Images
              </label>
              <input
                type="text"
                placeholder="Image URLs (comma-separated)"
                className="form-control"
                id="product_productSubImages"
                name="productSubImages"
                value={formData.productSubImages}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="product_category" className="form-label">
                Category
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="form-control"
                id="product_category"
                name="category"
                value={formData.category}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="product_subcategory" className="form-label">
                Subcategory
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="form-control"
                id="product_subcategory"
                name="subcategory"
                value={formData.subcategory}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="product_subcategoryType" className="form-label">
                Subcategory Type
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="form-control"
                id="product_subcategoryType"
                name="subcategoryType"
                value={formData.subcategoryType}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="product_tag" className="form-label">
                Tag
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="form-control"
                id="product_tag"
                name="tag"
                value={formData.tag}
                onChange={handleChange}
              />
            </div>
            {/* Add input fields for other properties */}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BasicProductDetails;
