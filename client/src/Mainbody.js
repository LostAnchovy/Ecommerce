import React, { Component } from 'react';
import './App.css';
import Carosuel from "./Carosuel"
import Footer from "./Footer"
import { Button, Card, CardBody, CardImage, CardTitle, CardText,CardDeck } from 'mdbreact';


class Mainbody extends Component{
    render(){
        return(  
           <div>  
                    <Carosuel/>
                    <div className="center-align" >
                    <h1 className="text-center mt-3">Featured Event</h1>
                    <p className="text-center p-1 mr-5 ml-5"> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    <Buttons/>

                    </div>
                    <div className="bg-light">
                    <h1 className="text-center primary-text">Upcoming Events</h1>
                            <Deck1/>
                            <Deck1/>
                    </div>
                    <Footer/>
   
             </div>


        )
    }
}

class Buttons extends Component{
    render(){
        return(
            <div className="row text-center p-4">
                <div className="col-md-4">
                <button className="btn btn-primary">Participaton List</button>
                </div>
                <div className="col-md-4">    
                <button className="btn btn-danger">Register Here</button>
                </div>
                <div className="col-md-4">
                <button className="btn btn-warning">Event Page</button>
                </div>
            </div>
        );
    }
}

class Deck1 extends Component{
    render(){
        return(
            <div className="card-deck m-2 p-3">
                  <Card className="col-md-4">
                    <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(97).jpg" />
                 <CardBody>
                <CardTitle className="text-center">Event Name</CardTitle>
                <CardText className="text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <button href="#" className="btn btn-primary">Register for Event</button>
                </CardBody>
                    </Card>
                    <Card className="col-md-4">
                    <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(97).jpg" />
                 <CardBody>
                <CardTitle className="text-center">Event Name</CardTitle>
                <CardText className="text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <button href="#" className="btn btn-primary">Register for Event</button>
                </CardBody>
                    </Card>
                    <Card className="col-md-4">
                    <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(97).jpg" />
                 <CardBody>
                <CardTitle className="text-center">Event Name</CardTitle>
                <CardText className="text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                 <button href="#" className="btn btn-primary">Register for Event</button>
                </CardBody>
                    </Card>
            </div>
        )
    }
}

export default Mainbody;
