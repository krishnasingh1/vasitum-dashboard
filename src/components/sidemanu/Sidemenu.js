
import { createContext, useState, useContext } from "react";
const ThemeContext = createContext(null);
function Sidemenu() {
    
    return (
        <div className="sidenav">
            <LogoFrame/>
            <div className="blankcontaine"></div>
            <FrameMainMenu/>
            <div className="blankcontaine"></div>
            <FrameOther/>
        </div>
    )
}

function LogoFrame() {
    return(
        <div className="logoframe">
            <div className="brandlogo">
                <img src="../images/vasitum-logo.png" alt="Vasitum logo"/>
            </div>
           

        </div>
        
    )


}

function FrameMainMenu() {
    return(
        <div  className="mainmenuframe">
            <div className="mainmenu">
            <div className="textmain">
                MAIN MENU</div>   
            </div>
            <ManuItems title="Dashboard" icon="../images/ic_dashboard.png"/>
            <ManuItems title="Recruitment" icon="../images/ic_recruitment.png" />
            <ManuItems title="Schedule"  icon="../images/ic_calendar.png"/>
            <ManuItems title="Employee"  icon="../images/ic_employee.png"/>
            <ManuItems title="Department"  icon="../images/ic_department.png"/>

        </div>
    )
}

function ManuItems({title, icon}) {
    return (
        <div className="item">
           <div>
           <img src={icon} alt="" className="imgit"/>
           </div>
           <div><h1 className="mtext">{title}</h1> </div>

        </div>
    )
}

function FrameOther() {
    return(

        <div className="otherframe">
             <div className="othermenu">
            <div className="textother">
                OTHER</div>   
            </div>
            <ManuItems title="Support" icon="../images/ic_support.png"/>
            <ManuItems title="Settings" icon="../images/ic_settings.png"/>
        </div>
    )
}

export default Sidemenu;