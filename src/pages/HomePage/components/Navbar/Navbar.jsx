import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className={"navbar"}>
        <div className="nav-container">
          <a href="/" className="logo">
            <img src="/Navlogo.svg" alt="NavLogo" className="navbar-logo" />
          </a>

          <div className="nav-links">
            <a href="#">Events</a>
            <a href="#">My Tickets</a>
            <a href="#">About Project</a>
          </div>

          <a href="#" className="my-tickets-btn">
            MY TICKETS →
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
