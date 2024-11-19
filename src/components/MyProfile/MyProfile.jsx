import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);


  return (
    <div className="max-w-lg bg-base-200 mx-auto h-[400px] mt-8 mb-14 rounded-lg border">
      <div className="h-[300px] text-center">
        <img src={user? user?.photoURL: {}} alt="" />
        <h1 className="text-xl font-bold"> User Name: {user.displayName}</h1>
        <p className="text-lg font-semibold">Email : {user.email}</p>
      </div>
    </div>
  );
};

export default MyProfile;
