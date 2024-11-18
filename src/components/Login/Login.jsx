import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { loginWithGoogle, LoginUser } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    loginWithGoogle();
  };

  const handleLogin =(event)=>{
  event.preventDefault();
  const email =event.target.email.value;
  const password =event.target.password.value
  LoginUser(email,password)
  .then(result =>{
  console.log(result.user)  
  .catch(error =>{
  console.log("Error",error)  
  })
  })
  }

  return (
    <div className="card bg-base-200  max-w-lg mx-auto shrink-0  mt-10 mb-10">
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
            <a href="#" className="label-text-alt link link-hover font-bold">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary font-bold">Login</button>
        </div>
      </form>
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
    </div>
  );
};

export default Login;
