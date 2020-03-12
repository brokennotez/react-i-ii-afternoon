import React, {Component} from 'react'
import Buttons from './Buttons'

class Person extends Component{
    constructor(){
        super()
      

    }
    
    render(){
        const {person} = this.props
        return(
        <div className='person'>
            <div className = 'person-profile'>
                <div className = 'name '>
                <h1>{person.name.first} {person.name.last}</h1>
        <h2 className = 'index'>{this.props.index + 1} /{this.props.directoryLength}</h2>
                </div>
                
                <div className ='person-info'>
                    <section className ='current-info'>From: <span>{person.city} ,  {person.country} </span></section>
                    <section className = 'current-info'>Job Title:
                    <span>{person.title}</span>
                    </section>
                    <section className = 'current-info'>Employer: 
                    <span>{person.employer} </span>
                    </section>
                </div>

                <p>Favorite Movies:</p>
                <ol className = 'movies-list'>
                    
                        <li className = 'movie-list'> {person.favoriteMovies[0]}</li>
                        <li className = 'movie-list'> {person.favoriteMovies[1]}</li>
                        <li className = 'movie-list'> {person.favoriteMovies[2]}</li>
                </ol>
                

            </div>
            
        </div>
        )
    }
}

export default Person