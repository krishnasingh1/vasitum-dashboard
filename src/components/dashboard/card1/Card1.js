function Card1(jobs) {
    return(
        <div className="card" style={{background:jobs.bgcolor}}>
            <div className="title">{jobs.title}</div>
            <div className="number">{jobs.num}</div>
            <div className="urgentneeded"  style={{color:jobs.color}}>{jobs.needed}</div>
        </div>
    )
}

export default Card1;