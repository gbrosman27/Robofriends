import React from 'react';
import Card from './Card';

// Use map to loop through all contact entries and create a card for each of them.
const CardList = ({robots}) => {
        return ( 
            <div> 
                {
                robots.map((user, i) => {
                    return (
                            <Card 
                            key = {i}
                            id = {robots[i].id}
                            name = {robots[i].name}
                            email = {robots[i].email}
                            />
                            )
                    })
                } 
            </div>)
        }

export default CardList;