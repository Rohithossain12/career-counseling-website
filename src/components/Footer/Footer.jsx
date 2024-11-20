const Footer = () => {
  return (
    <div>
      <footer className="footer bg-[#6D8CA0] text-white p-10">
        <nav>
          <h6 className="text-xl text-white">Services</h6>
          <a className="link link-hover"> Resume Review</a>
          <a className="link link-hover">Skill Assessment</a>
          <a className="link link-hover">Entrepreneurship Mentoring</a>
          <a className="link link-hover"> Interview Preparation</a>
        </nav>
        <nav>
          <h6 className=" text-xl text-white">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="text-xl text-white">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <h6 className="text-xl text-white">Contact us</h6>
          <div className="flex gap-4 ">
            <p><img src='https://img.icons8.com/?size=48&id=118497&format=png' alt="" /></p>
            <p><img src='https://img.icons8.com/?size=48&id=32323&format=png' alt="" /></p>
            <p><img src='https://img.icons8.com/?size=48&id=114450&format=png' alt="" /></p>
           
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
