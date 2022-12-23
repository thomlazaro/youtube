const Card = (props)=>{
 return(
    <>
        <img src={props.image} alt=""/>
        <label>{props.title}</label>
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${props.id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </>
    
 )   
}

export default Card;