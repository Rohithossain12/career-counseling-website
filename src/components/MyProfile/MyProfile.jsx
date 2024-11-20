import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-lg mx-auto flex justify-center items-center pt-10 pb-10">
      <Helmet>
        <title>Career Counseling | My Profile </title>
      </Helmet>
      <div className="card bg-base-100 border ">
        <figure className="p-3">
          <img className=" w-full h-full object-cover rounded-lg " src={user.photoURL} alt="Shoes" />
        </figure>
        <div className="card-body text-center pb-5 space-y-3">
          <h2 className="text-center text-2xl font-bold">Name: {user.displayName}</h2>
          <p className="text-lg font-bold">Email : {user.email}</p>
          <div className="card-actions justify-center">
            <Link to="/updateProfile" className="btn btn-primary">
              Update Profile
            </Link>
            ;
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
