import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { loginWithGoogle, createUser } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    loginWithGoogle();
  };

  const handleRegister = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const photo = event.target.photo.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUser(email, password)
    .then(result =>{
     console.log(result.user) 
    })
  };

  return (
    <div className="card bg-base-200  max-w-lg mx-auto shrink-0  mt-10 mb-10">
      <form onSubmit={handleRegister} className="card-body ">
        <h1 className=" text-xl md:text-2xl lg:text-3xl font-semibold ">
          Register Now
        </h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered"
            name="name"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="Enter your photo-URL"
            name="photo"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
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
            placeholder="Create password"
            name="password"
            className="input input-bordered"
            required
          />
          <label className="label"></label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary font-bold">Register</button>
        </div>
      </form>
      <p className="text-center font-bold">Or</p>
      <div className="flex justify-center items-center gap-2">
        <FcGoogle size={20} />
        <button onClick={handleGoogleLogin} className="text-lg font-bold">
          Sign in with Google
        </button>
      </div>

      <p className="text-center font-semibold pb-5">
        Already have an account?{" "}
        <Link to="/login" className="underline">
          Please Login
        </Link>{" "}
      </p>
    </div>
  );
};

export default Register;
