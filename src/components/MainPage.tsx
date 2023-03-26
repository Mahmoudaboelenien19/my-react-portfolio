import { FaLinkedin, FaGithubSquare, FaEnvelopeSquare } from "react-icons/fa";
const MainPage = () => {
  return (
    <section className="main-page">
      <h4>
        <small>
          Hello, I'm <span className="my-name">Mahmoud </span>
        </small>
        <span className="major"> MERN stack developer </span>
        <span className="message">
          Welcome to my portfolio where I show my projects and skills in web
          development.
        </span>
        <div className="icons">
          <span>
            <FaLinkedin />
          </span>
          <span>
            {" "}
            <FaGithubSquare />{" "}
          </span>
          <span>
            {" "}
            <FaEnvelopeSquare />{" "}
          </span>
          <span></span>
          <div className="cv">
            {" "}
            <button>download cv</button>
          </div>
        </div>
      </h4>
      <section className="mac-animate">mac</section>
    </section>
  );
};

export default MainPage;
