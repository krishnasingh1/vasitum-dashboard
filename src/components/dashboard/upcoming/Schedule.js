import SCard from "./SCard";



function Schedule() {
    const scheduled = [{
        detail: "Review candidate applications",
        time:"Today - 11.30 AM" ,
        img: "./images/pinned.png",
    },
    {
        detail: "Interview with candidates",
        time:"Today - 10.30 AM" ,
        img: "./images/pin.png",
    },
    {
        detail: "Short meeting with product designer from IT Departement",
        time:"Today - 09.15 AM" ,
        img: "./images/pin.png",
    },
    {
        detail: "Review candidate applications",
        time:"Today - 11.30 AM" ,
        img: "./images/pinned.png",
    },
    {
        detail: "Interview with candidates",
        time:"Today - 10.30 AM" ,
        img: "./images/pin.png",
    },
    {
        detail: "Short meeting with product designer from IT Departement",
        time:"Today - 09.15 AM" ,
        img: "./images/pin.png",
    },];

    return(
        <div className="schedule">
        <div className="usehedule">
            <div className="autext">
                Upcoming Schedule
            </div>
            <div className="udtdropdown">

            </div>
        </div>
        <div className="scards">

            {scheduled.map((i, index) => {
                return (
                    <div key={index}>
                        <SCard title={i.detail} time={i.time}/>
                    </div>
                )
            })}
            
        </div>
        <div className="btncreatesechedule">
            <div className="newbtnsechedule">
                Create a New Schedule
            </div>
        </div>
    </div>
    )
}



export default Schedule;