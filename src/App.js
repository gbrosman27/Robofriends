import React from 'react';
import CardList from './CardList';
// Destructured format because robots.js is export, not export default.
import { robots } from './robots';

const App = () => {
    return(
    <CardList robots={robots}/>
    );
}

export default App