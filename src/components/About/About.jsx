import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="container mx-auto px-5 mt-24 md:mt-10 mb-10">
      <Helmet>
        <title> Quick Career | About Us</title>
      </Helmet>
      <div className="space-y-4 ">
        <div className="collapse collapse-arrow bg-[#F1F0EA] ">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What services do you provide in  Quick Career?
          </div>
          <div className="collapse-content">
            <p>
              Answer : We offer personalized  Quick Career sessions, career
              assessments, resume building, interview preparation, and guidance
              on selecting education or training programs to help you achieve
              your professional goals.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#F1F0EA]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How much does a  Quick Career session cost?
          </div>
          <div className="collapse-content">
            <p>
              Answer : Our pricing depends on the type of service you choose. We
              offer individual sessions, package deals, and student discounts.
              Please visit our pricing page or contact us for detailed
              information.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#F1F0EA]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Can  Quick Career help me switch careers?
          </div>
          <div className="collapse-content">
            <p>
              Answer : Yes, we specialize in helping individuals navigate career
              changes. We assess your current skills, explore transferable
              skills, and provide guidance on how to successfully transition to
              a new field.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#F1F0EA]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How can I book a session with a career counselor?
          </div>
          <div className="collapse-content">
            <p>
              Answer : You can book a session directly through our website by
              filling out the appointment form. Alternatively, you can call or
              email us, and our team will assist you with scheduling.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#F1F0EA]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What should I prepare before my first  Quick Career session?
          </div>
          <div className="collapse-content">
            <p>
              {" "}
              Answer : Bring your updated resume, a list of your career
              interests, and any questions you have. If you’ve taken any prior
              career assessments, sharing those results will also be helpful.
              Don’t worry if you don’t have these prepared; we’ll guide you
              during the session! Let me know if you'd like more tailored Q&A
              for your website!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
