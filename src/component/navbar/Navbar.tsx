import "./navbar.scss"


const Navbar = () => {
  return(
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo"/>
        <span>Dashboard</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="search"/>
        <img src="/app.svg" alt="app"/>
        <img src="/expand.svg" alt="icon"/>
        <div className="notifications">
          <img src="notifications.svg" alt="notifications"/>
          <span>1</span>
        </div>
        <div className="user">
        <img
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt="user-img"
          />
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
};

export default Navbar;
