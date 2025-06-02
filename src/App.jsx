import { useEffect, useState } from "react"
import axios from 'axios'
import {Routes, Route} from 'react-router-dom'

export default function App() {
  const [listePoke,setListePoke] = useState



  useEffect(()=>{
    axios
      .get('https://pokebuildapi.fr/api/v1/pokemon')
      .then((resultat)=>setListePoke(resultat.data))
      .catch((error)=>console.error(error));
        
  },[])


  return(
    <Routes>
      <Route />
    </Routes>
  )
}
