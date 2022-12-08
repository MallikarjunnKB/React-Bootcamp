const CardComponent = (props) => {
    const { name, bio, avatar_url,company } = props?.data
   
    return (
        <div className="card">
            <img src={avatar_url} />
            <h2>{name}</h2> 
            <h3>{company}</h3>
            <h4>{bio}</h4>
        </div>
    )
}

export default CardComponent;