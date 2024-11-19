import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase.init";

const Register = () => {
  const navigate = useNavigate();
  const {
    loginWithGoogle,
    createUser,
    setUser,
    errorMessage,
    showPassword,
    setShowPassword,
    setErrorMessage,
  } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    loginWithGoogle();
    navigate("/");
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const terms = event.target.terms.checked;

    // reset error message
    setErrorMessage("");

    if (!terms) {
      setErrorMessage("Please accept our terms and condition");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("password should be 6 character or longer");
      return;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passwordRegex.test(password)) {
      setErrorMessage(
        " at least 1 uppercase,1 lowercase,one number,1 special character"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        // update profile name and photo url
        const profile = {
          displayName: name,
          photoURL: photo,
        };
        updateProfile(auth.currentUser, profile);
        setUser(user);
        toast.success("Register Successful");
        event.target.reset();
        navigate("/");
      })

      .catch((error) => {
        setErrorMessage(error.message);
      });
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
        <div className="form-control relative">
          <label className="label">
            <span className="label-text font-bold">Password</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create password"
            name="password"
            className="input input-bordered"
            required
          />
          <p
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-5 top-12 "
          >
            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </p>

          <label className="label"></label>
        </div>
        <div className="form-control">
          <label
            className="label cursor-pointer justify-start
          "
          >
            <input type="checkbox" name="terms" className="checkbox" />
            <span className="label-text ml-4">
              Accept Our Terms And Condition ?
            </span>
          </label>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary font-bold">Register</button>
        </div>
      </form>
      {errorMessage && (
        <p className="text-red-500 text-center">{errorMessage}</p>
      )}
      <p className="text-center font-bold">Or</p>
      <div className="flex justify-center items-center gap-2">
        <FcGoogle size={20} />
        <button onClick={handleGoogleLogin} className="text-lg font-bold">
          Sign in with Google
        </button>
      </div>

      <p className="text-center font-semibold pb-10">
        Already have an account?{" "}
        <Link to="/login" className="underline">
          Please Login
        </Link>{" "}
      </p>
      <Toaster />
    </div>
  );
};

export default Register;
