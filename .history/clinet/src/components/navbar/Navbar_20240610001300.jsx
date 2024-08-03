import './navbar.scss';
function Navbar() {
  return (
    <nav>
      <div className="left">
        <a href="" className="logo">
          <img src="" />
          <span>Sun Estate</span>
        </a>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Agents</a>
      </div>
      <div className="right">
        <a href="">Sigin</a> <a href="">Sig up</a>
      </div>
    </nav>
  );
}

export default Navbar;
