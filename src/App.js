import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
// Destructured format because robots.js is export, not export default.
import { robots } from './robots';


class App extends React.Component {
    constructor(){
        super()
        // state can change and affect the app.
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    //Everytime input changes, we get an event. Then console log the event.
    onSearchChange(event){
        console.log(event.target.value);
    }

    render(){    
        return(
            // Text centered.
            <div className='tc'> 
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={this.state.robots}/>
            </div>
        );
    }
}

export default App;