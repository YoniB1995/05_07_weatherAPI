import React , {useState,useEffect} from 'react'
import styled from 'styled-components';


const BodyDropDown = styled.div`
display:flex;
justify-content:center;
align-items: center;
flex-direction:column;
`

const DropDown = styled.div`
border: 1px solid black;
box-shadow: 2px 2px 2px ;
background:transparent;
display:inline-block;
z-index:1;
width:135px;

padding:12px 16px;

`

export default function WeatherAPI() {
    const [city,setCity] = useState("")
    const [link ,setLink] = useState("")
    const [value,setValue] = useState([])
    const [isTrue,setIsTrue] = useState(false)
    const [isLink,setIsLink] = useState(false)

    

const weatherCity = [{name:"holon",weather:25,picture:"https://www.holon.muni.il/English/DocLib/Pride%20week%20events.jpg"},{name:"Harra",weather:31,picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzexhiFELI3pSKLoB4V82evVIbin2U9imoaQ&usqp=CAU"},{name:"Hadera",weather:31,picture:"https://www.hadera.muni.il/media/16491450/ramada-%D7%A8%D7%9E%D7%93%D7%94.jpg?width=715&height=382&format=png&mode=crop"},{name:"Bat yam",weather:33,picture:"https://static.timesofisrael.com/jewishwdev/uploads/2014/05/04_2-1024x640.jpg"},{name:"Eilat",weather:40,picture:"https://internationalsecurityjournal.com/wp-content/uploads/2021/04/shutterstock_141336349-1920x1000.jpg"},{name:"Netanya",weather:30,picture:"https://www.ksn.co.il/wp-content/uploads/2020/09/tayelet_netanya.jpg"}]


    function Handler(e){
        const getCity = weatherCity.map(city => city.name.toLowerCase()).filter(test=>test.startsWith(e.target.value),
        )
        setCity(e.target.value)
            e.target.value.length > 0 ?  setIsTrue(true) :  setIsTrue(false);
            setValue(`${getCity} \n`)
            
    }
    function offText(){
        setIsTrue(false)
    }

    function searchItem(){
        console.log( weatherCity[0].name)
             
    setIsLink(true)
        }
   
    function getDetails(e){
        {weatherCity.map((a,i)=>{ 
            if (e.target.value === weatherCity[i].name){
                setLink("Hello")
            }
        })}
        
        
    }
    


        
    return (
        <BodyDropDown>

            <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
            <h2>Search your City: </h2>
            <label htmlFor=""> 
                <input type="text" name="cityName" onChange={Handler} onFocusCapture={offText} autoComplete="off"  />
                <button onClick={searchItem}>Search</button>
                <div>
                {isTrue&& <DropDown>{value}</DropDown> }
                </div>
                {isTrue&& <button onClick={getDetails}>{value}</button> }
            </label>
            {link}
           
            

        </BodyDropDown>
    )
}
