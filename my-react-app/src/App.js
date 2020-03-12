import React, {Component} from 'react';
import './App.css';
import data from './data'
import Person from './component/Person'
// import Buttons from './component/Buttons'
import Buttons from './component/Buttons';

class App extends Component {
  constructor(){
    super()
    this.state = {
      directory : [...data],
      index:0, 
      newPerson: false
    }
    this.nextPerson = this.nextPerson.bind(this)
    this.previousPerson = this.previousPerson.bind(this)
    this.delete = this.delete.bind(this)
    this.newPerson = this.newPerson.bind(this)
  }

nextPerson(){
  this.setState({index: this.state.index + 1})
}

previousPerson(){
  this.setState({index:this.state.index - 1 })
}

delete(){
  this.state.directory.splice(this.state.index , 1);
  this.setState({directory:[...this.state.directory]})
}

newPerson(){
  this.setState({newPerson: true})
}

submit(){

}


  render(){
    return (
   
      <div className="App">
        <header>
          <h1 className = 'home'>Home</h1>
        </header>
        <div>
        <Person person = {this.state.directory[this.state.index]} 
        index = {this.state.index} 
        directoryLength ={this.state.directory.length}/>
        <Buttons nextFn = {this.nextPerson} 
        previousFn = {this.previousPerson} 
        index = {this.state.index}
        deleteFn = {this.delete}
        directoryLength ={this.state.directory.length}
        newPersonFn = {this.newPerson}
        newPerson = {this.state.newPerson}/>
        </div>
      </div>
    );
  }
  
}

export default App;