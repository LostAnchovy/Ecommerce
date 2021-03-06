import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';

class FooterPage extends React.Component {
    render(){
        return(
            <Footer color="indigo" className="font-small pt-0">
                <Container>
                    <Row className="pt-5 mb-3 text-center d-flex justify-content-center">
                        <Col md="2" className="b-3">
                            <h6 className="title font-weight-bold"><a href="#!">About us</a></h6>
                        </Col>
                        <Col md="2" className="b-3">
                            <h6 className="title font-weight-bold grey-text"><a href="#!">Safety & Responsiblity</a></h6>
                        </Col>
                        <Col md="2" className="b-3">
                            <h6 className="title font-weight-bold grey-text"><a href="#!">Upcoming Events</a></h6>
                        </Col>
                        <Col md="2" className="b-3">
                            <h6 className="title font-weight-bold grey-text"><a href="#!">FAQ</a></h6>
                        </Col>
                        <Col md="2" className="b-3">
                            <h6 className="title font-weight-bold grey-text"><a href="#!">Contact</a></h6>
                        </Col>
                    </Row>
                    <hr className="rgba-white-light" style={{margin: '0 15%'}}/>
                    <Row className="d-flex text-center justify-content-center mb-md-0 mb-4">
                        <Col md="8" sm="12" className="mt-5">
                            <p style={{lineHeight: '1.7rem'}}>text text text</p>
                        </Col>
                    </Row>
                    <hr className="clearfix d-md-none rgba-white-light" style={{margin: '10% 15% 5%'}}/>
                    <Row className="pb-3">
                        <Col md="12">
                            <div className="mb-5 flex-center">
                                <a className="fb-ic"><i className="fa fa-facebook fa-lg white-text mr-md-4"> </i></a>
                                <a className="tw-ic"><i className="fa fa-twitter fa-lg white-text mr-md-4"> </i></a>
                                <a className="gplus-ic"><i className="fa fa-google-plus fa-lg white-text mr-md-4"> </i></a>
                                <a className="li-ic"><i className="fa fa-linkedin fa-lg white-text mr-md-4"> </i></a>
                                <a className="ins-ic"><i className="fa fa-instagram fa-lg white-text mr-md-4"> </i></a>
                                <a className="pin-ic"><i className="fa fa-pinterest fa-lg white-text"> </i></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.MDBootstrap.com"> TLA Developers</a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;