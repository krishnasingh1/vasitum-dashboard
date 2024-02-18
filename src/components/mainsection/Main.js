import Sidemenu from "../sidemanu/Sidemenu";
import Navbar from "../navbar/Navbar";
import '../navbar/Navbar.css'
import '../sidemanu/Sidemenu.css';
import Dashboard from "../dashboard/Dashboard";
import '../dashboard/Dashboard.css';


function Main() {


    return (

        <div className="container">
            <Sidemenu/>
            <Dashboard/>
            
        </div>

    )
}


export default Main;