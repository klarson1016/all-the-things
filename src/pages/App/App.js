import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import FunctionalThings from '../FunctionalThings/FunctionalThings'
import StyledThings from '../StyledThings/StyledThings'

class App extends Component {
  state = { 
    davidsThings: [
      {
        name: "waffle",
        image: "https://images.unsplash.com/photo-1568051243851-f9b136146e97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",  
        attributes: ["tasty", "fluffy", "breakfast", "yummy"],
      },
      {
        name: "giraffe",
        image: "https://images.unsplash.com/photo-1538127426967-75a6c73f6d20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",  
        attributes: ["tall", "cool", "fun", "animal", "(David doesn't acually own a giraffe)"], 
      },
      {
        name: "Liam",
        image: "https://i.imgur.com/l2qX34X.jpg",  
        attributes: ["fluffy", "happy", "sleepy", "dumb"], 
      },
      {
        name: "Poptart®",
        image: "https://i.imgur.com/q9zgcaP.jpg",  
        attributes: ["pastry?", "food?", "edible?", "Horrible when toasted!"], 
      },
    ],
    shahzadsThings: [
      {
        name: "functional programming",
        image: "https://imgs.xkcd.com/comics/functional.png",  
        attributes: ["efficient", "reusability", "not a taco", "beautiful"],
      },
      {
        name: "React hooks",
        image: "https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        attributes: ["useEffect", "useState", "not a taco", "state's best friend"], 
      },
      {
        name: "BluBlockers",
        image: "https://susanmaryetta.files.wordpress.com/2011/06/blublocker-the-hangover.png?w=584",
        attributes: ["very attractive", "useful probably!", "good for viewing tacos", "such hip", "worn by all the cool kids"],
      },
      { 
        name: "Healthy food", 
        image: "https://i.imgur.com/gRxOxsA.jpg", 
        attributes: ["makes you live a long time", "consistent poops", "probably tacos sometimes!", "farm to market"], 
      },
    ]
  } 
  render() {
    return (
      <>
        <Route exact path='/'>
          <>
            {/* All the <a> tags should live here */}
            <h1>All-The-Things</h1>
            <Link to="/the-functional-things">Shahzad's Things</Link><br/>
            <Link to="/the-well-styled-things">David's Things</Link><br/>
          </>
        </Route>
        {/* All the <Route> components should live here */}
        <Route exact path='/the-functional-things'>
          <FunctionalThings things={this.state.shahzadsThings} />
        </Route>
        <Route exact path='/the-well-styled-things'>
          <StyledThings things={this.state.davidsThings} />
        </Route>
        <h1>jess's branch</h1>
      </>
      
    );
  }
}
 
export default App;

