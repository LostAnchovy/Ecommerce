import React from 'react';
const deck = (props) => {
    return (
        <div className="card-deck m-2 p-3">
            {props.children}
        </div>
    )
}
export default deck;