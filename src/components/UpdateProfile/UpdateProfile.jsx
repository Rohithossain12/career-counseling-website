import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const UpdateProfile = () => {
    const navigate = useNavigate()
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
        navigate('/profile')
      })
      .catch(err => {
        console.log(err);
      })
  };

  return (
    <div className="pt-5 pb-8">
      <div className="card   max-w-lg mx-auto  shrink-0 bg-base-200">
        <h1 className=" text-xl md:text-2xl lg:text-3xl font-bold ml-8 pt-5">
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
            <button className="btn btn-primary">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
