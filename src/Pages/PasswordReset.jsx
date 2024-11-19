const PasswordReset = () => {

const handleForgetPassword=()=>{


    
}



  return (
    <div className="pb-10 pt-10">
      <div className="card bg-base-200 w-full max-w-lg mx-auto  shrink-0 ">
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
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
          </div>
          <div className="form-control mt-6">
            <button onClick={handleForgetPassword} className="btn btn-primary font-bold">Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
