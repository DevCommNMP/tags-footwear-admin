import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchAllProductsAction } from "../redux/actions/product/productActions";
import {
  fetchAllsubCategories,
  fetchAllFootrwearType,
} from "../redux/actions/categories/allCategoriesActions";
import { Link, Navigate } from "react-router-dom";

const capitalizeFirstCharacter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const BasicProductDetails = () => {
  const dispatch = useDispatch();

  const storeData = useSelector((store) => store.categories);
  const { categoriesData, footwearTypeData, loading, appErr, serverErr } =
    storeData;

  useEffect(() => {
    dispatch(fetchAllsubCategories());
    dispatch(fetchAllFootrwearType());
  }, [dispatch]);
  // console.log(footwearTypeData)

  const standardColors = ["red", "blue", "green", "yellow", "orange"];

  const [formData, setFormData] = useState({
    title: "",
    skewId: "",
    tag: "",
    promotionalPrice: "",
    description: "",
    sizesAvailable: [{ size: "", quantity: 0 }],
    colorsAvailable: [],
    gender: "Unisex",
    price: 0,
    category: "",
    footwearType: "",
    reviews: [],
    selectedTag: "", // Selected tag
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSizeChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSizes = [...formData.sizesAvailable];
    updatedSizes[index][name] = value === "" ? "" : parseInt(value);
    setFormData({
      ...formData,
      sizesAvailable: updatedSizes,
    });
  };

  const handleColorChange = (e) => {
    const { value, checked } = e.target;
    let updatedColors;
    if (checked) {
      updatedColors = [...formData.colorsAvailable, value];
    } else {
      updatedColors = formData.colorsAvailable.filter(
        (color) => color !== value
      );
    }
    setFormData({
      ...formData,
      colorsAvailable: updatedColors,
    });
  };

  const handleAddSize = () => {
    setFormData({
      ...formData,
      sizesAvailable: [...formData.sizesAvailable, { size: "", quantity: 0 }],
    });
  };

  const handleRemoveSize = (index) => {
    const updatedSizes = [...formData.sizesAvailable];
    updatedSizes.splice(index, 1);
    setFormData({
      ...formData,
      sizesAvailable: updatedSizes,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};
    let hasErrors = false;

    // Validate required fields
    if (!formData.title) {
      formErrors.title = "Title is required";
      hasErrors = true;
    }
    if (!formData.price) {
      formErrors.price = "Price is required";
      hasErrors = true;
    }
    if (!formData.category) {
      formErrors.category = "Category is required";
      hasErrors = true;
    }
    if (!formData.footwearType) {
      formErrors.footwearType = "Footwear Type is required";
      hasErrors = true;
    }

    // Set errors if any
    if (hasErrors) {
      setErrors(formErrors);
      return;
    } else {
      setErrors({});
      // Handle form submission here, e.g., send data to backend
      console.log(formData);
    }
  };

  // Define function to handle tag change
  const handleTagChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, selectedTag: value });
  };

  return (
    <div>
      <div className="card mb-4">
        <div className="card-header">
          <h4>Basic</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit} className="container mt-4">
            <div className="row">
              <div className="mb-4 col-6">
                <label htmlFor="title" className="form-label">
                  Title:
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.title && (
                  <span style={{ color: "red" }}>{errors.title}</span>
                )}
              </div>

              <div className="mb-4 col-6">
                <label htmlFor="skewId" className="form-label">
                  Product ID:
                </label>
                <input
                  type="text"
                  id="skewId"
                  name="skewId"
                  value={formData.skewId}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="mb-4 col-6">
                <label htmlFor="sizesAvailable" className="form-label">
                  Sizes Available:
                </label>
                {formData.sizesAvailable.map((size, index) => (
                  <div key={index} className="d-flex mb-2">
                    <select
                      name="size"
                      value={size.size}
                      onChange={(e) => handleSizeChange(index, e)}
                      className="form-select me-2"
                    >
                      <option value="">Select Size</option>
                      <option value="36">36</option>
                      <option value="37">37</option>
                      <option value="38">38</option>
                      {/* Add more size options if needed */}
                    </select>
                    <input
                      type="number"
                      name="quantity"
                      value={size.quantity}
                      onChange={(e) => handleSizeChange(index, e)}
                      className="form-control me-2"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveSize(index)}
                      className="btn btn-outline-danger"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleAddSize}
                  className="btn btn-outline-danger"
                >
                  Add Size
                </button>
              </div>

              <div className="mb-4 col-6">
                <label
                  htmlFor="colorsAvailable"
                  className="form-label mb-3 mt-1"
                >
                  Colors Available:
                </label>{" "}
                <br />
                {standardColors.map((color, index) => (
                  <div
                    key={index}
                    className="form-check form-check-inline d-inline-block"
                  >
                    <input
                      type="checkbox"
                      id={color}
                      name="colorsAvailable"
                      value={color}
                      checked={formData.colorsAvailable.includes(color)}
                      onChange={handleColorChange}
                      className="form-check-input"
                      style={{
                        fontSize: "large",
                      }}
                    />
                    <label
                      htmlFor={color}
                      className="form-check-label "
                      style={{
                        backgroundColor: color,
                        padding: "2px 5px",
                        borderRadius: "5px",
                        color: "white",
                        textShadow: `1px 1px 2px #000`,
                      }}
                    >
                      {capitalizeFirstCharacter(color)}
                    </label>
                    {/* <span
                      className="color-indicator"
                      style={{ backgroundColor: color }}
                    ></span> */}
                  </div>
                ))}
              </div>

              <div className="mb-4 col-6">
                <label htmlFor="price" className="form-label">
                  Price:
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.price && (
                  <span style={{ color: "red" }}>{errors.price}</span>
                )}
              </div>

              <div className="mb-4 col-6">
                <label htmlFor="tags" className="form-label">
                  Tags:
                </label>
                <select
                  id="tags"
                  name="tags"
                  value={formData.selectedTag}
                  onChange={handleTagChange}
                  className="form-select"
                >
                  <option value="">Select Tag</option>
                  <option value="new">New</option>
                  <option value="hot">Hot</option>
                  <option value="popular">Popular</option>
                  <option value="trending">Trending</option>
                </select>
              </div>

              <div className="mb-4 col-6">
                <label htmlFor="category" className="form-label">
                  Category Type:
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Select Category</option>
                  {categoriesData.map((item, index) => (
                    <option key={index} value={item._id}>
                      {loading ? "Loading..." : item.subcategoriesName}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <span style={{ color: "red" }}>{errors.category}</span>
                )}
              </div>
              <div className="mb-4 col-6">
                <label htmlFor="footwearType" className="form-label">
                  Footwear Type:
                </label>
                <select
                  id="footwearType"
                  name="footwearType"
                  value={formData.footwearType}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Select Category</option>
                  {footwearTypeData.map((item, index) => (
                    <option key={index} value={item._id}>
                      {loading ? "Loading..." : item.subcategoryTypeName}
                    </option>
                  ))}
                </select>
                {errors.footwearType && (
                  <span style={{ color: "red" }}>{errors.footwearType}</span>
                )}
              </div>
              <div className="card mb-4">
                <div className="card-header">
                  <h4>Coupon Code</h4>
                </div>
                <div className="card-body">
                  <div className="row gx-2">
                    <div className="mb-4">
                      <label htmlFor="product_name" className="form-label">
                        Enter coupon code for this product
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">

              <div className="ml-auto col">
                  <button
                    type="submit"
                    className="btn btn-outline-danger ml-auto m-auto"
                  >
                    Validate
                  </button>
              </div>
              <div className="ml-auto col">
                <Link  to='/add-product-images'>
                  <button
                    type="submit"
                    className="btn btn-primary ml-auto"
                  >
                    Next Page
                  </button>
                </Link>
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
