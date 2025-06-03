import { useEffect, useState } from "react"
import axios from 'axios'
import {Routes, Route} from 'react-router-dom'
import Pokedex from "./pages/Pokedex"

export default function App() {
  const [listePoke,setListePoke] = useState([])
  const [listeType,setListeType] = useState([])
  const [listeFilter,setListeFilter] = useState('')



  useEffect(()=>{
    axios
      .get('https://pokebuildapi.fr/api/v1/pokemon')
      .then((resultat)=>setListePoke(resultat.data))
      .catch((error)=>console.error(error));
    
    axios
      .get('https://pokebuildapi.fr/api/v1/types')
      .then((resultat) => setListeType(resultat.data))
      .catch((error) => console.error(error));
  },[])


  function filtertype(type) {
    setListeFilter(
      listePoke.filter(el =>
        el.apiTypes.some(t => t.name === type)
    ))
  }


  return(
    <Routes>
      <Route path="/" element={<Pokedex listePoke={listePoke} listeType={listeType} listeFilter={listeFilter} filtertype={filtertype}/>}/>
    </Routes>
  )
}
