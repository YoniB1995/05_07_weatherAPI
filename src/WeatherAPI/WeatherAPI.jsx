import React , {useState,useEffect,useRef} from 'react'
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
:hover{
    opacity:0.5;
    background:black;
    color:white;
}
`
const NewUL = styled.ul`
 position:absolute;
 padding-left: 2px;
 `

const SpanLine = styled.span` 
display:flex;
justify-content: center;
flex-direction: row;
`

const weatherCity = [{name:"holon",weather:25,picture:"https://www.holon.muni.il/English/DocLib/Pride%20week%20events.jpg"},{name:"Harra",weather:31,picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzexhiFELI3pSKLoB4V82evVIbin2U9imoaQ&usqp=CAU"},{name:"Hadera",weather:31,picture:"https://www.hadera.muni.il/media/16491450/ramada-%D7%A8%D7%9E%D7%93%D7%94.jpg?width=715&height=382&format=png&mode=crop"},{name:"Bat yam",weather:33,picture:"https://static.timesofisrael.com/jewishwdev/uploads/2014/05/04_2-1024x640.jpg"},{name:"Eilat",weather:40,picture:"https://internationalsecurityjournal.com/wp-content/uploads/2021/04/shutterstock_141336349-1920x1000.jpg"},{name:"Netanya",weather:30,picture:"https://www.ksn.co.il/wp-content/uploads/2020/09/tayelet_netanya.jpg"}]


export default function WeatherAPI(props) {
    const [city,setCity] = useState("")
    const ul_list = useRef();
    const input_Ref = useRef();

    const {options , onInputChange , weatherCity} = props;
    useEffect(()=>{
        input_Ref.current.addEventListener('click', (event)=>{
            event.stopPropagation();
            input_Ref.current.style.display = 'flex';
            onInputChange(event);
        })
        document.addEventListener('click',(event) =>{
            
            ul_list.current.style.display="none"
        })
  },[])
  

    function getNewInput(){
        setCity(input_Ref.current.value)
    } 
    
    return (
        <BodyDropDown>

            <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
            <h2>Search your City: </h2>
            <div className="search-bar-dropdown" style={{width:"30rem"}}  > 
                 <SpanLine><input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={onInputChange} onClick={onInputChange} placeholder="search" ref={input_Ref} />
                 <button class="btn btn-primary" type="button" onClick={getNewInput}> Search</button></SpanLine>
                
                <NewUL ref={ul_list}>

                    {options.map((option,i) =>{
                        return ( <> <button key={i}  onClick={(e)=>{input_Ref.current.value = option}} style={{background:"white"}} type="button" style={{width:"30rem",background:"#F0FFFF"}} > {option}</button><br/></>)
                         
                    })}
                </NewUL>
               
            </div>
            <div> <h2>{city}</h2></div>
           
            

        </BodyDropDown>
    )
}
