import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import insta from '../../../data/insta.json';
import $ from 'jquery';
import 'magnific-popup';

class Gallery extends Component {
    componentDidMount() {
        function popup() {
            $('.gallery-thumb').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                },
            });
        }
        popup()
    }
    render() {
        return (
            <div className="section pt-0">
                <div className="gallery-section">
                    <div className="row no-gutters">
                        {insta.slice(0, 4).map((item, i) => (
                            <div key={i} className="col-xl-6 col-lg-3 col-md-3 col-6 p-0">
                                <Link to={item.img} className="gallery-thumb">
                                    <img src={process.env.PUBLIC_URL + "/" + item.img} alt="post" />
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="gallery-bg bg-parallax dark-overlay dark-overlay-2 bg-cover" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/subheader.jpg)" }}>
                        <div className="section-title-wrap text-center">
                            <h5 className="custom-primary">$$$$$$$$$$</h5>
                            <h2 className="title text-white">Luring in Investors</h2>
                            <p className="subtitle text-white">
                                Or franchise partners, idk what it's supposed to call. But you get the idea. 
                            </p>
                            <Link to="/blog-grid" className="btn-custom shadow-none">Read Our Blog</Link>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        {insta.slice(4, 8).map((item, i) => (
                            <div key={i} className="col-xl-6 col-lg-3 col-md-3 col-6 p-0">
                                <Link to={item.img} className="gallery-thumb">
                                    <img src={process.env.PUBLIC_URL + "/" + item.img} alt="post" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Gallery;