import React, { Component } from 'react';
class Sponsor extends Component {
    render() {
        return (
            // This is just a static image and would need to have access to props for us to grab the image dynamically and need to add link to sponsor
            <img className="col-md-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNoxrbGskEssZvSXSZ_APFXlLHdS_9Sq6lvaTA9KrJZk2UhtAgiQ" alt="Sponsor"/>
        )
    }
}
export default Sponsor;