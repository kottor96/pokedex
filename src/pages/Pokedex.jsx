import BaRecherche from "../components/BaRecherche";
import CartePoke from "../components/CartePoke";

export default function Pokedex({listeType,filtertype,listeFilter,filterName}) {
    
    return(
        <section id="pokedex">
            <div id="recherche">
                <BaRecherche listeType={listeType} filtertype={filtertype} filterName={filterName}/>
            </div>
            <div id="listePokemon">
                {listeFilter===''?null:listeFilter.map((el)=>(
                    <CartePoke key={el.id} el={el}/>
                ))}
            </div>
        </section>
    )
}