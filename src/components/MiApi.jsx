import React from 'react';
import { useState, useEffect } from 'react';
import Buscador from './Buscador';


function MiApi(){
    const [data, setData] = useState([]);
    const [loading,setLoading]= useState(true);
    const [error,setError]= useState(null);
    const [query, setQuery] = useState('');

    const url = "https://huachitos.cl/api/animales?limit=10";

    useEffect(() => {
        consultarApi();
    }, []);

    const consultarApi= async ()=>{
        try{
            const response = await fetch(url);
            const data = await response.json();
            setData(data.data);  
            setLoading(false);
        }catch(error){
            console.log('error---->', error);
            setError(error);
            setLoading(false);
        }    
    };

    const filteredData = data.filter((animales)=>animales.nombre.toLowerCase().includes(query.toLowerCase())); //el buscador filtra la lista segun lo que se escriba

    const sortedData = filteredData.sort((a,b)=>a.nombre.localeCompare(b.nombre)); //ordena listado en orden alfabetico 
    

    //Página cargando datos
    if (loading){
        return (<div>Loading...</div>);
    }//Si hay error en cargar lista
    if (error){
        return (<div>ERROR: {error.message}</div>);
    }


    //Div con buscador, y listado
    return(
        <div>
            <h2>Animales en Adopción</h2>
            <Buscador query={query} setQuery={setQuery}/>
                <ul>
                    {sortedData.map((animales)=>
                        <li key={animales.nombre}>
                            <a href={animales.imagen}>{animales.nombre}</a>
                        </li>
                    )}
                </ul>
        </div>
    )
}


export default MiApi;