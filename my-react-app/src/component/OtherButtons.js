import React, {Component} from 'react'

class NewButton extends Component{
    constructor(){
        super()
        this.state = {
            firstName:'', 
            lastName: '', 
            newJob:'', 
            newEmployer:'', 
            newMovies: []
        }
    }

    addname(){
        
    }
    
    render(){
        return(
            <div>
                <input placeholder = 'insert first name'/>
                <input placeholder ='insert last name'/> 
                <input placeholder = 'insert job title'/> 
                <input placeholder = 'insert employer' />
                <input placeholder = 'insert favorite movies with , in-between each'/>
                <button>submit</button>
            </div>
        )
    }

}

export default NewButton