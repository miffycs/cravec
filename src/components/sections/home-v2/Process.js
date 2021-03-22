import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const processpost = [
    {
        icon: "flaticon-online-booking",
        title: "Order",
        text: "There are many variations of passages of Lorem Ipsum available"
    },
    {
        icon: "flaticon-calories",
        title: "Cook",
        text: "There are many variations of passages of Lorem Ipsum available"
    },
    {
        icon: "flaticon-delivery-man",
        title: "Deliver",
        text: "There are many variations of passages of Lorem Ipsum available"
    },
    {
        icon: "flaticon-food-tray",
        title: "Enjoy",
        text: "There are many variations of passages of Lorem Ipsum available"
    }
]

class Process extends Component {
    render() {
        return (
            <div className="container">
                <div className="section-title-wrap section-header text-center">
                    <h5 className="custom-primary">How Your Food Is Made</h5>
                    <h2 className="title">You Really Need Me To Explain This?</h2>
                    <p className="subtitle">
                        "It's not hard at all. It's essentially just boiling water. I can make stuff in under 5 minutes. Well 4.9 sometimes. The beauty of soup is just add more shit."
                    </p>
                </div>
                <div className="row infographics-2">
                    {processpost.map((item, i) => (
                        <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                            <div className="ct-infographic-item">
                                <i className={item.icon} />
                                <h4>{item.title}</h4>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="section-btn">
                    <Link to="/menu-v1" className="btn-custom">Order Online</Link>
                </div>
            </div>
        );
    }
}

export default Process;