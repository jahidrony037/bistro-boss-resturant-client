import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginUser } = useAuth() || {};
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6, "white", "black", "upper");
  }, []);

  const [valid, setValid] = useState(false);

  const captchaRef = useRef(null);

  const handleValidateCaptcha = () => {
    // console.log("handleValidate");
    const captchaValue = captchaRef.current.value;
    if (validateCaptcha(captchaValue) === true) {
      setValid(true);
      loadCaptchaEnginge(6);
      captchaRef.current.value = "";
    } else {
      setValid(false);
      captchaRef.current.value = "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        if (user) {
          Swal.fire({
            title: "User Login Successful",
            icon: "success",
          });
          navigate(from, { replace: true });
        }
      })
      .catch((err) => console.log(err.message));

    // let user_captcha = document.getElementById("user_captcha_input").value;
    // console.log(user_captcha);
    // if (validateCaptcha(user_captcha) === true) {
    //   alert("Captcha Matched");
    //   loadCaptchaEnginge(6);
    //   document.getElementById("user_captcha_input").value = "";
    // } else {
    //   alert("Captcha Does Not Match");
    //   document.getElementById("user_captcha_input").value = "";
    // }
  };

  return (
    <div className="bg-[url('https://i.postimg.cc/cJpdWzZf/7c9a76326c730978ec22e7193f67109f.png')] bg-center bg-no-repeat bg-cover ">
      <Helmet>
        <title>Bistro-Boss | Login</title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="flex md:flex-row flex-col justify-between shadow-2xl items-center md:px-[100px]">
          <div className="text-center lg:text-left md:w-[48%] w-full">
            <img
              src="https://i.ibb.co/8bfM3Xr/authentication1-removebg-preview.png"
              alt="login-image"
              className="object-cover"
            />
          </div>
          <div className="md:w-[48%] w-full">
            <h1 className="text-[40px] font-bold text-center">Login</h1>
            <form onSubmit={handleSubmit} className="card-body w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <div className="col">
                <LoadCanvasTemplate
                  reloadText="Reload Captcha"
                  className="mt-0"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  ref={captchaRef}
                  placeholder="Type Here"
                  id="user_captcha_input"
                  name="user_captcha_input"
                  className="input input-bordered"
                />
                <button
                  onClick={() => handleValidateCaptcha()}
                  className="btn-outline bg-black text-white rounded-full"
                >
                  validate captcha
                </button>
              </div>
              <div className="form-control mt-6">
                <button
                  className={`btn ${valid ? "btn-primary" : "btn-disabled"}`}
                >
                  Login
                </button>
              </div>
            </form>
            <div>
              <label className="label">
                <p className="mx-auto text-[#D1A054]">
                  <small>New Here?</small>{" "}
                  <Link
                    to={"/register"}
                    className="label-text-alt link link-hover text-[#D1A054]"
                  >
                    Create a New Account
                  </Link>
                </p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
