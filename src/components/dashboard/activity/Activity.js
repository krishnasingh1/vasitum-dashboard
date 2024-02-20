import Schedule from "../upcoming/Schedule";
import '../upcoming/Schedule.css';



function Activity() {
    return (
        <div className="activityside">
            <ActivityContainer/>
            <Schedule/>
            
        </div>
    )
}


function ActivityContainer() {
    return (
        <div className="activitycontainer">
            <RecentlyActivity/>
            <ActivityContent/>
            <AllActivity/>
        </div>
    )
}


function RecentlyActivity() {
    return (
        <div className="recentlyactivity">
            <div className="activitytext" >
                Recently Activity
            </div>
            
        </div>
    )
}

function ActivityContent() {
    return(
        <div className="activitycontent">
            <div className="datetext">
            10.40 AM, Fri 10 Sept 2021
            </div>
            <div className="maintxt">
            You Posted a New Job
            </div>
            <div className="peragraf">
            Kindly check the requirements and 
            terms of work and make sure everything is right.
            </div>
        </div>
    )
}

function AllActivity() {
    return(
        <div className="allactivity">
            <div className="makeactivity">
            Today you makes 12 Activity
            </div>
            <ActivityButton/>
        </div>
    )
}

function ActivityButton() {
    return (
        <div className="seeallbtn" >
            <div className="btn">See All Activity</div>
        </div>
    )
}



export default Activity;





