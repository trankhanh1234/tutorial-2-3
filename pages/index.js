import "../styles/index.scss";
import Nav from "../components/nav";
import Footer from "../components/footer";

const Index = () => (
  <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
    <Nav />
    <main role="main" className="inner cover">
      <h1 className="cover-heading">Homepage</h1>
      <p className="lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p className="lead">
        <img
          src="https://media.giphy.com/media/K6nPw4pe3r6Bq/source.gif"
          alt="meow"
        />
      </p>
      <p className="lead">
        <a href="" className="btn btn-secondary">
          Learn more
        </a>
      </p>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">
            Action
          </a>
          <a class="dropdown-item" href="#">
            Another action
          </a>
          <a class="dropdown-item" href="#">
            Something else here
          </a>
        </div>
      </div>
    </main>
  </div>
);

export default Index;
