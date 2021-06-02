import "../styles/index.scss";
import CardVoucher from "../Atomic/organisms/CardVoucher";
import Navigation from "../Atomic/organisms/Navigation";

const About = () => (
  <>
    <main role="main">
      <div className="bg-white rounded">
        <div className="mt-card-deal">
          <div className="d-flex flex-column align-items-center w-100 p-3">
            <CardVoucher></CardVoucher>
          </div>
        </div>
        <Navigation></Navigation>
      </div>
    </main>
  </>
);

export default About;
