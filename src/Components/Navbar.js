import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <i className="fa-solid fa-b icon brandIcon" />
      <div className="iconContainer">
        <i className="fas fa-home icon" />
        <i className="fa-solid fa-user icon" />
        <i className="fa-solid fa-headphones icon" />
        <i className="fa-solid fa-right-from-bracket icon" />
      </div>
    </div>
  );
}

export default Navbar;
