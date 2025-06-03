import { useState } from "react";

export default function BarStat({id,valeur}){
    let colorClass = "success";

    switch (id.toLowerCase()) {
        case "hp":
            colorClass = "bg-success";
            break;
        case "special_attack":
            colorClass = "bg-warning";
            break;
        case "special_defense":
            colorClass = "bg-info";
            break;
        case "speed":
            colorClass = "bg-secondary";
            break;
        case "attack":
            colorClass = "bg-danger";
            break;
        case "defense":
            colorClass = "bg-primary";
            break;
    }
    return(
        <div id={id}>
            <label>{id}</label>
            <div
                className="progress"
                role="progressbar"
                aria-valuenow={valeur}
                aria-valuemin={0}
                aria-valuemax={255}
                >
                <div className={`progress-bar ${colorClass}`} style={{ width: `${(valeur / 255) * 100}%` }} />
            </div>
        </div>

    )
}