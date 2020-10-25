import React, {Component} from 'react';
import './App.css';
import Old from './Old.jpg';
import Danger from './Danger.jpg';
import Gov from './Gov.jpg';
import Passage from './Passage'
//import AccountTree from './AccountTree'
import Interactions from './louis-leopold boilly.jpg'
import  {surpriseOutput, dangerOutput, governmentOutput, interactionOutput} from './Passage'

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Interaction=()=>{

  const value=Passage.interactionOutput();
  return(
  <div>
    <h1>{value.date}</h1>
    <h2>{value.geography}</h2>
    <pre id='Passage'> {value.passage}</pre>
    <pre id="author"> — {value.author}, {value.title}</pre>
  </div>
  )
}

const Government =()=>{

  const value = Passage.governmentOutput();
  return(
    <div>
    <h1>{value.date}</h1>
    <h2>{value.geography}</h2>
    <pre id='Passage'> {value.passage}</pre>
    <pre id="author"> — {value.author}, {value.title}</pre>
  </div>
  )

}


const Surprise =()=>{

  const value=Passage.surpriseOutput();

  return(
  <div>
    <h1>{value.date}</h1>
    <h2>{value.geography}</h2>
    <pre id='Passage'> {value.passage}</pre>
    <pre id="author"> — {value.author}, {value.title}</pre>
  </div>
  )
}

const Dangerous = ()=>{
  const value = Passage.dangerOutput();
  return(
  <div >
    <h1>{value.date}</h1>
    <h2>{value.geography}</h2>
    <pre id='Passage'> {value.passage}</pre>
    <pre id="author"> — {value.author}, {value.title}</pre>
  </div>
  )
}

const Home=()=>{
  return(
    <div>
    </div>
  )
}

class App extends React.Component{

  render(){
  return (
    <Router>
    <div className="App">
      <ul id= "topnav">
        <li><Link to ="/">PassageHarvest</Link></li>
        <Route path ='/' component={Home}/>
      </ul>
      <body>
        <div className="Paintings">
        <li><Link to="/Interactions"><img src={Interactions} alt="Image of Men Talking"/><p>Meeting the Magnificient</p></Link></li>
        <Route path='/Interactions' component={Interaction}/>
        
        <li><Link to="/Government"><img src={Gov} alt="Image of Government"/><p>Governments</p></Link></li>
        <Route path="/Government" component={Government}/>
        
        <li><Link to="/Surprises"><img src={Old} alt="Image of a Beautiful Valley"/><p>Surprises</p></Link></li>
        <Route path='/Surprises' component={Surprise}/>
        
        <li><Link to="/Dangerous"><img src={Danger} alt="Image of A Man in a Rowboat"/> <p>Dangers</p></Link></li>
        <Route path='/Dangerous' component={Dangerous}/>
        </div>
      </body>
  
    </div>
    </Router>
  );
}}

export default App;
