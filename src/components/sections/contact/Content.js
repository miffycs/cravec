import React, { Component } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const customMarker = L.icon({
    iconUrl: process.env.PUBLIC_URL + "/assets/img/misc/marker.png",
    iconSize: [32, 32],
});

const latlng = [42.350205277980386, -71.06079573805086]

class Content extends Component {
    render() {
        return (
            <div className="contact-wrapper">
                <div className="ct-contact-map-wrapper">
                    <MapContainer
                        className="markercluster-map ct-contact-map"
                        center={latlng}
                        zoom={16}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                            url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
                            attribution='&copy; Tiles &mdash; Crave Chinatown'
                            maxZoom={16}
                        />
                        <Marker position={latlng} icon={customMarker}>
                            <Popup>
                                Crave Chinatown
                            </Popup>
                        </Marker>
                    </MapContainer>
                    <a rel={'external'} className="btn-custom shadow-none" href={"https://maps.google.com/?q=" + latlng}>View in Google Maps</a>
                </div>
                <div>
                    <div className="section section-padding">
                        <div className="container">
                            <div className="contact-info">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="ct-info-box">
                                            <i className="flaticon-location-1" />
                                            <h5>Directions</h5>
                                            <span>75 Kneeland Street</span>
                                            <span>Boston, MA 02111</span>
                                            <span><a href="tel:617-338-0188">(617) 338-0188</a></span>
                                            <span><a href = "mailto:contact@crave.com?subject=Crave&nbsp;Contact&nbsp;Form">contact@crave.com</a></span>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="ct-info-box">
                                            <i className="flaticon-online-booking" />
                                            <h5>Opening Hours</h5>
                                            <span><span>Mon - Wed:</span> 11:30am - 09:30pm</span>
                                            <span><span>Thu - Fri:</span> 11:30am - 10:30pm</span>
                                            <span><span>Sat:</span> 12:00pm - 10:30pm</span>
                                            <span><span>Sun:</span> 12:00pm - 09:00pm</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section pt-0">
                        <div className="container">
                            <div className="section-title-wrap">
                                <h2 className="title">Send us a Message </h2>
                                <p className="subtitle">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. There are many variations of passages
                                </p>
                            </div>
                            <form>
                                <div className="row">
                                    <div className="form-group col-lg-6">
                                        <input type="text" placeholder="First Name" className="form-control" name="fname" />
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <input type="text" placeholder="Last Name" className="form-control" name="lname" />
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <input type="email" placeholder="Email Address" className="form-control" name="email" />
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <input type="text" placeholder="Subject" className="form-control" name="subject" />
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <textarea name="message" className="form-control" placeholder="Type your message" rows={8} />
                                    </div>
                                </div>
                                <button type="submit" className="btn-custom primary" name="button">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;