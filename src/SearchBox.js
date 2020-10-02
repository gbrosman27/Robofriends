import React from 'react';


//Use destructuring to grab the props object and it's properties.
const SearchBox = ({searchChange}) => {
    return(
        <div className='pa2'>
        <input 
            className='pa3 ba b--green bg-light-blue' 
            type='search' 
            placeholder='search contacts'
            onChange={searchChange}
        />
        </div>
    );
}

export default SearchBox;