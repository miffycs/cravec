import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Aboutus extends Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-lg-30 ct-single-img-wrapper">
                            <img src={process.env.PUBLIC_URL + "/assets/img/auth.jpg"} alt="img" />
                            <div className="ct-dots" />
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title-wrap mr-lg-30">
                                <h5 className="custom-primary">Our Story</h5>
                                <h2 className="title">Beating Bon Chon At Their Own Game Since 2014</h2>
                                <p className="subtitle">
                                    At Crave Chinatown we feature a trendy, restaurant-lounge vibe, with a full bar, and tantalizing
                                    menu.
                                    We are known for our juicy, perfectly made, Korean fried chicken.
                                </p>
                                <p className="subtitle">
                                    Crave Chinatown serves never frozen and all natural chicken.
                                    Our signature chicken uses a special frying technique which gives it an amazing crunch,
                                    while retaining its natural flavors.
                                </p>
                                <p className="subtitle">
                                    We only use the BEST, all-natural, FARM raised chicken with no hormones and no antibiotics.
                                    Always fresh, and never frozen. All of our sauces are hand-brushed on each piece of chicken,
                                    with flavors leaving you wanting more. Please allow up to 30 minutes per order.
                                </p>

                                <div className="signature">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/signature.png"} alt="img" />
                                </div>
                                <Link to="/menu-v1" className="btn-custom">Check our Menu</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Aboutus;