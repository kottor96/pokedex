import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import BarStat from "../components/BarStat"

export default function Pokemon({listeFilter}) {
    const { id } = useParams();
    const navigator = useNavigate()

    if (!listeFilter || listeFilter.length === 0) {
        return <p>Loading or no Pokémon data available</p>;
    }

    const local = listeFilter.find(el => el.id === parseInt(id));

    if (!local) {
        return <p>Pokémon not found</p>;
    }

    return(
        
        <section id="poke_stat">
            {listeFilter
            ?<div className="carte_stats">
                <div className="id">
                    <div className="image">
                        <img src={local.image} alt={local.name} />
                    </div>
                    <div className="nom">
                        <h4>{local.name}</h4>
                        <h4>{local.id}</h4>
                    </div>
                </div>
                <div className="stats">
                    {Object.entries(local.stats).map(([key,value])=>(
                        <BarStat key={key} id={key} valeur={value}/>
                    ))}
                </div>
            </div>
            :null}
            <div>
                <button onClick={()=>{navigator('/')}}>Retour</button>
            </div>
            
        </section>
    )
    
}