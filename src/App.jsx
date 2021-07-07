import React , {useState,useRef}  from 'react'
import styled from 'styled-components'
import {BrowserRouter as Router , Link , Route , Switch} from 'react-router-dom'
import WeatherAPI from './WeatherAPI/WeatherAPI'
import { useContext } from 'react'
import { UserProvider } from './Context/UserContext'
import Yinon from './Components/Yinon'

const Body = styled.div` 
padding: 0;
margin:0;

box-sizing: border-box;
display:flex;
justify-content: center;
align-items: center;
flex-direction: row;
flex-wrap: wrap;
height:100vh;
width:100wh;

`

const weatherCity = [{name:"holon",weather:25,picture:"https://www.holon.muni.il/English/DocLib/Pride%20week%20events.jpg"},{name:"Harra",weather:31,picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzexhiFELI3pSKLoB4V82evVIbin2U9imoaQ&usqp=CAU"},{name:"Hadera",weather:31,picture:"https://www.hadera.muni.il/media/16491450/ramada-%D7%A8%D7%9E%D7%93%D7%94.jpg?width=715&height=382&format=png&mode=crop"},{name:"Bat yam",weather:33,picture:"https://static.timesofisrael.com/jewishwdev/uploads/2014/05/04_2-1024x640.jpg"},{name:"Eilat",weather:40,picture:"https://internationalsecurityjournal.com/wp-content/uploads/2021/04/shutterstock_141336349-1920x1000.jpg"},{name:"Netanya",weather:30,picture:"https://www.ksn.co.il/wp-content/uploads/2020/09/tayelet_netanya.jpg"}]


function App() {
 
  const [options,setOptions] = useState([])
  const newOptions = useRef(weatherCity)
  const [isTrue,setIsTrue] = useState(false)
 const Options = [];
    for (let i=0 ; i < weatherCity.length ; i++){
        Options.push(weatherCity.map((object,i)=>object.name)[i]);
        
    }

  const onInputChange = (e) => {
    const new_options = Options.filter(option => option.includes(e.target.value))
    setOptions(new_options)
  }
  return (
    <Body>
    
      {/* <WeatherAPI options={options} onInputChange={onInputChange} weatherCity={weatherCity}/> */}
      <Yinon/>
    
    </Body>
   
  );
}

export default App;


