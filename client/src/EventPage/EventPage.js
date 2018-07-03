import React, { Component } from 'react';
import './EventPage.css';
import Carosuel from "../Carousel/Carosuel";
import Deck from "../Deck/Deck";
import Button from "../Button/Button";
import Sponsor from "../Sponsor/Sponsor";
import { Col } from 'react-bootstrap';
class EventPage extends Component {
    // Need to work on pulling data dynamically
    render() {
        return (
            <div className="container text-center">
                <h1 className="mt-5">Event Name</h1>
                <Carosuel />
                <hr />
                <div className="row">
                    <Col sm="4" >
                        {/* Content for various event data here */}
                        <p>Pee in the shoe pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now. Stand with legs in litter box, but poop outside. I like big cats and i can not lie make muffins. Chew on cable purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table destroy house in 5 seconds for hack up furballs. Going to catch the red dot today.</p>
                    </Col>
                    <Col sm="8">
                        {/* Content for event description here */}
                        <p>Gnaw the corn cob cat is love, cat is life and scratch at fleas, meow until belly rubs, hide behind curtain when vacuum cleaner is on scratch strangers and poo on owners food or fish i must find my red catnip fishy fish my left donut is missing, as is my right spit up on light gray carpet instead of adjacent linoleum. Put butt in owner's face hide from vacuum cleaner then cats take over the world yet terrorize the hundred-and-twenty-pound rottweiler and steal his bed, not sorry bleghbleghvomit my furball really tie the room together wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again. Love to play with owner's hair tie soft kitty warm kitty little ball of furr and present belly, scratch hand when stroked sweet beast fooled again thinking the dog likes me so floof tum, tickle bum, jellybean footies curly toes.</p>
                    </Col>
                </div>
                <Button/>
                <hr />
                <h1 className="my-3">Map/Directions</h1>
                <div className="eventMap">
                    {/* possible content here */}
                </div>
                <hr />
                <h1 className="my-3">Sponsors</h1>
                <Deck>
                    <Sponsor />
                    <Sponsor />
                    <Sponsor />
                    <Sponsor />
                    <Sponsor />
                    <Sponsor />
                    <Sponsor />
                    <Sponsor />
                    <Sponsor />
                    <Sponsor />
                    <Sponsor />
                    <Sponsor />
                </Deck>
            </div>
        );
    }
}

export default EventPage;
