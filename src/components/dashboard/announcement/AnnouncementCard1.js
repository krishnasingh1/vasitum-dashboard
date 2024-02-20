


function AnnouncementCard1(props){

    return (
        <div className="announcementcard1">
            <Lefttxts title={props.title} time={props.time}/>
            <RightContent/>
        </div>
    )
}

function Lefttxts(props) {
    return(
        <div className="lefttxts">
            <div className="m1text">
            {props.title}
            </div>
            <div className="stext">
            {props.time}    
            </div>   
        </div>
    )
}

function RightContent() {
    return(
        <div className="rightcontent">
            <img className="card1img" src="../images/bi_pin-angle-fill.png" alt="pinimg"/>
            <img className="card1img" src="../images/carbon_overflow-menu-horizontal.png" alt="dotimg"/>
        </div>
    )
}

export default AnnouncementCard1;