import React, {Component} from 'react'
// import NewButton from './NewButton'
import OtherButtons from './OtherButtons';



class Buttons extends Component{
    constructor(){
        super()
        this.nextClick = this.nextClick.bind(this)
        this.previousClick = this.previousClick.bind(this)
        this.delete = this.delete.bind(this)
        this.newPerson = this.newPerson.bind(this)
    }
    nextClick(){
        if(this.props.index < 24){
            this.props.nextFn()
        }
        else{
            alert('End of Directory')
        }
    }

    previousClick(){
        if(this.props.index > 0){
            this.props.previousFn()
        }

    }

    delete (){
        if(this.props.directoryLength === 1){
            alert('cannot delete please add to directory')
        }
        else{
            this.props.deleteFn()
        }
        
    }

    newPerson(){
        this.props.newPersonFn(); 
    }


    render(){
        return(
            
            <div className = 'buttons'>
    <button  className = 'direction'onClick = {this.previousClick}>  {'<'}Previous</button>
                <section className ='center-buttons'>
                    <button className ='cool'>Edit</button>
                    <button className ='cool' onClick = {this.delete}>Delete</button>
                    <button className ='cool' onClick = {this.newPerson}>New</button>
                    <div>{this.props.newPerson && <OtherButtons />}</div>
                    
                </section>
                <button className = 'direction' onClick = {this.nextClick}>Next{'>'} </button>
            </div>
        )
    }
}

export default Buttons