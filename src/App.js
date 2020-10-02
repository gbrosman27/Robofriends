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

    //Filter robots according to searchfield.
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render(){    
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            // Text centered.
            <div className='tc'> 
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
}

export default App;