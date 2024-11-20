import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";

const Login = () => {
  const navigate = useNavigate();
  const { loginWithGoogle, LoginUser, setUser, errorMessage, setErrorMessage } =
    useContext(AuthContext);

  const handleGoogleLogin = () => {
    loginWithGoogle();
    navigate("/allService");
  };

  const handleLogin = (event) => {+
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    // reset error message status
    setErrorMessage("");


    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/


    if (!passwordRegex.test(password)) {
      setErrorMessage(
        " at least one uppercase,one lowercase,one number"
      );
      return;
    }

    LoginUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("User login successful");
        event.target.reset();
        navigate("/allService");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="card bg-[#F1F0EA]  max-w-lg mx-auto shrink-0 mt-24 md:mt-10 mb-10">
      <Helmet>
        <title>Career Counseling | Login</title>
      </Helmet>
      <form onSubmit={handleLogin} className="card-body ">
        <h1 className=" text-xl md:text-2xl lg:text-3xl font-semibold ">
          Login Now
        </h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <Link
              to="/reset"
              className="label-text-alt link link-hover font-bold"
            >
              Forgot password?
            </Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="px-8 py-2 rounded-lg bg-[#6D8CA0] text-white font-bold">Login</button>
        </div>
      </form>
      {errorMessage && (
        <p className="text-red-500 text-center">{errorMessage}</p>
      )}
      <p className="text-center font-bold">Or</p>
      <div className="flex justify-center items-center gap-2 pb-2">
        <FcGoogle size={20} />
        <button onClick={handleGoogleLogin} className="text-lg font-bold">
          Sign in with Google
        </button>
      </div>
      <p className="text-center font-semibold pb-5">
        Don't have an account yet ?{" "}
        <Link to="/register" className="underline">
          Please Register
        </Link>{" "}
      </p>
      <Toaster />
    </div>
  );
};

export default Login;
