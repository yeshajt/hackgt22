import "./Header.css";

const Header = () => {
  const activeStyle = { color: "#7A15A2" };

  return (
    <div className="header">
      <img
        src={process.env.PUBLIC_URL + "/images/SCPCHeader.jpg"}
        alt="SCPC Logo"
      />
      <nav className="navbar navbar-expand-sm navbar-light bg-white">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </nav>
    </div>
  );
};

export default Header;
