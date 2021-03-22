import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Content extends Component {
    render() {
        return (
            <div className="page-404-wrapper">
                <div className="page-404-text">
                    <h1>Happy Birthday!!</h1>
                    <p>
                        Did I fuck up and give this to you early? Lol. <br />
                    </p>
                    <Link to="/" className="btn-custom">Show me my bday present</Link>
                </div>
                <div className="banner-bottom-img">
                    <img src={process.env.PUBLIC_URL + "/assets/img/veg/2.png"} alt="veg" />
                    <img src={process.env.PUBLIC_URL + "/assets/img/prods/3.png"} alt="pizza" />
                    <img src={process.env.PUBLIC_URL + "/assets/img/veg/12.png"} alt="veg" />
                </div>
            </div>
        );
    }
}

export default Content;