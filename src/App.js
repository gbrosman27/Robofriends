import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
// Destructured format because robots.js is export, not export default.
import { robots } from './robots';

const App = () => {
    return(
        // Text centered.
        <div className='tc'> 
            <h1>RoboFriends</h1>
            <SearchBox />
            <CardList robots={robots}/>
        </div>
    );
}

export default App;