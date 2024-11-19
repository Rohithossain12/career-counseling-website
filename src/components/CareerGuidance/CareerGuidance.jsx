const CareerGuidance = () => {
  return (
    <div className="mt-5 mb-12 bg-base-200 p-10 rounded">
      <div className="text-center pb-5 space-y-2">
        <h1 className="text-xl md:text-2xl lg:text-3xl  font-bold">
          Shaping the Career Guidance Landscape
        </h1>
        <p className=" text-gray-500 pb-5">
          Comprehensive career guidance solutions for students, parents,
          educators and schools
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        <div className="flex flex-col items-center justify-center">
          <img
            src="https://mindlerimages.imgix.net/tinyimg/005-creative.svg"
            alt=""
          />
          <p className="text-center pt-3">
            Enable students to identify their best-fit career with our
            world-class career assessment and personalised guidance.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src="https://mindlerimages.imgix.net/tinyimg/002-devices.svg"
            alt=""
          />
          <p className="text-center ">
            Empower students to learn all about the professional world with
            virtual career simulations, exhaustive career library, career blogs
            and vlogs.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src="https://mindlerimages.imgix.net/tinyimg/003-certificate.svg"
            alt=""
          />
          <p className="text-center">
            Pave student’s way to their dream college with our end-to-end
            college application guidance, scholarship drive and corporate
            internship program.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src="https://mindlerimages.imgix.net/tinyimg/004-career.svg"
            alt=""
          />
          <p className="text-center pt-3">
            Enable schools in creating a career guidance ecosystem in sync with
            the vision of New Education Policy
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src="https://mindlerimages.imgix.net/tinyimg/010-team.svg"
            alt=""
          />
          <p className="text-center pt-3">
            Empower educators to become International Certified Career Coaches
            and build a career in career guidance & counselling
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src="https://mindlerimages.imgix.net/tinyimg/007-startup.svg"
            alt=""
          />
          <p className="text-center pt-3">
            Revolutionary assessment platform and technology driven career
            guidance solutions for educators to boost their career guidance &
            counselling practice
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerGuidance;
