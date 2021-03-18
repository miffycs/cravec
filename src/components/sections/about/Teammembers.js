import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const teamblock = [
    {
        img: "assets/img/people/3.jpg",
        name: "Michael Scott",
        designation: "Executive Chef",
    },
    {
        img: "assets/img/people/4.jpg",
        name: "Holly Flax",
        designation: "Assistant Chef",
    },
    {
        img: "assets/img/people/1.jpg",
        name: "Jim Halpert",
        designation: "Assistant Chef",
    },
    {
        img: "assets/img/people/2.jpg",
        name: "Pam Beesley",
        designation: "Assistant Chef",
    },
];

class Teammembers extends Component {
    render() {
        return (
            <div className="section section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-lg-30">
                            <div className="section-title-wrap">
                                <h5 className="custom-primary">Our Backbone</h5>
                                <h2 className="title">Meet The Team</h2>
                                <p className="subtitle">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                                <p className="subtitle">
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                </p>
                            </div>
                            <Link to="#" className="btn-custom">View All</Link>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                {teamblock.map((item, i) => (
                                    <div key={i} className="col-lg-6 col-sm-6">
                                        <div className="ct-team-item">
                                            <div className="ct-team-thumb">
                                                <img src={process.env.PUBLIC_URL + "/" + item.img} alt={item.name} />
                                            </div>
                                            <div className="ct-team-desc">
                                                <h5>{item.name}</h5>
                                                <span>{item.designation}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Teammembers;