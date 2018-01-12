import React from "react";
import { MyMapComponent } from "./MyMapComponent ";

import "./MyFancyComponent.css";

export default class MyFancyComponent extends React.PureComponent {
    state = {
        isMarkerShown: false,
        coordinates: {
            lat: 44.786568,
            lng: 20.448922
        }
    }

    componentDidMount() {
        this.delayedShowMarker();
    }

    delayedShowMarker = () => {
        setTimeout(() => {
            this.setState({ isMarkerShown: true })
        }, 3000)
    }

    handleMarkerClick = () => {
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
    }

    changeCapital(coordinates) {
        this.setState({
            coordinates
        })
        console.log(this.state.coordinates);

    }
    render() {
        return (
            <div className="container-fluid align-items">
                <h1>
                    World Map
            </h1>
                <MyMapComponent
                    isMarkerShown={this.state.isMarkerShown}
                    onMarkerClick={this.handleMarkerClick}
                    coordinates={this.state.coordinates}
                />
                <div className="row">
                    <h4 className="col s12 ">
                        Choose a country and we will show you its capital
                </h4>
                    <div className="col s12 m3">
                        <a className="waves-effect waves-light btn france" onClick={() => this.changeCapital({
                            lat: 48.856614,
                            lng: 2.352222
                        })}></a>
                    </div>
                    <div className="col s12 m3">
                        <a className="waves-effect waves-light btn ireland" onClick={() => this.changeCapital({
                            lat: 53.349805,
                            lng: -6.260310
                        })}></a>
                    </div>
                    <div className="col s12 m3">
                        <a className="waves-effect waves-light btn belgium" onClick={() => this.changeCapital({
                            lat: 50.850346,
                            lng: 4.351721
                        })}></a>
                    </div>
                    <div className="col s12 m3">
                        <a className="waves-effect waves-light btn estonia" onClick={() => this.changeCapital({
                            lat: 59.436961,
                            lng: 24.753575
                        })}></a>
                    </div>
                    <div className="col s12 m3">
                        <a className="waves-effect waves-light btn austria" onClick={() => this.changeCapital({
                            lat: 48.208174,
                            lng: 16.373819
                        })}></a>
                    </div>
                    <div className="col s12 m3">
                        <a className="waves-effect waves-light btn spain" onClick={() => this.changeCapital({
                            lat: 40.416775,
                            lng: -3.703790
                        })}></a>
                    </div>
                    <div className="col s12 m3">
                        <a className="waves-effect waves-light btn ukraine" onClick={() => this.changeCapital({
                            lat: 50.450100,
                            lng: 30.523400
                        })}></a>
                    </div>
                    <div className="col s12 m3">
                    <a className="btn bwaves-effect waves-light btn" onClick={() => this.changeCapital({
                        lat: Math.random() * 60,
                        lng: Math.random() * 100
                    })}>Surprise</a>
                    </div>

                </div>



            </div>
        )
    }
}