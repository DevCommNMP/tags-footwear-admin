import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchAllsubCategories, fetchAllFootrwearType } from "../redux/actions/categories/allCategoriesActions";

import { createProduct } from "../redux/actions/product/productActions";

const capitalizeFirstCharacter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const BasicProductDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storeData = useSelector((store) => store.categories);
  const { categoriesData, footwearTypeData, loading, appErr, serverErr } = storeData;

  useEffect(() => {
    dispatch(fetchAllsubCategories());
    dispatch(fetchAllFootrwearType());
  }, [dispatch]);

  const standardColors = [
    "Gold",
    "Peach",
    "Pink",
    "Black",
    "White",
    "Chique",
    "N Blue",
    "Rust",
    "O Green",
    "Brownx",
    "Chico",
    "Brownz",
    "Maroon",
    "Brown",
    "Green",
    "Beige",
    "Orange",
    "M. Green",
    "M. Yellow",
    "G M T",
    "N.Blue",
    "Browon",
    "Chikoo",
    "Begie",
    "N.Blue / B/TT",
    "O Green/ B. TT",
    "NT/B.TT",
    "T Blue",
    "L Gray",
    "Ruat",
    "Brownz",
    "Rust B.TT",
    "SW",
    "M R H",
    "Gun Metal",
    "Yellow",
    "Grey",
    "Musturd",
    "Blue",
    "L Blue",
    "D Blue",
    "Sultan",
    "Antique",
    "Tan",
    "Cream",
    "XX",
    "G A R",
    "AXX",
    "S S",
    "Purple",
    "Gray",
    "ANT",
  ];




  const [formData, setFormData] = useState({
    title: "",
    skewId: "",
    promotionalPrice: "",
    description: "",
    isPremiumLeather:"",
    sizesAvailable: [{ size: "", quantity: 0 }],
    colorsAvailable: [],
    gender: "Unisex",
    price:"",
    category: "",
    footwearType: "",
    reviews: [],
    selectedTag: "",
    discount:"",
  });


  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // console.log(formData);
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
      updatedColors = formData.colorsAvailable.filter((color) => color !== value);
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
    if (!formData.description) {
      formErrors.description = "Description is required";
      hasErrors = true;
    }

    if (!formData.skewId) {
      formErrors.skewId = "Product Id is required";
      hasErrors = true;
    }

    if (!formData.sizesAvailable.every((size) => (size.size && size.quantity) >= 0)) {
      formErrors.sizesAvailable = "Shoes Size and Quantity are required";
      hasErrors = false;
    }

    if (formData.colorsAvailable.length === 0) {
      formErrors.colorsAvailable = "At least one Shoe color is required";
      hasErrors = true;
    }
    if (!formData.isPremiumLeather) {
      formErrors.isPremiumLeather = "Leather Type is required";
      hasErrors = true;
    }
    // Set errors if any
    if (hasErrors) {
      setErrors(formErrors);
      return;
    } else {
      setErrors({});

      // console.log(formData)
     
      dispatch(createProduct(formData))
        .then((action) => {
          console.log(action.payload);
          navigate(`/add-product-images/${action.payload._id}`);
          // Do something with action.payload
        })
        .catch((error) => {
          console.error("Error:", error);
        });
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
                  required
                />
                {errors.title && <span style={{ color: "red" }}>{errors.title}</span>}
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
                  required
                />
                {errors.skewId && <span style={{ color: "red" }}>{errors.skewId}</span>}
              </div>
              <div className="mb-4 col-12">
                <label htmlFor="product_description" className="form-label">
                  Product Description
                </label>
                <textarea
                  id="product_description"
                  name="description"
                  className="form-control"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
                {errors.description && <span style={{ color: "red" }}>{errors.description}</span>}
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
                      required
                    >
                      <option value="">Select Size</option>
                      <option value="36">36</option>
                      <option value="37">37</option>
                      <option value="38">38</option>
                      <option value="39">39</option>
                      <option value="40">40</option>
                      <option value="41">41</option>
                      <option value="42">42</option>
                    </select>
                    <input
                      type="number"
                      name="quantity"
                      value={size.quantity}
                      onChange={(e) => handleSizeChange(index, e)}
                      className="form-control me-2"
                      required
                    />
                    <button type="button" onClick={() => handleRemoveSize(index)} className="btn btn-outline-danger">
                      Remove
                    </button>
                  </div>
                ))}
                {errors.sizesAvailable && <span style={{ color: "red" }}>{errors.sizesAvailable}</span>}
                <button type="button" onClick={handleAddSize} className="btn btn-outline-danger">
                  Add Size
                </button>
              </div>

              <div className="mb-4 col-6">
                <label htmlFor="colorsAvailable" className="form-label mb-3 mt-1">
                  Colors Available:
                </label>
                {errors.colorsAvailable && <span style={{ color: "red" }}>{errors.colorsAvailable}</span>}
                <br />
                {standardColors.map((color, index) => (
                  <div key={index} className="form-check form-check-inline d-inline-block mb-5">
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
                      required
                    />
                    <label
                      htmlFor={color}
                      className={`form-check-label  product${capitalizeFirstCharacter(color)}`}
                      style={{
                        // backgroundColor: `${capitalizeFirstCharacter(color)}`,
                        padding: "2px 5px",
                        borderRadius: "5px",
                        color: "white",
                        textShadow: `1px 1px 2px #000`,
                      }}
                    >
                      {capitalizeFirstCharacter(color)}
                    </label>
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
                  required
                />
                {errors.price && <span style={{ color: "red" }}>{errors.price}</span>}
              </div>
              

              <div className="mb-4 col-6">
                <label htmlFor="tags" className="form-label">
                  Tags:
                </label>
                <select id="tags" name="tags" value={formData.selectedTag} onChange={handleTagChange} className="form-select">
                  <option value="">Select Tag</option>
                  <option value="new">New</option>
                  <option value="sale">Sale</option>
                  <option value="hot">Hot</option>
                  <option value="popular">Popular</option>
                  <option value="trending">Trending</option>
                </select>
              </div>
              { formData.selectedTag=="sale" ? 
              <div className="mb-4 col-6">
                <label htmlFor="promotionalPrice" className="form-label">
                 Promotional promotionalPrice:
                </label>
                <input
                  type="number"
                  id="promotionalPrice"
                  name="promotionalPrice"
                  value={formData.promotionalPrice}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
                {errors.price && (
                  <span style={{ color: "red" }}>{errors.price}</span>
                )}
              </div> :""
              }

              <div className="mb-4 col-6">
                <label htmlFor="category" className="form-label">
                  Category Type:
                </label>
                <select id="category" name="category" value={formData.category} onChange={handleChange} className="form-select" required>
                  <option value="">Select Category</option>
                  {categoriesData.map((item, index) => (
                    <option key={index} value={item._id}>
                      {loading ? "Loading..." : item.subcategoriesName}
                    </option>
                  ))}
                </select>
                {errors.category && <span style={{ color: "red" }}>{errors.category}</span>}
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
                  required
                >
                  <option value="">Select Category</option>
                  {footwearTypeData.map((item, index) => (
                    <option key={index} value={item._id}>
                      {loading ? "Loading..." : item.subcategoryTypeName}
                    </option>
                  ))}
                </select>
                {errors.footwearType && <span style={{ color: "red" }}>{errors.footwearType}</span>}
              </div>
              <div className="mb-4 col-6">
                <label htmlFor="isPremiumLeather" className="form-label">
                  is Premium Leather.
                </label>
                <select
                  id="isPremiumLeather"
                  name="isPremiumLeather"
                  value={formData.isPremiumLeather}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="">Select </option>
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
                {errors.isPremiumLeather && (
                  <span style={{ color: "red" }}>{errors.isPremiumLeather}</span>
                )}
              </div>
              <div className="card mb-4">
                <div className="card-header">
                  <h4>Coupon Code</h4>
                </div>
                <div className="card-body">
                  <div className="row gx-2">
                    <div className="mb-4 col-12">
                      <label htmlFor="product_name" className="form-label">
                        Enter Discount Percentage <span style={{color:"red"}}>(only numbers)</span>
                      </label>
                      <input 
  type="number" 
  id="discount" 
  name="discount" 
  value={formData.discount} 
  onChange={handleChange} 
  className="form-control" 
/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="ml-auto col">
                  {/* <button
                    type="submit"
                    className="btn btn-outline-danger ml-auto m-auto"
                  >
                    Validate
                  </button> */}
                </div>
                <div className="ml-auto col">
                  <button type="submit" className="btn btn-primary ml-auto" onClick={handleSubmit}>
                    Next Page
                  </button>
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
