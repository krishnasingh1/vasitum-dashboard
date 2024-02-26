import { useEffect, useState } from "react";
import AnnouncementCard1 from "./AnnouncementCard1";




function Announcement() {

    
    return(
        <div className="announcement">
            <div className="atitle">
                <div className="atext">
                Announcement
                </div>
                <div className="dtdropdown">

                </div>
            </div>
            <AnnouncementCards/>
            <div className="btnannouncements">
            <div className="btntext">
            See All Announcement
            </div>
        </div>

        </div>
    )
}





function AnnouncementCards() {

    const [detail, setdetail] = useState([{title: "", body: ""}]);
    

    let isLoading = true;
    
    let API = "https://jsonplaceholder.typicode.com/posts";

    const fecthApiData = async (url) => {
        try {

            const res = await fetch(API);
            const data = await res.json();
            setdetail(data);
            console.log(data);
            isLoading = false;

                
        } catch (error) {
            console.log(error); 
        }
    };

        useEffect(() => {
            fecthApiData(API);
        }, []);
    
    const details = [{
        detail: "Outing schedule for every departement",
        time:"5 Minutes ago" ,
        img: "./images/pinned.png",
    },
    {
        detail: "Meeting HR Department",
        time:"Yesterday, 12:30 PM" ,
        img: "./images/pin.png",
    },
    {
        detail: "IT Department need two more talents for UX/UI",
        time:"Yesterday, 09:15 AM" ,
        img: "./images/pin.png",
    },
    {
        detail: "Outing schedule for every departement",
        time:"5 Minutes ago" ,
        img: "./images/pinned.png",
    },
    {
        detail: "Meeting HR Department",
        time:"Yesterday, 12:30 PM" ,
        img: "./images/pin.png",
    },
    {
        detail: "IT Department need two more talents for UX/UI",
        time:"Yesterday, 09:15 AM" ,
        img: "./images/pin.png",
    },];

    return(
        

        // <div className="announcementcards">
           
        //     {details.map((i, index) => {
        //         return (
        //             <div key={index}>
        //                 <AnnouncementCard1 title={i.detail} time={i.time}   />
        //             </div>
        //         )
        //     })}
            
            
        // </div>
        <div className="announcementcards">
           
        {detail.map((i, index) => {
            return (
                <div key={index} >
                    <AnnouncementCard1 title={i.title} time={i.body}/>
                </div>
            )
        })}
        
        
    </div>
    )
}

export default Announcement;



