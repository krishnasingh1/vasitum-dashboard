function Navbar() {
    return (
        <div className="main">
            <div className="navbar">
            <Search/>
            <NavbarRight/>
        </div>
        <Div/>
        </div>
        
    )
}

function Search() {
    return (
        <div className="search">
            <input type="searchinput" placeholder="Search" className="searchinput"/>
             <img src="../images/search-icon.png" alt="Search item" className="searchicon"/>   
            
        </div>
    )
}

function NavbarRight(){
    return(
        <div className="navright">
           <img className="img" src="../images/ic_round-notifications.png"/> 
           <img className="img" src="../images/bi_chat-left-dots-fill.png"/> 
           <Profile/>
        </div>
    )
}

function Profile() {
    return(
        <div className="profile">
            <img src="../images/profileimg.png" alt="profileimg" className="profileimg"/>
            <div className="profilename">
                <h1 className="text">Admirra John</h1>
                <img src="../images/dropdownimg.png" className="dropdown"/>
            </div>
        </div>
    )
}

function Div() {
    return (
      <div className="custom">
        
      </div>
    )
  }

export default Navbar;