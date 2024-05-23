import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const SignUP = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser } = useAuth() || {};

  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        if (user) {
          console.log(user);
        }
      })
      .catch((err) => console.log(err.message));
    reset();
  };
  return (
    <div className="bg-[url('https://i.postimg.cc/cJpdWzZf/7c9a76326c730978ec22e7193f67109f.png')] bg-center bg-no-repeat bg-cover ">
      <Helmet>
        <title>Bistro-Boss | SignUP</title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="flex md:flex-row flex-col justify-between shadow-2xl items-center md:px-[100px]">
          <div className="md:w-[48%] w-full">
            <h1 className="text-[40px] font-bold text-center">Sign UP</h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body w-full"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  {...register("name", { required: true })}
                  className="input input-bordered w-full"
                />
                {errors.name && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  {...register("email", {
                    required: "email is required",
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  })}
                  className="input input-bordered w-full"
                />
                {errors?.email?.type === "pattern" && (
                  <p className="text-red-600">
                    email example:(example@gmail.com)
                  </p>
                )}
                {errors?.email?.type === "required" && (
                  <p className="text-red-600"> {errors?.email?.message}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  {...register("password", {
                    required: "password is required",
                    maxLength: 20,
                    minLength: 6,
                  })}
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">{errors?.password?.message}</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">
                    password should be 6 character long
                  </p>
                )}
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>

              <div className="form-control mt-6">
                <button className={`btn  bg-[#D1A054]`}>Sign UP</button>
              </div>
            </form>
            <div>
              <label className="label">
                <p className="text-center mx-auto text-[#D1A054]">
                  <small>Already Registered?</small>
                  <Link
                    to="/login"
                    className="label-text-alt link link-hover text-[#D1A054]"
                  >
                    Go to login
                  </Link>
                </p>
              </label>
            </div>
          </div>

          <div className="text-center lg:text-left md:w-[48%] w-full">
            <img
              src="https://i.ibb.co/8bfM3Xr/authentication1-removebg-preview.png"
              alt="login-image"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
