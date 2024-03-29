import React from 'react';
import {Link} from 'react-router-dom';
function Footer(props){
    return(
        <div className ="footer">
            <div className="container">
                <div className="row row-content ">             
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="./aboutus">About</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><Link to="/contactus">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                            <h5>Our Address</h5>
                            <address style={{fontSize: '100%'}}>
                                121, Clear Water Bay Road <br/>
                                Clear Water Bay, Kowloon <br/>
                                HONG KONG <br/>
                                <i className="fa fa-phone"></i> : +852 1234 5678 <br/>
                                <i className="fa fa-fax"></i> : +852 8765 4321 <br/>
                                <i className="fa fa-envelope"></i>
                                <a href="mailto:confusion@food.net"> confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-primary" style={{backgroundColor: '#dd4b39', border: 'none'}} role="button" href="http://google.com/+"><i className="fa fa-google"></i></a>
                            <a className="btn btn-primary" style={{backgroundColor: '#3b5998', border: 'none'}} role="button" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-primary" style={{backgroundColor: '#0082ca', border: 'none'}} role="button" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin-square"></i></a>
                            <a  className="btn btn-primary" style={{backgroundColor: '#55acee', border: 'none'}} role="button" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-primary" style={{backgroundColor: '#ed302f', border: 'none'}} role="button" href="http://youtube.com/"><i className="fa fa-youtube-play"></i></a>
                            <a className="btn btn-primary" style={{backgroundColor: '#55acee', border: 'none'}} role="button" href="mailto:"><i className="fa fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">             
                    <div className="col-auto">
                        <p>© Copyright 2018 Ristorante Con Fusion</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;