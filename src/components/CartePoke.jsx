export default function CartePoke({el}){
    return(
        <div className={`pokeCarte ${el.apiTypes[1]?el.apiTypes[1].name:el.apiTypes[0].name}`}>
            <div className="pokeCarte_head">
                <h4>{el.name}</h4>
                <h5>{el.pokedexId}</h5>
            </div>
            <div className="pokeCarte_body">
                <img src={el.sprite} alt={el.name} />
            </div>
            <div className="pokeCarte_footer">
                <p>{el.apiTypes[0].name}</p>
                <p>{el.apiTypes[1]?.name}</p>
            </div>
        </div>
    )
}