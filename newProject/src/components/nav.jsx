//nav js
function Nav() {
  return (
    <>
      <nav className="navbar bg-body-tertiary navColor">
        <div className="container bell">
          <a className="navbar-brand navText" href="#">
            <img src="cake4.png" />
          </a>

          <a className="navbar-brand" href="#">
            Home
          </a>

          <a className="navbar-brand" href="#">
            About
          </a>

          <a className="navbar-brand" href="#">
            Blog
          </a>

          <a className="navbar-brand" href="#">
            Contact
          </a>
          <a>
            <input
              className="form-control form-control"
              type="text"
              placeholder="search cake"
              readonly
            ></input>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Nav;
