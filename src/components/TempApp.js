import React,{useEffect, useState} from 'react';
import "./style.css"
const TempApp = () => {

    const [city,setCity] = useState(null);
    const [search,setSearch]=useState("Mumbai");

    useEffect( () => {
        const fetchApi = async () => {
            const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2132fdc98aa041a391601bae5b84d422`
            const response = await fetch(url)
            const resjson = await response.json();
            setCity(resjson.main);
        }
 
        fetchApi();
    },[search])
    return(
        <>
        <div className='box'>
           <div className='inputData'>
              <input
                type='search'
                className='inputField'
                value={search}
                onChange={(event) =>{ setSearch(event.target.value)
                }} />
           </div>

        {
            !city ? (
                <p className='nodata'>No Data Found</p>
            ): (
                <div>
                <div className='info'>
                <h2 className='location'>
                    <i className="fas fa-street-view"> </i>{search}
                </h2>
                <h1 className='temp'>
                 {city.temp}
                </h1>
                <h3 className='tempmin_max'>Min :{city.temp_min} | Max :{city.temp_max}</h3>
                <h4 className='tempmin_max'>Feels-like:{city.feels_like}</h4>
            </div>
            <div className='wave -one'></div>
            <div className='wave -two'></div>
            <div className='wave -three'></div>
            </div>
        )}


        
        </div>
        </>
    )
}

export default TempApp;