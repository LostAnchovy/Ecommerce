import React, { Component } from 'react';
import Carosuel from "../Carousel/Carosuel";

import Button from '../Button/Button';
import Deck from '../Deck/Deck';
import EventCard from '../EventCard/EventCard';
class Mainbody extends Component {
    render() {
        return (
            <div>
                <Carosuel />
                <div className="center-align" >
                    <h1 className="text-center mt-3">Featured Event</h1>
                    <p className="text-center p-1 mr-5 ml-5"> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    <Button />
                </div>
                <div className="bg-light">
                    <br/>
                    <h1 className="text-center primary-text">Upcoming Events</h1>
                    <Deck>
                        <EventCard />
                        <EventCard />
                        <EventCard />
                    </Deck>
                    <Deck>
                        <EventCard />
                        <EventCard />
                        <EventCard />
                    </Deck>
                </div>
            </div>
        )
    }
}

export default Mainbody;