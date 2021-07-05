import React , {useState}  from 'react'
import styled from 'styled-components'
import {BrowserRouter as Router , Link , Route , Switch} from 'react-router-dom'
import WeatherAPI from './WeatherAPI/WeatherAPI'

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




function App() {
  const [number,setNumber] = useState(0)
  return (
    <Body>
   
      <WeatherAPI/>

    </Body>
   
  );
}

export default App;


{/*     
    <Link to="/"><button>Home</button></Link>
      <Link to="/RandomPicList"><button>Random Pics</button></Link>
      <Link to="/Card"><button>Get To Card</button></Link> */}
{/* <RandomPicList/> */}
    {/* <Switch>
      <Route path="/RandomPicList" >
        <RandomPicList/>
      </Route>
      <Route path="/Card" >
        <Card/>
      </Route>
    </Switch> */}