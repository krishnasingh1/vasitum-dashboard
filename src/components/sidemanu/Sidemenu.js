
import { createContext, useState, useContext } from "react";
const ThemeContext = createContext(null);
function Sidemenu() {
    
    return (
        <div className="sidenav">
            <div className="logoframe">
                <div className="brandlogo">
                    <img src="../images/vasitum-logo.png" alt="Vasitum logo"/>
                </div>
            </div>
            <div className="blankcontaine"></div>
            <FrameMainMenu/>
            <div className="blankcontaine"></div>
            <FrameOther/>
        </div>
    )
}



function FrameMainMenu() {

    const mainmenu = [
        {
            title : "Dashboard",
            icon : "../images/ic_dashboard.png",
        },
        {
            title : "Recruitment",
            icon : "../images/ic_recruitment.png",
        },
        {
            title : "Schedule",
            icon : "../images/ic_calendar.png",
        },
        {
            title : "Employee",
            icon : "../images/ic_employee.png",
        },
        {
            title : "Department",
            icon : "../images/ic_department.png",
        },
    ];

    return(

        <div  className="mainmenuframe">
            <div className="mainmenu">
            <div className="textmain">
                MAIN MENU</div>   
            </div>

            {mainmenu.map((i, index) => {
                return(
                    <div key={index}>
                        <ManuItems title={i.title} icon={i.icon}/>
                    </div>
                )
            })}
            

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

    const othermenu = [
        {
            title : "Support",
            icon : "../images/ic_support.png",
        },
        {
            title : "Settings",
            icon : "../images/ic_settings.png",
        },
        
    ];
    return(

        <div className="otherframe">
             <div className="othermenu">
            <div className="textother">
                OTHER</div>   
            </div>

            {othermenu.map((i, index) => {
                return(
                    <div key={index}>
                        <ManuItems title={i.title} icon={i.icon}/>
                    </div>
                )
            })}
            
        </div>
    )
}

export default Sidemenu;