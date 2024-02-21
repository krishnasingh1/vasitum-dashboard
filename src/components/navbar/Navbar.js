function Navbar() {
    return (
        <div className="main">
            <div className="navbar">
                <div className="search">
                    <input type="searchinput" placeholder="Search" className="searchinput"/>
                    <img src="../images/search-icon.png" alt="Search item" className="searchicon"/>   
                    
                </div>
                <div className="navright">
                    <img className="img" src="../images/ic_round-notifications.png"/> 
                    <img className="img" src="../images/bi_chat-left-dots-fill.png"/> 
                    <div className="profile">
                        <img src="../images/profileimg.png" alt="profileimg" className="profileimg"/>
                        <div className="profilename">
                            <h1 className="text">Admirra John</h1>
                            <img src="../images/dropdownimg.png" className="dropdown"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="custom"></div>
        </div>
        
    )
}

export default Navbar;