import { useEffect, useState } from "react"
import axios from 'axios'
import {Routes, Route} from 'react-router-dom'
import Pokedex from "./pages/Pokedex"
import Pokemon from "./pages/pokemon"

export default function App() {
  const [listePoke,setListePoke] = useState([])
  const [listeType,setListeType] = useState([])
  const [listeFilter,setListeFilter] = useState('')
  const [filterType, setFilterType] = useState('');
  const [filterText, setFilterText] = useState('');




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

  useEffect(() => {
    const filtered = listePoke.filter(el => {
      const matchType = filterType !== ''
        ? el.apiTypes.some(t => t.name === filterType)
        : true;

    const textMin = filterText.toLowerCase();

    const matchNomId = textMin !== ''
      ? el.name?.toLowerCase().includes(textMin) || el.id.toString().includes(textMin)
      : true;

      return matchType && matchNomId;
    });

    setListeFilter(filtered);
  }, [filterText, filterType, listePoke]);

  function filtertype(type) {  
    setFilterType(type)
  }

  function filterName(text) {
    setFilterText(text)
  }

  
  return(
    <Routes>
      <Route path="/" element={<Pokedex listePoke={listePoke} listeType={listeType} listeFilter={listeFilter} filtertype={filtertype} filterName={filterName}/>}/>
      <Route path="/:id" element={<Pokemon listeFilter={listeFilter}/>}/>
    </Routes>
  )
}
