import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';


// Destructured format because robots.js is export, not export default.
//import { robots } from './robots';


// Smart Component due to having 'state' (data that describes the app).
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

    // Render the app display.
    render(){    
        // Use destructuring for this.state.
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (robots === 0){
            return <h1>Loading Robots</h1>
        }
        else{
            return(
                // Text centered.
                <div className='tc'> 
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;