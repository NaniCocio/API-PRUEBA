import React from 'react';
import { useState, useEffect } from 'react';
import Buscador from './Buscador';
import MyCard from './MyCard';


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
            <h2 className='titulo'>Animales en Adopción</h2>
            <Buscador query={query} setQuery={setQuery}/>
                <div className='container row row-cols-1 row-cols-md-4 g-2 animales'>
                    {sortedData.map((animales)=>
                        <MyCard
                        key={animales.nombre}
                        nombre={animales.nombre}
                        titulo={animales.nombre}
                        img={animales.imagen}
                        descripcion={animales.desc_personalidad}
                        href={animales.url}
                        bg="success"
                        textButton="Más Información"/>
                        
                    )}
                </div>
                
        </div>
    )
}


export default MiApi;