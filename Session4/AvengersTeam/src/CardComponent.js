const CardComponent = (props) => {
    const { id, imageSrc, name, place, company, designation } = props.data
    console.log(props.data)
    return (
        <div className="card">
            <img src={imageSrc} />
            <h2>{name}</h2> 
            <h3>{company} - {designation}</h3>
            <h4>{place}</h4>
        </div>
    )
}

export default CardComponent;