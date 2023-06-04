function Header() {
  return (
    <header className="header">
      <div>
        <ul className="nav">
          <li>
            <img className="logo" src="/netflix.png" alt="web-logo" />
          </li>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>Recently Added</li>
          <li>My List</li>
        </ul>
      </div>

      <div className="nav">
        <img className="avatar" src="/avatar.png" alt="header-avatar" />
      </div>
    </header>
  );
}

export default Header;
