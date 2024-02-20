function Card2(empd){
    return(
        <div className="card2">
          <div className="contentdiv">
                <div className="top">
                    <div className="title1">{empd.title}</div>
                    <div className="number1">{empd.empnum}</div>
                </div>
                <div className="down">
                    <div className="men">{empd.mennum} Men</div>
                    <div className="women">{empd.womennum} Women</div>
                </div>  
            </div>
            <div className="graphimg">
                <img src={empd.img} className="graphimg" alt="Graph"/>
            </div>
          
        </div>
    )
}

export default Card2;