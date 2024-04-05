import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProductsAction } from "../redux/actions/product/productActions";

const BasicProductDetails = () => {
  const dispatch = useDispatch();

  const storeData = useSelector((store) => store.products);
  const { products, productsLoading, appErr, serverErr } = storeData;

  useEffect(() => {
    dispatch(fetchAllProductsAction());
  }, [dispatch]);

  const standardColors = ["red", "blue", "green", "yellow", "orange"];

  const [formData, setFormData] = useState({
    title: "",
    sizesAvailable: [{ size: "", quantity: 0 }],
    colorsAvailable: [],
    gender: "Unisex",
    price: 0,
    category: "",
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
    const { value } = e.target;
    setFormData({
      ...formData,
      colorsAvailable: value,
    });
  };

  const handleAddSize = () => {
    setFormData({
      ...formData,
      sizesAvailable: [...formData.sizesAvailable, { size: "", quantity: 0 }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate sizes
    const sizeSet = new Set();
    let sizeError = false;
    formData.sizesAvailable.forEach((size) => {
      if (sizeSet.has(size.size)) {
        sizeError = true;
      } else {
        sizeSet.add(size.size);
      }
    });

    if (sizeError) {
      setErrors({ size: "Same size cannot be selected twice" });
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
            <div className="mb-4">
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
            </div>

            <div className="mb-4">
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
                    className="form-control"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddSize}
                className="btn btn-primary"
              >
                Add Size
              </button>
              {errors.size && (
                <span style={{ color: "red" }}>{errors.size}</span>
              )}
            </div>

            <div className="mb-4">
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
                <option value="Tag 1">Tag 1</option>
                <option value="Tag 2">Tag 2</option>
                {/* Add more tag options if needed */}
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="colorsAvailable" className="form-label">
                Colors Available:
              </label>
              {standardColors.map((color, index) => (
                <div key={index} className="form-check form-check-inline">
                  <input
                    type="checkbox"
                    id={color}
                    name="colorsAvailable"
                    value={color}
                    onChange={handleColorChange}
                    className="form-check-input"
                  />
                  <label htmlFor={color} className="form-check-label">
                    {color}
                  </label>
                  <span
                    className="color-indicator"
                    style={{ backgroundColor: color }}
                  ></span>
                </div>
              ))}
            </div>

            <div className="mb-4">
              <label htmlFor="gender" className="form-label">
                Gender:
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="form-select"
              >
                <option value="Unisex">Unisex</option>
                {/* Add other gender options here */}
              </select>
            </div>

            <div className="mb-4">
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
            </div>

            <div className="mb-4">
              <label htmlFor="category" className="form-label">
                Category:
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select Category</option>
                {/* Add category options here */}
              </select>
            </div>

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
