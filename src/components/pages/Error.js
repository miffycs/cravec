import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerthree';
import Footer from '../layouts/Footer';
import Content from '../sections/error/Content';

const pagelocation = '404 Error'

class Error extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Crave Chinatown - {pagelocation}</title>
                    <meta
                        name="404 error"
                        content="#"
                    />
                </MetaTags>
                <div style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/bg/pattern.jpg)" }}>
                    <Header />
                    <Content />
                    <Footer footer={{ style: "ct-footer footer-dark", logo: "assets/img/logo-light.png" }} />
                </div>
            </Fragment>
        );
    }
}

export default Error;