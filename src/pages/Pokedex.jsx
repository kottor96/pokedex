import BaRecherche from "../components/BaRecherche";
import CartePoke from "../components/CartePoke";

export default function Pokedex({listePoke,listeType,filtertype,listeFilter}) {
    return(
        <section id="pokedex">
            <div id="recherche">
                <BaRecherche listeType={listeType} filtertype={filtertype}/>
            </div>
            <div id="listePokemon">
                {(listeFilter.length===0?listePoke:listeFilter).map((el)=>(
                    <CartePoke key={el.id} el={el}/>
                ))}
            </div>
        </section>
    )
}