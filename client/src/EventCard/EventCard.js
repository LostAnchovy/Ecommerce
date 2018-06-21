import React, { Component } from 'react';
import { Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import { Link } from 'react-router-dom';
class EventCard extends Component {
    render() {
        return (
            <Card className="col-md-4">
                <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(97).jpg" />
                <CardBody>
                    <CardTitle className="text-center">Event Name</CardTitle>
                    <CardText className="text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Link to="/event"><button className="btn btn-primary">Register for Event</button> </Link>
                </CardBody>
            </Card>
        )
    }
}
export default EventCard;