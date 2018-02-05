import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer';

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
      onClick={props.getNewMarkersPosition}
    >
      <MarkerClusterer averageCenter enableRetinaIcons gridSize={60}>
        {props.markers.map(marker => (
          <Marker
            key={marker.id}
            position={marker.position}
            onClick={() => props.infoToggle(marker.id)}
          />
        ))}
      </MarkerClusterer>
    </GoogleMap>
  )),
);
export default Map;
