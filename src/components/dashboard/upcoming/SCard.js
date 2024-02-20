function SCard(schedule) {
    return (
        <div className="scard">
            <div className="udata">
               <div className="udtxt">
                    {schedule.title}
                </div> 
                <div className="udtime">
                    {schedule.time}
                </div>
            </div>
            <div className="ui">
                <img src="../images/ic-notifications.png" alt="" className="notificationimg"/>
                <img src="./images/ic-horizontal-menu.png" alt="" className="meimg"/>
            </div>
        </div>
    )
}

export default SCard;