import CartePoke from "../components/CartePoke";

export default function Pokedex({listePoke}) {
    return(
        <section id="pokedex">
            <div>
                
            </div>
            <div id="listePokemon">
                {listePoke.map((el)=>(
                    <CartePoke key={el.id} el={el}/>
                ))}
            </div>
        </section>
    )
}