import Link from "next/link";
import Header from "../Atomic/organisms/Header";
import Footer from "../components/footer";
import "../styles/index.scss";

const About = () => (
  <>
    <main role="main" className="inner cover">
      <h1 className="cover-heading">About page</h1>
      <p className="lead">A page about us</p>
      <p className="lead">
        <img
          className="rounded"
          src="https://media.giphy.com/media/B6odR0DhsStfW/source.gif"
          alt="Meow"
        />
      </p>
      <p className="lead">
        <Link href="/">
          <button type="button" className="btn btn-danger">
            Back
          </button>
        </Link>
      </p>
    </main>
  </>
);

export default About;
