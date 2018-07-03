import React, { Component } from 'react';
import { Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import { Link } from 'react-router-dom';
class AdminEventCard extends Component {

    // Need to change component to pull dynamic content (from props?)
    render() {
        return (
            <Card className="col-md-4">
                <CardImage className="img-fluid mt-3 p-0" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(97).jpg" />
                <CardBody>
                    <CardTitle className="text-center">Event Name</CardTitle>
                    <CardText className="text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
                <div className="row">
                    {/* Need to change links to appropriate components */}
                    <div className="col-md-6">
                        <Link to="/event"><button className="btn btn-primary col">Products</button> </Link>
                    </div>
                    <div className="col-md-6">
                        <Link to="/event"><button className="btn  btn-primary col">Participants</button> </Link>
                    </div>
                </div>
            </Card>
        )
    }
}
export default AdminEventCard;