import React, { useState } from 'react'
import axios from 'axios';

const API_endpoint=`https://api.openweathermap.org/data/3.0/onecall?`
const API_key=`fce00ed2f5d4fc0d2fc7a80d8ee6daa1`
export const Maps = () => {
    const [latitude, setLatitudde]=useState('');
    const [longitude, setLongitude]=useState("");
    React.useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            setLatitudde(position.coords.latitude);
            setLongitude(position.coords.longitude);
        });
        axios.get(`${API_endpoint} 
        laT=${latitude}& lon=${longitude}
        &exclude=hourly,daily&appid=${API_key}
     }`).then((response)=>{
        console.log(response.data)
     })
    },[latitude, longitude])
  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}


