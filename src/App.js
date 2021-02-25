import React ,{Component}  from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Nav from './component/Nav/Nav';
import All from './component/All/All';
import Contact from './component/Contact/Contact';
import './App.css';

class App extends Component {
  render(){
    return (
      <BrowserRouter className="App">
        <Nav/>
      <Route exact path ='/' component={All}/>
      <Route path='/contact' component ={Contact}/>
      </BrowserRouter>
    );
  }

}

export default App;
