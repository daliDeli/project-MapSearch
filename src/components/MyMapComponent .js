import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

export const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
<GoogleMap
      defaultZoom={12}
      center={props.coordinates}
    //   defaultCenter={props.coordinates}
      >
      {props.isMarkerShown && <Marker position={ props.coordinates} onClick={props.onMarkerClick} />}
    </GoogleMap>
  )
