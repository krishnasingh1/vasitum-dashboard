function Card2(){
    return(
        <div className="card2">
          <ContainerDiv/>
          <GraphImg/>  
        </div>
    )
}

function ContainerDiv() {
    return(
       <div className="contentdiv">
            <div className="top">
            <div className="title1">Total Employee</div>
            <div className="number1">216</div>
            </div>
            <div className="down">
            <div className="men">120 Men</div>
            <div className="women">96 Women</div>
            </div>  
       </div> 
    )
}

function GraphImg() {
    return (
        <div className="graphimg">
            <img src="../images/graph1.png" className="graphimg" alt="Graph"/>
        </div>
    )
}

export default Card2;