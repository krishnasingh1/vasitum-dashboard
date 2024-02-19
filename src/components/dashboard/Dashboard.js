import Navbar from "../navbar/Navbar";
import '../navbar/Navbar.css'
import Card1 from "./card1/Card1";
import '../dashboard/card1/Card1.css';
import Card2 from "./card2/Card2";
import '../dashboard/card2/Card2.css';
import Activity from "./activity/Activity";
import '../dashboard/activity/Activity.css';

function Dashboard() {
  return (

    <div className="dashboard">
        <div className="horizonteldiv"></div>
        <div className="background">
          <Navbar/>
          <Dashboard1/>
          
        </div>
    </div>
  )  
}

function Dashboard1() {
  return(
    <div  className='dash-content'>
        <RightSide/>
        <Activity/>
    </div>
  )
}

function RightSide(){
  return (
    <div className="rightdiv">
      <JobSection/>
        <Graphical/>
    </div>
  )
}

function JobSection() {
  return(
    <div className="jobscontain">
      <Card1/>
      <Card1/>
      <Card1/>
    </div>
  )
}

function Graphical() {
  return(
    <div className="graphcontain">
      <Card2/>
      <Card2/>
    </div>
  )
}





export default Dashboard;