import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const UpdateProfile = () => {
  const { errorMessage, setErrorMessage } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleUpdateProfile = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photo = event.target.photo.value;

    const profile = {
      displayName: name,
      photoURL: photo,
    };

    updateProfile(auth.currentUser, profile)
      .then(() => {
          toast.success("Profile Update Successful");
          navigate("/profile");

      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="mt-24  md:mt-10 pb-8 ">
      <div className="card bg-[#F1F0EA] max-w-lg mx-auto p-10 shrink-0 ">
        <h1 className=" text-xl md:text-2xl lg:text-3xl font-bold ml-8 ">
          Update Profile
        </h1>
        <form onSubmit={handleUpdateProfile} className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo Url"
              name="photo"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="px-8 py-2 bg-[#6D8CA0]  text-white font-bold rounded-lg">Update</button>
          </div>
        </form>
        {errorMessage && (
          <p className="text-red-500 mt-2 ml-8 ">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default UpdateProfile;
