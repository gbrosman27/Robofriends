import React from 'react';
import Card from './Card';

// Use map to loop through all contact entries and create a card for each of them.
const CardList = ({robots}) => {
    const cardComponent = robots.map((user, i) => {
        return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    })
    return(
            <div>
                {cardComponent}
            </div>
    );
}

export default CardList;