import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Header from "../../../components/Header/Header";

import { useDispatch, useSelector } from "react-redux";

import LoginImg from "../../assets/imgs/page/login.jpg";
import logoGoogle from "../../assets/imgs/theme/icons/logo-google.svg";
// import Footer from "../Footer/Footer";
import { ToastContainer, toast } from 'react-toastify';
import { loginUserAction } from "../../redux/actions/auth/authActions";
const Login = ({isloggedin}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // State variables for form data and errors
  const storeData = useSelector((store) => store.auth);
  const { user,registered,loading, appErr, serverErr } = storeData;

 useEffect(() => {
  if(registered){
    toast("You are registered Successfully")
   
  }
  
 }, [appErr,serverErr])
 

  // State variables for form data and errors
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userName: "",
  });

  const [errors, setErrors] = useState({});

  // Function to handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const loginHandler = async (e) => {
    e.preventDefault();

    const validationResult = validateForm(formData);
    console.log(validationResult);
    if (Object.keys(validationResult).length === 0) {
      const res = await dispatch(loginUserAction(formData));
      if (!res.error) {
        // console.log(res.error.message)
        navigate("/");
      } else {
        console.log(res.error.message);
      }
    } else {
      console.log("Error in form validation");
    }
  };

  // Function to validate form fields
  const validateForm = (data) => {
    const newErrors = {};
    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      newErrors.email = "Invalid email address";
    }

    return newErrors;
  };

  return (
    <>
    <ToastContainer/>
      {/* <Header /> */}
      <div className="page-content pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
              <div className="row">
                <div className="col-lg-6 pr-30 d-none d-lg-block">
                  <img className="border-radius-15" src={LoginImg} alt="" />
                </div>
                <div className="col-lg-6 col-md-8">
                  <div className="login_wrap widget-taber-content background-white">
                    <div className="padding_eight_all bg-white">
                      <div className="heading_s1">
                        <h1 className="mb-5">Login</h1>
                        {/* <p className="mb-30">
                          Don&apos;t have an account?{" "}
                          <Link to="/signup" onClick={() => navigate("/signup")}>
                            Create here
                          </Link>
                        </p> */}
                      </div>
                      <form onSubmit={loginHandler}>
                        {(appErr || serverErr) && <p style={{ color: "red", fontWeight: 900 }}>{appErr || serverErr}</p>}

                        <div className="form-group">
                          <input
                            type="email"
                            required
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Email *"
                          />
                          {errors.email && <div className="text-danger">{errors.email}</div>}
                        </div>
                        <div className="form-group">
                          <input
                            required
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Password *"
                          />
                          {errors.password && <div className="text-danger">{errors.password}</div>}
                        </div>
                        <div className="login_footer form-group mb-50">
                          <div className="chek-form">
                            <div className="custome-checkbox">
                              <input className="form-check-input" type="checkbox" name="remember" id="exampleCheckbox1" value="" />
                              <label className="form-check-label" htmlFor="exampleCheckbox1">
                                <span>Remember me</span>
                              </label>
                            </div>
                          </div>
                          <Link to="/forgot-password"><a className="text-muted">Forgot password?</a></Link>
                        </div>
                        <div className="form-group mb-30">
                          <button
                            type="submit"
                            style={{
                              width: "100%",
                              borderRadius: "100px",
                              border: "1px solid transparent",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                            className="mb-4 btn btn-fill-out btn-block hover-up font-weight-bold"
                            name="login"
                          >{loading ? "Loading" : "Login"}
                           
                          </button>
                          {/* <a
                            className="btn btn-light social-login google-login bg-light text-dark"
                            style={{
                              width: "100%",
                              borderRadius: "100px",
                              border: "1px solid #333",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <img src={logoGoogle} alt="" />
                            <span>&nbsp;&nbsp;Continue with Google</span>
                          </a> */}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Login;
