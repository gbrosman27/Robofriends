import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';


// Destructured format because robots.js is export, not export default.
//import { robots } from './robots';


// Smart Component due to having 'state' (data the describes the app).
class App extends React.Component {
    constructor(){
        super()
        // state can change and affect the app. Run with empty array.
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    // Fetch from url, get users and update users with setState.
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }

    //Filter robots according to searchfield. Use arrow functions since this is not built into react.
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    // Render the app dsiplay.
    render(){    
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            // Text centered.
            <div className='tc'> 
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
}

export default App;