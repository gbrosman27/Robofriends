import React from 'react';


// Creating a Card Component.
const Card = (props) => {
    return (
        // text center, background color, border radius, padding, margin, grow on hover, shadow.
        // Generate random robot image for each card from robohash api.
        <div className='tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5'>
            <img alt='chelsea_photo' src={`https://robohash.org/${props.id}?200x200`}/> 
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}


// Export the Card so it is useable by the app.
export default Card