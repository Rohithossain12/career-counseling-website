import { sendPasswordResetEmail } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import auth from "../firebase.init";
import { useLocation } from "react-router-dom";
import { useRef, useState } from "react";
const PasswordReset = () => {
  const emailRef = useRef();
  const location = useLocation();
  const [email, setEmail] = useState(location.state || "");
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleForgetPassword = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Reset email send. please check your email");
        window.location="https://mail.google.com/"
      })
      .catch(() => {
        toast.error("Please provide a valid email address");
      });
  };

  return (
    <div className="pb-14 mt-24  md:mt-10">
      <div className="card bg-[#F1F0EA]  max-w-lg mx-auto p-10 shrink-0 ">
        <form className="card-body">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
            Forget Password
          </h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              value={email}
              onChange={handleEmail}
              ref={emailRef}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control"></div>
          <div className="form-control mt-6">
            <button
              onClick={handleForgetPassword}
              className="px-8 py-2 text-white bg-[#6D8CA0] rounded-lg font-bold"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default PasswordReset;
