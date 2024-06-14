import React from 'react';
function Buscador ({query, setQuery}){
    return(
        <div>
            <input 
                type="text" 
                placeholder='Encuentra a tu futura mascota'
                class="form-control" 
                id="floatingInput"
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
        </div>
    )
}

export default Buscador;