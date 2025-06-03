export default function BaRecherche({listeType,filtertype}){



    return(
        <div className="dropdown">
            <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                type
            </button>
            <ul className="dropdown-menu liste_type">
                <li onClick={()=>filtertype('')}>Tous</li>
                {listeType.map(el=>(
                    <li key={el.id} onClick={()=>filtertype(el.name)}>{el.name}</li>
                ))}
            </ul>
        </div>

    )
}