import Navbar from "../navbar/Navbar";
import '../navbar/Navbar.css'
import Card1 from "./card1/Card1";
import '../dashboard/card1/Card1.css';
import Card2 from "./card2/Card2";
import '../dashboard/card2/Card2.css';
import Activity from "./activity/Activity";
import '../dashboard/activity/Activity.css';
import Announcement from "./announcement/Announcement";
import '../dashboard/announcement/Announcement.css';

function Dashboard() {

  return (

    <div className="dashboard">
        <div className="horizonteldiv"></div>
        <Navbar/>
        <div className="background">
          
          <div className="dashboardtitle">
            <div className="dtxt">
              Dashboard
            </div>
          </div>
          <Dashboard1/>
          
        </div>
    </div>
  )  
}

function Dashboard1() {
    const empgraph = [{
        title : "Total Employees",
        empnum:"216",
        mennum:"120",
        womennum:"96",
        img: "../images/graph1.png",
      },
      {
        title : "Talent Request",
        empnum:"16",
        mennum:"6",
        womennum:"10",
        img: "../images/trgrapg.png",
    },];

    const jobs = [{
        title : "Available Position",
        num:"24",
        needed:"4 Urgently needed",
        bgcolor:"#FFEFE7",
        color: "#FF5151",
      },
      {
        title : "Jobs Open",
        num:"10",
        needed:"4 Active hiring",
        bgcolor:"#E8F0FB",
        color: "#3786F1",
      },
      {
        title : "New Employees",
        num:"24",
        needed:"4 Department",
        bgcolor:"#FDEBF9",
        color: "#EE61CF",
      },
    ];

  return(
    <div  className='dash-content'>
        <div className="leftdiv">
          <div className="jobscontain">
          {jobs.map((i, index) => {
                return (
                    <div key={index}>
                        <Card1 
                          title={i.title} 
                          num={i.num} 
                          needed={i.needed}
                          bgcolor={i.bgcolor}
                          color={i.color} 
                           />
                    </div>
                )
            })}
          </div>
          <div className="graphcontain">
            {empgraph.map((i, index) => {
                  return (
                      <div key={index}>
                          <Card2 
                            title={i.title} 
                            empnum={i.empnum}  
                            mennum={i.mennum} 
                            womennum={i.womennum} 
                            img={i.img} />
                      </div>
                  )
              })}
            
          </div>
          <Announcement/>
        </div>
        <Activity/>
    </div>
  )
}


export default Dashboard;