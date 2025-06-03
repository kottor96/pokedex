export default function BaRecherche({listeType,filtertype}){



    return(
        <>
            <div className="dropdown">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    type
                </button>
                <ul className="dropdown-menu liste_type" ta>
                    <li onClick={()=>filtertype('')}>Tous</li>
                    {listeType.map(el=>(
                        <li key={el.id} onClick={()=>filtertype(el.name)}>{el.name}</li>
                    ))}
                </ul>
            </div>
            <div className="input-group mb-3 bar">
                <span className="input-group-text" id="inputGroup-sizing-default">
                    Nom ou Id
                </span>
                <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                />
            </div>
        </>

    )
}