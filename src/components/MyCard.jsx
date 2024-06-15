import Tags from './Tags';



const MyCard = (props) =>{
    return(
        <div className="col">
            <div className="card text-center h-100">
                <img src={props.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="">{props.titulo}</h5>
                    <p className="card-text">{props.descripcion}</p>
                    <Tags href={props.href} colorButton={props.bg} textButton={props.textButton} />
                </div>
            </div>
        </div>
    )
}

export default MyCard;